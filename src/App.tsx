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
import BlogArticlePage from '@/pages/BlogArticlePage'
import BlogPage from '@/pages/BlogPage'
import PortfolioPage from '@/pages/PortfolioPage'
import ComingSoonPage from '@/pages/ComingSoonPage'
import NotFoundPage from '@/pages/NotFoundPage'
import SplashScreen from '@/components/SplashScreen'
import {
  getPageFromLocation,
  getCanonicalPath,
  NOT_FOUND_KEY,
  type PageKey,
} from '@/utils/routes'
import { useSEO } from '@/hooks/useSEO'
import { Analytics } from '@vercel/analytics/react'
import { setSplashActive, refreshMotion } from '@/components/motion'
import { featuredBlog, getBlogByPath } from '@/data/blogs'

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
  const [blogArticlePath, setBlogArticlePath] = useState(() => (
    typeof window !== 'undefined' ? window.location.pathname : ''
  ))
  const [dark, setDark] = useState(false)
  // Flagged during render, not in an effect: child effects run before the
  // parent's, so an effect here would fire after the first sections have
  // already set up their entrances and missed the gate.
  const [showSplash, setShowSplash] = useState(() => {
    setSplashActive(true)
    return true
  })

  // Listen to browser Back / Forward buttons and sync URL on initial mount
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = (event.state?.page as PageKey) || getPageFromLocation()
      setCurrentPage(page)
      setBlogArticlePath(window.location.pathname)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }

    // Normalise alias URLs client-side as a fallback. Vercel already serves a
    // 301 for every alias (see vercel.json); this only catches the case where
    // the app is reached without those redirects. Unknown paths are left alone
    // so a 404 URL never rewrites itself into the canonical homepage.
    const initialPage = getPageFromLocation()
    if (initialPage !== NOT_FOUND_KEY && !getBlogByPath(window.location.pathname)) {
      const canonicalPath = getCanonicalPath(initialPage)
      if (window.location.pathname !== canonicalPath && !window.location.hash) {
        window.history.replaceState({ page: initialPage }, '', canonicalPath)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const currentBlogArticle = currentPage === 'Blog' ? getBlogByPath(blogArticlePath) : undefined

  // Dynamically update page or article metadata on every route change.
  useSEO(currentPage, currentBlogArticle)

  // Each route swaps the whole document body, so every scroll trigger measured
  // against the previous page is stale. Re-measure once the new one has painted.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    const raf = requestAnimationFrame(refreshMotion)
    return () => cancelAnimationFrame(raf)
  }, [currentPage, blogArticlePath])

  const handleNavigate = (page: string, replace = false) => {
    const isBlogArticle = page.startsWith('/blog/')
    const resolved: PageKey = pageMap[page] ?? (page as PageKey)
    const targetPath = isBlogArticle ? page : getCanonicalPath(resolved)

    setCurrentPage(isBlogArticle ? 'Blog' : resolved)
    setBlogArticlePath(isBlogArticle ? page : '')

    // Update browser URL in address bar without reloading
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      if (currentPath !== targetPath || window.location.hash) {
        if (replace) {
          window.history.replaceState({ page: isBlogArticle ? 'Blog' : resolved }, '', targetPath)
        } else {
          window.history.pushState({ page: isBlogArticle ? 'Blog' : resolved }, '', targetPath)
        }
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <HomePage onNavigate={handleNavigate} dark={dark} />
      case 'About Us': return <AboutUsPage onNavigate={handleNavigate} dark={dark} />
      case 'Services': return <ServicesPage onNavigate={handleNavigate} dark={dark} />
      case 'Experts': return <ExpertsPage onNavigate={handleNavigate} dark={dark} />
      case 'Book': return <BookSessionPage onNavigate={handleNavigate} dark={dark} />
      case 'Career': return <CareerPage onNavigate={handleNavigate} dark={dark} />
      case 'Blog': {
        const article = getBlogByPath(blogArticlePath) ?? featuredBlog
        const isArticlePage = Boolean(getBlogByPath(blogArticlePath))
        return isArticlePage
          ? <BlogArticlePage article={article} onNavigate={handleNavigate} dark={dark} />
          : <BlogPage onNavigate={handleNavigate} dark={dark} />
      }
      case 'Portfolio': return <PortfolioPage onNavigate={handleNavigate} dark={dark} />
      case 'Coming Soon': return <ComingSoonPage onNavigate={handleNavigate} dark={dark} />
      default: return <NotFoundPage onNavigate={handleNavigate} dark={dark} />
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
      {showSplash && (
        <SplashScreen
          onFinish={() => {
            setSplashActive(false)
            setShowSplash(false)
          }}
        />
      )}
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

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  )
}
