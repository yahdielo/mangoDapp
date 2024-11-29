import { Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import { useConnectionStatus,
    Web3Button,
    ThirdwebProvider,
    useActiveAccount
} from "@thirdweb-dev/react";
import { approve } from "thirdweb/extensions/erc20";
import {  getContract, sendTransaction } from "thirdweb";
import {ethers} from 'ethers';
import dotenv from 'dotenv';
const qs = require('qs')
dotenv.config();


const ApproveButton = ({client,spender, tokenAddress, amount, onClick}) => {
    const contract = getContract({
        client:client,
        chain:`${8453}`,
        address:`${tokenAddress}`
      });
      const transaction = approve({
        contract,
        spender: `${spender}`,
        amount: `${amount}`,
      });
       
      
    return(
        <ThirdwebProvider 
        client={client} 
        activeChain={"base"} 
        >
            
            {console.log('button called')}
        <Web3Button
            contractAddress={tokenAddress}
            // Calls the "setName" function on your smart contract with "My Name" as the first argument
            actions={() =>{sendTransaction(transaction)}}
            className="w-100" 
            style={{
                padding: "1rem",
                fontSize: "1.5rem",
                backgroundColor: "#F26E01", // Mango orange
                borderColor: "#FFA500", // Match the border color
                color: "#FFFFFF", // White text for contrast
            }}
            >Approve</Web3Button>
            </ThirdwebProvider>
    );

}
export default ApproveButton;
