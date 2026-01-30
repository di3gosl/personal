import type { Metadata } from "next";
import SessionProvider from "./SessionProvider";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin dashboard for managing portfolio content",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SessionProvider>
            <div className="min-h-screen bg-background">{children}</div>
        </SessionProvider>
    );
}
