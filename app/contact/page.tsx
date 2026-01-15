"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        company: "",
        projectType: "",
        foundMe: "",
    });

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen pt-32 pb-24 px-6 md:px-12"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-12 space-y-4"
                    >
                        <p className="text-sm tracking-[0.4em] uppercase text-accent">
                            CONTACT
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                            Let&apos;s build something great together
                        </h2>
                        <p className="text-lg md:text-xl text-accent max-w-2xl">
                            I help startups, businesses, and teams develop
                            modern web applications, SaaS products, and
                            automation tools.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Side - Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">
                                            First name{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            id="firstName"
                                            value={formData.firstName}
                                            onChange={(e) =>
                                                handleChange(
                                                    "firstName",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">
                                            Last name{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            id="lastName"
                                            value={formData.lastName}
                                            onChange={(e) =>
                                                handleChange(
                                                    "lastName",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">
                                        Email{" "}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            handleChange(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                </div>

                                {/* Company */}
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input
                                        id="company"
                                        value={formData.company}
                                        onChange={(e) =>
                                            handleChange(
                                                "company",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                {/* Project Type and How did you find me */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="projectType">
                                            Project Type
                                        </Label>
                                        <Select
                                            value={formData.projectType}
                                            onValueChange={(value) =>
                                                handleChange(
                                                    "projectType",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem
                                                    value="Web Development"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    Web Development
                                                </SelectItem>
                                                <SelectItem
                                                    value="SaaS Platform"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    SaaS Platform
                                                </SelectItem>
                                                <SelectItem
                                                    value="AI/Automation"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    AI/Automation
                                                </SelectItem>
                                                <SelectItem
                                                    value="E-commerce"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    E-commerce
                                                </SelectItem>
                                                <SelectItem
                                                    value="WordPress/WooCommerce"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    WordPress/WooCommerce
                                                </SelectItem>
                                                <SelectItem
                                                    value="API Integration"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    API Integration
                                                </SelectItem>
                                                <SelectItem
                                                    value="Consulting"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    Consulting
                                                </SelectItem>
                                                <SelectItem
                                                    value="Mobile App"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    Mobile App
                                                </SelectItem>
                                                <SelectItem
                                                    value="Other"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    Other
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="foundMe">
                                            How did you find me?
                                        </Label>
                                        <Select
                                            value={formData.foundMe}
                                            onValueChange={(value) =>
                                                handleChange("foundMe", value)
                                            }
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem
                                                    value="Google Search"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    Google Search
                                                </SelectItem>
                                                <SelectItem
                                                    value="LinkedIn"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    LinkedIn
                                                </SelectItem>
                                                <SelectItem
                                                    value="GitHub"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    GitHub
                                                </SelectItem>
                                                <SelectItem
                                                    value="Referral"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    Referral
                                                </SelectItem>
                                                <SelectItem
                                                    value="Other"
                                                    className="data-highlighted:bg-light"
                                                >
                                                    Other
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <Label htmlFor="message">
                                        Tell me about your project...
                                    </Label>
                                    <Textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) =>
                                            handleChange(
                                                "message",
                                                e.target.value
                                            )
                                        }
                                        required
                                        rows={6}
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full cursor-pointer transition-colors"
                                    >
                                        <Send /> Send
                                    </Button>
                                </motion.div>
                            </form>
                        </motion.div>

                        {/* Right Side - Info & Testimonial */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="space-y-12"
                        >
                            {/* Contact Info */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-medium text-accent mb-2 ">
                                        ADDRESS
                                    </h3>
                                    <p className="text-base">
                                        Merida, Yucatan
                                        <br />
                                        Mexico
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-accent mb-2">
                                        EMAIL
                                    </h3>
                                    <a
                                        href="mailto:diego.salazar.ic@gmail.com"
                                        className="text-base hover:text-primary transition-colors hover:underline underline-offset-4"
                                    >
                                        diego.salazar.ic@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Testimonial Card */}
                            <blockquote className="text-lg mb-6 italic">
                                &quot;The best code is the one that solves the
                                problem with elegance and clarity. Good
                                engineering is not just about making things
                                work; it&apos;s about making them work
                                beautifully, efficiently, and with
                                intention.&quot;
                            </blockquote>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
