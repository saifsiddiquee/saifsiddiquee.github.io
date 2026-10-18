import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { NavigationProvider, useNavigation } from './contexts/NavigationContext'
import { CarbonHeader } from './components/Header/CarbonHeader'
import { Hero } from './components/Hero/Hero'
import { ProjectsSection } from './components/Projects/ProjectsSection'
import { ExperienceSection } from './components/Experience/ExperienceSection'
import { AboutSection } from './components/About/AboutSection'
import { SkillsSection } from './components/Skills/SkillsSection'
import { EducationSection } from './components/Education/EducationSection'
import { ContactSection } from './components/Contact/ContactSection'
import { CarbonFooter } from './components/Footer/CarbonFooter'
import { ProjectsPage } from './pages/ProjectsPage'

function AppContent() {
  const { currentPath } = useNavigation()

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CarbonHeader />
      <main id="main-content" style={{ flex: 1 }}>
        {currentPath === '/projects' ? (
          <ProjectsPage />
        ) : (
          <>
            <Hero />
            <ProjectsSection />
            <ExperienceSection />
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <ContactSection />
          </>
        )}
      </main>
      <CarbonFooter />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  )
}

