import React from 'react'

const viewDetails = () => {
    console.log('Added to Cart');
} 

const addToCart = () => {
    console.log('Added to Cart');
}

const ProductCard = () => {
    return (
        <div> 
            <img />
            <div className="product-content"> 
                <div className="product-header">
                    <h3>Test Header</h3>
                </div>

                <p className="product-description">Test Description</p>
                <div className="product-details">
                    <p className="product-details-description">Detailed description</p>
                </div>

                <div>
                    <button onClick={viewDetails}>View Details</button>
                    <button onClick={addToCart}>Add to Cart</button>
                </div>

            </div>
        </div>
    );
};

export default ProductCard