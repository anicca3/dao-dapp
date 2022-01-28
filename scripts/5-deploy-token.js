// Deploy ERC20 governance token that allows users to vote on proposals
// Users with more governance token are more powerful

import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x8745bCBdcB3F57c16Fbc897eB169EA215960633C");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "EncodeDAO Governance Token",
            symbol: "ENCODE"
        });
        console.log("✅ Successfully deployed token module, address:", tokenModule.address);
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();

// 0x0F59088dB50b11d05D33361AA6cd0fA8A6250B19