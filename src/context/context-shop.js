
import React, { createContext,useState } from 'react'
import { PRODUCTS } from '../Product'
export const  ShopContext=createContext(null)
const getDefaultCart=()=>{
    let cart={}
    for(let i=0 ;i<PRODUCTS.length;i++){
        const product=PRODUCTS[i]
        cart[product.id]=0
    }
    return cart
}

  

const ShopContextProvider = (props) => {
    const [cartItems,setCartIems]=useState(getDefaultCart())
    const [detailsId,setDetailsId]=useState(0)
    const handleDetails=(id)=>{
        setDetailsId(id)
    }
    

    const addItemToCart=(itemId)=>{
        setCartIems(prev=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeItem=(itemId)=>{
        setCartIems(prev=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const countHandler=(newAmout,itemId)=>{
        setCartIems(prev=>({
            ...prev,[itemId]:newAmout
        }))

    }
    const getSubtotal=()=>{
        let totalAmount=0
        for (let item in cartItems){
            if(cartItems[item]!==0){
                let info=PRODUCTS.find(product=>product.id===Number(item))
                totalAmount+=cartItems[item]*info.price
            }
            
        }
        return totalAmount
    }
    const contextValue={cartItems,addItemToCart,removeItem,countHandler,getSubtotal,handleDetails,detailsId}
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
