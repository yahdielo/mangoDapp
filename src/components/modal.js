const ModalTokenSelect = ()=>{
   return <Modal show={showModal} onHide={() => setShowModal(false)} centered>
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
}