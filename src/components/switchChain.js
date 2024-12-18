import { Button } from 'react-bootstrap';
import { Base } from "@thirdweb-dev/chains";
import { useSwitchChain } from "@thirdweb-dev/react";
const SwitchChain = () =>{

    const switchChain = useSwitchChain();
    return(
        <Button onClick={() => switchChain(Base.chainId)}
                className="w-100" 
                style={{
                    padding: "1rem",
                    fontSize: "1.5rem",
                    backgroundColor: "#F26E01", // Mango orange
                    borderColor: "#FFA500", // Match the border color
                    color: "#FFFFFF", // White text for contrast
                }}>
                  Cambiar a red Base
                </Button>
    );

}
export default SwitchChain;