import React, { useState } from 'react'
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenuButton,
  SideNav,
  SideNavItems,
  SideNavLink,
  Button
} from '@carbon/react'
import {
  Asleep,
  Light,
  DocumentDownload,
  LogoGithub,
  LogoLinkedin
} from '@carbon/icons-react'
import { useTheme } from '../../contexts/ThemeContext'
import { useNavigation } from '../../contexts/NavigationContext'
import { headerData } from '../../data/headerData'
import { socialsData } from '../../data/socialsData'

export function CarbonHeader() {
  const { theme, toggleTheme, isDark } = useTheme()
  const { currentPath, navigate } = useNavigation()
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false)

  const handleNavClick = (id) => {
    setIsSideNavExpanded(false)
    if (currentPath !== '/') {
      navigate('/', id)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="portfolio-header-bar">
      <Header aria-label="Saif Siddique Rayhan Portfolio">
        <HeaderMenuButton
          aria-label={isSideNavExpanded ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsSideNavExpanded(prev => !prev)}
          isActive={isSideNavExpanded}
          aria-expanded={isSideNavExpanded}
        />
        <HeaderName
          href="/"
          prefix=""
          aria-label="Saif Siddique Home"
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
          }}
        >
          <img
            src="/saif_logo.png"
            alt="Saif Siddique"
            className="header-brand-logo"
          />
        </HeaderName>

        <HeaderNavigation aria-label="Main Navigation">
          <HeaderMenuItem
            href="#projects"
            isActive={currentPath === '/projects'}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('projects')
            }}
          >
            Work
          </HeaderMenuItem>
          <HeaderMenuItem href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience') }}>
            Experience
          </HeaderMenuItem>
          <HeaderMenuItem href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about') }}>
            About
          </HeaderMenuItem>
          <HeaderMenuItem href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills') }}>
            Skills
          </HeaderMenuItem>
          <HeaderMenuItem href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}>
            Contact
          </HeaderMenuItem>
        </HeaderNavigation>

        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
          onSideNavBlur={() => setIsSideNavExpanded(false)}
        >
          <SideNavItems>
            <SideNavLink href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects') }}>
              Work
            </SideNavLink>
            <SideNavLink href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience') }}>
              Experience
            </SideNavLink>
            <SideNavLink href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about') }}>
              About
            </SideNavLink>
            <SideNavLink href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills') }}>
              Skills
            </SideNavLink>
            <SideNavLink href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}>
              Contact
            </SideNavLink>
            <SideNavLink href={headerData.resumePdf} target="_blank" rel="noopener noreferrer">
              Download Résumé (PDF)
            </SideNavLink>
          </SideNavItems>
        </SideNav>

        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="GitHub Profile"
            tooltipAlignment="end"
            onClick={() => window.open(socialsData.github, '_blank', 'noopener,noreferrer')}
          >
            <LogoGithub size={20} />
          </HeaderGlobalAction>

          <HeaderGlobalAction
            aria-label="LinkedIn Profile"
            tooltipAlignment="end"
            onClick={() => window.open(socialsData.linkedIn, '_blank', 'noopener,noreferrer')}
          >
            <LogoLinkedin size={20} />
          </HeaderGlobalAction>

          <HeaderGlobalAction
            aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            tooltipAlignment="end"
            onClick={toggleTheme}
          >
            {isDark ? <Light size={20} /> : <Asleep size={20} />}
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </div>
  )
}
