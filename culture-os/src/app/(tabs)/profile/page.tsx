"use client";

import { useAppStore } from "@/store/useAppStore";
import { Settings, Flag, Flame, Grid, Video } from "lucide-react";

export default function ProfilePage() {
    const { currentUser, stories, reels, hasPostedWorkReal } = useAppStore();

    // Filter content for this user
    const myStories = stories.filter(s => s.userId === currentUser.id);
    const myReels = reels.filter(r => r.userId === currentUser.id);

    return (
        <div className="pb-24">
            {/* Header */}
            <div className="relative h-32 bg-gradient-to-r from-science to-gray-900">
                <button className="absolute top-4 right-4 p-2 bg-black/30 backdrop-blur-md rounded-full text-white">
                    <Settings size={20} />
                </button>
            </div>

            {/* Avatar & Info */}
            <div className="px-4 -mt-12 mb-6">
                <div className="flex justify-between items-end">
                    <img
                        src={currentUser.avatar}
                        className="w-24 h-24 rounded-full border-4 border-black object-cover bg-gray-800"
                    />
                    <div className="flex space-x-2 mb-2">
                        <div className="text-center px-4">
                            <p className="font-bold text-lg text-white">125</p>
                            <p className="text-xs text-gray-500">Following</p>
                        </div>
                        <div className="text-center px-4">
                            <p className="font-bold text-lg text-white">890</p>
                            <p className="text-xs text-gray-500">Followers</p>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <h1 className="text-xl font-bold text-white flex items-center">
                        {currentUser.name}
                        <span className="ml-2 px-2 py-0.5 bg-science rounded-full text-[10px] font-bold uppercase tracking-wider">Level 5</span>
                    </h1>
                    <p className="text-gray-400 text-sm">{currentUser.role} • {currentUser.department}</p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="px-4 grid grid-cols-2 gap-3 mb-8">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center space-x-3">
                    <div className="p-2 bg-orange-500/20 text-orange-500 rounded-lg"><Flame size={20} /></div>
                    <div>
                        <p className="text-sm text-gray-400">Streak</p>
                        <p className="font-bold">{currentUser.streak} Days</p>
                    </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center space-x-3">
                    <div className="p-2 bg-purple-500/20 text-purple-500 rounded-lg"><Flag size={20} /></div>
                    <div>
                        <p className="text-sm text-gray-400">Impact</p>
                        <p className="font-bold">Top 10%</p>
                    </div>
                </div>
            </div>

            {/* Content Tabs */}
            <div className="border-t border-white/10">
                <div className="flex justify-around">
                    <button className="flex-1 py-3 border-b-2 border-white text-white flex justify-center"><Grid size={20} /></button>
                    <button className="flex-1 py-3 border-b-2 border-transparent text-gray-500 flex justify-center"><Video size={20} /></button>
                </div>

                <div className="grid grid-cols-3 gap-0.5 py-0.5">
                    {/* Mock Grid */}
                    <div className="aspect-square bg-gray-800 relative group overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square bg-gray-800 relative group overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square bg-gray-800 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-xs text-gray-400">Wait...</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
