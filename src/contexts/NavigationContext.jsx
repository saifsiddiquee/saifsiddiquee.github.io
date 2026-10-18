import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

const NavigationContext = createContext({
  currentPath: '/',
  navigate: () => {}
})

function getPathFromLocation() {
  const searchParams = new URLSearchParams(window.location.search)
  const routeParam = searchParams.get('route')
  if (routeParam) {
    const cleanRoute = decodeURIComponent(routeParam)
    window.history.replaceState({}, '', cleanRoute)
    return cleanRoute.split('#')[0] || '/'
  }

  const pathname = window.location.pathname.replace(/\/$/, '')
  if (pathname.endsWith('/projects')) {
    return '/projects'
  }
  return '/'
}

export function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(getPathFromLocation)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getPathFromLocation())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((to, hash = '') => {
    const targetUrl = hash ? `${to}#${hash}` : to
    if (window.location.pathname !== to || window.location.hash !== (hash ? `#${hash}` : '')) {
      window.history.pushState({}, '', targetUrl)
    }
    setCurrentPath(to)

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider')
  }
  return context
}
