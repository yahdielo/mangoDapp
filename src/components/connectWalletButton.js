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
        if(status === 'connected' && chain.chainId == 8453)
        {
            
            return (<ConnectedButton />);
        }
        if(status === 'connected' && chain.chainId == 8453 && amount !== '')
        {
            return (<ConnectedButton />);
        }
        if (status === 'connected' && chain.id === 8453 && addressToken1 === '' && addressToken2 === '' && amount === '')
        {
            console.log('2');
            return (<ConnectedButton/>);
        }
        if(status === 'connected' && chain.id === 8453 && addressToken1 !== '' && addressToken2 !== '' && amount !== '')
        {
            return (<ApproveButton/>);
        }
        
    };
    return (<div>{pickButton()}</div>);

}
export default ConnectWalletButton;