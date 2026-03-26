"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Truck,
  ShoppingCart,
  Users,
  Layers,
  BarChart3,
  Bot,
  CreditCard,
  Image as ImageIcon,
  Settings,
} from "lucide-react";

// Danh sách menu dựa trên cấu trúc bạn cung cấp
const menuItems = [
  {
    title: "Tổng quan",
    path: "/dashboard",
    icon: LayoutDashboard,
    desc: "Doanh thu, đơn, KH",
  },
  {
    title: "Sản phẩm",
    path: "/dashboard/products",
    icon: Package,
    desc: "Thêm, sửa, tồn kho",
  },
  {
    title: "Danh mục",
    path: "/dashboard/categories",
    icon: Layers,
    desc: "Phân loại nông sản",
  },
  {
    title: "Nhà cung cấp",
    path: "/dashboard/suppliers",
    icon: Truck,
    desc: "Hợp đồng, nguồn gốc",
  },
  {
    title: "Đơn hàng",
    path: "/dashboard/orders",
    icon: ShoppingCart,
    desc: "Trạng thái, xử lý",
  },
  {
    title: "Khách hàng",
    path: "/dashboard/customers",
    icon: Users,
    desc: "Hồ sơ, lịch sử mua",
  },
  {
    title: "Thống kê & Báo cáo",
    path: "/dashboard/reports",
    icon: BarChart3,
    desc: "Chart, export Excel",
  },
  {
    title: "AI Chatbot",
    path: "/dashboard/chatbot",
    icon: Bot,
    desc: "Lịch sử, cấu hình RAG",
  },
  {
    title: "Thanh toán",
    path: "/dashboard/payments",
    icon: CreditCard,
    desc: "Giao dịch, hoàn tiền",
  },
  {
    title: "Nội dung & Banner",
    path: "/dashboard/content",
    icon: ImageIcon,
    desc: "Trang chủ, khuyến mãi",
  },
  {
    title: "Cài đặt hệ thống",
    path: "/dashboard/settings",
    icon: Settings,
    desc: "Phân quyền, cấu hình",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0">
      {/* Logo / Brand */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <span className="text-xl font-bold text-green-600 flex items-center gap-2">
          <Package className="w-6 h-6" />
          AgriAdmin
        </span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 sidebar-nav">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.path || pathname.startsWith(`${item.path}/`);
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`menu-item group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? "bg-green-50 text-green-700"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Icon
                className={`w-5 h-5 mr-3 flex-shrink-0 ${isActive ? "text-green-600" : "text-gray-400 group-hover:text-gray-500"}`}
              />
              <div className="flex flex-col">
                <span>{item.title}</span>
                <span className="text-[10px] text-gray-400 font-normal mt-0.5 hidden group-hover:block transition-all">
                  {item.desc}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
