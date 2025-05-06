
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductListing from '@/components/marketplace/ProductListing';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Marketplace = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Marketplace</h1>
              <p className="text-gray-600">
                Browse and purchase fresh products directly from local farmers.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Button variant="outline">
                View Cart
              </Button>
              <Button variant="default">
                Checkout
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
              <TabsTrigger value="fruits">Fruits</TabsTrigger>
              <TabsTrigger value="dairy">Dairy & Eggs</TabsTrigger>
              <TabsTrigger value="grains">Grains</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <ProductListing />
            </TabsContent>
            <TabsContent value="vegetables">
              <ProductListing />
            </TabsContent>
            <TabsContent value="fruits">
              <ProductListing />
            </TabsContent>
            <TabsContent value="dairy">
              <ProductListing />
            </TabsContent>
            <TabsContent value="grains">
              <ProductListing />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
