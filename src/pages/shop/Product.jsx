import React, { useContext } from 'react'
import { ShopContext } from '../../context/context-shop'
import {useNavigate} from 'react-router-dom'

const Product = ({data}) => {
    const {id,price,productName,productImage}=data
    const{addItemToCart,cartItems,handleDetails}=useContext(ShopContext)
    const navigate=useNavigate()
      return (
    <div className='product' onClick={()=>{
      handleDetails(id)
      navigate('/details')
    }}>
        <img src={productImage}/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>$ {price}</p>
            <button className='addToCartBtn' onClick={()=>addItemToCart(id)}>Add To Cart{cartItems[id]>0 && <>({cartItems[id]})</>}</button>
        </div>
      
    </div>
  )
}

export default Product
