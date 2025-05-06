
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: 'Fresh Organic Tomatoes',
    farmer: 'Green Valley Farms',
    price: 3.99,
    unit: 'kg',
    image: '/placeholder.svg',
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 2,
    name: 'Premium Rice',
    farmer: 'Sunshine Grains',
    price: 5.49,
    unit: 'kg',
    image: '/placeholder.svg',
    rating: 4.9,
    reviews: 32,
  },
  {
    id: 3,
    name: 'Organic Eggs',
    farmer: 'Happy Hens Farm',
    price: 4.29,
    unit: 'dozen',
    image: '/placeholder.svg',
    rating: 4.7,
    reviews: 18,
  },
  {
    id: 4,
    name: 'Farm Fresh Milk',
    farmer: 'Daisy Dairy',
    price: 2.99,
    unit: 'liter',
    image: '/placeholder.svg',
    rating: 4.6,
    reviews: 41,
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
          <Link to="/marketplace">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <Link to={`/marketplace/product/${product.id}`}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/marketplace/product/${product.id}`}>
                  <h3 className="text-lg font-semibold mb-1 hover:text-primary transition-colors">{product.name}</h3>
                </Link>
                <p className="text-sm text-gray-500 mb-2">by {product.farmer}</p>
                <div className="flex justify-between items-center mb-3">
                  <div className="text-lg font-bold text-primary">
                    ${product.price}/{product.unit}
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-accent' : 'text-gray-300'}`} 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-gray-500">({product.reviews})</span>
                  </div>
                </div>
                <Button variant="default" className="w-full">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
