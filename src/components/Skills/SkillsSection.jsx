import React from 'react'
import {
  FlexGrid,
  Row,
  Column,
  Tile,
  Tag
} from '@carbon/react'
import { skillsCategories } from '../../data/skillsData'

export function SkillsSection() {
  return (
    <section id="skills" className="portfolio-section portfolio-section-alt">
      <FlexGrid>
        <Row>
          <Column sm={4} md={8} lg={16}>
            <span className="section-label">04 // Core Competencies</span>
            <h2 className="section-title">Technical Skills & Tooling</h2>
            <p className="section-desc">
              Technologies and architectural practices verified through production deployments and enterprise maintenance.
            </p>
          </Column>
        </Row>

        <Row style={{ rowGap: '1.5rem' }}>
          {skillsCategories.map((cat, idx) => (
            <Column sm={4} md={4} lg={8} key={idx}>
              <Tile style={{
                padding: '1.5rem',
                backgroundColor: 'var(--cds-layer-02)',
                border: '1px solid var(--cds-border-subtle)',
                height: '100%'
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--cds-text-primary)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--cds-link-primary, #0f62fe)',
                    display: 'inline-block'
                  }}></span>
                  {cat.category}
                </h3>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {cat.skills.map(skill => (
                    <Tag
                      key={skill}
                      type="cool-gray"
                      size="md"
                      style={{
                        fontFamily: 'var(--cds-code-family)',
                        fontSize: '0.8125rem',
                        margin: 0
                      }}
                    >
                      {skill}
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
