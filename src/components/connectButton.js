
import{Client} from '../client'
import { useConnect, metamaskWallet} from "@thirdweb-dev/react";

const client = Client

const ConnectWalletButton =  () => {
  const metamaskConfig = metamaskWallet();
  const connect = useConnect();
  return (
    <button
      onClick={async () => {
        const wallet = await connect(metamaskConfig);
        console.log("connected to ", wallet);
      }}
    >
      Connect Wallet
    </button>
  );
}
export default ConnectWalletButton;