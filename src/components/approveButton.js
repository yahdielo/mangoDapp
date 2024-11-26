import { Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import { useConnectionStatus,
    Web3Button,
    useContract,
    useContractWrite
} from "@thirdweb-dev/react";

import {ethers} from 'ethers';
import dotenv from 'dotenv';
const qs = require('qs')
dotenv.config();

const ApproveButton = () => {

    return(
        <Web3Button
            contractAddress='0x9900c7EFeefCad12508F39EC1fcDd88E33E9d766'
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