import React from 'react';
import './index.css';

import CartContainer from './Components/CartContainer';
import Navbar from './Components/Navbar'
import {createStore} from 'redux'
import {decreaseItem, increaseItem} from './Actions/Itemes'
import allReducers from './Reducers'

const initialStore = {
  count: 10, 
}


//reducer
function reducers (state, action) {
  return state;
}


const store = createStore(allReducers, initialStore); 
store.dispatch(increaseItem())


function App() {
  return (
    <div className="App">
      <Navbar cart ={store.getState()}/>
      <CartContainer />
    </div>
  );
}

export default App;
