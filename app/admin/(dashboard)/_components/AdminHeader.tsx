"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { LogOut, User, Menu } from "lucide-react";
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

interface AdminHeaderProps {
    user: {
        name?: string | null;
        email?: string | null;
    };
}

export default function AdminHeader({ user }: AdminHeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

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
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="md:hidden">
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
                        <Button variant="ghost" size="icon-sm" className="cursor-pointer">
                            <LogOut className="size-4" />
                            <span className="sr-only">Logout</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Confirm Logout</DialogTitle>
                            <DialogDescription>
                                Are you sure you want to log out of the admin
                                dashboard?
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
    );
}
