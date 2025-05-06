
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  farmer: string;
  farmerId: number;
  price: number;
  unit: string;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  distance?: number;  // Optional - distance from buyer's location
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  farmer, 
  farmerId,
  price, 
  unit, 
  image, 
  rating, 
  reviewCount,
  category,
  distance
}) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg card-hover">
      <div className="relative">
        <a href={`/marketplace/product/${id}`} className="block">
          <div className="h-48 overflow-hidden">
            <img 
              src={image || '/placeholder.svg'} 
              alt={name} 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-200"
            />
          </div>
        </a>
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md"
        >
          <Heart 
            size={20} 
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'} 
          />
        </button>
        {distance && (
          <span className="absolute bottom-2 left-2 bg-white bg-opacity-90 text-xs px-2 py-1 rounded-full">
            {distance < 1 ? 'Less than 1 km' : `${distance} km away`}
          </span>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <a href={`/marketplace/product/${id}`} className="block">
              <h3 className="font-medium text-lg mb-1 hover:text-primary transition-colors">{name}</h3>
            </a>
            <a 
              href={`/marketplace/farmer/${farmerId}`} 
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              by {farmer}
            </a>
            <div className="mt-2">
              <span className="text-xs px-2 py-1 bg-green-50 text-green-800 rounded-full">
                {category}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-bold text-primary text-lg">${price.toFixed(2)}</span>
            <span className="text-gray-500 text-sm block">/{unit}</span>
          </div>
        </div>
        
        <div className="mt-3 flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-accent' : 'text-gray-300'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
