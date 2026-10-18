import React from 'react'
import {
  FlexGrid,
  Row,
  Column,
  Tile
} from '@carbon/react'
import {
  Code,
  Network_4 as ArchitectureIcon,
  Devices,
  UserMultiple
} from '@carbon/icons-react'

export function AboutSection() {
  const pillars = [
    {
      icon: ArchitectureIcon,
      title: 'Offline-First & Resilience',
      desc: 'Architecting local-first data pipelines with Room SQLite, WorkManager, and deterministic sync engines that guarantee zero transaction loss in hostile network environments.'
    },
    {
      icon: Devices,
      title: 'Mobile System Design',
      desc: 'Deep specialization in Android SDK and cross-platform Flutter development, adhering to Clean Architecture, reactive BLoC/Coroutines state flows, and modular design.'
    },
    {
      icon: Code,
      title: 'High-Throughput Performance',
      desc: 'Optimizing memory footprint, eliminating UI thread blocking (ANRs), and structuring high-frequency ticker feeds for financial and stock exchange applications.'
    },
    {
      icon: UserMultiple,
      title: 'Team Mentorship & Review',
      desc: 'Leading code review standards, fostering automated testing hygiene, and mentoring emerging software engineers across multi-squad enterprise teams.'
    }
  ]

  return (
    <section id="about" className="portfolio-section">
      <FlexGrid>
        <Row>
          <Column sm={4} md={8} lg={16}>
            <span className="section-label">03 // Engineering Mindset</span>
            <h2 className="section-title">About & Engineering Philosophy</h2>
            <p className="section-desc">
              How I approach software engineering, system reliability, and collaborative delivery.
            </p>
          </Column>
        </Row>

        <Row style={{ alignItems: 'flex-start', rowGap: '2rem' }}>
          {/* Narrative Column */}
          <Column sm={4} md={8} lg={8}>
            <Tile style={{
              padding: '2rem',
              backgroundColor: 'var(--cds-layer-01)',
              border: '1px solid var(--cds-border-subtle)',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--cds-text-primary)',
                marginBottom: '1rem'
              }}>
                Building software that works when the real world doesn't.
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--cds-text-secondary)',
                marginBottom: '1rem'
              }}>
                I am a Senior Software Engineer based in Dhaka, Bangladesh, with more than five years of production experience building high-stakes mobile platforms. My work at BRAC IT Services focuses on microfinance systems where a dropped connection or lost database row directly impacts a loan officer in a remote village.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--cds-text-secondary)',
                marginBottom: '1rem'
              }}>
                I approach systems with a pragmatic engineering mindset: prioritize clarity over cleverness, design for failure modes early, and treat the mobile client as a first-class distributed node rather than just a dumb display for a server.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--cds-text-secondary)',
                margin: 0
              }}>
                Outside of architecting production apps, I continuously explore cross-platform paradigms, developer tooling ergonomics, and emerging cloud technologies.
              </p>
            </Tile>
          </Column>

          {/* Core Pillars Column */}
          <Column sm={4} md={8} lg={8}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon
                return (
                  <Tile
                    key={idx}
                    style={{
                      padding: '1.25rem',
                      backgroundColor: 'var(--cds-layer-01)',
                      border: '1px solid var(--cds-border-subtle)',
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start'
                    }}
                  >
                    <div style={{
                      padding: '0.625rem',
                      backgroundColor: 'var(--cds-layer-02)',
                      borderRadius: '4px',
                      color: 'var(--cds-link-primary, #0f62fe)',
                      flexShrink: 0
                    }}>
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--cds-text-primary)',
                        marginBottom: '0.25rem'
                      }}>
                        {pillar.title}
                      </h4>
                      <p style={{
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                        color: 'var(--cds-text-secondary)',
                        margin: 0
                      }}>
                        {pillar.desc}
                      </p>
                    </div>
                  </Tile>
                )
              })}
            </div>
          </Column>
        </Row>
      </FlexGrid>
    </section>
  )
}
