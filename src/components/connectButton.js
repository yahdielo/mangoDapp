// src/client.ts
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import{Client} from '../client'

const _client = Client
export const ConnectWalletButton = ()=>{
    return ( 
        <div className="walletButton">
            <ConnectButton
            client={_client}
            connectModal={{ size: "compact" }}
        />
      </div>
    )};