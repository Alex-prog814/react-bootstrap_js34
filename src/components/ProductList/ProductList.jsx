import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products }) => {
  return (
    <>
      <h2 className="text-center mb-3">Products</h2>
      <div className="d-flex justify-content-around flex-wrap w-75 m-auto">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductList