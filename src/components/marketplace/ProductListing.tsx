import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Search, Filter, X } from 'lucide-react';

// Mock products data
const products = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    farmer: 'Green Valley Farms',
    farmerId: 101,
    price: 3.99,
    unit: 'kg',
    image: '/placeholder.svg',
    rating: 4.8,
    reviewCount: 24,
    category: 'Vegetables',
    distance: 3.2
  },
  {
    id: 2,
    name: 'Fresh Eggs',
    farmer: 'Happy Hens Farm',
    farmerId: 102,
    price: 4.29,
    unit: 'dozen',
    image: '/placeholder.svg',
    rating: 4.7,
    reviewCount: 18,
    category: 'Dairy & Eggs',
    distance: 5.8
  },
  {
    id: 3,
    name: 'Premium Rice',
    farmer: 'Sunshine Grains',
    farmerId: 103,
    price: 5.49,
    unit: 'kg',
    image: '/placeholder.svg',
    rating: 4.9,
    reviewCount: 32,
    category: 'Grains',
    distance: 12.5
  },
  {
    id: 4,
    name: 'Apple Mix Box',
    farmer: 'Orchard Hills',
    farmerId: 104,
    price: 7.99,
    unit: 'box',
    image: '/placeholder.svg',
    rating: 4.6,
    reviewCount: 15,
    category: 'Fruits',
    distance: 8.1
  },
  {
    id: 5,
    name: 'Organic Carrots',
    farmer: 'Root Farms',
    farmerId: 105,
    price: 2.49,
    unit: 'kg',
    image: '/placeholder.svg',
    rating: 4.5,
    reviewCount: 22,
    category: 'Vegetables',
    distance: 4.3
  },
  {
    id: 6,
    name: 'Fresh Milk',
    farmer: 'Daisy Dairy',
    farmerId: 106,
    price: 2.99,
    unit: 'liter',
    image: '/placeholder.svg',
    rating: 4.7,
    reviewCount: 41,
    category: 'Dairy & Eggs',
    distance: 6.7
  },
  {
    id: 7,
    name: 'Honey',
    farmer: 'Buzz Apiaries',
    farmerId: 107,
    price: 8.99,
    unit: 'jar',
    image: '/placeholder.svg',
    rating: 4.9,
    reviewCount: 29,
    category: 'Specialty',
    distance: 15.2
  },
  {
    id: 8,
    name: 'Fresh Spinach',
    farmer: 'Green Valley Farms',
    farmerId: 101,
    price: 2.79,
    unit: 'bunch',
    image: '/placeholder.svg',
    rating: 4.6,
    reviewCount: 19,
    category: 'Vegetables',
    distance: 3.2
  }
];

const ProductListing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('relevance');
  
  const categories = ['Vegetables', 'Fruits', 'Dairy & Eggs', 'Grains', 'Specialty'];
  
  // Filter products based on search term and filters
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    
    return matchesSearch && matchesPrice && matchesCategory;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'distance') {
      return (a.distance || 0) - (b.distance || 0);
    }
    // Default: relevance (keep original order)
    return 0;
  });
  
  const toggleFilter = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  return (
    <div>
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products, farmers, or categories..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center"
            >
              {showFilters ? <X className="mr-2 h-4 w-4" /> : <Filter className="mr-2 h-4 w-4" />}
              {showFilters ? 'Hide Filters' : 'Filters'}
            </Button>
            
            <Select defaultValue={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="distance">Nearest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <Slider
                  defaultValue={priceRange}
                  min={0}
                  max={10}
                  step={0.5}
                  onValueChange={(value) => setPriceRange(value as number[])}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${priceRange[0].toFixed(2)}</span>
                  <span>${priceRange[1].toFixed(2)}</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleFilter(category)}
                      />
                      <Label htmlFor={`category-${category}`} className="ml-2 text-sm">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {sortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">No products found</h3>
          <p className="mt-2 text-sm text-gray-500">Try adjusting your filters or search term</p>
          <Button 
            className="mt-4"
            onClick={() => {
              setSearchTerm('');
              setPriceRange([0, 10]);
              setSelectedCategories([]);
              setSortBy('relevance');
            }}
          >
            Clear All Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              farmer={product.farmer}
              farmerId={product.farmerId}
              price={product.price}
              unit={product.unit}
              image={product.image}
              rating={product.rating}
              reviewCount={product.reviewCount}
              category={product.category}
              distance={product.distance}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
