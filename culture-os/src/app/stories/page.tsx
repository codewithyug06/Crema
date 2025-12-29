"use client";

import { useAppStore } from "@/store/useAppStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Heart, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoryPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const userId = searchParams.get("userId");

    const { stories, users, markStoryViewed } = useAppStore();

    // Get stories for this user
    const userStories = stories.filter(s => s.userId === userId);
    const user = users.find(u => u.id === userId);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance logic
    useEffect(() => {
        if (!userStories.length) return;

        const timer = setTimeout(() => {
            handleNext();
        }, 5000); // 5 seconds per story

        return () => clearTimeout(timer);
    }, [currentIndex, userStories.length]);

    const handleNext = () => {
        if (currentIndex < userStories.length - 1) {
            markStoryViewed(userStories[currentIndex].id);
            setCurrentIndex(c => c + 1);
        } else {
            // End of stories
            markStoryViewed(userStories[currentIndex].id);
            router.back();
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(c => c - 1);
        }
    };

    if (!userId || !userStories.length || !user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-white">
                <p>No stories found.</p>
                <button onClick={() => router.back()} className="ml-4 underline">Back</button>
            </div>
        );
    }

    const activeStory = userStories[currentIndex];

    return (
        <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
            {/* Background Blur */}
            <div
                className="absolute inset-0 opacity-30 blur-3xl scale-110"
                style={{ backgroundImage: `url(${activeStory.mediaUrl})`, backgroundSize: 'cover' }}
            />

            {/* Main Container */}
            <div className="relative w-full h-full max-w-md bg-black md:rounded-2xl md:h-[90vh] overflow-hidden shadow-2xl">

                {/* Progress Bars */}
                <div className="absolute top-4 left-2 right-2 z-50 flex space-x-1 h-1">
                    {userStories.map((story, idx) => (
                        <div key={story.id} className="h-full bg-white/30 flex-1 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: idx < currentIndex ? "100%" : "0%" }}
                                animate={{ width: idx === currentIndex ? "100%" : (idx < currentIndex ? "100%" : "0%") }}
                                transition={{ duration: idx === currentIndex ? 5 : 0, ease: "linear" }}
                                className="h-full bg-white"
                            />
                        </div>
                    ))}
                </div>

                {/* Header */}
                <div className="absolute top-8 left-4 right-4 z-50 flex justify-between items-center text-white">
                    <div className="flex items-center space-x-2">
                        <img src={user.avatar} className="w-8 h-8 rounded-full border border-white/50" />
                        <span className="font-semibold text-sm">{user.name}</span>
                        <span className="text-xs text-gray-300">• {new Date(activeStory.timestamp).getHours()}h</span>
                    </div>
                    <button onClick={() => router.back()} className="p-1 hover:bg-white/20 rounded-full">
                        <X size={24} />
                    </button>
                </div>

                {/* Tap Hitboxes */}
                <div className="absolute inset-y-0 left-0 w-1/3 z-40" onClick={handlePrev} />
                <div className="absolute inset-y-0 right-0 w-1/3 z-40" onClick={handleNext} />

                {/* Media Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStory.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full"
                    >
                        {activeStory.mediaType === 'image' ? (
                            <img src={activeStory.mediaUrl} className="w-full h-full object-cover" />
                        ) : (
                            <video src={activeStory.mediaUrl} autoPlay muted loop className="w-full h-full object-cover" />
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Footer Actions */}
                <div className="absolute bottom-6 left-4 right-4 z-50 flex items-center space-x-4">
                    <div className="flex-1 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center px-4">
                        <input
                            type="text"
                            placeholder={`Reply to ${user.name.split(' ')[0]}...`}
                            className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-gray-300"
                        />
                    </div>
                    <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 active:scale-95 transition">
                        <Heart size={24} className="text-white" />
                    </button>
                    <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 active:scale-95 transition">
                        <Send size={24} className="text-white" />
                    </button>
                </div>

            </div>
        </div>
    );
}
