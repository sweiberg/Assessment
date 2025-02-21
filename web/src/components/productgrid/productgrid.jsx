import React from 'react'
import ProductCard from '@/components/card/productcard'

const sampleProduct = [
    {
        id: 1,
        name: "Product 1",
        description: "Product Description",
        detailedDescription: "Detailed Product Description",
        price: 100.00,
        image: "",
    },
    {
        id: 2,
        name: "Product 1",
        description: "Product Description",
        detailedDescription: "Detailed Product Description",
        price: 100.00,
        image: "",
    },
    {
        id: 3,
        name: "Product 1",
        description: "Product Description",
        detailedDescription: "Detailed Product Description",
        price: 100.00,
        image: "",
    },
    {
        id: 4,
        name: "Product 1",
        description: "Product Description",
        detailedDescription: "Detailed Product Description",
        price: 100.00,
        image: "",
    },
    {
        id: 5,
        name: "Product 1",
        description: "Product Description",
        detailedDescription: "Detailed Product Description",
        price: 100.00,
        image: "",
    },
    {
        id: 6,
        name: "Product 1",
        description: "Product Description",
        detailedDescription: "Detailed Product Description",
        price: 100.00,
        image: "",
    }
]

const ProductGrid = () => {
    return (
        <div className="product-container">
            <div className="product-heading">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    {sampleProduct.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGrid