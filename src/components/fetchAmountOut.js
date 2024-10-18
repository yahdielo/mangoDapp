import { useState, useEffect} from 'react';
import axios from "axios";

const FetchAmountOut = ({sellTokenAddress,buyTokenAddress,amountToSell}) => {
   
        try{
            const resp = axios.post(
                `http://localhost:4000/getAmountsOut?sellTokenAddress=${sellTokenAddress}&buyTokenAddress=${buyTokenAddress}&amountToSell=${amountToSell}`
                );
            
        }catch(e){
            console.log('\n\nERR: FetchAmount component->>>>\n',e);
        }


}

export default FetchAmountOut;