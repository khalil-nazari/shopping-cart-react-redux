const ItemReducer = (state, action) => {
  
    switch (action.type) {
        case "INCREASE": 
            return {count:state.count+1}


        case "DECREASE" : 
            return {count:state.count-1}
        
            
        case "RESET": 
            return {count: 0}


        default : 
            return state;  
    }
}

export default ItemReducer;