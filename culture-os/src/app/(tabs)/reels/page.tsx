"use client";

import ReelCard from "@/components/shared/ReelCard";
import { useAppStore } from "@/store/useAppStore";

export default function ReelsPage() {
    const { reels } = useAppStore();

    return (
        <div className="h-[calc(100vh-56px-56px)] w-full overflow-y-auto snap-y snap-mandatory bg-black scrollbar-hide">
            {/* 56px TopBar + 56px BottomNav = 112px offset roughly */}
            {/* Actually layout gives explicit height. We want full height relative to container. */}
            {/* The layout.tsx sets overflow-y-auto on main which is flex-1. 
          So we just need this container to be 100% of parent and handle its own snap?
          Or let the parent handle it? 
          Better to make this container full height of the parent 'main'.
      */}
            <div className="h-full">
                {reels.map((reel) => (
                    // Each card must be full viewport height minus bars roughly, or just fixed height
                    // simplified: h-full
                    <div key={reel.id} className="h-full w-full snap-start relative">
                        <ReelCard reel={reel} />
                    </div>
                ))}
            </div>
        </div>
    );
}
