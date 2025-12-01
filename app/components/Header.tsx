import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full border-3 border-primary flex items-center justify-center mr-2">
                        <span className="text-base font-bold text-primary">DS</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold leading-tight text-primary">
                            Diego Salazar
                        </span>
                        <span className="text-xs tracking-wider uppercase leading-tight text-secondary">
                            Full-Stack Developer
                        </span>
                    </div>
                </div>

                {/* Menu Button */}
                <button
                    className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase cursor-pointer hover:text-accent transition-colors"
                    aria-label="Open menu"
                >
                    <span>Menu</span>
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
}
