import React from 'react';


export default function Product(props) {
        
    const products = props.products

    return(
        <div className="display-wrapper">
            { products.length > 0 
            && products.map(product=>
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    key={product.id} 
                    id={product.id}  
                    className="product-image"
                    onClick={props.handleAdd}/>
                            )
            }
        </div>      
    ) 

}
