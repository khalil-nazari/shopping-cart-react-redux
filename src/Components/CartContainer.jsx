import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { increaseItem, decreaseItem, clearItems, getTotals} from "../Actions/Itemes";

//{'id':1, 'img':'img.png', 'pice':12, 'amount':1}
const CartContainer = ({cart=[], total, dispatch}) => {
    useEffect(() => {
        dispatch(getTotals());
    })


    if(cart.length===0) {
        return (
            <section className="container mt-5">
                <div className="card">
                    {/* <h5 className="card-header">Your Bag</h5> */}
                    <div className="card-body">
                        <h5 className="card-title">Your bag</h5>
                        <p>is currently empty.</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="container">
            <header>Your Bag</header>

            <article>
                {cart.map(item=>{
                    return <CartItem key={item.id} {...item} />
                })} 
            </article>
            <hr />

            <footer className="cart_footer">
                <div className="cart_total">
                    <h4>Total: <span>$ {total}</span></h4>
                </div>
                <div>
                    <button onClick={()=>dispatch(clearItems())} className="btn btn-danger clear_cart_btn">Clear cart</button>
                </div>
            </footer>
        </section>
    )
}

/** Get cart data from global store */
const mapStateToProps = (store) => {
    const {cart, total} = store;
    return {cart, total};
}
export default connect(mapStateToProps) (CartContainer)
