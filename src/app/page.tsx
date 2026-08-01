import Footer from '@/components/Navbar/Footer'
import HeroWithScene from '@/components/HeroWithScene'
import WorkSection from '@/components/WorkSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <HeroWithScene />
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
