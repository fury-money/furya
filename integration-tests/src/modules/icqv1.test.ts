import { getLCDClient } from "../helpers";

describe("ICQ Module (https://github.com/cosmos/ibc-apps/tree/main/modules/async-icq)", () => {
    // Prepare environment clients, accounts and wallets
    const LCD = getLCDClient();

    test('Must contain the expected module params', async () => {
        // Query ica
        const res = await LCD.chain2.icqV1.params("test-2");

        expect(res.params)
            .toStrictEqual({
                "host_enabled": true,
                "allow_queries": [
                    "/alliance.alliance.Query/AllAllianceValidators",
                    "/alliance.alliance.Query/AllAlliancesDelegations",
                    "/alliance.alliance.Query/Alliance",
                    "/alliance.alliance.Query/AllianceDelegation",
                    "/alliance.alliance.Query/AllianceDelegationRewards",
                    "/alliance.alliance.Query/AllianceRedelegations",
                    "/alliance.alliance.Query/AllianceUnbondings",
                    "/alliance.alliance.Query/AllianceUnbondingsByDenomAndDelegator",
                    "/alliance.alliance.Query/AllianceValidator",
                    "/alliance.alliance.Query/Alliances",
                    "/alliance.alliance.Query/AlliancesDelegation",
                    "/alliance.alliance.Query/AlliancesDelegationByValidator",
                    "/alliance.alliance.Query/IBCAlliance",
                    "/alliance.alliance.Query/IBCAllianceDelegation",
                    "/alliance.alliance.Query/IBCAllianceDelegationRewards",
                    "/alliance.alliance.Query/Params",
                    "/cosmos.auth.v1beta1.Query/Account",
                    "/cosmos.auth.v1beta1.Query/AccountAddressByID",
                    "/cosmos.auth.v1beta1.Query/AccountInfo",
                    "/cosmos.auth.v1beta1.Query/Accounts",
                    "/cosmos.auth.v1beta1.Query/AddressBytesToString",
                    "/cosmos.auth.v1beta1.Query/AddressStringToBytes",
                    "/cosmos.auth.v1beta1.Query/Bech32Prefix",
                    "/cosmos.auth.v1beta1.Query/ModuleAccountByName",
                    "/cosmos.auth.v1beta1.Query/ModuleAccounts",
                    "/cosmos.auth.v1beta1.Query/Params",
                    "/cosmos.authz.v1beta1.Query/GranteeGrants",
                    "/cosmos.authz.v1beta1.Query/GranterGrants",
                    "/cosmos.authz.v1beta1.Query/Grants",
                    "/cosmos.bank.v1beta1.Query/AllBalances",
                    "/cosmos.bank.v1beta1.Query/Balance",
                    "/cosmos.bank.v1beta1.Query/DenomMetadata",
                    "/cosmos.bank.v1beta1.Query/DenomOwners",
                    "/cosmos.bank.v1beta1.Query/DenomsMetadata",
                    "/cosmos.bank.v1beta1.Query/Params",
                    "/cosmos.bank.v1beta1.Query/SendEnabled",
                    "/cosmos.bank.v1beta1.Query/SpendableBalanceByDenom",
                    "/cosmos.bank.v1beta1.Query/SpendableBalances",
                    "/cosmos.bank.v1beta1.Query/SupplyOf",
                    "/cosmos.bank.v1beta1.Query/TotalSupply",
                    "/cosmos.consensus.v1.Query/Params",
                    "/cosmos.distribution.v1beta1.Query/CommunityPool",
                    "/cosmos.distribution.v1beta1.Query/DelegationRewards",
                    "/cosmos.distribution.v1beta1.Query/DelegationTotalRewards",
                    "/cosmos.distribution.v1beta1.Query/DelegatorValidators",
                    "/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress",
                    "/cosmos.distribution.v1beta1.Query/Params",
                    "/cosmos.distribution.v1beta1.Query/ValidatorCommission",
                    "/cosmos.distribution.v1beta1.Query/ValidatorDistributionInfo",
                    "/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards",
                    "/cosmos.distribution.v1beta1.Query/ValidatorSlashes",
                    "/cosmos.evidence.v1beta1.Query/AllEvidence",
                    "/cosmos.evidence.v1beta1.Query/Evidence",
                    "/cosmos.feegrant.v1beta1.Query/Allowance",
                    "/cosmos.feegrant.v1beta1.Query/Allowances",
                    "/cosmos.feegrant.v1beta1.Query/AllowancesByGranter",
                    "/cosmos.gov.v1.Query/Deposit",
                    "/cosmos.gov.v1.Query/Deposits",
                    "/cosmos.gov.v1.Query/Params",
                    "/cosmos.gov.v1.Query/Proposal",
                    "/cosmos.gov.v1.Query/Proposals",
                    "/cosmos.gov.v1.Query/TallyResult",
                    "/cosmos.gov.v1.Query/Vote",
                    "/cosmos.gov.v1.Query/Votes",
                    "/cosmos.mint.v1beta1.Query/AnnualProvisions",
                    "/cosmos.mint.v1beta1.Query/Inflation",
                    "/cosmos.mint.v1beta1.Query/Params",
                    "/cosmos.params.v1beta1.Query/Params",
                    "/cosmos.params.v1beta1.Query/Subspaces",
                    "/cosmos.slashing.v1beta1.Query/Params",
                    "/cosmos.slashing.v1beta1.Query/SigningInfo",
                    "/cosmos.slashing.v1beta1.Query/SigningInfos",
                    "/cosmos.staking.v1beta1.Query/Delegation",
                    "/cosmos.staking.v1beta1.Query/DelegatorDelegations",
                    "/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations",
                    "/cosmos.staking.v1beta1.Query/DelegatorValidator",
                    "/cosmos.staking.v1beta1.Query/DelegatorValidators",
                    "/cosmos.staking.v1beta1.Query/HistoricalInfo",
                    "/cosmos.staking.v1beta1.Query/Params",
                    "/cosmos.staking.v1beta1.Query/Pool",
                    "/cosmos.staking.v1beta1.Query/Redelegations",
                    "/cosmos.staking.v1beta1.Query/UnbondingDelegation",
                    "/cosmos.staking.v1beta1.Query/Validator",
                    "/cosmos.staking.v1beta1.Query/ValidatorDelegations",
                    "/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations",
                    "/cosmos.staking.v1beta1.Query/Validators",
                    "/cosmos.upgrade.v1beta1.Query/AppliedPlan",
                    "/cosmos.upgrade.v1beta1.Query/Authority",
                    "/cosmos.upgrade.v1beta1.Query/CurrentPlan",
                    "/cosmos.upgrade.v1beta1.Query/ModuleVersions",
                    "/cosmos.upgrade.v1beta1.Query/UpgradedConsensusState",
                    "/cosmwasm.wasm.v1.Query/AllContractState",
                    "/cosmwasm.wasm.v1.Query/Code",
                    "/cosmwasm.wasm.v1.Query/Codes",
                    "/cosmwasm.wasm.v1.Query/ContractHistory",
                    "/cosmwasm.wasm.v1.Query/ContractInfo",
                    "/cosmwasm.wasm.v1.Query/ContractsByCode",
                    "/cosmwasm.wasm.v1.Query/ContractsByCreator",
                    "/cosmwasm.wasm.v1.Query/Params",
                    "/cosmwasm.wasm.v1.Query/PinnedCodes",
                    "/cosmwasm.wasm.v1.Query/RawContractState",
                    "/cosmwasm.wasm.v1.Query/SmartContractState",
                    "/ibc.applications.fee.v1.Query/CounterpartyPayee",
                    "/ibc.applications.fee.v1.Query/FeeEnabledChannel",
                    "/ibc.applications.fee.v1.Query/FeeEnabledChannels",
                    "/ibc.applications.fee.v1.Query/IncentivizedPacket",
                    "/ibc.applications.fee.v1.Query/IncentivizedPackets",
                    "/ibc.applications.fee.v1.Query/IncentivizedPacketsForChannel",
                    "/ibc.applications.fee.v1.Query/Payee",
                    "/ibc.applications.fee.v1.Query/TotalAckFees",
                    "/ibc.applications.fee.v1.Query/TotalRecvFees",
                    "/ibc.applications.fee.v1.Query/TotalTimeoutFees",
                    "/ibc.applications.interchain_accounts.controller.v1.Query/InterchainAccount",
                    "/ibc.applications.interchain_accounts.controller.v1.Query/Params",
                    "/ibc.applications.interchain_accounts.host.v1.Query/Params",
                    "/ibc.applications.transfer.v1.Query/DenomHash",
                    "/ibc.applications.transfer.v1.Query/DenomTrace",
                    "/ibc.applications.transfer.v1.Query/DenomTraces",
                    "/ibc.applications.transfer.v1.Query/EscrowAddress",
                    "/ibc.applications.transfer.v1.Query/Params",
                    "/ibc.applications.transfer.v1.Query/TotalEscrowForDenom",
                    "/ibc.core.channel.v1.Query/Channel",
                    "/ibc.core.channel.v1.Query/ChannelClientState",
                    "/ibc.core.channel.v1.Query/ChannelConsensusState",
                    "/ibc.core.channel.v1.Query/Channels",
                    "/ibc.core.channel.v1.Query/ConnectionChannels",
                    "/ibc.core.channel.v1.Query/NextSequenceReceive",
                    "/ibc.core.channel.v1.Query/PacketAcknowledgement",
                    "/ibc.core.channel.v1.Query/PacketAcknowledgements",
                    "/ibc.core.channel.v1.Query/PacketCommitment",
                    "/ibc.core.channel.v1.Query/PacketCommitments",
                    "/ibc.core.channel.v1.Query/PacketReceipt",
                    "/ibc.core.channel.v1.Query/UnreceivedAcks",
                    "/ibc.core.channel.v1.Query/UnreceivedPackets",
                    "/ibc.core.client.v1.Query/ClientParams",
                    "/ibc.core.client.v1.Query/ClientState",
                    "/ibc.core.client.v1.Query/ClientStates",
                    "/ibc.core.client.v1.Query/ClientStatus",
                    "/ibc.core.client.v1.Query/ConsensusState",
                    "/ibc.core.client.v1.Query/ConsensusStateHeights",
                    "/ibc.core.client.v1.Query/ConsensusStates",
                    "/ibc.core.client.v1.Query/UpgradedClientState",
                    "/ibc.core.client.v1.Query/UpgradedConsensusState",
                    "/ibc.core.connection.v1.Query/ClientConnections",
                    "/ibc.core.connection.v1.Query/Connection",
                    "/ibc.core.connection.v1.Query/ConnectionClientState",
                    "/ibc.core.connection.v1.Query/ConnectionConsensusState",
                    "/ibc.core.connection.v1.Query/ConnectionParams",
                    "/ibc.core.connection.v1.Query/Connections",
                    "/icq.v1.Query/Params",
                    "/juno.feeshare.v1.Query/DeployerFeeShares",
                    "/juno.feeshare.v1.Query/FeeShare",
                    "/juno.feeshare.v1.Query/FeeShares",
                    "/juno.feeshare.v1.Query/Params",
                    "/juno.feeshare.v1.Query/WithdrawerFeeShares",
                    "/osmosis.tokenfactory.v1beta1.Query/BeforeSendHookAddress",
                    "/osmosis.tokenfactory.v1beta1.Query/DenomAuthorityMetadata",
                    "/osmosis.tokenfactory.v1beta1.Query/DenomsFromCreator",
                    "/osmosis.tokenfactory.v1beta1.Query/Params",
                    "/pob.builder.v1.Query/Params",
                    "/router.v1.Query/Params"
                ]
            });
    });
});