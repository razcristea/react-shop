import React from 'react';


export default function CartItem(props){
    
    const products = props.products
    
    const CartProduct = () => {
    return products.map(product=> product.qty === 0 ? null : 
    <tr className="cart-item">
        <td className="cart-item-name">
            <img src={product.imageUrl} alt={product.name} className="cart-item-img" />
            <h5>{product.name}</h5>
        </td>
        <td className="cart-item-price">{product.price}</td>
        <td className="cart-item-qty">{product.qty}</td>
        <td className="cart-item-total">{(product.price*product.qty).toFixed(2)}</td>
        <td className="cart-item-buttons">
            <button onClick={props.handleAdd} id={product.id} className="btn add-btn">Add</button>
            <button onClick={props.handleRemove} id={product.id} className="btn rmv-btn">Remove</button>
        </td>
    </tr>
    )
    }
    

    return(
        <CartProduct products={products} />
    )
}