import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Importing react-query provider
import { 
      ThirdwebProvider,
      ChainId,
      metamaskWallet,
      walletConnect
    } 
    from "@thirdweb-dev/react";
import { Container,Navbar} from 'react-bootstrap';
import SwapBox from "./components/swapBox.js";
import Header from "./components/header.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Create a QueryClient instance  
const queryClient = new QueryClient();
//const metamaskConfig = metamaskWallet();
function App() {
  
  return (
    //wrapping the app on the @tanstack/react-query
    //also wrapping the react components in the thirdweb cli
    <QueryClientProvider client={queryClient}>
    <ThirdwebProvider desiredChainId={ChainId.Base} supportedWallets={[walletConnect(),metamaskWallet()]}>
      
    <div className="App"> 
    {/* Header*/}
      <Header/>
       {/* Centered Box */}
       <div className="Body" expand="lg"
        style={{
          background: 'linear-gradient(150deg,red,orange, yellow, green)',  // Gradient background
        }}> 
        <SwapBox/>
      </div>
    </div>
    </ThirdwebProvider>
    </QueryClientProvider>
  );
}

export default App;