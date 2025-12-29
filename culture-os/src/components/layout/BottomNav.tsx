"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Camera, Play, Trophy, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const NAV_ITEMS = [
    { label: "Feed", icon: Home, href: "/feed" },
    { label: "WorkReal", icon: Camera, href: "/workreal" },
    { label: "Reels", icon: Play, href: "/reels" },
    { label: "League", icon: Trophy, href: "/league" },
    { label: "Profile", icon: User, href: "/profile" },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 pb-safe pt-2 px-2 z-50">
            <div className="flex justify-around items-end h-14 pb-2">
                {NAV_ITEMS.map(({ label, icon: Icon, href }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "flex flex-col items-center justify-center w-full h-full space-y-1 relative",
                                isActive ? "text-science" : "text-muted-foreground"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute -top-2 w-8 h-1 bg-science rounded-full"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                            <span className="text-[10px] font-medium">{label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
