import BottomNav from "@/components/layout/BottomNav";
import TopBar from "@/components/layout/TopBar";

export default function TabsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-full min-h-screen">
            <TopBar />
            <main className="flex-1 pt-14 pb-20 overflow-y-auto scrollbar-hide">
                {children}
            </main>
            <BottomNav />
        </div>
    );
}
