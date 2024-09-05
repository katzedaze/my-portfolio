import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import WorksSection from './components/WorksSection'

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SkillsSection />
        <WorksSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
