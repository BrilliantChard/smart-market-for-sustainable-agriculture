
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, Clock, MessageCircle } from 'lucide-react';

// Mock data for buyer dashboard
const buyerStats = {
  totalOrders: 8,
  pendingDeliveries: 2,
  favoriteItems: 15,
  totalSpent: 635.75,
};

const recentOrders = [
  { id: 'ORD-123', farmer: 'Green Valley Farms', items: 3, total: 124.50, status: 'Processing', date: '2025-05-05' },
  { id: 'ORD-122', farmer: 'Sunny Hills Orchard', items: 1, total: 45.25, status: 'Delivered', date: '2025-05-02' },
  { id: 'ORD-121', farmer: 'Fresh Fields Farm', items: 4, total: 87.90, status: 'Delivered', date: '2025-04-28' },
];

const recommendedProducts = [
  { id: 1, name: 'Organic Spinach', farmer: 'Green Valley Farms', price: 3.99, image: '/placeholder.svg' },
  { id: 2, name: 'Free Range Eggs', farmer: 'Happy Hens Farm', price: 4.29, image: '/placeholder.svg' },
  { id: 3, name: 'Sweet Potatoes', farmer: 'Root Crops Co.', price: 2.49, image: '/placeholder.svg' },
  { id: 4, name: 'Honey', farmer: 'Buzz Apiaries', price: 8.99, image: '/placeholder.svg' },
];

const BuyerDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Buyer Dashboard</h2>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{buyerStats.totalOrders}</div>
            <p className="text-xs text-muted-foreground mt-1">
              All time
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Deliveries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{buyerStats.pendingDeliveries}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Out for delivery
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Favorite Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{buyerStats.favoriteItems}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Saved for later
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Spent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${buyerStats.totalSpent.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              This month
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Quick actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button className="flex flex-col items-center justify-center h-24 gap-2">
              <ShoppingBag className="h-8 w-8" />
              <span>Go to Marketplace</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center justify-center h-24 gap-2">
              <Heart className="h-8 w-8" />
              <span>View Favorites</span>
            </Button>
            <Button variant="secondary" className="flex flex-col items-center justify-center h-24 gap-2">
              <Clock className="h-8 w-8" />
              <span>Order History</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center justify-center h-24 gap-2">
              <MessageCircle className="h-8 w-8" />
              <span>Contact Support</span>
            </Button>
          </CardContent>
        </Card>
        
        {/* Recommended Products */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended For You</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {recommendedProducts.map(product => (
                <div key={product.id} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                    <p className="text-xs text-gray-500 truncate">{product.farmer}</p>
                    <p className="text-sm font-semibold text-primary mt-1">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="link" className="w-full mt-4">View more recommendations</Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">Order ID</th>
                  <th className="px-4 py-3 text-left">Farmer</th>
                  <th className="px-4 py-3 text-left">Items</th>
                  <th className="px-4 py-3 text-left">Total</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-3">{order.id}</td>
                    <td className="px-4 py-3">{order.farmer}</td>
                    <td className="px-4 py-3">{order.items}</td>
                    <td className="px-4 py-3">${order.total.toFixed(2)}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{order.date}</td>
                    <td className="px-4 py-3">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button variant="outline" className="w-full mt-4">View All Orders</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuyerDashboard;
