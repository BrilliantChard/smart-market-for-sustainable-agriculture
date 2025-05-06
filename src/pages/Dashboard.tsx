
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FarmerDashboard from '@/components/dashboard/FarmerDashboard';
import BuyerDashboard from '@/components/dashboard/BuyerDashboard';
import ExpertDashboard from '@/components/dashboard/ExpertDashboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  // In a real app, this would come from auth context or API
  const [userRole, setUserRole] = useState<'farmer' | 'buyer' | 'expert'>('farmer');
  
  // For demo purposes, allow switching between roles
  const [activeTab, setActiveTab] = useState(userRole);
  
  useEffect(() => {
    // In a real app, we would fetch user data here
    // For now, just for demo purposes
    const params = new URLSearchParams(window.location.search);
    const role = params.get('role');
    if (role && ['farmer', 'buyer', 'expert'].includes(role)) {
      setUserRole(role as 'farmer' | 'buyer' | 'expert');
      setActiveTab(role as 'farmer' | 'buyer' | 'expert');
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
            <p className="text-gray-600">
              Welcome back! Here's an overview of your activity and information.
            </p>
          </div>
          
          {/* Role selector tabs (for demo purposes) */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-2">Demo: Switch between user roles</p>
            <Tabs defaultValue={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
              <TabsList>
                <TabsTrigger value="farmer">Farmer View</TabsTrigger>
                <TabsTrigger value="buyer">Buyer View</TabsTrigger>
                <TabsTrigger value="expert">Expert View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="farmer">
                <FarmerDashboard />
              </TabsContent>
              
              <TabsContent value="buyer">
                <BuyerDashboard />
              </TabsContent>
              
              <TabsContent value="expert">
                <ExpertDashboard />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
