"use client";

import { useAppStore } from "@/store/useAppStore";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function StoryBar() {
    const { stories, users, currentUser } = useAppStore();

    // Group stories by user for the bar (simplify: just show unique users with stories)
    // or just list stories. Usually it's users.
    // For MVP, unique users who have stories.
    const usersWithStories = Array.from(new Set(stories.map(s => s.userId)))
        .map(id => users.find(u => u.id === id))
        .filter(Boolean);

    const getRingColor = (userId: string) => {
        // Find latest story type for ring color
        const userStories = stories.filter(s => s.userId === userId);
        if (!userStories.length) return "border-gray-700";

        // Priority: Kudos > Wellness > Work (just arbitrary logic or latest)
        const latest = userStories[0]; // mock sorted
        if (latest.type === 'kudos') return "border-kudos";
        if (latest.type === 'wellness') return "border-wellness";
        return "border-science";
    };

    return (
        <div className="w-full overflow-x-auto scrollbar-hide py-4 pl-4 border-b border-white/5 bg-background">
            <div className="flex space-x-4">
                {/* My Story Add Button */}
                <div className="flex flex-col items-center space-y-1 min-w-[70px]">
                    <div className="relative w-[68px] h-[68px]">
                        <div className="w-full h-full rounded-full p-[2px] border-2 border-dashed border-white/20">
                            <img
                                src={currentUser.avatar}
                                alt="Me"
                                className="w-full h-full rounded-full object-cover opacity-70"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 bg-science rounded-full p-1 border-2 border-background">
                            <Plus size={16} className="text-white" />
                        </div>
                    </div>
                    <span className="text-xs text-center text-muted-foreground truncate w-full">You</span>
                </div>

                {/* Other Users */}
                {usersWithStories.map((user) => (
                    <Link href={`/stories?userId=${user!.id}`} key={user!.id} className="flex flex-col items-center space-y-1 min-w-[70px]">
                        <div className="relative w-[68px] h-[68px]">
                            {/* Status Ring */}
                            <div className={cn(
                                "absolute inset-0 rounded-full border-[3px] animate-pulse",
                                getRingColor(user!.id)
                            )} />
                            <div className="absolute inset-[4px] rounded-full overflow-hidden border-2 border-background">
                                <img
                                    src={user!.avatar}
                                    alt={user!.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <span className="text-xs text-center text-gray-300 truncate w-full">
                            {user!.name.split(' ')[0]}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
