"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LogOut,
    User,
    Menu,
    X,
    FolderKanban,
    Tags,
    KeyRound,
    LayoutDashboard,
    ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const navigation = [
    {
        name: "Projects",
        href: "/admin/projects",
        icon: FolderKanban,
    },
    {
        name: "Tags",
        href: "/admin/tags",
        icon: Tags,
    },
    {
        name: "Demo Keys",
        href: "/admin/keys",
        icon: KeyRound,
    },
];

interface AdminHeaderProps {
    user: {
        name?: string | null;
        email?: string | null;
    };
}

export default function AdminHeader({ user }: AdminHeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    async function handleLogout() {
        setIsLoggingOut(true);
        try {
            await signOut({ callbackUrl: "/admin/login" });
            toast.success("Logged out successfully");
        } catch {
            toast.error("Failed to logout");
        } finally {
            setIsLoggingOut(false);
            setIsOpen(false);
        }
    }

    return (
        <>
            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-50 transition-transform duration-300 ease-in-out md:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
                )}
            >
                <div className="p-4 h-16 border-b border-border flex items-center justify-between">
                    <Link
                        href="/admin/projects"
                        className="flex items-center gap-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <LayoutDashboard className="size-6 text-primary" />
                        <span className="text-xl font-bold font-display text-foreground">
                            Admin
                        </span>
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X className="size-5" />
                    </Button>
                </div>

                <nav className="p-4 space-y-3">
                    {navigation.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                )}
                            >
                                <item.icon className="size-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
                    <Link
                        href="/portfolio"
                        target="_blank"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        View Portfolio <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="size-5" />
                    </Button>
                    <h1 className="text-lg font-semibold font-display text-foreground hidden sm:block">
                        Dashboard
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                        <User className="size-4 text-muted-foreground" />
                        <span className="text-foreground hidden sm:inline">
                            {user.name || user.email}
                        </span>
                    </div>

                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon-sm"
                                className="cursor-pointer"
                            >
                                <LogOut className="size-4" />
                                <span className="sr-only">Logout</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Confirm Logout</DialogTitle>
                                <DialogDescription>
                                    Are you sure you want to log out of the
                                    admin dashboard?
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="gap-3">
                                <Button
                                    variant="outline"
                                    onClick={() => setIsOpen(false)}
                                    disabled={isLoggingOut}
                                    className="cursor-pointer"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={handleLogout}
                                    disabled={isLoggingOut}
                                    className="cursor-pointer"
                                >
                                    {isLoggingOut ? "Logging out..." : "Logout"}
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </header>
        </>
    );
}
