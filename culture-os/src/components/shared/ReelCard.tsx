"use client";

import { Reel } from "@/types";
import { useAppStore } from "@/store/useAppStore";
import { Heart, MessageCircle, Share2, Coins } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReelCard({ reel }: { reel: Reel }) {
    const { toggleLikeReel, sendTip, users } = useAppStore();
    const author = users.find(u => u.id === reel.userId);
    const [showTipAnimation, setShowTipAnimation] = useState(false);

    const handleTip = () => {
        sendTip(reel.id, 10);
        setShowTipAnimation(true);
        setTimeout(() => setShowTipAnimation(false), 2000);
    };

    return (
        <div className="relative w-full h-full snap-start bg-black overflow-hidden border-b border-white/5">
            {/* Video Background (Mock) */}
            <video
                src={reel.videoUrl}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

            {/* Tipping Animation */}
            <AnimatePresence>
                {showTipAnimation && (
                    <motion.div
                        initial={{ opacity: 0, y: 0, scale: 0.5 }}
                        animate={{ opacity: 1, y: -100, scale: 1.5 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-50"
                    >
                        <div className="flex flex-col items-center">
                            <Coins size={64} className="text-kudos drop-shadow-lg" />
                            <span className="text-kudos font-bold text-2xl">+10</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Side Actions */}
            <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-6 z-40">
                <button
                    onClick={() => toggleLikeReel(reel.id)}
                    className="flex flex-col items-center space-y-1"
                >
                    <div className={cn("p-3 rounded-full bg-white/10 backdrop-blur-md transition", reel.isLiked ? "bg-red-500/20 text-red-500" : "text-white")}>
                        <Heart size={28} fill={reel.isLiked ? "currentColor" : "none"} />
                    </div>
                    <span className="text-xs font-bold">{reel.likes}</span>
                </button>

                <button className="flex flex-col items-center space-y-1">
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white">
                        <MessageCircle size={28} />
                    </div>
                    <span className="text-xs font-bold">12</span>
                </button>

                <button
                    onClick={handleTip}
                    className="flex flex-col items-center space-y-1"
                >
                    <div className="p-3 rounded-full bg-kudos/20 text-kudos backdrop-blur-md border border-kudos/50">
                        <Coins size={28} />
                    </div>
                    <span className="text-xs font-bold text-kudos">Tip</span>
                </button>

                <button className="flex flex-col items-center space-y-1">
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white">
                        <Share2 size={28} />
                    </div>
                    <span className="text-xs font-bold">Share</span>
                </button>
            </div>

            {/* Bottom Info */}
            <div className="absolute left-4 bottom-24 max-w-[75%] z-40">
                <div className="flex items-center space-x-2 mb-3">
                    <img src={author?.avatar} className="w-10 h-10 rounded-full border border-white" />
                    <div>
                        <p className="font-bold text-sm shadow-sm">{author?.name}</p>
                        <p className="text-xs text-secondary-foreground px-2 py-0.5 bg-secondary/50 rounded-full inline-block backdrop-blur-sm">
                            {author?.department}
                        </p>
                    </div>
                </div>
                <p className="text-sm text-gray-100 leading-relaxed drop-shadow-md">
                    {reel.caption}
                </p>
            </div>
        </div>
    );
}
