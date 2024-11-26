import { Button } from 'react-bootstrap';

const SelectTokenButton = () => {

    return(
        <Button
            variant="outline-secondary"
            style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', padding: '0 5px', 
            width: "85px",  // Fixed width
            height: "40px",  // Fixed height
            textAlign: "center", // Center text
            }}
        >Select Token</Button>
    );

}
export default SelectTokenButton;