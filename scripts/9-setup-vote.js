// Setup treasury, i.e. give the governance contract ability to move our tokens around

import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js"

const voteModule = sdk.getVoteModule("0x39e9d604e2b45c7aa68fC3f0e4593670673bA6Fd");
const tokenModule = sdk.getTokenModule("0x0F59088dB50b11d05D33361AA6cd0fA8A6250B19");

(async () => {
    try {
        // Give our treasury the power to mint additional token if needed.
        await tokenModule.grantRole("minter", voteModule.address);
        console.log("Successfully gave vote module permissions to act on token module");
    } catch (error) {
        console.error("failed to grant vote module permissions on token module", error);
        process.exit(1);
    }

    try {
        const ownedTokenBalance = await tokenModule.balanceOf(process.env.WALLET_ADDRESS);
        const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
        const percent90 = ownedAmount.div(100).mul(90);
        await tokenModule.transfer(
            voteModule.address,
            percent90
        );
        console.log("✅ Successfully transferred tokens to vote module");
    } catch (error) {
        console.error("failed to transfer tokens to vote module", error);
    };
})();