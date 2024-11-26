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

const ReviewButton = () => {

    return(
        <Button
            className="w-100" 
            style={{
                padding: "1rem",
                fontSize: "1.5rem",
                backgroundColor: "#FF8C00", // Mango orange
                borderColor: "#FFA500", // Match the border color
                color: "#FFFFFF", // White text for contrast
            }}
            >review</Button>
    );

}
export default ReviewButton;