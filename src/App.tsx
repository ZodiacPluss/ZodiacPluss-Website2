import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBottomNav from '@/components/MobileBottomNav'
import HomePage from '@/pages/HomePage'
import AboutUsPage from '@/pages/AboutUsPage'
import ServicesPage from '@/pages/ServicesPage'
import ExpertsPage from '@/pages/ExpertsPage'
import BookSessionPage from '@/pages/BookSessionPage'
import CareerPage from '@/pages/CareerPage'
import PortfolioPage from '@/pages/PortfolioPage'
import ComingSoonPage from '@/pages/ComingSoonPage'
import CustomCursor from '@/components/CustomCursor'
import SplashScreen from '@/components/SplashScreen'
import {
  getPageFromLocation,
  getCanonicalPath,
  PAGE_TITLES,
  type PageKey,
} from '@/utils/routes'

const pageMap: Record<string, PageKey> = {
  'About': 'About Us',
  'Contact': 'Book',
  'For corporates': 'Services',
  'Corporates': 'Services',
  'coming soon': 'Coming Soon',
  'ComingSoon': 'Coming Soon',
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>(() => getPageFromLocation())
  const [dark, setDark] = useState(false)
  const [showSplash, setShowSplash] = useState(true)

  // Listen to browser Back / Forward buttons and sync URL on initial mount
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = (event.state?.page as PageKey) || getPageFromLocation()
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Set initial canonical path if landing directly on alias or dirty path
    const initialPage = getPageFromLocation()
    const canonicalPath = getCanonicalPath(initialPage)
    if (window.location.pathname !== canonicalPath && !window.location.hash) {
      window.history.replaceState({ page: initialPage }, '', canonicalPath)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Update document title whenever page changes
  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES['Home']
  }, [currentPage])

  const handleNavigate = (page: string, replace = false) => {
    const resolved: PageKey = pageMap[page] ?? (page as PageKey)
    const targetPath = getCanonicalPath(resolved)

    setCurrentPage(resolved)

    // Update browser URL in address bar without reloading
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      if (currentPath !== targetPath || window.location.hash) {
        if (replace) {
          window.history.replaceState({ page: resolved }, '', targetPath)
        } else {
          window.history.pushState({ page: resolved }, '', targetPath)
        }
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':           return <HomePage onNavigate={handleNavigate} dark={dark} />
      case 'About Us':       return <AboutUsPage onNavigate={handleNavigate} dark={dark} />
      case 'Services':       return <ServicesPage onNavigate={handleNavigate} dark={dark} />
      case 'Experts':        return <ExpertsPage onNavigate={handleNavigate} dark={dark} />
      case 'Book':           return <BookSessionPage onNavigate={handleNavigate} dark={dark} />
      case 'Career':         return <CareerPage onNavigate={handleNavigate} dark={dark} />
      case 'Portfolio':      return <PortfolioPage onNavigate={handleNavigate} dark={dark} />
      case 'Coming Soon':    return <ComingSoonPage onNavigate={handleNavigate} dark={dark} />
      default:               return <HomePage onNavigate={handleNavigate} dark={dark} />
    }
  }

  return (
    <div
      className={`zodiac-page-bg min-h-screen${dark ? ' dark' : ''}`}
      style={{
        background: dark ? '#000000' : 'white',
        transition: 'background 0.4s ease',
      }}
    >
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <CustomCursor />
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        dark={dark}
        onToggleTheme={() => setDark(d => !d)}
      />

      {/* Page content */}
      <main
        className="zodiac-main-bg"
        style={{
          background: dark ? '#000000' : '#ffffff',
          transition: 'background 0.4s ease',
        }}
      >
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} dark={dark} />

      {/* Mobile bottom glassmorphism navigation */}
      <MobileBottomNav
        currentPage={currentPage}
        onNavigate={handleNavigate}
        dark={dark}
      />
    </div>
  )
}
