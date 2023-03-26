import React,{useContext}from 'react'
import { ShopContext } from '../../context/context-shop'
import { PRODUCTS } from '../../Product'
import CartItem from './CartItem'
import './Cart.css'
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const{cartItems,getSubtotal}=useContext(ShopContext)
  let totalAmount=getSubtotal()
  const navigate=useNavigate()

 
  return (
    <div className='cart'>
     <h1>Your Cart</h1>   
      <div className='item'>
          {PRODUCTS.map(product=>{
            if(cartItems[product.id]>0){
              return <CartItem  key={product.id} data={product}/>
            }
          })}
          {totalAmount>0 && <div className='checkout'>
           <p>subtotal :$ {totalAmount}</p> 
           <button onClick={()=>navigate("/")}>Continue Shopping</button>
           <button>Checkout</button>
           </div>}
      </div>
      
    </div>
  )
}

export default Cart
