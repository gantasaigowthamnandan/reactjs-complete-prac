import React from 'react';
import { useState, useEffect } from 'react';
import styles from './App.module.css';
import {Input, Div, Form, H3} from './Elements';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  const fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 1000));
  };
  useEffect(()=>{
    async function getdata(){
      await fetch('http://localhost:3000/data')
      .then((response)=>response.json())
      .then((data)=>setData(data))
      fakeRequest().then(()=>{
        const el = document.querySelector(".loader");
          if (el) {
            el.remove();
            setLoading(false);
          }
      })
    }
    getdata();
  },[])
  const keyToMap = {
    input : Input,
    div : Div,
    form : Form,
    h3 : H3
  }
  const RenderComp = (curEle) =>{
    if (typeof keyToMap[curEle.component] !== 'undefined'){
      return React.createElement(keyToMap[curEle.component],
        {
          id : curEle.id,
          key : curEle.id,
          className : curEle.className ? curEle.className : null,
          type : curEle.type ? curEle.type : null,
          value : curEle.value ? curEle.value : '',
          placeholder : curEle.placeholder ? curEle.placeholder : null
        },curEle.children && (typeof curEle.children === 'string' ? curEle.children : curEle.children.map((comp)=>RenderComp(comp)))
      )
    }
  }
  return(
    loading ? null :
    <div className={styles.App}>
      <div className={styles.appNav}>
        {data.layouts.map((comp)=>RenderComp(comp))}
      </div>
      <div className={styles.formDiv}>
        {RenderComp(data.forms)}
      </div>
    </div>
  )
}
export default App;