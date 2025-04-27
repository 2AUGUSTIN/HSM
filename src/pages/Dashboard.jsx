import { useState, useEffect } from 'react';
import { 
  User, 
  Home, 
  DollarSign, 
  Calendar, 
  Bell, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Search,
  Inbox,
  BarChart2,
  ArrowUp,
  ArrowDown,
  Check,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    properties: [],
    revenue: {},
    bookings: [],
    notifications: [],
    stats: {}
  });
  
  // Toggle sidebar for mobile responsiveness
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Fetch dashboard data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setDashboardData({
        properties: [
          { id: 1, name: 'Seaside Villa', location: 'Miami, FL', status: 'Occupied', imageUrl: '/property1.jpg' },
          { id: 2, name: 'Mountain Retreat', location: 'Aspen, CO', status: 'Available', imageUrl: '/property2.jpg' },
          { id: 3, name: 'Downtown Loft', location: 'New York, NY', status: 'Maintenance', imageUrl: '/property3.jpg' },
          { id: 4, name: 'Lake House', location: 'Lake Tahoe, CA', status: 'Booked', imageUrl: '/property4.jpg' }
        ],
        revenue: {
          total: 87500,
          lastMonth: 32600,
          change: 12.5,
          chartData: [25000, 27500, 29000, 32600, 34800, 31000, 35000]
        },
        bookings: [
          { id: 101, property: 'Seaside Villa', guest: 'John Smith', checkIn: '2025-04-28', checkOut: '2025-05-05', status: 'Confirmed' },
          { id: 102, property: 'Mountain Retreat', guest: 'Sarah Johnson', checkIn: '2025-05-10', checkOut: '2025-05-17', status: 'Pending' },
          { id: 103, property: 'Downtown Loft', guest: 'Michael Brown', checkIn: '2025-05-03', checkOut: '2025-05-07', status: 'Confirmed' }
        ],
        notifications: [
          { id: 1, type: 'booking', message: 'New booking request from Emma Davis', time: '10 minutes ago' },
          { id: 2, type: 'maintenance', message: 'Maintenance completed for Downtown Loft', time: '2 hours ago' },
          { id: 3, type: 'payment', message: 'Payment received for Seaside Villa booking #101', time: '5 hours ago' }
        ],
        stats: {
          totalProperties: 8,
          occupancyRate: 75,
          pendingBookings: 6,
          monthlyRevenue: 32600
        }
      });
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-blue-800 text-white ${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          {isSidebarOpen ? (
            <h1 className="text-xl font-bold">LuxeStay</h1>
          ) : (
            <h1 className="text-xl font-bold">LS</h1>
          )}
          <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-blue-700">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <div className="mt-8">
          <SidebarItem icon={<Home size={20} />} text="Dashboard" isOpen={isSidebarOpen} active={true} />
          <SidebarItem icon={<User size={20} />} text="Guests" isOpen={isSidebarOpen} />
          <SidebarItem icon={<Calendar size={20} />} text="Bookings" isOpen={isSidebarOpen} />
          <SidebarItem icon={<DollarSign size={20} />} text="Revenue" isOpen={isSidebarOpen} />
          <SidebarItem icon={<Bell size={20} />} text="Notifications" isOpen={isSidebarOpen} />
          <SidebarItem icon={<Settings size={20} />} text="Settings" isOpen={isSidebarOpen} />
          
          <div className="mt-auto pt-20">
            <SidebarItem icon={<LogOut size={20} />} text="Log Out" isOpen={isSidebarOpen} />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            
            <div className="flex items-center">
              {/* Search Bar */}
              <div className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <Search size={18} />
                </div>
              </div>
              
              {/* Notifications */}
              <div className="relative mr-4">
                <button className="p-2 text-gray-600 hover:text-blue-500 rounded-full hover:bg-gray-100">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                    {dashboardData.notifications.length}
                  </span>
                </button>
              </div>
              
              {/* User Profile */}
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <User size={20} />
                </div>
                <span className="ml-2 text-gray-700 font-medium">Admin User</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Total Properties" 
              value={dashboardData.stats.totalProperties} 
              icon={<Home size={24} className="text-blue-500" />}
              footer="All properties"
            />
            <StatCard 
              title="Occupancy Rate" 
              value={`${dashboardData.stats.occupancyRate}%`} 
              icon={<BarChart2 size={24} className="text-green-500" />}
              change={5.2}
              footer="vs last month"
            />
            <StatCard 
              title="Pending Bookings" 
              value={dashboardData.stats.pendingBookings} 
              icon={<Clock size={24} className="text-yellow-500" />}
              footer="Require attention"
            />
            <StatCard 
              title="Monthly Revenue" 
              value={`$${(dashboardData.stats.monthlyRevenue).toLocaleString()}`} 
              icon={<DollarSign size={24} className="text-purple-500" />}
              change={12.5}
              footer="vs last month"
            />
          </div>
          
          {/* Properties and Revenue */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Properties */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Properties</h2>
                <Link to="/properties" className="text-blue-600 hover:underline text-sm">View All</Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dashboardData.properties.map((property) => (
                  <div key={property.id} className="border rounded-lg overflow-hidden flex">
                    <div className="h-24 w-24 bg-gray-200 flex items-center justify-center">
                      <Home size={32} className="text-gray-400" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-medium">{property.name}</h3>
                      <p className="text-gray-500 text-sm">{property.location}</p>
                      <div className="mt-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          property.status === 'Occupied' ? 'bg-green-100 text-green-800' :
                          property.status === 'Available' ? 'bg-blue-100 text-blue-800' :
                          property.status === 'Maintenance' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {property.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Revenue Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Revenue</h2>
                <span className={`flex items-center ${dashboardData.revenue.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {dashboardData.revenue.change >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  <span className="ml-1">{Math.abs(dashboardData.revenue.change)}%</span>
                </span>
              </div>
              
              <div className="text-3xl font-bold text-gray-800 mb-4">
                ${dashboardData.revenue.total.toLocaleString()}
              </div>
              
              <div className="h-40 flex items-end space-x-2">
                {dashboardData.revenue.chartData.map((value, index) => (
                  <div 
                    key={index} 
                    className="bg-blue-500 rounded-t w-full" 
                    style={{ 
                      height: `${(value / Math.max(...dashboardData.revenue.chartData)) * 100}%`,
                      opacity: 0.5 + (index / (dashboardData.revenue.chartData.length * 2))
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="mt-4 text-sm text-gray-500">
                Last 7 days
              </div>
            </div>
          </div>
          
          {/* Recent Bookings and Notifications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Bookings */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Recent Bookings</h2>
                <Link to="/bookings" className="text-blue-600 hover:underline text-sm">View All</Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check In</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check Out</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dashboardData.bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.property}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{booking.guest}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{booking.checkIn}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{booking.checkOut}</td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Notifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Notifications</h2>
                <button className="text-blue-600 hover:underline text-sm">Mark All as Read</button>
              </div>
              
              <div className="space-y-4">
                {dashboardData.notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`rounded-full p-2 mr-3 ${
                      notification.type === 'booking' ? 'bg-blue-100 text-blue-600' : 
                      notification.type === 'maintenance' ? 'bg-yellow-100 text-yellow-600' : 
                      'bg-green-100 text-green-600'
                    }`}>
                      {notification.type === 'booking' ? <Calendar size={16} /> : 
                       notification.type === 'maintenance' ? <Settings size={16} /> : 
                       <Check size={16} />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Link to="/notifications" className="text-blue-600 hover:underline text-sm">View All Notifications</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Helper Components
function SidebarItem({ icon, text, isOpen, active = false }) {
  return (
    <Link to={`/${text.toLowerCase()}`} className={`flex items-center py-3 px-4 ${active ? 'bg-blue-700' : 'hover:bg-blue-700'} transition-colors`}>
      <div className="mr-3">{icon}</div>
      {isOpen && <span>{text}</span>}
    </Link>
  );
}

function StatCard({ title, value, icon, change, footer }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-gray-500">{title}</h2>
        {icon}
      </div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      {change !== undefined && (
        <div className={`mt-2 flex items-center text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          <span className="ml-1">{Math.abs(change)}%</span>
        </div>
      )}
      <div className="mt-2 text-xs text-gray-500">{footer}</div>
    </div>
  );
}

export default Dashboard;