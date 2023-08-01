import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { greet,appreciate,leave,selectMsg } from "./features/new/newSlice";
function Newapp(){
    const dispatch = useDispatch();
    const msg = useSelector(selectMsg);
    const [userName, setUserName] = useState('Gowtham');
    // console.log(msg);
    return(
        <div>
            <h1 style={{textAlign:'center'}}>Understanding Redux</h1>
            <button style={{margin:10}} onClick={()=>{dispatch(greet(msg))}}>Greet user</button>
            <button style={{margin:10}} onClick={()=>{dispatch(appreciate(msg))}}>Appreciate user</button>
            <button style={{margin:10}} onClick={()=>{dispatch(leave(msg))}}>Say bye to user</button>
            <h1 style={{textAlign:'center'}}>{msg}</h1>
        </div>
    )
}
export default Newapp;