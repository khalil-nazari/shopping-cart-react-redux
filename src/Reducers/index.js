import { combineReducers } from 'redux'; 

import ItemReducer from './ItemsReducer'; 
const allReducers = combineReducers({ItemReducer}); 
export default ItemReducer; 