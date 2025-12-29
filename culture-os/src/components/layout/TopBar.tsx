"use client";

import { useAppStore } from "@/store/useAppStore";
import { Bell } from "lucide-react";

export default function TopBar() {
    const user = useAppStore((state) => state.currentUser);

    return (
        <header className="fixed top-0 left-0 right-0 h-14 bg-background/80 backdrop-blur-md z-40 px-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center space-x-2">
                {/* Simple text logo for now */}
                <h1 className="text-xl font-bold bg-gradient-to-r from-science to-purple-500 bg-clip-text text-transparent">
                    CultureOS
                </h1>
            </div>

            <div className="flex items-center space-x-4">
                <button className="relative p-2 rounded-full hover:bg-white/10 transition">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                </button>
                <div className="w-8 h-8 rounded-full bg-science overflow-hidden border border-white/20">
                    <img src={user.avatar} alt="Me" className="w-full h-full object-cover" />
                </div>
            </div>
        </header>
    );
}
