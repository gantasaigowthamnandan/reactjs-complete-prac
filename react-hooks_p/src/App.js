import './App.css';
import React,{ useContext, useEffect, useRef, useState } from 'react';
const valueContext1=React.createContext();
function App() {
  return(
    <div>
      <h1 style={{textAlign:"center"}}>Hooks Practise</h1>
      <ContextAPI/>
      <RefHook/>
    </div>
  )
}
function ContextAPI(){
  const [value1, setValue1] = useState('Here Context.Consumer is used.');
  const [value2, setValue2] = useState(' useContext() Hook is used.')
  function handleValue1(event){
    setValue1(event.target.value);
  }
  function handleValue2(event){
    setValue2(event.target.value);
  }
  return(
    <div className='ContextAPI'>
      <h2 style={{textAlign:"center"}}>ContextAPI</h2>
      <valueContext1.Provider value={{v1:value1,v2:value2}}>
        <h1>Parent</h1>
        <label> Input 1 <input type='text' placeholder='Enter input1' onChange={handleValue1}></input></label>
        <label> Input 2 <input type='text' placeholder='Enter input2' onChangeCapture={handleValue2}></input></label>
        <Level1/>
      </valueContext1.Provider>
    </div>
  );
}
function Level1(){
  return(
    <div>
      <h2>Level1</h2>
      <Level2/>
    </div>
  )
}
function Level2(){
  return(
    <div>
      <valueContext1.Consumer>
        {
          val1=><h3>Level2 : {val1.v1}</h3>
        }
      </valueContext1.Consumer>
      <Level3/>
    </div>
  )
}
function Level3(){
  const use = useContext(valueContext1);
  return(
    <div>
      <h4>Level3:{use.v2}</h4>
    </div>
  )
}
function RefHook(){
  var val;
  const [present, setPresent] = useState('hi');
  const [submitval, setSubmitval] = useState(present);
  const refinput = useRef(null);
  function handleChange(event){
    val=(event.target.value);
  }
  function handleClick(){
    setPresent(val);
    setSubmitval(val);
  }
  useEffect(()=>{
    refinput.current=present;
  },[submitval]);
  return(
    <div className='RefHook'>
      <h1 style={{textAlign:"center"}}>RefHook</h1>
      <label> Input 1<input type="text"  onChange={handleChange} placeholder='Enter input' style={{margin:10}}></input></label>
      <button onClick={handleClick}>Submit</button>
      <div>Current input : {submitval}</div>
      <div>Previous input: {refinput.current}</div>
    </div>
  )
}
export default App;