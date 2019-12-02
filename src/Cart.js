import React from 'react'

import CartItem from './CartItem'

export default function Cart(props){
    
    const products = props.products
    
    const cartEmpty = <tr id="cart-empty">Your cart is empty...</tr>
    
    const CartHeader = ()=> {
        return (<thead><tr className="cart-header">
                    <th className="cart-item-name">Product</th> 
                    <th className="cart-item-price">Price</th> 
                    <th className="cart-item-qty">Qty</th>
                    <th className="cart-item-total">Total Price</th>
                    <th className="cart-item-buttons"> </th>
                </tr></thead>)}

    const CartFooter = ()=> <tfoot><tr className="cart-footer">
                                    <th className="cart-item-name"></th>
                                    <th className="cart-item-price"></th>
                                    <th className="cart-item-qty">TOTAL:</th>
                                    <th className="cart-item-total">{getTotal()}</th>
                                    <th className="cart-item-buttons"></th>
                            </tr></tfoot>


    const getTotal = ()=> {
        return products.map(product=> product.qty*product.price).reduce((a,b)=>a+b,0).toFixed(2)
    }

    const DisplayItems = (props) => {
        const {products, handleAdd, handleRemove} = props

        if(products.map(product=> product.qty).reduce((a,b)=>a+b,0) === 0) {
            return cartEmpty
        } else { 
            return <CartItem products={products} handleAdd={handleAdd} handleRemove={handleRemove}/>
        }
    }


    return(
        <table id="cart-wrapper">
            <CartHeader />
                <DisplayItems products={props.products} handleAdd={props.handleAdd} handleRemove={props.handleRemove}/>
            <CartFooter />
        </table>
    )
}