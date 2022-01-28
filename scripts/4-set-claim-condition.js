// What's the max # of NFTs that can be minted? When can users start minting NFTs?

import sdk from "./1-initialize-sdk.js";
const bundleDrop = sdk.getBundleDropModule(
  "0xC9D27E01e75FD51790c15D99b01870efd6aad1B5",
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    });
    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.log("Failed to set claim condition", error);
  }
})()