import React from 'react'
import {
  FlexGrid,
  Row,
  Column,
  Tile
} from '@carbon/react'
import {
  Education as EducationIcon,
  Calendar
} from '@carbon/icons-react'
import { educationData } from '../../data/educationData'

export function EducationSection() {
  return (
    <section id="education" className="portfolio-section">
      <FlexGrid>
        <Row>
          <Column sm={4} md={8} lg={16}>
            <span className="section-label">05 // Academic Background</span>
            <h2 className="section-title">Education & Credentials</h2>
            <p className="section-desc">
              Formal foundation in computer science, distributed algorithms, and software engineering.
            </p>
          </Column>
        </Row>

        <Row style={{ rowGap: '1rem' }}>
          {educationData.map(edu => (
            <Column sm={4} md={4} lg={8} key={edu.id}>
              <Tile style={{
                padding: '1.5rem',
                backgroundColor: 'var(--cds-layer-01)',
                border: '1px solid var(--cds-border-subtle)',
                height: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{
                    padding: '0.5rem',
                    backgroundColor: 'var(--cds-layer-02)',
                    borderRadius: '4px',
                    color: 'var(--cds-link-primary, #0f62fe)',
                    display: 'flex'
                  }}>
                    <EducationIcon size={20} />
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      color: 'var(--cds-text-primary)',
                      margin: 0
                    }}>
                      {edu.course}
                    </h3>
                  </div>
                </div>

                <div style={{
                  fontSize: '0.9375rem',
                  color: 'var(--cds-text-secondary)',
                  marginBottom: '0.75rem'
                }}>
                  {edu.institution}
                </div>

                <div className="metric-badge">
                  <Calendar size={14} /> {edu.startYear} — {edu.endYear}
                </div>
              </Tile>
            </Column>
          ))}
        </Row>
      </FlexGrid>
    </section>
  )
}
