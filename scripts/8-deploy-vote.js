// Deploy a governance contract

import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0x8745bCBdcB3F57c16Fbc897eB169EA215960633C");

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            name: "EncodeDAO's Proposals",
            votingTokenAddress: "0x0F59088dB50b11d05D33361AA6cd0fA8A6250B19", // token required
            proposalStartWaitTimeInSeconds: 0, // start immediately
            proposalVotingTimeInSeconds: 24*60*60, // vote within 24 hours
            votingQuorumFraction: 0, // % required to pass
            minimumNumberOfTokensNeededToPropose: "0", // governance token requried
        });
        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
        )
    } catch (err) {
        console.error("Failed to deploy vote module", err);
    }
})();

// Voting module 0x39e9d604e2b45c7aa68fC3f0e4593670673bA6Fd