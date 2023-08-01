import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App,{XappThird, Forth} from './App';
// import Atm from './Atm';
// import HoverIncrease from './hover';
// import ClickIncrease from './click'
import reportWebVitals from './reportWebVitals';
// import Routerdom from './Router';
import Windowsize from "./Windowsize";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Windowsize/>
    {/* <Atm/> */}
    {/* <App name="React"/> */}
    {/* <HoverIncrease/>
    <ClickIncrease/> */}
    {/* <XappThird /> */}
    {/* <Forth /> */}
    {/* <Routerdom/> */}
  </React.StrictMode>
);


// ReactDOM.render(<App name="React"/>,document.getElementById('root'));       //this ReactDOM.render is no longer supports in React18(Warning)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
