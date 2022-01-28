// Revoke my own minting rights 

import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule("0x0F59088dB50b11d05D33361AA6cd0fA8A6250B19");

(async () => {
    try {
        console.log("Roles that exist right now:", await tokenModule.getAllRoleMembers());
        // Revoke all roles from our wallet
        await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
        console.log("Roles after revoking ourselves:", await tokenModule.getAllRoleMembers());
        console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");
    } catch (error) {
        console.error("Failed to revoke ourselves from the DAO treasury", error);
    }
})();