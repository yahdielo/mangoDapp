import { useConnectionStatus,
    Web3Button,
    ConnectWallet,
    useContract,
    useContractWrite,
    useChain
} from "@thirdweb-dev/react";
import { useSwitchChain } from "@thirdweb-dev/react";
import ApproveButton from './approveButton';
import ConnectedButton from './connectedButton'

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
            console.log('this is chian',chain.chainId);
            return (<ConnectWallet/>);
        }
        if(status === 'connected' && chain.chainId == 8453)
        {
            
            return (<ConnectedButton />);
        }
        if(status === 'connected' && chain.chainId == 8453 && amount !== '')
        {
            console.log('');
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