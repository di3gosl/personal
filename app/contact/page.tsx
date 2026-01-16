import ContactContainer from "./_components/ContactContainer";
import { submitContactAction } from "./actions";

export default function ContactPage() {
    return (
        <section className="container mx-auto pt-32 pb-24 px-6 md:px-12">
            <ContactContainer submitContactForm={submitContactAction} />
        </section>
    );
}
