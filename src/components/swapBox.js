import { Container, Button, Card, Form, Modal, ListGroup, Image } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import { useConnectionStatus,
    Web3Button,
    ConnectWallet,
    useContract,
    useContractWrite
} from "@thirdweb-dev/react";
import ApproveButton from './approveButton.js';
import ConnectedButton from './connectedButton.js';
import SelectTokenButton from './selecTokenButton.js';
//import FetchAmountOut from "./fetchAmountOut.js"
import axios from 'axios';
import ethLogo from './assets/eth.png';
import usdcLogo from './assets/usdc.png';
import brettLogo from './assets/brett.png';
import {ethers} from 'ethers';
import dotenv from 'dotenv';
import '../App.css'
const qs = require('qs')
dotenv.config();

// Mock list of tokens
const tokens = [{empty:true},
    { symbol: 'WETH', name: 'Ethereum', address: '0x4200000000000000000000000000000000000006',decimals:18, image: ethLogo},
    { symbol: 'USDC', name: 'USD Coin', address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',decimals:6, image: usdcLogo},
    {symbol:'Brett', name:'BRETT',address:'0x532f27101965dd16442E59d40670FaF5eBB142E4',decimals:18 , image: brettLogo}
    // Add more tokens as needed
];

const SwapBox = ({Client, Spender}) => {

    const contractAddress = '0x9900c7EFeefCad12508F39EC1fcDd88E33E9d766';
    const { contract,
            isLoading: isContractLoading,
            error: contractError 
        } = useContract(contractAddress);

    // Define the contract function for swapping
    const { mutateAsync: callSwap,
            isLoading: isWriting 
        } = useContractWrite(contract, "ethToTokensV3");
 

    const [amount1, setAmount1] = useState('');
    const [amount2, setAmount2] = useState('');
    const [tokenList, setTokenList] = useState([]);
    const [selectedToken1, setSelectedToken1] = useState(tokens[0]);
    const [selectedToken2, setSelectedToken2] = useState(tokens[0]);
    const [showModal, setShowModal] = useState(false);
    const [outPutAmount,setOutputAmount] = useState('Enter Amount');
    const [isSelectingToken1, setIsSelectingToken1] = useState(true); // To track which token selection modal to show
    const [isSelectingToken2, setIsSelectingToken2] = useState(true);
 
    const connectionStatus = useConnectionStatus();

    const handleTokenSelect = (token) => {
        if (isSelectingToken1) {
            setSelectedToken1(token);
        } else {
            setSelectedToken2(token);
        }
        setShowModal(false);
    };

    const handleAmount1Change = (e) => {
        setAmount1(e.target.value);
    };

    const handleAmount2Change = (e) => {
        console.log('handle onchange 2',e)
        setAmount2(e.target.value);
    };
    //call back funciton pass amountToken out 
    //from child component to parent component
    const handleAmountOutUpdate = (amountOut) => {
      
        handleAmount2Change(amountOut);
    }
    /** @DEV function fetches amount out from the 0x api */
    const fetchAmountOut = async (sellTokenAddress,buyTokenAddress,amountToSell) => {
        try{
            const resp = await axios.post(
                `http://localhost:4000/getAmountsOut?sellTokenAddress=${sellTokenAddress}&buyTokenAddress=${buyTokenAddress}&amountToSell=${amountToSell}`
                );
                console.log('logg from swapBox frtch amount',resp)
            return resp.data;
        }catch(e){
            console.log('\n\nERR: fetchAmount()-> swapBox component\n',e);
        }

    }
    //@DEV: handle blur will call fetchToken info
    //to get the amount out tokens user will get after the swap
    const handleBlur = async () => {
    
            if(amount1 !== ""){
                const sellTokenAddress = selectedToken1.address;
                const buyTokenAddress = selectedToken2.address;
                const amountToSell = amount1*10**selectedToken1.decimals;
                try{
                    const resp = await fetchAmountOut(sellTokenAddress,buyTokenAddress,amountToSell);
                    console.log('resp',resp)
                    const amountBack = resp.buyAmount /(10**selectedToken2.decimals)
            
                    setOutputAmount(amountBack);
                } catch (e) {
                    console.log('HandleBlur() -> Calling FetchAmount Error',e);
                };
            }
        }
    // Handle the swap action
    const handleSwap = () => {
        console.log(`Amount in box 1: ${amount1}`);
        console.log(`Selected token 1: ${selectedToken1.symbol}, Address: ${selectedToken1.address}`);
        console.log(`Amount in box 2: ${amount2}`);
        console.log(`Selected token 2: ${selectedToken2.symbol}, Address: ${selectedToken2.address}`);
        try {
            if (!contract) {
                console.error("Contract not loaded");
                return;
            }

            const args = [
                selectedToken2.address, // tokenAddress
                3000,                  // feePool (example value, adjust based on your contract's requirements)
            ];
            console.log("Calling swap with args:", args);

            const tx = callSwap({ args });
            console.log("Transaction successful:", tx);
            alert("Swap successful!");
        } catch (err) {
            console.error("Error while swapping:", err);
            alert("Swap failed!");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <Card style={{ width: '30rem', padding: '2rem', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}>
                <Card.Body>
                    <Form>
                        {/* Token 1 selection with image and amount input */}
                        <Form.Group className="mb-4">
                            <div className="token-input-container" style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '100%' }}>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter amount"
                                    value={amount1}
                                    onChange={handleAmount1Change}
                                    onBlur={handleBlur} ///
                                    style={{ fontSize: '1rem', padding: '1rem', flex: 1, marginRight: '10px' }}
                                />
                                <SelectTokenButton
                                    isSelected={!selectedToken1.empty}
                                    token={selectedToken1}
                                    onClick={() => {
                                        setIsSelectingToken1(true);
                                        setShowModal(true);
                                    }}
                                />                               
                            </div>
                        </Form.Group>

                        {/* Token 2 selection with image and amount input */}
                        <Form.Group className="mb-4">
                            <div className="token-input-container" style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '100%' }}>
                                <Form.Control
                                    type="text"
                                    placeholder={`${outPutAmount}`}
                                    value={amount2}
                                    onChange={handleAmount2Change}
                                    style={{ fontSize: '1rem', padding: '1rem', flex: 1, marginRight: '10px' }}
                                />
                                <SelectTokenButton
                                    isSelected={!selectedToken2.empty}
                                    token={selectedToken2}
                                    onClick={() => {
                                        setIsSelectingToken1(false);
                                        setShowModal(true);
                                    }}
                                /> 
                                
                            </div>
                        </Form.Group>

                        {/* Swap Button */}
                        {console.log('this is amount 1',amount1)}
                        
                        {connectionStatus === "connected" && amount1 === '' ? (
                            <ConnectedButton/>
                        ) : connectionStatus === "connected" && 
                                amount1 !== '' && 
                                selectedToken1.empty === true  ? (<ConnectedButton/>) : 
                            connectionStatus === "connected" && amount1 !== '' && 
                                selectedToken1.empty !== true && 
                                selectedToken2.empty !== true ? (<ApproveButton 
                                                                    tokenAddress = {selectedToken1.address}
                                                                    amount = {amount1}
                                                                    client={Client}
                                                                    spender={Spender}
                                                                    />) :
                            connectionStatus === "connected" && amount1 !== '' && selectedToken1.empty !== true && selectedToken2.empty == true ? (<ConnectedButton/>) :
                            (
                            <ConnectWallet className="w-100" style={{ padding: '1rem', fontSize: '1.5rem' }} />
                        )}
                    </Form>
                </Card.Body>
           </Card>

            {/* Modal for token selection */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Select a Token</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <ListGroup>
                        {tokens.map((token) => (
                            <ListGroup.Item key={token.address} action onClick={() => handleTokenSelect(token)}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Image
                                        src={token.image}
                                        alt={token.symbol}
                                        roundedCircle
                                        style={{ width: '24px', height: '24px', marginRight: '10px' }}
                                    />
                                    {token.symbol} - {token.name}
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default SwapBox;
