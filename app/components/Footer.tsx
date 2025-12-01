export default function Footer() {
    return (
        <footer className="bg-background pb-6">
            <div className="container mx-auto text-primary grid grid-cols-12 border-t border-light pt-10 gap-4">
                <div className="col-span-5">
                    <div className="text-primary mb-5 text-lg font-semibold">
                        Contact Information
                    </div>
                    <div className="mb-4 text-accent">
                        Feel free to reach out by email, connect with me on
                        social media, or send a message through the{" "}
                        <a
                            href="/contact"
                            className="text-primary hover:underline"
                        >
                            contact form.
                        </a>
                    </div>
                    <div className="text-accent">
                        E:
                        <span className="text-primary ml-1">
                            diego.salazar.ic@gmail.com
                        </span>
                    </div>
                </div>
                <div className="col-span-3 col-start-10">
                    <div className="text-primary mb-5 text-lg font-semibold">
                        Follow me on
                    </div>
                    <div className="text-primary space-y-1.5">
                        <div>
                            <a
                                href="https://www.linkedin.com/in/di3gosl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline underline-offset-4"
                            >
                                LinkedIn
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.behance.net/di3gosl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline underline-offset-4"
                            >
                                Behance
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 text-accent text-sm text-center mt-6">
                    Copyright © 2025 Diego Salazar
                </div>
            </div>
        </footer>
    );
}
