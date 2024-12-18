import { useConnectionStatus,
    Web3Button,
    ConnectWallet,
    useContract,
    useContractWrite,
    useChain,
   
} from "@thirdweb-dev/react";
import { Button } from 'react-bootstrap';
import { Base } from "@thirdweb-dev/chains";
import ApproveButton from './approveButton';
import ConnectedButton from './connectedButton'
import SwitchChain from './switchChain';

const ConnectWalletButton = ({addressToken1,addressToken2,amount}) => {

    const status = useConnectionStatus();
    const chain = useChain();


    console.log(addressToken1,typeof(addressToken2),amount);


    const pickButton = ()=>{

        if(status == 'disconnected'){
            console.log('disconnected');
            return (<ConnectWallet/>);
        }
        if (status === 'connected' && chain.chainId !== 8453)
        {
            console.log('switchchain');
            return (<SwitchChain/>);
        }
        if(status === 'connected' && chain.chainId === 8453 && addressToken1 != null && addressToken2 != null && amount != null)
        {
            console.log('approve');
            return (<ApproveButton/>);
        }
        if(status === 'connected' && chain.chainId == 8453)
        {
            console.log('brrr')
            
            return (<ConnectedButton />);
        }
        
    };
    return (<div>{pickButton()}</div>);

}
export default ConnectWalletButton;