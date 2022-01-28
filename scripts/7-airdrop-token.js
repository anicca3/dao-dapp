// Airdrop!
import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const bundleDropModule = sdk.getBundleDropModule("0xC9D27E01e75FD51790c15D99b01870efd6aad1B5");

const tokenModule = sdk.getTokenModule('0x0F59088dB50b11d05D33361AA6cd0fA8A6250B19');

(async() => {
    try {
        // Grab all the addresses of people who own our membership NFT, which has 
        // a tokenId of 0.
        const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");
    
        if (walletAddresses.length === 0) {
            console.log("No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!");
            process.exit(0);
        }

        const airdropTargets = walletAddresses.map((address) => {
            const randomAmt = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
            console.log("✅ Going to airdrop", randomAmt, "tokens to", address);
            const airdropTarget = {
                address, 
                amount: ethers.utils.parseUnits(randomAmt.toString(), 18)
            }
            return airdropTarget;
        });

        console.log("🌈 Starting airdrop...")
        await tokenModule.transferBatch(airdropTargets);
        console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");    

    } catch (error) {
        console.error("Failed to airdop tokens", error);
    }
})();