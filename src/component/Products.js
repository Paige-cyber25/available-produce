import React from 'react';
import {products} from '../data';
import classes from './Product.module.css'
const Products = () => {
    return(
        <div>
            <h3 className={classes.header}>Available Produce</h3>
        <div className={classes.productContainer}>
            {products.map((product)=> {
                return (
                    <div className={classes.prdouctItem}>
                        <img className={classes.productImage} src={product.product_img} alt="productImage" />
                        <h2 className={classes.productName}>{product.name}</h2>
                        <h3 className={classes.productPrice}>&#8358;{product.price}</h3>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Products;