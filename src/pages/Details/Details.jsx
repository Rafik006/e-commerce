import React, { useContext } from 'react'
import { ShopContext } from '../../context/context-shop'
import { PRODUCTS } from '../../Product'
import Cart from '../cart/Cart'
import Product from '../shop/Product'


const Details = () => {
    const{detailsId,cartItems,addItemToCart}=useContext(ShopContext)
    
    const itemDetails=PRODUCTS.find(product=>product.id===Number(detailsId))
    console.log(itemDetails)
    
  return (
<div className="product" style={{margin:"20px 300px"}}>
        <h1 style={{marginLeft:"250px",width:"500px"}}>Details About Product</h1>
      <div className="cartItem">
        <div>
        <img src={itemDetails.productImage} />

        </div>
        
        
        <div className="description">
          <p>
            <b>{itemDetails.productName}</b>
          </p>
          <p> ${itemDetails.price}</p>
          <button className='addToCartBtn' onClick={()=>addItemToCart(itemDetails.id)}>Add To Cart{cartItems[itemDetails.id]>0 && <>({cartItems[itemDetails.id]})</>}</button>
          
        </div>
      </div>
    </div>
  )
}

export default Details
