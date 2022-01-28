// Mint the token supply and setting the amount we want to mint 

import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule('0x0F59088dB50b11d05D33361AA6cd0fA8A6250B19');

(async () => {
    try {
        const amount = 1_000_000;
        const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
        await tokenModule.mint(amountWith18Decimals);
        const totalSupply = await tokenModule.totalSupply();
        console.log(
            "✅ There now is",
            ethers.utils.formatUnits(totalSupply, 18),
            "$ENCODE in circulation"
        )
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();