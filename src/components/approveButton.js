import {
    useContractWrite,
    useContract,
    Web3Button,
  } from "@thirdweb-dev/react";
import { Button } from 'react-bootstrap';
import {ethers} from 'ethers';
import Client from '../client.js';
import dotenv from 'dotenv';
const qs = require('qs')
dotenv.config();

const client = Client;
const ApproveButton = ({tokenAddress,amount}) => {

    const  {contract}  = useContract(tokenAddress);
    const { mutateAsync, isLoading, error } = useContractWrite(
        contract,
        'approve(address spender,uint256 amount)'
    );
    const spender = `${process.env.REACT_APP_MANGO_ROUTER00}`;

    return(
        <Web3Button
            contractAddress={tokenAddress}
            // Calls the "setName" function on your smart contract with "My Name" as the first argument
            action={() => mutateAsync({ args: [spender,amount]})}
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