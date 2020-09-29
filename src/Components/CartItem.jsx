import React from 'react'
import {removeItems, increaseItem, decreaseItem} from '../Actions/Itemes'; 
import {connect} from 'react-redux'; 

function CartItem({id, img, title, price, amount, remove, increase, decrease}) {
 
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="cart_image" alt="Item image" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                        <p className="card-text">$ {price}</p>

                        <div className="modefy_amount">
                            <div>
                                <button onClick={()=> remove()} className="remove_btn btn btn-sm btn-outline-danger">Remove</button>
                            </div>
                            <div className="change_item">
                                <i  onClick={()=> increase()} className="fa fa-angle-up"></i>
                                <span className="amount">{amount}</span>
                                <i  onClick={()=> decrease()} className="fa fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// get the dipatch function 
const mapDispatchToProps = (dispatch, ownProps) => {
    const { id, amount } = ownProps; 
    return {
        remove : () => dispatch(removeItems(id)),
        increase : () => dispatch(increaseItem({id, amount})),
        decrease : () => dispatch(decreaseItem({id, amount})),
    }
}

export default connect(null, mapDispatchToProps) (CartItem)
