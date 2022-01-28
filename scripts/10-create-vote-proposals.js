// Create proposals

import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule("0x39e9d604e2b45c7aa68fC3f0e4593670673bA6Fd");
const tokenModule = sdk.getTokenModule("0x0F59088dB50b11d05D33361AA6cd0fA8A6250B19");

(async () => {
    // try {
    //     const amount = 420_000;
    //     await voteModule.propose(
    //         "Should the DAO mint an additional " + amount + " tokens into the treasury?",
    //         [{
    //             // The amount of ETH we want to send in this proposal
    //             nativeTokenValue: 0,
    //             transactionData: tokenModule.contract.interface.encodeFunctionData(
    //                 "mint",
    //                 [
    //                     voteModule.address,
    //                     ethers.utils.parseUnits(amount.toString(), 18)
    //                 ]
    //             ),
    //             toAddress: tokenModule.address
    //         }]
    //     );
    //     console.log("✅ Successfully created proposal to mint tokens");
    // } catch (error) {
    //     console.error("failed to create first proposal", error);
    //     process.exit(1);
    // }

    try {
        const amount = 900;
        await voteModule.propose(
            "Should the DAO transfer " + 
            amount + " tokens from the treasury to " +
            process.env.WALLET_ADDRESS + " for being awesome?",
            [{
                nativeTokenValue: 0,
                transactionData: tokenModule.contract.interface.encodeFunctionData(
                    "transfer",
                    [
                        process.env.WALLET_ADDRESS,
                        ethers.utils.parseUnits(amount.toString(), 18)
                    ]
                ),
                toAddress: tokenModule.address   
            }]
        );
        console.log("✅ Successfully created proposal to reward ourselves from the treasury");
    } catch (error) {
        console.error("failed to create second proposal", error);
    }
})();