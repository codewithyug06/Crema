import { User, Story, Reel, FeedPost, Transaction } from "@/types";

export const CURRENT_USER: User = {
    id: "u1",
    name: "Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop",
    role: "Product Designer",
    department: "Design",
    impactPoints: 2450,
    streak: 12,
};

export const MOCK_USERS: User[] = [
    CURRENT_USER,
    {
        id: "u2",
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        role: "Engineering Manager",
        Department: "Engineering",
        impactPoints: 3100,
        streak: 45,
    } as any,
    {
        id: "u3",
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop",
        role: "Frontend Dev",
        Department: "Engineering",
        impactPoints: 1200,
        streak: 3,
    } as any,
    {
        id: "u4",
        name: "Emily Davis",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        role: "Marketing Specialist",
        Department: "Marketing",
        impactPoints: 1850,
        streak: 8,
    } as any,
];

export const MOCK_STORIES: Story[] = [
    {
        id: "s1",
        userId: "u2",
        type: "work",
        mediaUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
        mediaType: "image",
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
        viewed: false,
    },
    {
        id: "s2",
        userId: "u3",
        type: "wellness",
        mediaUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
        mediaType: "image",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        viewed: false,
    },
    {
        id: "s3",
        userId: "u4",
        type: "kudos",
        mediaUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
        mediaType: "image",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        viewed: false,
    },
];

export const MOCK_REELS: Reel[] = [
    {
        id: "r1",
        userId: "u2",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-working-on-code-screens-close-up-42861-large.mp4", // Mock video
        caption: "Shipping the new checkout flow! 🚀 #LaunchDay",
        likes: 45,
        tips: 120,
        isLiked: false,
        category: "work",
    },
    {
        id: "r2",
        userId: "u4",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-having-fun-at-a-party-41662-large.mp4",
        caption: "Team happy hour vibes 🎉 #Culture",
        likes: 89,
        tips: 50,
        isLiked: true,
        category: "prior",
    } as any, // category fix
];

export const MOCK_FEED: FeedPost[] = [
    {
        id: "f1",
        userId: "u3",
        frontImageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
        backImageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
        caption: "Deep work mode 🎧",
        reactions: 12,
    },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
    {
        id: "t1",
        amount: 50,
        type: "earned",
        description: "Daily Streak Bonus",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    },
    {
        id: "t2",
        amount: -100,
        type: "spent",
        description: "Sent Kudos to Sarah",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    },
];
