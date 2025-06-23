import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    dispatch({ type: 'OPEN_CART' });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-vintage-700 mb-2">
          {product.name}
        </h3>
        
        <p className="text-vintage-600 mb-6 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-vintage-700">
            €{product.price.toLocaleString()}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="flex items-center px-4 py-2 bg-vintage-500 text-white rounded-lg hover:bg-vintage-600 transition-all duration-300 transform hover:scale-105"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Broneeri
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;