
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthForm from '@/components/auth/AuthForm';

const Auth = () => {
  const { action } = useParams<{ action: string }>();
  const isLogin = action === 'login';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  {isLogin ? 'Welcome Back!' : 'Join Our Agricultural Community'}
                </h2>
                <p className="text-gray-600 mb-6">
                  {isLogin 
                    ? 'Log in to access your account and continue your agricultural journey with us.' 
                    : 'Create your account to connect with farmers, buyers, and agricultural experts.'}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">For Farmers</h4>
                      <p className="text-sm text-gray-500">List your products, receive expert advice, and connect directly with buyers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">For Buyers</h4>
                      <p className="text-sm text-gray-500">Source fresh produce directly from farmers and support sustainable agriculture.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">For Agricultural Experts</h4>
                      <p className="text-sm text-gray-500">Share your knowledge and help farmers improve their practices.</p>
                    </div>
                  </div>
                </div>
                
                <img 
                  src="/placeholder.svg" 
                  alt="SMSA Platform" 
                  className="mt-8 w-full h-auto rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex justify-center">
              <AuthForm isLogin={isLogin} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
