// components/ProductList.js

import React from 'react';
import styles from './ProductList.module.css'; // Import the CSS module

const ProductList = ({ products }) => {
    const handleAddToCart = (product) => {
        console.log(`Added ${product.title} to cart!`);
        // Here you can add your logic to handle adding to cart
    };

    return (
        <div className={styles.container}>
            <h2>Product List</h2>
            <div className={styles.grid}>
                {products.map((product) => (
                    <div className={styles.card} key={product.id}>
                        <img src={product.image} alt={product.title} className={styles.image} />
                        <h4 className={styles.title}>{product.title}</h4>
                        <p >Price: ${product.price}</p>
                        <button 
                            className={styles.button} 
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
