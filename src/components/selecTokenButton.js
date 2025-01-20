
import { Button, Image } from 'react-bootstrap';
const SelectTokenButton = ({ isSelected, token, onClick}) => {
    return (
        <Button
            variant="outline-secondary"
            onClick={onClick}
            style={{
                position: 'absolute',
                right: '30px',
                top: '50%',
                transform: 'translateY(-50%)',
                padding: '0 5px',
                width: '95px',
                height: '40px',
                textAlign: 'center',
                fontSize: '0.8rem',
                backgroundColor: isSelected ? undefined : "#F26E01", // Mango orange for unselected
                borderColor: isSelected ? undefined : '#FFA500', // Match the border color
                color: isSelected ? undefined : '#FFFFFF', // White text for unselected
              
            }}
        >
            {isSelected ? (
                <>
                    <Image
                        src={token.image}
                        alt={token.symbol}
                        roundedCircle
                        style={{ width: '24px', height: '24px', marginRight: '5px' }}
                    />
                    <span style={{ fontSize: '0.8rem' }}>{token.symbol}</span>
                </>
            ) : (
                'Select Token'
            )}
        </Button>
    );
};

export default SelectTokenButton;

