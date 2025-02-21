import React, {useState} from 'react'

const ProductCard = ( {product} ) => {
    const [viewDetails, setViewDetails] = useState(false);
    const contentRef = React.useRef(null);

    const addToCart = () => {
        console.log('Added to Cart');
    };

    return (
        <div> 
            <img src={product.image} className="product-image"/>
            <div className="product-content"> 
                <div className="product-header">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>

                <p className="product-description">{product.description}</p>
                <div className="product-details-container" ref={contentRef} style={{height: viewDetails ? `${contentRef.current?.scrollHeight}px` : '0px'}}>
                    <p className="product-details-description">{product.detailedDescription}</p>
                </div>
                <div className="product-button-container">
                    <button onClick={() => setViewDetails(!viewDetails)}>View Details</button>
                    <button onClick={addToCart}>Add to Cart</button>
                </div>

            </div>
        </div>
    );
};

export default ProductCard