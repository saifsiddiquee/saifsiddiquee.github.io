import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

/**
 * About Component
 * Single Responsibility: Display career summary and quick facts
 */
function About({ data }) {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                </div>

                <div
                    ref={ref}
                    className={`about__content scroll-reveal ${isVisible ? 'visible' : ''}`}
                >
                    <div className="about__text">
                        <p className="about__summary">
                            {data.career_summary}
                        </p>

                        <div className="about__highlights">
                            <div className="about__highlight">
                                <span className="about__highlight-number text-gradient">5+</span>
                                <span className="about__highlight-label">Years Experience</span>
                            </div>
                            <div className="about__highlight">
                                <span className="about__highlight-number text-gradient">15+</span>
                                <span className="about__highlight-label">Projects Delivered</span>
                            </div>
                            <div className="about__highlight">
                                <span className="about__highlight-number text-gradient">10+</span>
                                <span className="about__highlight-label">Technologies Mastered</span>
                            </div>
                        </div>
                    </div>

                    <div className="about__interests">
                        <h3 className="about__interests-title">Interests & Activities</h3>
                        <div className="about__interests-list">
                            {data.interests_and_activities.map((interest, index) => (
                                <span key={index} className="tag">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
