import React from "react";
import useWindowsize from './useWindowsize'
function Windowsize(){
    let {innerWidth,innerHeight}=useWindowsize();
    return(
        <>
            <h3>Width:{innerWidth}</h3>
            <h3>Height:{innerHeight}</h3>
        </>
    )
}

export default Windowsize;