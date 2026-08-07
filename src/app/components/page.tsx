import Components from "@/components/Components";
import AmbientBackground from "@/components/portfolio/AmbientBackground";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

export default function ComponentsPage() {
    return (
        <>
            <AmbientBackground />
            <Header />
            <main className="relative z-10">
                <Components />
            </main>
            <Footer />
        </>
    )
}