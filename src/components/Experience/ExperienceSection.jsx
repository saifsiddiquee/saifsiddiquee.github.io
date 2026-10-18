import React from 'react'
import {
  FlexGrid,
  Row,
  Column,
  Tile,
  Tag
} from '@carbon/react'
import {
  Enterprise,
  Calendar,
  Location,
  CheckmarkOutline
} from '@carbon/icons-react'
import { experienceData } from '../../data/experienceData'

export function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section portfolio-section-alt">
      <FlexGrid>
        <Row>
          <Column sm={4} md={8} lg={16}>
            <span className="section-label">02 // Career Track</span>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-desc">
              Over 5+ years of software engineering leadership, shipping resilient mobile architectures and enterprise distributed platforms.
            </p>
          </Column>
        </Row>

        <Row style={{ rowGap: '1.5rem' }}>
          {experienceData.map((item, index) => (
            <Column sm={4} md={8} lg={16} key={item.id}>
              <Tile style={{
                padding: '1.75rem',
                backgroundColor: 'var(--cds-layer-02)',
                border: '1px solid var(--cds-border-subtle)',
                borderLeft: index === 0 ? '4px solid var(--cds-link-primary, #0f62fe)' : '1px solid var(--cds-border-subtle)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--cds-text-primary)',
                      marginBottom: '0.25rem'
                    }}>
                      {item.jobtitle}
                    </h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--cds-link-primary, #0f62fe)',
                      fontWeight: 500,
                      fontSize: '1rem'
                    }}>
                      <Enterprise size={18} />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="metric-badge">
                      <Calendar size={14} /> {item.startYear} — {item.endYear}
                    </span>
                    <span className="metric-badge">
                      <Location size={14} /> {item.location}
                    </span>
                    {index === 0 && (
                      <Tag type="blue" size="sm">Current Role</Tag>
                    )}
                  </div>
                </div>

                {/* Impact Bullets */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1.25rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {item.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.9375rem',
                        lineHeight: 1.5,
                        color: 'var(--cds-text-secondary)'
                      }}
                    >
                      <CheckmarkOutline
                        size={16}
                        style={{
                          color: 'var(--cds-link-primary, #0f62fe)',
                          flexShrink: 0,
                          marginTop: '3px'
                        }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div style={{
                  display: 'flex',
                  gap: '0.4rem',
                  flexWrap: 'wrap',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--cds-border-subtle)'
                }}>
                  {item.technologies.map(tech => (
                    <Tag key={tech} type="outline" size="sm">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </Tile>
            </Column>
          ))}
        </Row>
      </FlexGrid>
    </section>
  )
}
