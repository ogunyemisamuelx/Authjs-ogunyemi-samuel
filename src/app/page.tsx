import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SignOut } from "./components/sign-out";

const Page = async () => {
  const session = await auth();
  if (!session) redirect("/sign-in");

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+12.5%",
      trend: "up",
      icon: "💰",
      color: "green",
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+5.2%",
      trend: "up",
      icon: "👥",
      color: "blue",
    },
    {
      title: "Orders Today",
      value: "126",
      change: "-2.1%",
      trend: "down",
      icon: "📦",
      color: "orange",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.8%",
      trend: "up",
      icon: "📈",
      color: "purple",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "Alice Johnson",
      product: "Wireless Headphones",
      amount: "$299",
      status: "Completed",
      date: "2 min ago",
    },
    {
      id: "#ORD-002",
      customer: "Bob Smith",
      product: "Fitness Tracker",
      amount: "$149",
      status: "Processing",
      date: "15 min ago",
    },
    {
      id: "#ORD-003",
      customer: "Carol Davis",
      product: "Coffee Blend",
      amount: "$24",
      status: "Shipped",
      date: "1 hour ago",
    },
    {
      id: "#ORD-004",
      customer: "David Wilson",
      product: "Charging Pad",
      amount: "$59",
      status: "Completed",
      date: "2 hours ago",
    },
    {
      id: "#ORD-005",
      customer: "Eva Brown",
      product: "Water Bottle",
      amount: "$29",
      status: "Processing",
      date: "3 hours ago",
    },
  ];

  const topProducts = [
    {
      name: "Wireless Headphones",
      sales: 247,
      revenue: "$73,853",
      trend: "+15%",
    },
    { name: "Fitness Tracker", sales: 189, revenue: "$28,161", trend: "+8%" },
    { name: "Coffee Blend", sales: 156, revenue: "$3,744", trend: "+22%" },
    { name: "Charging Pad", sales: 134, revenue: "$7,906", trend: "+5%" },
    { name: "Water Bottle", sales: 98, revenue: "$2,842", trend: "+12%" },
  ];

  const notifications = [
    {
      type: "success",
      message: "New order received from premium customer",
      time: "5 min ago",
    },
    {
      type: "warning",
      message: "Low stock alert: Wireless Headphones (3 remaining)",
      time: "1 hour ago",
    },
    {
      type: "info",
      message: "Monthly report is ready for review",
      time: "2 hours ago",
    },
    {
      type: "success",
      message: "Payment of $1,245 has been processed",
      time: "3 hours ago",
    },
  ];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getNotificationIcon = (type: string): string => {
    switch (type) {
      case "success":
        return "✅";
      case "warning":
        return "⚠️";
      case "info":
        return "ℹ️";
      default:
        return "📢";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">📊 Dashboard</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-blue-600 font-medium">
                  Overview
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Analytics
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Orders
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Products
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Customers
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                🔔
              </button>
              <div className="bg-blue-50 rounded-lg px-3 py-1">
                <p className="text-sm text-blue-600">Signed in as:</p>
                <p className="text-sm font-medium text-blue-800">
                  {session.user?.email}
                </p>
              </div>
              <SignOut />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back! 👋
          </h2>
          <p className="text-gray-600">
            Here&apos;s what&apos;s happening with your business today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm flex items-center ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.trend === "up" ? "📈" : "📉"}
                    <span className="ml-1">{stat.change}</span>
                  </p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Revenue Overview
              </h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                  7D
                </button>
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                  30D
                </button>
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                  90D
                </button>
              </div>
            </div>

            {/* Simple Chart Placeholder */}
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200">
              <div className="text-center">
                <div className="text-4xl mb-2">📈</div>
                <p className="text-gray-500">
                  Chart visualization would go here
                </p>
                <p className="text-sm text-gray-400">
                  (Integrate with Chart.js or similar)
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <span className="mr-2">➕</span>
                Add New Product
              </button>
              <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                <span className="mr-2">📋</span>
                Create Order
              </button>
              <button className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                <span className="mr-2">👥</span>
                Manage Users
              </button>
              <button className="w-full bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center">
                <span className="mr-2">📊</span>
                View Reports
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Orders
                </h3>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  View all
                </a>
              </div>
            </div>
            <div className="divide-y">
              {recentOrders.map((order, index) => (
                <div key={index} className="p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                      <p className="text-sm text-gray-500">{order.product}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        {order.amount}
                      </p>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{order.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                Top Products
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {product.sales} sales
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        {product.revenue}
                      </p>
                      <p className="text-sm text-green-600">{product.trend}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-lg">
                    {getNotificationIcon(notification.type)}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
