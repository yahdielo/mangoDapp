import MangoLogo from './imgs/Mango.png';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Importing react-query provider
import { 
      ThirdwebProvider,
      ConnectWallet,
      walletConnect,
    } 
    from "@thirdweb-dev/react";
import SwapBox from "./components/swapBox.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    //wrapping the app on the @tanstack/react-query
    //also wrapping the react components in the thirdweb cli
    <QueryClientProvider client={queryClient}>
    <ThirdwebProvider supportedWallets={[walletConnect()]}>
      
    <div className="App"> 
    {/* Header*/}
      <Navbar bg="light" expand="lg">
        <Container> 
          <img
            src={MangoLogo}
            width="50"
            height="50"
          />
          <div className="ml-auto">
          <ConnectWallet />
          </div>
        </Container>
      </Navbar>
       {/* Centered Box */}
       <div className="Body" expand="lg"
        style={{
          background: 'linear-gradient(150deg,orange, yellow, green)',  // Gradient background
        }}> 
        <SwapBox/>
      </div>
    </div>
    </ThirdwebProvider>
    </QueryClientProvider>
  );
}

export default App;
