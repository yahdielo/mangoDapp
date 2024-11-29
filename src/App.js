import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Importing react-query provider
import {
      ThirdwebProvider,
      metamaskWallet,
      walletConnect
    } 
    from "@thirdweb-dev/react";
import { createThirdwebClient,
  getContract,
  resolveMethod
 } from "thirdweb";
 import { useActiveAccount } from "thirdweb/react";
import { Container,Navbar} from 'react-bootstrap';
import { base } from "thirdweb/chains";
import SwapBox from "./components/swapBox.js";
import Header from "./components/header.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import dotenv from 'dotenv';
dotenv.config();

// Create a QueryClient instance  
const queryClient = new QueryClient();
const activeChain = "base";
const mangoRouter00Address = `${process.env.MANGO_ROUTER00}`;
const clientId = `${process.env.CLIENT_ID}`;

const client = createThirdwebClient({clientId});

function App() {

  return (
    //wrapping the app on the @tanstack/react-query
    //also wrapping the react components in the thirdweb cli
    <QueryClientProvider client={queryClient}>
    <ThirdwebProvider 
        client={`${process.env.S_KEY}`} 
        activeChain={activeChain} 
        supportedWallets={[walletConnect(),metamaskWallet()]} 
      
      >
      {console.log('this is the thirdWebElement',ThirdwebProvider)}
      
    <div className="App"> 
    {/* Header*/}
      <Header/>
       {/* Centered Box */}
       <div className="Body" expand="lg"
        style={{
          background: 'linear-gradient(150deg,orange, yellow, green)',  // Gradient background
        }}> 
        
        <SwapBox Client={client} Spender={mangoRouter00Address}/>
      </div>
    </div>
    </ThirdwebProvider>
    </QueryClientProvider>
  );
}

export default App;