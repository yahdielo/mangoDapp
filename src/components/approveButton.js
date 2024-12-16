import { Button } from 'react-bootstrap';
import { approve } from "thirdweb/extensions/erc20";
import { prepareContractCall, getContract, sendTransaction } from "thirdweb";
import { TransactionButton,useActiveAccount,useSendTransaction } from "thirdweb/react";
import {ethers} from 'ethers';
import Client from '../client.js';
import dotenv from 'dotenv';
const qs = require('qs')
dotenv.config();

const client = Client;
const ApproveButton = ({tokenAddress,amount}) => {
    //const { mutateAsync: approve } = useSendTransaction();
    const spender = `${process.env.MANGO_ROUTER00}`;
    const account = useActiveAccount();

    const {contract} = getContract({
        client,
        chain: 8453,
        address: tokenAddress,
       });

    const transaction = approve({
        contract : contract,
        spender: spender,
        amount:amount,

    });

    return(
        <TransactionButton 
            client={client}
            transaction={()=>{
                sendTransaction({ transaction, account })
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