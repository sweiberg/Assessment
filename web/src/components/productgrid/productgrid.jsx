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
    }
]

const ProductGrid = () => {
    return (
        <div>
            {sampleProduct.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid