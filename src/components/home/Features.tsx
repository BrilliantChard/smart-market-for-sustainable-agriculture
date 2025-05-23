
import React from 'react';
import { ShoppingCart, Users, BookOpen, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Digital Marketplace',
    description: 'Connect farmers directly with buyers, eliminating middlemen and ensuring fair prices for everyone.',
    icon: <ShoppingCart size={24} className="text-primary" />,
  },
  {
    title: 'Expert Community',
    description: 'Access agricultural experts for real-time advice, tips, and solutions to farming challenges.',
    icon: <Users size={24} className="text-primary" />,
  },
  {
    title: 'Knowledge Hub',
    description: 'Learn from articles, guides, and tutorials shared by certified agricultural professionals.',
    icon: <BookOpen size={24} className="text-primary" />,
  },
  {
    title: 'Data & Analytics',
    description: 'Make informed decisions with insights on market trends, weather forecasts, and farming analytics.',
    icon: <BarChart3 size={24} className="text-primary" />,
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SMSA offers innovative solutions for the agricultural ecosystem, bringing together technology and farming expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="inline-block p-3 bg-green-50 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-green-50 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Revolutionizing Agricultural Commerce</h3>
              <p className="text-gray-700 mb-4">
                Our platform goes beyond just connecting buyers and sellers. We're building a sustainable ecosystem where:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3">Smallholder farmers gain market access and fair prices</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3">Buyers get fresh produce directly from the source</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3">Experts share knowledge to improve farming practices</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3">Data-driven insights lead to smarter agricultural decisions</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/b8e76ba5-0c41-49aa-be8e-ec6ace928072.png" 
                alt="SMSA platform ecosystem" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
