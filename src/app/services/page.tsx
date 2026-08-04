import Footer from "@/components/Navbar/Footer";
import ServicesForm from "@/components/ServicesForm";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-900">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                        Services
                    </h1>
                    <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        Choose from our range of therapy services designed to support your mental health journey.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
                    {/* Individual Therapy */}
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                            Individual Therapy
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            One-on-one sessions tailored to your personal growth and mental health needs.
                        </p>
                        <a
                            href="https://appt.link/meet-with-metamorphosis-therapy-initiative-HdagOYAo/individual-therapy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                        >
                            Book Individual Therapy
                        </a>
                    </div>

                    {/* Couples Therapy */}
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                            Couples Therapy
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Strengthen your relationship through guided couples counseling sessions.
                        </p>
                        <a
                            href="#contact-form"
                            className="inline-block mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                        >
                            Request Couples Therapy
                        </a>
                    </div>

                    {/* Supervision */}
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                            Supervision
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Professional supervision for therapists and counselors seeking guidance.
                        </p>
                        <a
                            href="https://appt.link/meet-with-metamorphosis-therapy-initiative-HdagOYAo/individual-supervision"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                        >
                            Book Supervision
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="py-16 px-6 bg-neutral-50 dark:bg-neutral-800/50">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                            Contact Me
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Fill out the form below and we'll get back to you within 2 working days to book a consultation call.
                        </p>
                    </div>
                    <ServicesForm />
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
