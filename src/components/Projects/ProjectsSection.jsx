import React, { useState } from 'react'
import {
  FlexGrid,
  Row,
  Column,
  Button
} from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import { projectsData } from '../../data/projectsData'
import { ProjectCard } from './ProjectCard'
import { CaseStudyModal } from './CaseStudyModal'
import { useNavigation } from '../../contexts/NavigationContext'

export function ProjectsSection() {
  const { navigate } = useNavigation()
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseCaseStudy = () => {
    setIsModalOpen(false)
  }

  const displayedProjects = projectsData.slice(0, 6)

  return (
    <section id="projects" className="portfolio-section">
      <FlexGrid>
        <Row>
          <Column sm={4} md={8} lg={16}>
            <span className="section-label">01 // Engineering Showcase</span>
            <h2 className="section-title">Featured Production Systems</h2>
            <p className="section-desc">
              Selected production mobile and distributed architectures solving complex offline data synchronization, high-frequency stock trading, and large-scale enterprise workflows.
            </p>
          </Column>
        </Row>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem'
        }}>
          {displayedProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={handleOpenCaseStudy}
            />
          ))}
        </div>

        <Row style={{ marginTop: '2.75rem' }}>
          <Column sm={4} md={8} lg={16} style={{ textAlign: 'center' }}>
            <Button
              kind="primary"
              size="lg"
              renderIcon={ArrowRight}
              onClick={() => navigate('/projects')}
            >
              View All Projects ({projectsData.length})
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
    </section>
  )
}

