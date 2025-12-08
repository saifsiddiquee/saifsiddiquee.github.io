import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';

/**
 * Projects Component
 * Single Responsibility: Display project cards with filtering
 */
function Projects({ data }) {
    const [ref, isVisible] = useScrollReveal();
    const [showAll, setShowAll] = useState(false);

    const featuredProjects = data.project_accomplishments.filter(p => p.featured);
    const otherProjects = data.project_accomplishments.filter(p => !p.featured);

    const displayedProjects = showAll
        ? data.project_accomplishments
        : featuredProjects.length > 0 ? featuredProjects : data.project_accomplishments.slice(0, 6);

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Some of the applications I've built and contributed to
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`projects__grid scroll-reveal ${isVisible ? 'visible' : ''}`}
                >
                    {displayedProjects.map((project, index) => (
                        <article
                            key={index}
                            className={`projects__card card ${project.featured ? 'projects__card--featured' : ''}`}
                        >
                            <div className="projects__card-header">
                                <div className="projects__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                {project.links && (
                                    <div className="projects__links">
                                        {project.links.play_store && (
                                            <a
                                                href={project.links.play_store}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="projects__link"
                                                aria-label="Play Store"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                                </svg>
                                            </a>
                                        )}
                                        {project.links.app_store && (
                                            <a
                                                href={project.links.app_store}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="projects__link"
                                                aria-label="App Store"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                            <h3 className="projects__title">{project.name}</h3>
                            <p className="projects__description">{project.description}</p>

                            {project.details && (
                                <ul className="projects__details">
                                    {project.details.slice(0, 4).map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                    {project.details.length > 4 && (
                                        <li>+ {project.details.length - 4} more features</li>
                                    )}
                                </ul>
                            )}
                        </article>
                    ))}
                </div>

                {otherProjects.length > 0 && !showAll && (
                    <div className="projects__show-more">
                        <button
                            className="btn btn-secondary"
                            onClick={() => setShowAll(true)}
                        >
                            Show All Projects ({otherProjects.length} more)
                        </button>
                    </div>
                )}

                {showAll && (
                    <div className="projects__show-more">
                        <button
                            className="btn btn-secondary"
                            onClick={() => setShowAll(false)}
                        >
                            Show Less
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;
