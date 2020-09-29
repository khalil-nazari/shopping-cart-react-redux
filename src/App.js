import React from 'react';
import './index.css';

import CartContainer from './Components/CartContainer';
import Navbar from './Components/Navbar'
import { createStore } from 'redux'
import { Provider } from 'react-redux'; 

import allReducers from './Reducers'
import CartItems from './Data/CartItems'; 



const initialStore = {
  cart : CartItems, 
  total: 330, 
  amount: 7,
}


const store = createStore (
  allReducers, 
  initialStore, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
