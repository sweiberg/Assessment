import React from 'react'
import ProductCard from '@/components/card/productcard'

const sampleProduct = [
    {
        id: 1,
        name: "Product 1",
        description: "Product Description",
        detailedDescription: "Detailed Product Description",
        price: 100.00,
        image: "https://m.media-amazon.com/images/M/MV5BM2ZlMTM2NjctOTJhMC00ODVkLTgwMjEtNWViMzVmMzVhMjZmXkEyXkFqcGdeQXJoYW5uYWg@._V1_.jpg",
    },
    {
        id: 2,
        name: "Product 2",
        description: "Product Description",
        detailedDescription: "Detailed Product Description",
        price: 100.00,
        image: "https://m.media-amazon.com/images/M/MV5BM2ZlMTM2NjctOTJhMC00ODVkLTgwMjEtNWViMzVmMzVhMjZmXkEyXkFqcGdeQXJoYW5uYWg@._V1_.jpg",
    },
    {
        id: 3,
        name: "Product 3",
        description: "Product Description",
        detailedDescription: "Detailed Product Description",
        price: 100.00,
        image: "https://m.media-amazon.com/images/M/MV5BM2ZlMTM2NjctOTJhMC00ODVkLTgwMjEtNWViMzVmMzVhMjZmXkEyXkFqcGdeQXJoYW5uYWg@._V1_.jpg",
    },
    {
        id: 4,
        name: "Product 4",
        description: "Product Description",
        detailedDescription: "Detailed Product Description",
        price: 100.00,
        image: "https://m.media-amazon.com/images/M/MV5BM2ZlMTM2NjctOTJhMC00ODVkLTgwMjEtNWViMzVmMzVhMjZmXkEyXkFqcGdeQXJoYW5uYWg@._V1_.jpg",
    },
    {
        id: 5,
        name: "Product 5",
        description: "Product Description",
        detailedDescription: "Detailed Product Description",
        price: 100.00,
        image: "https://m.media-amazon.com/images/M/MV5BM2ZlMTM2NjctOTJhMC00ODVkLTgwMjEtNWViMzVmMzVhMjZmXkEyXkFqcGdeQXJoYW5uYWg@._V1_.jpg",
    },
    {
        id: 6,
        name: "Product 6",
        description: "Product Description",
        detailedDescription: "Detailed Product Description",
        price: 100.00,
        image: "https://m.media-amazon.com/images/M/MV5BM2ZlMTM2NjctOTJhMC00ODVkLTgwMjEtNWViMzVmMzVhMjZmXkEyXkFqcGdeQXJoYW5uYWg@._V1_.jpg",
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