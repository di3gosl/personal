import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
    Link,
} from "@react-email/components";
import { render } from "@react-email/render";
import type { ContactFormData } from "@/lib/validators/contact";

interface ContactEmailProps {
    data: ContactFormData;
}

function ContactEmail({ data }: ContactEmailProps) {
    const previewText = `New message from ${data.firstName} ${data.lastName}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-[#f4f4f5] font-sans">
                    <Container className="mx-auto py-10 px-5 max-w-[600px]">
                        {/* Header */}
                        <Section className="bg-[#353839] rounded-t-lg py-10 px-10 text-center">
                            <Heading className="m-0 text-[#f4f4f5] text-2xl font-semibold">
                                New Contact Form Submission
                            </Heading>
                        </Section>

                        {/* Content */}
                        <Section className="bg-white p-10">
                            <Text className="m-0 mb-6 text-[#353839] text-base leading-relaxed">
                                You have received a new contact form submission
                                from your portfolio website.
                            </Text>

                            {/* Contact Information */}
                            <Section className="bg-[#f4f4f5] p-3 px-4 border-l-[3px] border-[#353839] mb-0">
                                <Text className="m-0 mb-1 text-[#80838a] text-xs uppercase tracking-wide font-semibold">
                                    Name
                                </Text>
                                <Text className="mt-1 mb-0 text-[#353839] text-base font-medium">
                                    {data.firstName} {data.lastName}
                                </Text>
                            </Section>

                            <Section className="bg-white p-3 px-4 mb-0">
                                <Text className="m-0 mb-1 text-[#80838a] text-xs uppercase tracking-wide font-semibold">
                                    Email
                                </Text>
                                <Text className="mt-1 mb-0">
                                    <Link
                                        href={`mailto:${data.email}`}
                                        className="text-[#353839] text-base no-underline"
                                    >
                                        {data.email}
                                    </Link>
                                </Text>
                            </Section>

                            {data.company && (
                                <Section className="bg-[#f4f4f5] p-3 px-4 mb-0">
                                    <Text className="m-0 mb-1 text-[#80838a] text-xs uppercase tracking-wide font-semibold">
                                        Company
                                    </Text>
                                    <Text className="mt-1 mb-0 text-[#353839] text-base">
                                        {data.company}
                                    </Text>
                                </Section>
                            )}

                            {data.projectType && (
                                <Section className="bg-white p-3 px-4 mb-0">
                                    <Text className="m-0 mb-1 text-[#80838a] text-xs uppercase tracking-wide font-semibold">
                                        Project Type
                                    </Text>
                                    <Text className="mt-1 mb-0 text-[#353839] text-base">
                                        {data.projectType}
                                    </Text>
                                </Section>
                            )}

                            {data.foundMe && (
                                <Section className="bg-[#f4f4f5] p-3 px-4 mb-0">
                                    <Text className="m-0 mb-1 text-[#80838a] text-xs uppercase tracking-wide font-semibold">
                                        How They Found You
                                    </Text>
                                    <Text className="mt-1 mb-0 text-[#353839] text-base">
                                        {data.foundMe}
                                    </Text>
                                </Section>
                            )}

                            {/* Message */}
                            <Section className="p-5 bg-[#f4f4f5] rounded-md border-l-[3px] border-[#353839] mt-6">
                                <Text className="m-0 mb-2 text-[#80838a] text-xs uppercase tracking-wide font-semibold">
                                    Message
                                </Text>
                                <Text className="m-0 text-[#353839] text-[15px] leading-relaxed whitespace-pre-wrap">
                                    {data.message}
                                </Text>
                            </Section>
                        </Section>

                        {/* Footer */}
                        <Section className="bg-[#f4f4f5] py-6 px-10 rounded-b-lg border-t border-[#d1d0d4] text-center">
                            <Text className="m-0 text-[#80838a] text-[13px]">
                                This email was sent from your portfolio contact
                                form.
                            </Text>
                            <Text className="mt-2 mb-0 text-[#80838a] text-xs">
                                Received on{" "}
                                {new Date().toLocaleString("en-US", {
                                    dateStyle: "full",
                                    timeStyle: "short",
                                })}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

// Export the render function
export async function generateContactEmailTemplate(
    data: ContactFormData
): Promise<string> {
    return await render(<ContactEmail data={data} />);
}
