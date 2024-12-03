import { Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import { useConnectionStatus,
    Web3Button,
    useContract,
    useContractWrite
} from "@thirdweb-dev/react";
import { prepareContractCall, getContract } from "thirdweb";
import { TransactionButton } from "thirdweb/react";
import {ethers} from 'ethers';
import Client from '../client.js';
import dotenv from 'dotenv';
const qs = require('qs')
dotenv.config();

const client = Client;
const ApproveButton = ({tokenAddress,amount}) => {
    console.log('this is amount',amount);
    console.log('this is token address',tokenAddress);

    const contract = getContract({
        client,
        chain: 'base',
        address: tokenAddress,
      });
    return(
        <Web3Button
            contractAddress={tokenAddress}
            transaction={()=>{
                prepareContractCall({
                contract: contract,
                method: "function approve(address spender,uint256 amount)",
                params: [process.env.MANGO_ROUTER00, `${ethers.utils.parseUnits(amount)}`]
            })

            }}
            className="w-100" 
            style={{
                padding: "1rem",
                fontSize: "1.5rem",
                backgroundColor: "#F26E01", // Mango orange
                borderColor: "#FFA500", // Match the border color
                color: "#FFFFFF", // White text for contrast
            }}
            >Approve</Web3Button>
    );

}
export default ApproveButton;