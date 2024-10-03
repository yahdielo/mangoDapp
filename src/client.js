import { createThirdwebClient } from "thirdweb";
import dotenv from 'dotenv';
dotenv.config();
//client
export const Client = new createThirdwebClient({
    //secretKey: process.env.SECRETE_KEY,
    clientId: `https://8453.rpc.thirdweb.com/${process.env.CLIENT_ID}`
  });