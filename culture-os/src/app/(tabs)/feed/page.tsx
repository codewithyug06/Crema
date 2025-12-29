"use client";

import StoryBar from "@/components/shared/StoryBar";
import { useAppStore } from "@/store/useAppStore";
import { formatDistanceToNow } from "date-fns";
import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FeedPage() {
    const { feed, users, hasPostedWorkReal } = useAppStore();

    return (
        <div className="min-h-screen pb-20">
            <StoryBar />

            <div className="px-4 py-6 space-y-6">
                <h2 className="text-lg font-bold text-white mb-4">Your Team's WorkReal</h2>

                {/* WorkReal Lock Logic */}
                {!hasPostedWorkReal && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm mb-6 relative overflow-hidden group cursor-pointer hover:bg-white/10 transition">
                        <div className="absolute inset-0 bg-gradient-to-r from-science/10 to-purple-500/10 opacity-20" />
                        <h3 className="text-xl font-bold mb-2">Time to WorkReal! 📸</h3>
                        <p className="text-sm text-gray-400 mb-4">Post your dual-camera update to unlock the feed.</p>
                        <button className="bg-white text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition active:scale-95">
                            Post to Unlock
                        </button>
                    </div>
                )}

                <div className={cn("space-y-8 transition-all duration-500", !hasPostedWorkReal && "filter blur-xl opacity-50 pointer-events-none select-none")}>
                    {feed.map((post) => {
                        const author = users.find(u => u.id === post.userId);
                        return (
                            <div key={post.id} className="relative">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center space-x-3">
                                        <img src={author?.avatar} className="w-8 h-8 rounded-full object-cover" />
                                        <div>
                                            <p className="text-sm font-bold text-white">{author?.name}</p>
                                            <p className="text-xs text-gray-500">{formatDistanceToNow(new Date(post.timestamp))} ago</p>
                                        </div>
                                    </div>
                                    <MoreHorizontal size={20} className="text-gray-500" />
                                </div>

                                {/* Dual Camera Layout (BeReal style) */}
                                <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-[3/4]">
                                    {/* Main Photo (Back) */}
                                    <img src={post.backImageUrl} className="w-full h-full object-cover" />

                                    {/* Selfie Pip (Front) */}
                                    <div className="absolute top-4 left-4 w-24 h-32 rounded-xl overflow-hidden border-2 border-black shadow-lg">
                                        <img src={post.frontImageUrl} className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-3 flex items-center justify-between px-2">
                                    <div className="flex space-x-4">
                                        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition">
                                            <div className="p-2 bg-white/5 rounded-full"><Heart size={20} /></div>
                                            <span className="text-xs text-center">{post.reactions}</span>
                                        </button>
                                        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition">
                                            <div className="p-2 bg-white/5 rounded-full"><MessageCircle size={20} /></div>
                                            <span className="text-xs">Reply</span>
                                        </button>
                                    </div>
                                </div>

                                {post.caption && (
                                    <p className="text-sm mt-3 text-gray-300 px-2"><span className="font-bold text-white">{author?.name}</span> {post.caption}</p>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
