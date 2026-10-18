import React, { useState, useMemo } from 'react'
import {
  FlexGrid,
  Row,
  Column,
  Search,
  Tag,
  Button,
  Breadcrumb,
  BreadcrumbItem
} from '@carbon/react'
import {
  ArrowLeft,
  LogoGithub,
  Reset
} from '@carbon/icons-react'
import { projectsData } from '../data/projectsData'
import { socialsData } from '../data/socialsData'
import { ProjectCard } from '../components/Projects/ProjectCard'
import { CaseStudyModal } from '../components/Projects/CaseStudyModal'
import { useNavigation } from '../contexts/NavigationContext'

const FILTER_TAGS = [
  'All',
  'Android',
  'Flutter',
  'Kotlin',
  'Offline-First',
  'Fintech',
  'Full Stack'
]

export function ProjectsPage() {
  const { navigate } = useNavigation()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesTag =
        selectedTag === 'All' ||
        project.tags.some((tag) => tag.toLowerCase().includes(selectedTag.toLowerCase())) ||
        (selectedTag === 'Fintech' && (project.title.toLowerCase().includes('finance') || project.title.toLowerCase().includes('trading') || project.shortDesc.toLowerCase().includes('financial') || project.tags.includes('Fintech')))

      if (!matchesTag) return false

      if (!searchQuery.trim()) return true

      const query = searchQuery.toLowerCase()
      const inTitle = project.title.toLowerCase().includes(query)
      const inDesc = project.shortDesc.toLowerCase().includes(query)
      const inTags = project.tags.some((t) => t.toLowerCase().includes(query))
      const inImpact = project.impact.toLowerCase().includes(query)

      return inTitle || inDesc || inTags || inImpact
    })
  }, [searchQuery, selectedTag])

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseCaseStudy = () => {
    setIsModalOpen(false)
  }

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedTag('All')
  }

  return (
    <div className="portfolio-section" style={{ minHeight: '80vh', paddingTop: '3rem' }}>
      <FlexGrid>
        {/* Navigation Breadcrumb */}
        <Row style={{ marginBottom: '1.5rem' }}>
          <Column sm={4} md={8} lg={16}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <Breadcrumb noTrailingSlash>
                <BreadcrumbItem href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/projects" isCurrentPage>
                  Projects Archive
                </BreadcrumbItem>
              </Breadcrumb>

              <Button
                size="sm"
                kind="ghost"
                renderIcon={ArrowLeft}
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
            </div>
          </Column>
        </Row>

        {/* Header Section */}
        <Row>
          <Column sm={4} md={8} lg={16}>
            <span className="section-label">01 // Complete Archive</span>
            <h1 className="section-title">All Projects & Production Systems</h1>
            <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
              Comprehensive catalog of enterprise mobile apps, high-frequency financial platforms, and distributed systems architected and shipped across 6+ years of engineering.
            </p>
          </Column>
        </Row>

        {/* Filter & Search Bar */}
        <Row style={{ marginBottom: '2rem', rowGap: '1rem', alignItems: 'center' }}>
          <Column sm={4} md={4} lg={6}>
            <Search
              size="lg"
              placeholder="Search by name, technology, or impact..."
              labelText="Search projects"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClear={() => setSearchQuery('')}
            />
          </Column>

          <Column sm={4} md={4} lg={10}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--cds-code-family)', color: 'var(--cds-text-secondary)', marginRight: '0.25rem' }}>
                Filter:
              </span>
              {FILTER_TAGS.map((tag) => {
                const isSelected = selectedTag === tag
                return (
                  <Tag
                    key={tag}
                    type={isSelected ? 'blue' : 'cool-gray'}
                    size="md"
                    onClick={() => setSelectedTag(tag)}
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      fontWeight: isSelected ? 600 : 400
                    }}
                  >
                    {tag}
                  </Tag>
                )
              })}
            </div>
          </Column>
        </Row>

        {/* Results Counter / State */}
        <Row style={{ marginBottom: '1.5rem' }}>
          <Column sm={4} md={8} lg={16}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.8125rem',
              fontFamily: 'var(--cds-code-family)',
              color: 'var(--cds-text-secondary)',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid var(--cds-border-subtle)'
            }}>
              <span>
                Showing {filteredProjects.length} of {projectsData.length} production projects
                {selectedTag !== 'All' && ` (filtered by ${selectedTag})`}
                {searchQuery && ` (matching "${searchQuery}")`}
              </span>

              {(selectedTag !== 'All' || searchQuery) && (
                <Button
                  size="sm"
                  kind="ghost"
                  renderIcon={Reset}
                  onClick={handleClearFilters}
                  style={{ padding: '0 0.5rem', minHeight: 'auto', height: '1.5rem' }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </Column>
        </Row>

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.5rem'
          }}>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={handleOpenCaseStudy}
              />
            ))}
          </div>
        ) : (
          <Row>
            <Column sm={4} md={8} lg={16}>
              <div style={{
                textAlign: 'center',
                padding: '4rem 1.5rem',
                backgroundColor: 'var(--cds-layer-01)',
                border: '1px solid var(--cds-border-subtle)',
                borderRadius: '4px'
              }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--cds-text-primary)' }}>
                  No projects match your criteria
                </h3>
                <p style={{ color: 'var(--cds-text-secondary)', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
                  Try adjusting your search terms or clearing the selected tag filter.
                </p>
                <Button size="sm" kind="tertiary" onClick={handleClearFilters}>
                  Reset All Filters
                </Button>
              </div>
            </Column>
          </Row>
        )}

        {/* GitHub Repositories Link */}
        <Row style={{ marginTop: '3.5rem' }}>
          <Column sm={4} md={8} lg={16} style={{ textAlign: 'center' }}>
            <Button
              kind="tertiary"
              href={socialsData.github}
              target="_blank"
              rel="noopener noreferrer"
              renderIcon={LogoGithub}
            >
              Explore Open-Source Repositories on GitHub
            </Button>
          </Column>
        </Row>
      </FlexGrid>

      {/* Case Study Deep-dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseCaseStudy}
      />
    </div>
  )
}
