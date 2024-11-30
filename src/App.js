
import Client from './client.js';
import { Container,Navbar} from 'react-bootstrap';
import SwapBox from "./components/swapBox.js";
import Header from "./components/header.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import dotenv from 'dotenv';

dotenv.config();

const activeChain = "base";
//const metamaskConfig = metamaskWallet();
function App() {
  return (
    //wrapping the app on the @tanstack/react-query
    //also wrapping the react components in the thirdweb cli
    <div className="App"> 
    {/* Header*/}
      <Header/>
       {/* Centered Box */}
       <div className="Body" expand="lg"
        style={{
          background: 'linear-gradient(150deg,orange, yellow, green)',  // Gradient background
        }}> 
      
        <SwapBox/>
      </div>
    </div>
  );
}

export default App;