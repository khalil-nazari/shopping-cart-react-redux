import React from 'react'
import CartItem from './CartItem'
//{'id':1, 'img':'img.png', 'pice':12, 'amount':1}
function CartContainer({cart=[{'id':1, title:'Iphone11', 'img':'img.png', 'price':12, 'amount':1}]}) {
    if(cart.length===0) {
        return (
            <section className="container mt-5">
                <div class="card">
                    {/* <h5 class="card-header">Your Bag</h5> */}
                    <div class="card-body">
                        <h5 class="card-title">Your bag</h5>
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

            <footer className="">
                <div className="cart_total">
                    <h4>totla: <span>$0.00</span></h4>
                </div>

                <button className="btn btn-danger clear_cart_btn">Clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer
