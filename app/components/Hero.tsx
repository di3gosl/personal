import { Mail, Mouse } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
                {/* Left Content */}
                <div className="space-y-10 mt-16">
                    <div className="space-y-2">
                        <p className="text-sm tracking-[0.4em] uppercase text-accent">
                            Diego Salazar
                        </p>
                        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-primary">
                            Full-Stack Developer
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl leading-relaxed text-accent">
                        Over the past 10+ years, I&apos;ve built scalable web
                        applications, SaaS platforms, and AI-driven automation
                        systems using Next.js, React, Node.js, PHP, AWS, and
                        modern API-based architectures.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-base font-semibold">
                        <button className="hover:underline underline-offset-4 transition-all cursor-pointer">
                            View Projects
                        </button>
                        <span className="text-gray-400">or</span>
                        <button className="hover:underline underline-offset-4 transition-all cursor-pointer">
                            Read About Me
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-[500px] lg:h-[800px] order-first lg:order-last self-end">
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/hero-image-v3.png"
                            alt="Diego Salazar - Full-Stack Developer"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent via-80% to-background pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Floating Email Button */}
            <div
                className="fixed bottom-8 left-8 w-11 h-11 bg-accent rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-secondary group"
                aria-label="Contact via email"
            >
                <Mail className="w-4.5 h-4.5 text-white transition-all duration-300 group-hover:text-light group-hover:w-5.5 group-hover:h-5.5" />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2 animate-bounce">
                <Mouse className="w-8 h-8 text-primary" />
            </div>
        </section>
    );
}
