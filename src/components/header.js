import { Web3Button,ConnectWallet,useConnectionStatus } from "@thirdweb-dev/react";
import { Container,Navbar} from 'react-bootstrap';
import MangoLogo from '../imgs/Mango.png';
import Client from '../client';
const clientId = `${process.env.CLIENT_ID}`;

const Header = ()=>{
  const connectionsStatus = useConnectionStatus();
    return(
        <Navbar bg="light" expand="lg">
        <Container> 
          <img
            src={MangoLogo}
            width="50"
            height="50"
          />
          <div className="ml-auto">
          <ConnectWallet  client={Client}/>
          {console.log(connectionsStatus)/**retrn=> connected || disconnected */}
          </div>
        </Container>
      </Navbar>
    )

}
export default Header;