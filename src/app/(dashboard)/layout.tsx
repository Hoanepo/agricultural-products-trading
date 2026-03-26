"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Sidebar from "@/src/components/dashboard/Sidebar";
// Đăng ký plugin GSAP
gsap.registerPlugin(useGSAP);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const layoutRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Timeline để control chuỗi hiệu ứng
      const tl = gsap.timeline();

      // 1. Hiệu ứng cho các item trong Sidebar (trượt từ trái sang)
      tl.from(".menu-item", {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
      });

      // 2. Hiệu ứng cho header (rơi từ trên xuống)
      tl.from(
        ".dashboard-header",
        {
          y: -20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3",
      ); // Chạy chồng lên hiệu ứng trước một chút

      // 3. Hiệu ứng cho nội dung chính (mờ dần lên)
      tl.from(
        ".dashboard-main-content",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2",
      );
    },
    { scope: layoutRef },
  );

  return (
    <div ref={layoutRef} className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* Main Content Area (Đẩy sang phải 64 tương đương w-64 của sidebar) */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Top Header giả định (Nơi để Avatar, Nút Đăng xuất, Notification) */}
        <header className="dashboard-header h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-gray-800">
            Bảng điều khiển
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-green-100 border border-green-200 flex items-center justify-center text-green-700 font-bold">
              A
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="dashboard-main-content flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
