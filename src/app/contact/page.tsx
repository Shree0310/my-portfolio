import Footer from "@/components/Navbar/Footer";
import ContactForm from "@/components/ContactForm";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-900">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                        Let's work together
                    </h1>
                    <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        I'm currently available for freelance work and new opportunities.
                        Whether you have a project in mind or just want to chat, I'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Info & Form Grid */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr,1.5fr] gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                                Get in touch
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                                Drop me a message and I'll get back to you as soon as possible.
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
                                <FaEnvelope className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                                    Email
                                </h3>
                                <a
                                    href="mailto:sowrasree0310@gmail.com"
                                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                                >
                                    sowrasree0310@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                                Connect with me
                            </h3>
                            <div className="flex gap-4">
                                <Link
                                    href="https://github.com/sourashree"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FaGithub className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="https://linkedin.com/in/sourashree"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="https://twitter.com/sourashree"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-32">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <Footer />
                </div>
            </footer>
        </main>
    )
}
