"use client";

import { useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import { useRouter } from "next/navigation";
import { Camera, RotateCcw, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FeedPost } from "@/types";

export default function WorkRealPage() {
    const router = useRouter();
    const { currentUser, postWorkReal } = useAppStore();
    const [captured, setCaptured] = useState(false);
    const [sending, setSending] = useState(false);

    // Mock Camera Feeds
    const BACK_CAM = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"; // Office
    const FRONT_CAM = currentUser.avatar; // Use avatar as selfie for mock

    const handleCapture = () => {
        setCaptured(true);
    };

    const handleRetake = () => {
        setCaptured(false);
    };

    const handleSend = () => {
        setSending(true);

        // Simulate network delay
        setTimeout(() => {
            const newPost: FeedPost = {
                id: Math.random().toString(),
                userId: currentUser.id,
                frontImageUrl: FRONT_CAM,
                backImageUrl: BACK_CAM,
                timestamp: new Date().toISOString(),
                caption: "Just another day at the office! ☕️ #WorkReal",
                reactions: 0
            };

            postWorkReal(newPost);
            setSending(false);
            router.push("/feed");
        }, 1500);
    };

    return (
        <div className="h-full flex flex-col bg-black text-white p-4 pt-8">
            <h1 className="text-center font-bold text-xl mb-4">Time to WorkReal</h1>

            <div className="flex-1 relative rounded-3xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl mb-8">
                {/* Main View (Back Camera) */}
                <div className="absolute inset-0">
                    {captured ? (
                        <img src={BACK_CAM} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full relative">
                            <img src={BACK_CAM} className="w-full h-full object-cover opacity-80" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white/50 animate-pulse">Camera Preview...</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Selfie View (Front Camera) */}
                <div className="absolute top-4 left-4 w-28 h-36 bg-black rounded-xl overflow-hidden border-2 border-white/20 shadow-lg z-10">
                    <img src={FRONT_CAM} className="w-full h-full object-cover" />
                </div>

                {/* Flash Effect */}
                <AnimatePresence>
                    {!captured && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileTap={{ opacity: 1 }}
                            className="absolute inset-0 bg-white pointer-events-none"
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="h-32 flex items-center justify-center pb-8">
                {!captured ? (
                    <button
                        onClick={handleCapture}
                        className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center hover:scale-105 active:scale-95 transition"
                    >
                        <div className="w-16 h-16 bg-transparent border-2 border-white rounded-full bg-science/20" />
                    </button>
                ) : (
                    <div className="flex space-x-12 items-center">
                        <button onClick={handleRetake} className="flex flex-col items-center space-y-2 text-gray-400">
                            <div className="p-4 bg-white/10 rounded-full"><RotateCcw /></div>
                            <span className="text-xs">Retake</span>
                        </button>

                        <button
                            onClick={handleSend}
                            disabled={sending}
                            className="flex flex-col items-center space-y-2 text-science"
                        >
                            <div className="p-6 bg-white rounded-full text-black hover:scale-110 transition relative">
                                {sending ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black" /> : <Send size={28} fill="currentColor" />}
                            </div>
                            <span className="text-xs font-bold">{sending ? "Posting..." : "Send it"}</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
