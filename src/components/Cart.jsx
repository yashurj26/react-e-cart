import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'

const Cart = ({ cart, setCart }) => {
    return (
        <>
            <div className="container my-5" style={{ width: '53%' }}>
                {
                    cart.length == 0 ? (
                        <>
                            <div className="text-center">
                                <h1>Your Cart is empty</h1>
                                <Link className='btn btn-warning' to={'/'}>Continue Shopping...</Link>
                            </div>
                        </>
                    ) :
                        cart.map((product) => {
                            return (<>
                                <div className="card mb-3 my-5" style={{ maxWidth: '540px' }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body text-center">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <button className='btn btn-primary mx-3'>${product.price}</button>
                                                <button className='btn btn-warning'>Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }

                        )}
                        {cart.length !=0 ? (
                             <div className="container tex-center my-5" style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
                             <button className='btn btn-warning mx-5'>Buy Now</button>
                             <button className='btn btn-warning mx-5' onClick={() => setCart("")}>Clear Cart</button>
                         </div>
                        ):('')
                        
                    }
               
            </div>
        </>
    )
}

export default Cart