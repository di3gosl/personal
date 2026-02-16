import type { Metadata } from "next";
import ContactContainer from "./_components/ContactContainer";
import { submitContactAction } from "./actions";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Diego Salazar for freelance projects, SaaS consulting, or collaboration opportunities.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Diego Salazar",
        description:
            "Get in touch with Diego Salazar for freelance projects, SaaS consulting, or collaboration opportunities.",
        url: "/contact",
    },
};

export default function ContactPage() {
    return (
        <section className="container mx-auto pt-32 pb-24 px-6 md:px-12">
            <ContactContainer submitContactForm={submitContactAction} />
        </section>
    );
}
