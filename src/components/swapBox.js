import { Container, Button, Card, Form, Modal, ListGroup, Image } from 'react-bootstrap';
import { useEffect,useState } from 'react';
//import FetchAmountOut from "./fetchAmountOut.js"
import axios from 'axios';
import ethLogo from './assets/eth.png';
import usdcLogo from './assets/usdc.png';
import dotenv from 'dotenv';
const qs = require('qs')
dotenv.config();

// Mock list of tokens
const tokens = [
    { symbol: 'WETH', name: 'Ethereum', address: '0x4200000000000000000000000000000000000006',decimals:18, image: ethLogo },
    { symbol: 'USDC', name: 'USD Coin', address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',decimals:6, image: usdcLogo },
    {symbol:'Brett', name:'BRETT',address:'0x532f27101965dd16442E59d40670FaF5eBB142E4',decimals:18}
    // Add more tokens as needed
];

const SwapBox = () => {
    const [amount1, setAmount1] = useState('');
    const [amount2, setAmount2] = useState('');
    const [tokenList, setTokenList] = useState([]);
    const [selectedToken1, setSelectedToken1] = useState(tokens[0]);
    const [selectedToken2, setSelectedToken2] = useState(tokens[1]);
    const [showModal, setShowModal] = useState(false);
    const [isSelectingToken1, setIsSelectingToken1] = useState(true); // To track which token selection modal to show


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
        setAmount2(e.target.value);
    };
    //call back funciton pass amountToken out 
    //from child component to parent component
    const handleAmountOutUpdate = (amountOut) => {
        console.log('in call back')
        handleAmount2Change(amountOut);
    }
    /** @DEV function fetches amount out from the 0x api */
const fetchAmountOut = async (sellTokenAddress,buyTokenAddress,amountToSell) => {
    try{
        const resp = await axios.post(
            `http://localhost:4000/getAmountsOut?sellTokenAddress=${sellTokenAddress}&buyTokenAddress=${buyTokenAddress}&amountToSell=${amountToSell}`
            );
            console.log('logg from swapBox frtch amount',resp)
        return resp;
    }catch(e){
        console.log('\n\nERR: FetchAmount component->>>>\n',e);
    }

}


    //@DEV: handle blur will call fetchToken info
    //to get the amount out tokens user will get after the swap
    const handleBlur = async () => {
            console.log('hadle blur')
            if(amount1 !== ""){
                const sellTokenAddress = selectedToken1.address;
                const buyTokenAddress = selectedToken2.address;
                const amountToSell = amount1*10**selectedToken2.decimals;
                const resp = await fetchAmountOut(sellTokenAddress,buyTokenAddress,amountToSell);
                console.log('resposne from handle blur',resp);

            }
        }
    // Handle the swap action
    const handleSwap = () => {
        console.log(`Amount in box 1: ${amount1}`);
        console.log(`Selected token 1: ${selectedToken1.symbol}, Address: ${selectedToken1.address}`);
        console.log(`Amount in box 2: ${amount2}`);
        console.log(`Selected token 2: ${selectedToken2.symbol}, Address: ${selectedToken2.address}`);
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
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => { setIsSelectingToken1(true); setShowModal(true); }}
                                    style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', padding: '0 5px' }}
                                >
                                    <Image
                                        src={selectedToken1.image}
                                        alt={selectedToken1.symbol}
                                        roundedCircle
                                        style={{ width: '24px', height: '24px', marginRight: '5px' }}
                                    />
                                    <span style={{ fontSize: '0.8rem' }}>{selectedToken1.symbol}</span>
                                </Button>
                            </div>
                        </Form.Group>

                        {/* Token 2 selection with image and amount input */}
                        <Form.Group className="mb-4">
                            <div className="token-input-container" style={{ display: 'flex', alignItems: 'center', position: 'relative', width: '100%' }}>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter amount"
                                    value={amount2}
                                    onChange={handleAmount2Change}
                                    style={{ fontSize: '1rem', padding: '1rem', flex: 1, marginRight: '10px' }}
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => { setIsSelectingToken1(false); setShowModal(true); }}
                                    style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', padding: '0 5px' }}
                                >
                                    <Image
                                        src={selectedToken2.image}
                                        alt={selectedToken2.symbol}
                                        roundedCircle
                                        style={{ width: '24px', height: '24px', marginRight: '5px' }}
                                    />
                                    <span style={{ fontSize: '0.8rem' }}>{selectedToken2.symbol}</span>
                                </Button>
                            </div>
                        </Form.Group>

                        {/* Swap Button */}
                        <Button
                            variant="primary"
                            className="w-100"
                            style={{ padding: '1rem', fontSize: '1.5rem' }}
                            onClick={handleSwap} // Added onClick event to handle swap
                        >
                            Swap
                        </Button>
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
