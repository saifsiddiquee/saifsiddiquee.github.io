import React, { useState } from 'react'
import {
  FlexGrid,
  Row,
  Column,
  Tile,
  Button,
  InlineNotification
} from '@carbon/react'
import {
  Email,
  Phone,
  Location,
  Copy,
  DocumentDownload,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
  CheckmarkOutline
} from '@carbon/icons-react'
import { contactsData } from '../../data/contactsData'
import { socialsData } from '../../data/socialsData'
import { headerData } from '../../data/headerData'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(contactsData.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <section id="contact" className="portfolio-section portfolio-section-alt">
      <FlexGrid>
        <Row>
          <Column sm={4} md={8} lg={16}>
            <span className="section-label">06 // Initiate Contact</span>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-desc">
              Currently open to discuss Senior Software Engineer roles, high-scale mobile system architecture, and technical consulting.
            </p>
          </Column>
        </Row>

        <Row style={{ rowGap: '2rem' }}>
          {/* Direct Communication Tile */}
          <Column sm={4} md={8} lg={9}>
            <Tile style={{
              padding: '2rem',
              backgroundColor: 'var(--cds-layer-02)',
              border: '1px solid var(--cds-border-subtle)',
              height: '100%'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--cds-text-primary)',
                marginBottom: '1.5rem'
              }}>
                Direct Communication Channels
              </h3>

              {/* Email Block with Copy */}
              <div style={{
                padding: '1.25rem',
                backgroundColor: 'var(--cds-layer-01)',
                border: '1px solid var(--cds-border-subtle)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Email size={20} style={{ color: 'var(--cds-link-primary, #0f62fe)' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--cds-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Primary Email
                    </div>
                    <a
                      href={`mailto:${contactsData.email}`}
                      style={{
                        fontFamily: 'var(--cds-code-family)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--cds-text-primary)',
                        textDecoration: 'none'
                      }}
                    >
                      {contactsData.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Button
                    size="sm"
                    kind="tertiary"
                    renderIcon={copied ? CheckmarkOutline : Copy}
                    onClick={copyEmail}
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                  <Button
                    size="sm"
                    kind="primary"
                    href={`mailto:${contactsData.email}`}
                  >
                    Send Email
                  </Button>
                </div>
              </div>

              {/* Phone and Location */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'var(--cds-layer-01)',
                  border: '1px solid var(--cds-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <Phone size={20} style={{ color: 'var(--cds-link-primary, #0f62fe)' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--cds-text-secondary)', textTransform: 'uppercase' }}>Phone / WhatsApp</div>
                    <div style={{ fontFamily: 'var(--cds-code-family)', fontSize: '0.9375rem', color: 'var(--cds-text-primary)', fontWeight: 500 }}>
                      {contactsData.phone}
                    </div>
                  </div>
                </div>

                <div style={{
                  padding: '1rem',
                  backgroundColor: 'var(--cds-layer-01)',
                  border: '1px solid var(--cds-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <Location size={20} style={{ color: 'var(--cds-link-primary, #0f62fe)' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--cds-text-secondary)', textTransform: 'uppercase' }}>Location</div>
                    <div style={{ fontSize: '0.9375rem', color: 'var(--cds-text-primary)', fontWeight: 500 }}>
                      {contactsData.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* Copied Feedback Notification */}
              {copied && (
                <InlineNotification
                  kind="success"
                  title="Copied to clipboard"
                  subtitle={`${contactsData.email} is ready to paste.`}
                  hideCloseButton
                  lowContrast
                />
              )}
            </Tile>
          </Column>

          {/* Résumé & Profiles Tile */}
          <Column sm={4} md={8} lg={7}>
            <Tile style={{
              padding: '2rem',
              backgroundColor: 'var(--cds-layer-02)',
              border: '1px solid var(--cds-border-subtle)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--cds-text-primary)',
                  marginBottom: '1rem'
                }}>
                  Curriculum Vitae
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: 'var(--cds-text-secondary)',
                  marginBottom: '1.5rem'
                }}>
                  Detailed overview of 5+ years of engineering leadership, production project deliverables, technical stacks, and academic credentials.
                </p>

                <Button
                  kind="primary"
                  renderIcon={DocumentDownload}
                  href={headerData.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '100%', justifyContent: 'space-between', marginBottom: '2rem' }}
                >
                  Download Résumé (PDF)
                </Button>
              </div>

              {/* Social Profiles */}
              <div>
                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--cds-text-secondary)',
                  marginBottom: '0.75rem'
                }}>
                  Public Profiles & Code Repositories
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Button
                    size="sm"
                    kind="tertiary"
                    renderIcon={LogoGithub}
                    href={socialsData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    kind="tertiary"
                    renderIcon={LogoLinkedin}
                    href={socialsData.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    size="sm"
                    kind="ghost"
                    renderIcon={LogoTwitter}
                    href={socialsData.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter / X
                  </Button>
                </div>
              </div>
            </Tile>
          </Column>
        </Row>
      </FlexGrid>
    </section>
  )
}
