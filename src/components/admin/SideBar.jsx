import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  Calendar,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "../ui/button";
import { useAuth } from "../../hooks/use-auth";
import { cn } from "../../lib/utils";

const menuItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    title: "Applications",
    icon: FileText,
    href: "/admin/applications",
  },
  {
    title: "Users",
    icon: Users,
    href: "/admin/users",
  },
  {
    title: "Appointments",
    icon: Calendar,
    href: "/admin/appointments",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export function AdminSidebar() {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <aside className="flex flex-col w-72 border-r min-h-screen bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400 p-5">
      <div className="mb-8 text-center">
        <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-gray-800 hover:shadow-lg",
              location.pathname === item.href
                ? "bg-white text-gray-800 shadow-md"
                : "text-white"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-lg font-medium">{item.title}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-8">
        <Button
          variant="outline"
          className="w-full py-3 text-lg font-semibold text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-white transition-all"
          size="sm"
          onClick={logout}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
