import React from 'react'
import {
  Modal,
  Tag,
  Button,
  InlineNotification
} from '@carbon/react'
import {
  Launch,
  LogoGithub,
  CheckmarkOutline,
  Chip
} from '@carbon/icons-react'

export function CaseStudyModal({ project, isOpen, onClose }) {
  if (!project || !project.caseStudy) return null

  const { caseStudy } = project

  return (
    <Modal
      open={isOpen}
      onRequestClose={onClose}
      modalHeading={project.title}
      modalLabel="Architectural Case Study"
      passiveModal={false}
      primaryButtonText="Close Case Study"
      onRequestSubmit={onClose}
      size="lg"
      aria-label={`Case Study: ${project.title}`}
    >
      <div style={{ padding: '0.5rem 0' }}>
        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {project.tags.map(tag => (
            <Tag key={tag} type="cool-gray" size="md">
              {tag}
            </Tag>
          ))}
        </div>

        {/* Overview */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--cds-text-primary)' }}>
            System Overview
          </h4>
          <p style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6, fontSize: '0.9375rem' }}>
            {caseStudy.overview}
          </p>
        </div>

        {/* Problem & Constraints Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--cds-layer-01)', borderLeft: '3px solid var(--cds-support-error, #da1e28)' }}>
            <h5 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginBottom: '0.5rem' }}>
              The Problem
            </h5>
            <p style={{ fontSize: '0.875rem', color: 'var(--cds-text-secondary)', lineHeight: 1.5 }}>
              {caseStudy.problem}
            </p>
          </div>

          <div style={{ padding: '1rem', backgroundColor: 'var(--cds-layer-01)', borderLeft: '3px solid var(--cds-support-warning, #f1c21b)' }}>
            <h5 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--cds-text-primary)', marginBottom: '0.5rem' }}>
              Scale & Constraints
            </h5>
            <p style={{ fontSize: '0.875rem', color: 'var(--cds-text-secondary)', lineHeight: 1.5 }}>
              {caseStudy.constraints}
            </p>
          </div>
        </div>

        {/* Architecture */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--cds-text-primary)' }}>
            Architecture & Design Decisions
          </h4>
          <p style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6, fontSize: '0.9375rem', marginBottom: '1rem' }}>
            {caseStudy.architecture}
          </p>
          <ul style={{ paddingLeft: '1.25rem', margin: 0, color: 'var(--cds-text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
            {caseStudy.keyDecisions.map((decision, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>
                {decision}
              </li>
            ))}
          </ul>
        </div>

        {/* Hardest Challenge */}
        <div style={{ marginBottom: '2rem', padding: '1rem 1.25rem', backgroundColor: 'var(--cds-layer-02)', border: '1px solid var(--cds-border-subtle)' }}>
          <h5 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--cds-link-primary, #0f62fe)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Chip size={16} /> Hardest Engineering Challenge & Resolution
          </h5>
          <p style={{ fontSize: '0.875rem', color: 'var(--cds-text-secondary)', lineHeight: 1.6, margin: 0 }}>
            {caseStudy.hardestChallenge}
          </p>
        </div>

        {/* Measurable Results */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--cds-text-primary)' }}>
            Quantifiable Results
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}>
            {caseStudy.results.map((result, idx) => (
              <div
                key={idx}
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: 'var(--cds-layer-01)',
                  border: '1px solid var(--cds-border-subtle)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: 'var(--cds-text-primary)'
                }}
              >
                <CheckmarkOutline size={16} style={{ color: 'var(--cds-support-success, #24a148)', flexShrink: 0, marginTop: '2px' }} />
                <span>{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--cds-border-subtle)' }}>
          {project.demo && (
            <Button
              kind="primary"
              size="sm"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              renderIcon={Launch}
            >
              Open Live Application / Portal
            </Button>
          )}
          {project.appStore && (
            <Button
              kind="tertiary"
              size="sm"
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              renderIcon={Launch}
            >
              Apple App Store
            </Button>
          )}
          {project.playStore && project.playStore !== project.demo && (
            <Button
              kind="tertiary"
              size="sm"
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              renderIcon={Launch}
            >
              Google Play Store
            </Button>
          )}
          {project.code && (
            <Button
              kind="ghost"
              size="sm"
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              renderIcon={LogoGithub}
            >
              View Repository
            </Button>
          )}
        </div>
      </div>
    </Modal>
  )
}
