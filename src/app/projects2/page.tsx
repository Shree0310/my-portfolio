import Footer from "@/components/Navbar/Footer";
import WorkSection from "@/components/WorkSection";

const Projects2Page = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-neutral-900">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                        Projects
                    </h1>
                    <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
                        I'm a passionate Frontend Engineer based in Bangalore, India, with a deep love for building elegant and efficient web applications.
                        With 6 years of professional experience,
                        I've had the privilege of working on diverse projects—from AI-powered features to complex enterprise applications.
                    </p>
                </div>
            </section>

            {/* Work Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <WorkSection />
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

export default Projects2Page;
