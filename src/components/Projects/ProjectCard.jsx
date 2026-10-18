import React from 'react'
import {
  Tile,
  Tag,
  Button
} from '@carbon/react'
import {
  ArrowRight,
  Launch,
  LogoGithub
} from '@carbon/icons-react'

export function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <Tile
      className="portfolio-project-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '1.75rem',
        backgroundColor: 'var(--cds-layer-01)',
        border: '1px solid var(--cds-border-subtle)',
        transition: 'all 0.2s cubic-bezier(0, 0, 0.2, 1)',
        position: 'relative'
      }}
    >
      {/* Visual Header / SVG badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--cds-border-subtle)'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--cds-layer-02)',
          borderRadius: '4px',
          padding: '6px'
        }}>
          <img
            src={project.image}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <div className="metric-badge" style={{ fontSize: '0.75rem', maxWidth: '65%', textAlign: 'right' }}>
          {project.impact}
        </div>
      </div>

      {/* Project Title */}
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.3,
        marginBottom: '0.75rem',
        color: 'var(--cds-text-primary)'
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '0.9375rem',
        lineHeight: 1.6,
        color: 'var(--cds-text-secondary)',
        marginBottom: '1.25rem',
        flexGrow: 1
      }}>
        {project.shortDesc}
      </p>

      {/* Tech Tags */}
      <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {project.tags.slice(0, 4).map(tag => (
          <Tag key={tag} type="cool-gray" size="sm">
            {tag}
          </Tag>
        ))}
        {project.tags.length > 4 && (
          <Tag type="outline" size="sm">
            +{project.tags.length - 4} more
          </Tag>
        )}
      </div>

      {/* Actions */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        borderTop: '1px solid var(--cds-border-subtle)',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <Button
          size="sm"
          kind="primary"
          renderIcon={ArrowRight}
          onClick={() => onOpenCaseStudy(project)}
        >
          Case Study
        </Button>

        <div style={{ display: 'flex', gap: '0.25rem' }}>
          {project.demo && (
            <Button
              hasIconOnly
              renderIcon={Launch}
              iconDescription="Live App / Store"
              tooltipPosition="top"
              size="sm"
              kind="ghost"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
          {project.code && (
            <Button
              hasIconOnly
              renderIcon={LogoGithub}
              iconDescription="View Code"
              tooltipPosition="top"
              size="sm"
              kind="ghost"
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
        </div>
      </div>
    </Tile>
  )
}
