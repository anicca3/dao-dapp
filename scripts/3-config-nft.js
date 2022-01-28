// Deploy metadata associated with the membership NFT

import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xC9D27E01e75FD51790c15D99b01870efd6aad1B5",
);

(async() => {
  try {
    await bundleDrop.createBatch([
      {
        name: "BitDao",
        description: "This NFT will give you access to EncodeDAO",
        image: readFileSync("scripts/assets/bitdao.png")
      }
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.log("Failed to create the new NFT", error);
  }
})()