import { 
    ChainId,
    ConnectWallet,
    metamaskWallet,
    coinbaseWallet,
    walletConnect
  } 
from "@thirdweb-dev/react";import { Container,Navbar} from 'react-bootstrap';
import MangoLogo from '../imgs/Mango.png';
const Header = ()=>{
    return(
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
    )

}

export default Header;