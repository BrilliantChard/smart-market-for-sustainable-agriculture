
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import FeaturedProducts from '@/components/home/FeaturedProducts';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <FeaturedProducts />
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join thousands of farmers, buyers, and agricultural experts who are already benefiting from our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 p-6 rounded-xl relative">
                <div className="absolute -top-4 -left-4 text-6xl text-primary opacity-20">"</div>
                <div className="relative z-10">
                  <p className="italic text-gray-700 mb-6">
                    "SMSA has transformed how I sell my produce. I now have direct access to buyers and get fair prices for my hard work. The platform is easy to use, even for someone like me who isn't tech-savvy."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Michael Johnson</h4>
                      <p className="text-sm text-gray-500">Vegetable Farmer</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gray-50 p-6 rounded-xl relative">
                <div className="absolute -top-4 -left-4 text-6xl text-primary opacity-20">"</div>
                <div className="relative z-10">
                  <p className="italic text-gray-700 mb-6">
                    "As a restaurant owner, I love being able to source ingredients directly from local farmers. The quality is fantastic, prices are transparent, and I can see exactly where my food is coming from."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Sarah Chen</h4>
                      <p className="text-sm text-gray-500">Restaurant Owner</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-gray-50 p-6 rounded-xl relative">
                <div className="absolute -top-4 -left-4 text-6xl text-primary opacity-20">"</div>
                <div className="relative z-10">
                  <p className="italic text-gray-700 mb-6">
                    "Being an agricultural expert on SMSA allows me to share my knowledge with farmers who really need it. The platform connects me with people I would never have reached otherwise."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Dr. Ahmed Hassan</h4>
                      <p className="text-sm text-gray-500">Agricultural Scientist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Agricultural Ecosystem?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're a farmer, buyer, or agricultural expert, there's a place for you on SMSA.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/auth/register" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-200">
                Sign Up Now
              </a>
              <a href="/about" className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors duration-200">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
