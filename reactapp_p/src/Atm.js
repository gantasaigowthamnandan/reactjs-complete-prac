import React,{useState} from "react";
function Atm(){
    const [balance, setBalance] = useState(25000);
    const [msg, setMsg] = useState('');
    function handleBalance(bal){
        setBalance(bal);
    }
    function handleMsg(msg) {
        setMsg(msg);
    }
    return(
        <div>
            <Amount balance={balance} handleBalance={handleBalance} handleMsg={handleMsg}/>
            <Balance balance={balance}/>
            <p>{msg}</p>
        </div>
    )
}
function Amount(props){
    const [value, setValue] = useState(0);
    function handleChange(val){
        setValue(val);
    }
    return(
        <div>
            <Input value={value} balance={props.balance} handleChange={handleChange} handleMsg={props.handleMsg}/>
            <Deposit value={value} balance={props.balance} handleBalance={props.handleBalance} handleMsg={props.handleMsg}/>
            <Withdraw value={value} balance={props.balance} handleBalance={props.handleBalance} handleMsg={props.handleMsg}/>
        </div>
    )
}
function Input(props){
    function handleChange(event){
        var val = event.target.value;
        if(isNaN(+val)){
            props.handleMsg('OOPS! Please enter valid amount.')
        }
        else{
            props.handleChange(val);
            props.handleMsg('')
        }
    }
    return(
        <div>
            <label>
                Enter Amount:
                <input type="text" name="name" onChange={handleChange}/>
            </label>
        </div>
    )
}
function Deposit(props){
    function handleDeposit(){
        props.handleBalance((props.value*1)+props.balance);
        props.handleMsg(`Amount ${props.value} Credited`);
    }
    return(
        <input type="submit" value="Deposit" onClick={handleDeposit}/>
    )
}
function Withdraw(props){
    function handleWithdraw(){
        props.handleBalance(props.balance-props.value);
        props.handleMsg(`Amount ${props.value} Debited`);
    }
    return(
        <input type="submit" value="Withdraw" onClick={handleWithdraw}/>
    )
}
function Balance(props){
    return(
        <div>
            <p>Remaining Balance: {props.balance}</p>
        </div>
    )
}
export default Atm