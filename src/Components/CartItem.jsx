import React from 'react'

function CartItem({id, img, title, price, amount}) {
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src=""  alt="Item image" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                        <p className="card-text">$ {price}</p>
                        <p className="card-text">
                            <button className="remove_btn btn btn-sm btn-outline-danger">Remove</button>
                        </p>

                        <div className="amount">
                            <i className="fa fa-angle-up mr-2"></i>
                            {amount}
                            <i className="fa fa-angle-down ml-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
