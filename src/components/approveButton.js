import { Button } from 'react-bootstrap';
import {ethers} from 'ethers';
import Client from '../client.js';
import dotenv from 'dotenv';
const qs = require('qs')
dotenv.config();

const client = Client;
const ApproveButton = ({tokenAddress,amount}) => {
 

    return(
        <Button
            className="w-100" 
            style={{
                padding: "1rem",
                fontSize: "1.5rem",
                backgroundColor: "#F26E01", // Mango orange
                borderColor: "#FFA500", // Match the border color
                color: "#FFFFFF", // White text for contrast
            }}
            >Approve</Button>
    );

}
export default ApproveButton;