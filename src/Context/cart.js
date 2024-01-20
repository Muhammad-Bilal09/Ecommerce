import { createContext, useState } from "react"

export const CartContext=createContext(null)
export const CartProvider=(props)=>{
    const [Items,setItems]=useState([])
    return(
        <CartContext.Provider value={{Items,setItems}}>
        {props.children}
        </CartContext.Provider>
    )
}