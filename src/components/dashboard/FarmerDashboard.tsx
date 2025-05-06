
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Truck, ShoppingBag, AlertTriangle } from 'lucide-react';

// Mock data for farmer dashboard
const farmerStats = {
  totalProducts: 15,
  activeListings: 12,
  pendingOrders: 5,
  totalRevenue: 2840.50,
};

const recentOrders = [
  { id: 'ORD-123', buyer: 'Local Restaurant', items: 3, total: 124.50, status: 'Pending', date: '2025-05-05' },
  { id: 'ORD-122', buyer: 'Fresh Market', items: 5, total: 210.75, status: 'Completed', date: '2025-05-04' },
  { id: 'ORD-121', buyer: 'Organic Co-op', items: 2, total: 89.25, status: 'Processing', date: '2025-05-03' },
];

const alerts = [
  { id: 1, type: 'weather', message: 'Heavy rain forecast for next week. Consider harvesting early.', severity: 'warning' },
  { id: 2, type: 'market', message: 'Tomato prices are trending 20% higher than last month.', severity: 'info' },
  { id: 3, type: 'pest', message: 'Increased aphid activity reported in your region.', severity: 'alert' },
];

const FarmerDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Farmer Dashboard</h2>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{farmerStats.totalProducts}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {farmerStats.activeListings} active listings
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{farmerStats.pendingOrders}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Requires your attention
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${farmerStats.totalRevenue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              This month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Sunny</div>
            <p className="text-xs text-muted-foreground mt-1">
              28°C, perfect for harvesting
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
              <span>Add New Product</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center justify-center h-24 gap-2">
              <Truck className="h-8 w-8" />
              <span>Manage Orders</span>
            </Button>
            <Button variant="secondary" className="flex flex-col items-center justify-center h-24 gap-2">
              <BarChart className="h-8 w-8" />
              <span>View Reports</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center justify-center h-24 gap-2">
              <AlertTriangle className="h-8 w-8" />
              <span>View Alerts</span>
            </Button>
          </CardContent>
        </Card>
        
        {/* Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map(alert => (
                <div 
                  key={alert.id} 
                  className={`p-3 rounded-md flex items-start ${
                    alert.severity === 'warning' ? 'bg-amber-50 border-l-4 border-amber-400' :
                    alert.severity === 'alert' ? 'bg-red-50 border-l-4 border-red-400' :
                    'bg-blue-50 border-l-4 border-blue-400'
                  }`}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <AlertTriangle size={16} className={
                      alert.severity === 'warning' ? 'text-amber-500' :
                      alert.severity === 'alert' ? 'text-red-500' :
                      'text-blue-500'
                    } />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">{alert.message}</p>
                    <p className="mt-1 text-xs text-gray-500">Related to {alert.type}</p>
                  </div>
                </div>
              ))}
            </div>
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
                  <th className="px-4 py-3 text-left">Buyer</th>
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
                    <td className="px-4 py-3">{order.buyer}</td>
                    <td className="px-4 py-3">{order.items}</td>
                    <td className="px-4 py-3">${order.total.toFixed(2)}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
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
        </CardContent>
      </Card>
    </div>
  );
};

export default FarmerDashboard;
