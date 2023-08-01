import React,{Component, useEffect, useState} from "react";
class App extends Component{
  constructor(){
    super();
    this.state={
      statement:"This Statement is state of 'App' Component passed as props for 'Second' Component"
      }
  }
  render(){
    var titleStyle = {color:"blue",textAlign:"center"};
    return(
      <div style={{border:"1px solid black",margin:5}}>
        {/*This is JSX Commenting*/}
        <h1 style={{textAlign:"center",textDecoration:"underline"}}>"Welcome to {this.props.name}"</h1>
        <h3 className="title" style={titleStyle}>New React App</h3>
        <Fifth/>
        <First/>
        <Second statementProp = {this.state.statement}/>
      </div>
    );
  }
}
class First extends Component{
  render(){
    var i=76;
    return(
      <div style={{border:"1px solid black",margin:5}}>
        <h3 style={{textAlign:"center"}}>"Stateless component(class) 'First' called in App component class"</h3>
        <p className="num" style={{fontSize:30}}>{59+17}</p>
        <p>{i===76 ? 'This is number 76' : 'This is not number 76'}</p>
        <CustomTextInput/>
      </div>
    )
  }
}
class Second extends Component{
  constructor(){
    super();
    this.state={
      data:[
        {
          "name":"Sai",
          "Age":"21"
        },
        {
          "name":"Gowtham",
          "Age" : "22"
        },
        {
          "name":"Nandan",
          "Age":"23"
        }
      ],
      displayStuinfo:false,
    }
    this.togdisplayStuinfo=this.togdisplayStuinfo.bind(this);
  }
  togdisplayStuinfo(){
    this.setState({displayStuinfo:!this.state.displayStuinfo})
  }
  render(){
    return(
      <div style={{border:"1px solid black",margin:5}}>
        <h3 style={{textAlign:"center"}}>"Statefull Component(class) 'Second' that holds states"</h3>
        <p style={{textAlign:"center"}}>{this.props.statementProp}</p>
        <p>Student Details : </p>
        {
          this.state.displayStuinfo?(
          <div>
            <ul>
              {
                this.state.data.map((item)=>{
                  return(
                      <li>{item.name} - {item.Age}</li>
                  );
                })
              }
            </ul>
            <button onClick={this.togdisplayStuinfo} style={{margin:10}}>Hide Details</button>
          </div>
          ):(
            <button onClick={this.togdisplayStuinfo} style={{margin:10}}>Show Details</button>
          )
        }
      </div>
    )
  }
}
App.defaultProps={
  name:"ReactJS"
}
export function XappThird(){
  return(
    <h3 style={{textAlign:"center",border:"1px solid black",margin:5}}>'Stateless Component(Functional)'</h3>
  )
}
export function Forth(){
  const [hi,fun]=useState([1,2]);
  function func(){
    var t=[...hi];
    t.push(5);
    // hi.splice(hi.length,0,5);
    console.log(hi);
    fun(t);
  }
  return(
    <div style={{border:"1px solid black",margin:5}}>
      <h3 style={{textAlign:"center"}}>Just don't bother this div</h3>
      <button onClick={func} style={{margin:10}}>click</button>
      <div>{hi}</div>
    </div>
  )
}
function Fifth(){
  const [msg] = useState('"Functional components using Hooks"');
  const [bool, setbool] = useState(true);
  const [val, setVal] =useState(0);
  useEffect(()=>{
    setVal(bool);
  },[bool])
  return(
    <div style={{border:"1px solid black",margin:5}}>
      <h3 style={{textAlign:"center"}}>{msg}</h3>
      <button onClick={()=>{setbool(!bool);console.log(val);}} style={{margin:10}}>Click here something happens</button>
      {/* <button onClick={()=>{console.log(bool);}} style={{margin:10}}>Click here something happens</button> */}
    </div>
  )
}
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    this.textInput.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" style={{margin:10}} ref={this.textInput} />
        <input type="button" style={{margin:10}} value="Focus the text input" onClick={this.focusTextInput}/>
      </div>
    );
  }
}
export default App;