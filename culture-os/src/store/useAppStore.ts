import { create } from 'zustand';
import { User, Story, Reel, FeedPost, Transaction } from '@/types';
import { CURRENT_USER, MOCK_FEED, MOCK_REELS, MOCK_STORIES, MOCK_TRANSACTIONS, MOCK_USERS } from '@/lib/mock-data';

interface AppState {
    currentUser: User;
    users: User[];
    stories: Story[];
    reels: Reel[];
    feed: FeedPost[];
    transactions: Transaction[];
    hasPostedWorkReal: boolean;

    // Actions
    toggleLikeReel: (reelId: string) => void;
    sendTip: (reelId: string, amount: number) => void;
    markStoryViewed: (storyId: string) => void;
    postWorkReal: (post: FeedPost) => void;
}

export const useAppStore = create<AppState>((set) => ({
    currentUser: CURRENT_USER,
    users: MOCK_USERS,
    stories: MOCK_STORIES,
    reels: MOCK_REELS,
    feed: MOCK_FEED,
    transactions: MOCK_TRANSACTIONS,
    hasPostedWorkReal: false, // Default locked state

    toggleLikeReel: (reelId) => set((state) => ({
        reels: state.reels.map((r) =>
            r.id === reelId ? { ...r, isLiked: !r.isLiked, likes: r.isLiked ? r.likes - 1 : r.likes + 1 } : r
        )
    })),

    sendTip: (reelId, amount) => set((state) => {
        // Deduct from user, add transaction
        if (state.currentUser.impactPoints < amount) return state;

        return {
            currentUser: { ...state.currentUser, impactPoints: state.currentUser.impactPoints - amount },
            reels: state.reels.map(r => r.id === reelId ? { ...r, tips: r.tips + amount } : r),
            transactions: [
                {
                    id: Math.random().toString(),
                    amount: -amount,
                    type: 'spent',
                    description: 'Tip on Reel',
                    timestamp: new Date().toISOString()
                },
                ...state.transactions
            ]
        };
    }),

    markStoryViewed: (storyId) => set((state) => ({
        stories: state.stories.map(s => s.id === storyId ? { ...s, viewed: true } : s)
    })),

    postWorkReal: (post) => set((state) => ({
        feed: [post, ...state.feed],
        hasPostedWorkReal: true,
        currentUser: { ...state.currentUser, streak: state.currentUser.streak + 1 }
    })),
}));
