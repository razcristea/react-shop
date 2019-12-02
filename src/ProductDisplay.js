import React, { Component } from 'react';


const Product =(param)=> {
    const products  = param.products
    return products.map(product=>
        <img src={product.imageUrl} 
            alt={product.name} 
            key={product.id} 
            className="product-image" 
            id={product.id}
            onClick={param.handleAdd}
        />
        )
}

export default class ProductDisplay extends Component {


    render() {
        console.log(this.props.products)
        return(
            <div className="display-wrapper">
                <Product products={this.props.products} handleAdd={this.props.handleAdd}/>
            </div>
        )
    }
}