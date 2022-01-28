// Create and deploy a membership NFT, ERC-1155 contract
// We're setting the metadata, not minting

import { ethers } from "ethers";
import sdk from './1-initialize-sdk.js';
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x8745bCBdcB3F57c16Fbc897eB169EA215960633C");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "EncodeDAO Membership",
      description: "A DAO by web3 engineers for web3 engineers",
      image: readFileSync("scripts/assets/encode_club.jpeg"),
      // The address of the person who will be receiving the proceeds from sales of nfts in the module.
      // The 0x0 address means we're not charging for the drop
      primarySaleRecipientAddress: ethers.constants.AddressZero
    });

    console.log("Successfully deployed bundledrop module, address:", bundleDropModule.address);

    console.log("bundleDrop metadata", await bundleDropModule.getMetadata());

  } catch (error) {
    console.log("Failed to deploy bundleDrop module", error);
  }
})()