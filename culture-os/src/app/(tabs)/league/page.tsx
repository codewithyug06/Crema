"use client";

import { useAppStore } from "@/store/useAppStore";
import { Coins, Trophy, TrendingUp, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export default function LeaguePage() {
    const { currentUser, users, transactions } = useAppStore();

    // Sort users by impact points
    const leaderboard = [...users].sort((a, b) => b.impactPoints - a.impactPoints);

    return (
        <div className="p-4 space-y-6 pb-24">
            <h1 className="text-2xl font-bold mb-4">The League 🏆</h1>

            {/* Wallet Card */}
            <div className="bg-gradient-to-br from-science to-blue-900 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Trophy size={100} /></div>

                <p className="text-blue-100 font-medium mb-1">Impact Wallet</p>
                <div className="flex items-end space-x-2">
                    <h2 className="text-4xl font-bold text-white">{currentUser.impactPoints.toLocaleString()}</h2>
                    <span className="text-xl mb-1 text-blue-200">PTS</span>
                </div>

                <div className="mt-6 flex space-x-4">
                    <button className="flex-1 bg-white/20 backdrop-blur-md py-2 rounded-xl text-sm font-bold hover:bg-white/30 transition">
                        Redeem
                    </button>
                    <button className="flex-1 bg-white/10 backdrop-blur-md py-2 rounded-xl text-sm font-bold hover:bg-white/20 transition">
                        History
                    </button>
                </div>
            </div>

            {/* Leaderboard */}
            <div>
                <h3 className="text-lg font-bold mb-3 flex items-center"><TrendingUp className="mr-2 text-science" /> Global Ranking</h3>
                <div className="space-y-3">
                    {leaderboard.slice(0, 5).map((user, idx) => (
                        <div key={user.id} className="bg-white/5 rounded-xl p-3 flex items-center justify-between border border-white/5">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 flex items-center justify-center font-bold text-gray-500">
                                    {idx + 1}
                                </div>
                                <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <p className="font-bold text-sm">{user.name}</p>
                                    <p className="text-xs text-secondary-foreground">{user.department}</p>
                                </div>
                            </div>
                            <div className="text-science font-bold text-sm">
                                {user.impactPoints} pts
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Transactions */}
            <div>
                <h3 className="text-lg font-bold mb-3">Recent Activity</h3>
                <div className="space-y-3">
                    {transactions.map(t => (
                        <div key={t.id} className="flex justify-between items-center py-2 border-b border-white/5">
                            <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-full ${t.type === 'earned' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                                    {t.type === 'earned' ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-200">{t.description}</p>
                                    <p className="text-xs text-gray-500">{formatDistanceToNow(new Date(t.timestamp))} ago</p>
                                </div>
                            </div>
                            <span className={`font-bold text-sm ${t.type === 'earned' ? 'text-green-500' : 'text-white'}`}>
                                {t.type === 'earned' ? '+' : ''}{t.amount}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
