/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./App.css";import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';

function App() {
  const myState = useSelector((state) => state.updateNumber) 
  return (
    <>
    <div className="main-div">
    

    <div className="container">

    <h1>Increment/Decrement counter</h1>
    <h4>using React and Redux</h4>
    
    <div className="quantity">
      <a className="quantity__minus" title="Decrement" onClick={useDispatch(decNumber())}><span>-</span></a>
      <input name="quantity" type="text" className="quantity__input" value={myState} />
      <a className="quantity__plus" title="Increment" onClick={useDispatch(incNumber())}><span>+</span></a>
    </div>

        </div>
      </div>
  </>
  )
}

export default App