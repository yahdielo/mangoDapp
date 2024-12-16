import { Button } from 'react-bootstrap';
import { approve } from "thirdweb/extensions/erc20";
import { prepareContractCall, getContract, sendTransaction , toWei} from "thirdweb";
import { TransactionButton,useActiveAccount,useSendTransaction } from "thirdweb/react";
import {ethers} from 'ethers';
import Client from '../client.js';
import dotenv from 'dotenv';
const qs = require('qs')
dotenv.config();

const client = Client;
const ApproveButton = ({tokenAddress,amount}) => {
    //const { mutateAsync: approve } = useSendTransaction();
    const spender = `${process.env.REACT_APP_MANGO_ROUTER00}`;
    const account = useActiveAccount();
    console.log(tokenAddress);

    const contract = getContract({
        client,
        chain: 8453,
        address : `${tokenAddress}`,
       });

    const transaction = approve({
        contract : contract,
        spender: spender,
        amount:amount,

    });

    return(
        <TransactionButton 
            client={client}
            transaction={() => {
                // Create a transaction object and return it
                const tx = prepareContractCall({
                contract,
                method: "approve(address spender,uint256 amount)",
                params: [`${spender}`, toWei(`${amount}`)],
                });
                return tx;
            }}
            onTransactionSent={(result) => {
                console.log("Transaction submitted", result.transactionHash);
            }}
            onTransactionConfirmed={(receipt) => {
                console.log("Transaction confirmed", receipt.transactionHash);
            }}
            onError={(error) => {
                console.error("Transaction error", error);
            }}
            className="w-100" 
            style={{
                padding: "1rem",
                fontSize: "1.5rem",
                backgroundColor: "#F26E01", // Mango orange
                borderColor: "#FFA500", // Match the border color
                color: "#FFFFFF", // White text for contrast
            }}
            >Approve</TransactionButton>
    );

}
export default ApproveButton;