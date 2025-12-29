export interface User {
    id: string;
    name: string;
    avatar: string;
    role: string;
    department: string;
    impactPoints: number;
    streak: number;
}

export interface Story {
    id: string;
    userId: string;
    type: 'work' | 'wellness' | 'kudos';
    mediaUrl: string; // Image or Video
    mediaType: 'image' | 'video';
    timestamp: string; // ISO string
    viewed: boolean;
}

export interface Reel {
    id: string;
    userId: string;
    videoUrl: string;
    caption: string;
    likes: number;
    tips: number;
    isLiked: boolean;
    category: 'kudos' | 'culture' | 'fun';
}

export interface Transaction {
    id: string;
    amount: number;
    type: 'earned' | 'spent';
    description: string;
    timestamp: string;
}

export interface FeedPost {
    id: string;
    userId: string;
    frontImageUrl: string;
    backImageUrl: string;
    timestamp: string;
    caption?: string;
    reactions: number;
}
