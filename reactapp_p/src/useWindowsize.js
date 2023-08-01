import {useState,useEffect} from "react";
function useWindowsize(){
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    function Resize(){
        setInnerWidth(window.innerWidth);
        setInnerHeight(window.innerHeight);
    }
    window.addEventListener("resize",Resize);
    return {innerWidth,innerHeight};
}
export default useWindowsize;