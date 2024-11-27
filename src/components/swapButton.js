import { Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import { 
    Web3Button,
    useContract,
    useContractWrite
} from "@thirdweb-dev/react";
import {ethers} from 'ethers';



const Swap = (tokenAddress,poolFee)=>{
    const contractAddress = '0x9900c7EFeefCad12508F39EC1fcDd88E33E9d766';
    const { contract,
            isLoading: isContractLoading,
            error: contractError 
        } = useContract(contractAddress);

    // Define the contract function for swapping
    const { mutateAsync: callSwap,
            isLoading: isWriting 
        } = useContractWrite(contract, "ethToTokensV3");

    try {
        if (!contract) {
            console.error("Contract not loaded");
            return;
        }

        const args = [
            selectedToken2.address, // tokenAddress
            3000,                  // feePool 
        ];

        console.log("Calling swap with args:", args);

        const tx = callSwap({ args });
        console.log("Transaction successful:", tx);
        alert("Swap successful!");
    } catch (err) {
        console.error("Error while swapping:", err);
        alert("Swap failed!");
    }

    return();
    <Web3Button>swap</Web3Button>
}

export default Swap;