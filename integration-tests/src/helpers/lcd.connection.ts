import { LCDClient } from "@fury-money/feather.js";

export function getLCDClient() {
    return {
        chain1: new LCDClient({
            "test-1": {
                lcd: "http://localhost:1316",
                chainID: "test-1",
                gasPrices: "0.15ufury",
                gasAdjustment: 1.5,
                prefix: "furya"
            }
        }),
        chain2: new LCDClient({
            "test-2": {
                lcd: "http://localhost:1317",
                chainID: "test-2",
                gasPrices: "0.15ufury",
                gasAdjustment: 1.5,
                prefix: "furya"
            }
        })
    }
}