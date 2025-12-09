import useScrollReveal from '../hooks/useScrollReveal';
import './Education.css';

/**
 * Education Component
 * Single Responsibility: Display education and publication
 */
function Education({ data }) {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section className="education section" id="education">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">
                        My academic background and research
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`education__content scroll-reveal ${isVisible ? 'visible' : ''}`}
                >
                    <div className="education__degrees">
                        {data.educational_qualifications.map((edu, index) => (
                            <div key={index} className={`education__card card stagger-${index + 1}`}>
                                <div className="education__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                    </svg>
                                </div>
                                <div className="education__details">
                                    <h3 className="education__degree">{edu.degree}</h3>
                                    <p className="education__institution">{edu.institution}</p>
                                    <div className="education__meta">
                                        <span className="education__dates">{edu.dates}</span>
                                        {/* <span className="education__cgpa">CGPA: {edu.cgpa}</span> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {data.publication && (
                        <div className="education__publication card">
                            <div className="education__publication-header">
                                <div className="education__publication-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </div>
                                <span className="education__publication-label">Research Publication</span>
                            </div>
                            <h3 className="education__publication-title">{data.publication.title}</h3>
                            <p className="education__publication-description">{data.publication.description}</p>
                            <a
                                href={data.publication.paper_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                View on IEEE
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Education;
