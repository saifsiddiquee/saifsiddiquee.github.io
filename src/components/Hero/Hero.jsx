import React from 'react'
import {
  FlexGrid,
  Row,
  Column,
  Button,
  Tag,
  Tile
} from '@carbon/react'
import {
  ArrowDown,
  DocumentDownload,
  Location,
  CheckmarkOutline,
  Email
} from '@carbon/icons-react'
import { headerData } from '../../data/headerData'
import { contactsData } from '../../data/contactsData'

export function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="portfolio-section hero-section">
      <FlexGrid>
        <Row style={{ alignItems: 'center', rowGap: '3rem' }}>
          {/* Main Hero Copy Column */}
          <Column sm={4} md={5} lg={10} className="hero-copy-column">
            {/* Status & Location Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <Tag
                type="cyan"
                size="md"
                renderIcon={CheckmarkOutline}
                className="hero-status-tag"
                title={headerData.status}
                style={{ maxWidth: 'auto', height: 'auto' }}
              >
                {headerData.status}
              </Tag>
              <span className="metric-badge">
                <Location size={14} /> Bangladesh · Remote / Relocation
              </span>
            </div>

            {/* Main Name Headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              marginBottom: '1rem',
              color: 'var(--cds-text-primary)'
            }}>
              {headerData.name}
            </h1>

            {/* Subtitle / Focus */}
            <h2 style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.625rem)',
              fontWeight: 500,
              lineHeight: 1.35,
              color: 'var(--cds-link-primary, #0f62fe)',
              marginBottom: '1.5rem',
              fontFamily: 'var(--cds-font-family)'
            }}>
              {headerData.title} <span style={{ color: 'var(--cds-text-secondary)', fontWeight: 400 }}>— Mobile & Distributed Systems</span>
            </h2>

            {/* Paragraph / Narrative */}
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--cds-text-secondary)',
              maxWidth: '42rem',
              marginBottom: '2.25rem'
            }}>
              {headerData.tagline} {headerData.bio}
            </p>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button
                kind="primary"
                renderIcon={ArrowDown}
                onClick={scrollToWork}
              >
                Explore Featured Work
              </Button>
              <Button
                kind="tertiary"
                href={headerData.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                renderIcon={DocumentDownload}
              >
                Download Résumé (PDF)
              </Button>
              <Button
                kind="ghost"
                href={`mailto:${contactsData.email}`}
                renderIcon={Email}
              >
                Get In Touch
              </Button>
            </div>
          </Column>

          {/* Portrait Image Column */}
          <Column sm={4} md={3} lg={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="hero-portrait-card">
              <div className="portrait-image-wrapper">
                <img
                  src={headerData.image}
                  alt="Saif Siddique Rayhan"
                  className="portrait-img"
                />
              </div>
            </div>
          </Column>
        </Row>

        {/* Full-width Metrics Row */}
        <div className="hero-metrics-grid">
          {headerData.stats.map((stat, idx) => (
            <Tile key={idx} className="metric-tile">
              <div className="metric-tile-value">
                {stat.value}
              </div>
              <div className="metric-tile-label">
                {stat.label}
              </div>
            </Tile>
          ))}
        </div>
      </FlexGrid>
    </section>
  )
}
