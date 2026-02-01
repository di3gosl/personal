"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, FolderKanban, LayoutDashboard, Tags } from "lucide-react";
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
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-border bg-card hidden md:flex flex-col">
            <div className="p-4 h-16 border-b border-border">
                <Link
                    href="/admin/projects"
                    className="flex items-center gap-2"
                >
                    <LayoutDashboard className="size-6 text-primary" />
                    <span className="text-xl font-bold font-display text-foreground">
                        Admin
                    </span>
                </Link>
            </div>
            <nav className="flex-1 p-4 space-y-3">
                {navigation.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
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
            <div className="p-4 border-t border-border">
                <Link
                    href="/portfolio"
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    View Portfolio <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </aside>
    );
}
