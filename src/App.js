import React from 'react';
import './index.css';

import CartContainer from './Components/CartContainer';
import Navbar from './Components/Navbar'
import { createStore } from 'redux'
import { Provider } from 'react-redux'; 

import allReducers from './Reducers'


const store = createStore (
  allReducers, 
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
