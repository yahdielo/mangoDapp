import { useActiveAccount, ConnectButton } from "thirdweb/react";
import { Container,Navbar} from 'react-bootstrap';
import MangoLogo from '../imgs/Mango.png';
import Client from '../client';
const clientId = `${process.env.CLIENT_ID}`;

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
          <ConnectButton client={Client}/>
          </div>
        </Container>
      </Navbar>
    )

}
export default Header;