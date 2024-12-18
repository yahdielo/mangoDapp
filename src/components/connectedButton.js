import { Button } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import { useConnectionStatus,
    Web3Button,
    useContract,
    useContractWrite
} from "@thirdweb-dev/react";



const ConnectedButton = () => {

    return(
        <Button
        className="w-100"
        style={{
            padding: "1rem",
            fontSize: "1.5rem",
            backgroundColor: "#F26E01", // Mango orange
            borderColor: "#FFA500", // Match the border color
            color: "#FFFFFF", // White text for contrast
        }}
            >connected</Button>
    );

}
export default ConnectedButton;