import useScrollReveal from '../hooks/useScrollReveal';
import './Experience.css';

/**
 * Experience Component
 * Single Responsibility: Display work experience timeline
 */
function Experience({ data }) {
    const [ref, isVisible] = useScrollReveal();

    const renderExperience = (exp, index) => {
        // Handle nested titles structure (BRAC IT)
        if (exp.titles) {
            return exp.titles.map((role, roleIndex) => (
                <div
                    key={`${index}-${roleIndex}`}
                    className={`experience__item stagger-${roleIndex + 1}`}
                >
                    <div className="experience__timeline">
                        <div className="experience__dot"></div>
                        {roleIndex < exp.titles.length - 1 && <div className="experience__line"></div>}
                    </div>
                    <div className="experience__content card">
                        <div className="experience__header">
                            <div>
                                <h3 className="experience__title">{role.title}</h3>
                                <p className="experience__company">{exp.company}</p>
                            </div>
                            <span className="experience__dates">{role.dates}</span>
                        </div>

                        <div className="experience__technologies">
                            {role.technologies.map((tech, i) => (
                                <span key={i} className="tag">{tech}</span>
                            ))}
                        </div>

                        <ul className="experience__responsibilities">
                            {role.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ));
        }

        // Handle flat structure (Royalty Bangladesh)
        return (
            <div key={index} className={`experience__item stagger-${index + 1}`}>
                <div className="experience__timeline">
                    <div className="experience__dot"></div>
                </div>
                <div className="experience__content card">
                    <div className="experience__header">
                        <div>
                            <h3 className="experience__title">{exp.title}</h3>
                            <p className="experience__company">{exp.company}</p>
                        </div>
                        <span className="experience__dates">{exp.dates}</span>
                    </div>

                    <div className="experience__technologies">
                        {exp.technologies.map((tech, i) => (
                            <span key={i} className="tag">{tech}</span>
                        ))}
                    </div>

                    <ul className="experience__responsibilities">
                        {exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">
                        My professional journey building mobile applications
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`experience__list scroll-reveal ${isVisible ? 'visible' : ''}`}
                >
                    {data.work_experience.map((exp, index) => renderExperience(exp, index))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
