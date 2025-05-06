
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Smart Market for Sustainable Agriculture (SMSA) is a digital platform dedicated to transforming 
              agriculture through innovation. We connect farmers, buyers, and agricultural experts to 
              promote sustainable practices, improve market access, and ensure food security. 
              Our goal is to empower smallholder farmers with tools, knowledge, and direct market 
              opportunities for a smarter farming future.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Vision</h2>
            <p>
              To create a sustainable agricultural ecosystem where farmers thrive, consumers access 
              quality produce, and the environment benefits from responsible farming practices.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
            <p>
              We're on a mission to revolutionize agriculture by providing an integrated digital 
              platform that connects all stakeholders in the agricultural value chain, promoting 
              transparency, efficiency, and sustainability.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Innovation:</strong> Embracing technology to solve agricultural challenges</li>
              <li><strong>Sustainability:</strong> Promoting farming practices that protect our planet</li>
              <li><strong>Empowerment:</strong> Providing tools and knowledge to help farmers succeed</li>
              <li><strong>Transparency:</strong> Creating trust through open and honest communication</li>
              <li><strong>Community:</strong> Building meaningful connections across the agricultural sector</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
