
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Transforming Agriculture</span> in the Digital Age
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Connect with farmers, buyers, and agricultural experts in one ecosystem to improve how food is produced, sold, and consumed.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/auth/register">
                <Button size="lg" className="w-full sm:w-auto">Get Started</Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Explore Marketplace</Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-accent/10 rounded-full blur-3xl z-0"></div>
              <img 
                src="/lovable-uploads/160cf809-082e-4009-be7b-8cce704abcb7.png" 
                alt="Farmer and customer completing a transaction with fresh produce" 
                className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</h3>
            <p className="text-gray-600">Registered Farmers</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</h3>
            <p className="text-gray-600">Products Listed</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</h3>
            <p className="text-gray-600">Agricultural Experts</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">5K+</h3>
            <p className="text-gray-600">Active Buyers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
