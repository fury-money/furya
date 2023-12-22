import { getMnemonics } from "../../helpers/mnemonics";
import { getLCDClient } from "../../helpers/lcd.connection";
import { StakeAuthorization, MsgGrantAuthorization, AuthorizationGrant, Coin, MsgExecAuthorized, MsgDelegate } from "@fury-money/feather.js";
import { AuthorizationType } from "@fury-money/furya.proto/cosmos/staking/v1beta1/authz";
import moment from "moment";
import { blockInclusion } from "../../helpers/const";

describe("Authz Module (https://github.com/terra-money/cosmos-sdk/tree/release/v0.47.x/x/authz)", () => {
    const LCD = getLCDClient();
    const accounts = getMnemonics();
    // Accounts used in chain2, which means that 
    // will not cause conflicts with txs nonces
    const granterWallet = LCD.chain2.wallet(accounts.feeshareMnemonic);
    const granteeWallet = LCD.chain2.wallet(accounts.pobMnemonic);
    const granterAddr = accounts.feeshareMnemonic.accAddress("furya");
    const granteeAddr = accounts.pobMnemonic.accAddress("furya");
    const val2Addr = accounts.val2.valAddress("furya");

    test('Must register the granter', async () => {
        let tx = await granterWallet.createAndSignTx({
            msgs: [new MsgGrantAuthorization(
                granterAddr,
                granteeAddr,
                new AuthorizationGrant(
                    new StakeAuthorization(
                        AuthorizationType.AUTHORIZATION_TYPE_DELEGATE,
                        Coin.fromString("1000000ufury"),
                    ),
                    moment().add(1, "hour").toDate(),
                ),
            )],
            chainID: "test-2",
        });
        let result = await LCD.chain2.tx.broadcastSync(tx, "test-2");
        await blockInclusion();

        // Check the MsgGrantAuthorization executed as expected 
        let txResult = await LCD.chain2.tx.txInfo(result.txhash, "test-2") as any;
        expect(txResult.logs[0].events)
            .toStrictEqual([{
                "type": "message",
                "attributes": [{
                    "key": "action",
                    "value": "/cosmos.authz.v1beta1.MsgGrant"
                }, {
                    "key": "sender",
                    "value": "furya120rzk7n6cd2vufkmwrat34adqh0rgca9tkyfe5"
                }, {
                    "key": "module",
                    "value": "authz"
                }]
            }, {
                "type": "cosmos.authz.v1beta1.EventGrant",
                "attributes": [{
                    "key": "grantee",
                    "value": "\"furya1v0eee20gjl68fuk0chyrkch2z7suw2mhg3wkxf\""
                }, {
                    "key": "granter",
                    "value": "\"furya120rzk7n6cd2vufkmwrat34adqh0rgca9tkyfe5\""
                }, {
                    "key": "msg_type_url",
                    "value": "\"/cosmos.staking.v1beta1.MsgDelegate\""
                }]
            }]);
    });

    describe("Grantee must execute", () => {
        test("delegation on belhalf of granter", async () => {
            let tx = await granteeWallet.createAndSignTx({
                msgs: [new MsgExecAuthorized(
                    granteeAddr,
                    [new MsgDelegate(
                        granterAddr,
                        val2Addr,
                        Coin.fromString("1000000ufury"),
                    )]
                )],
                chainID: "test-2",
            });
            let result = await LCD.chain2.tx.broadcastSync(tx, "test-2");
            await blockInclusion();

            let txResult = await LCD.chain2.tx.txInfo(result.txhash, "test-2") as any;
            let eventsList = txResult.logs[0].events;
            let latestIndex = eventsList.length - 1;

            expect(eventsList[0])
                .toStrictEqual({
                    "type": "message",
                    "attributes": [{
                        "key": "action",
                        "value": "/cosmos.authz.v1beta1.MsgExec"
                    }, {
                        "key": "sender",
                        "value": "furya1v0eee20gjl68fuk0chyrkch2z7suw2mhg3wkxf"
                    }, {
                        "key": "module",
                        "value": "authz"
                    }]
                });
            expect(eventsList[1])
                .toStrictEqual({
                        "type": "cosmos.authz.v1beta1.EventRevoke",
                        "attributes": [{
                            "key": "grantee",
                            "value": "\"furya1v0eee20gjl68fuk0chyrkch2z7suw2mhg3wkxf\""
                        }, {
                            "key": "granter",
                            "value": "\"furya120rzk7n6cd2vufkmwrat34adqh0rgca9tkyfe5\""
                        }, {
                            "key": "msg_type_url",
                            "value": "\"/cosmos.staking.v1beta1.MsgDelegate\""
                        }]
                    });

            expect(eventsList[latestIndex])
                .toStrictEqual({
                    "type": "delegate",
                    "attributes": [{
                        "key": "validator",
                        "value": "furyavaloper1llgzglr9yyy4gyjh8p5kepgm5wyl358de47rqk"
                    }, {
                        "key": "delegator",
                        "value": "furya120rzk7n6cd2vufkmwrat34adqh0rgca9tkyfe5"
                    }, {
                        "key": "amount",
                        "value": "1000000ufury"
                    }, {
                        "key": "new_shares",
                        "value": "1000000.000000000000000000"
                    }, {
                        "key": "authz_msg_index",
                        "value": "0"
                    }]
                });
        });
    })
});