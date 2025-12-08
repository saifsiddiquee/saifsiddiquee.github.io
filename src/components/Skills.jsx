import useScrollReveal from '../hooks/useScrollReveal';
import './Skills.css';

/**
 * Skills Component
 * Single Responsibility: Display technical and professional skills
 */
function Skills({ data }) {
    const [ref, isVisible] = useScrollReveal();

    // Group technical skills by category
    const skillsByCategory = data.technical_skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill.name);
        return acc;
    }, {});

    const categoryIcons = {
        'Mobile': '📱',
        'Language': '💻',
        'Cross-Platform': '🌐',
        'Architecture': '🏗️',
        'Database': '🗄️',
        'Backend': '⚙️',
        'Tools': '🔧',
        'DevOps': '🚀'
    };

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Skills & Expertise</h2>
                    <p className="section-subtitle">
                        Technologies and tools I work with
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`skills__content scroll-reveal ${isVisible ? 'visible' : ''}`}
                >
                    <div className="skills__technical">
                        <h3 className="skills__category-title">Technical Skills</h3>
                        <div className="skills__categories">
                            {Object.entries(skillsByCategory).map(([category, skills], index) => (
                                <div key={category} className={`skills__category stagger-${index + 1}`}>
                                    <div className="skills__category-header">
                                        <span className="skills__category-icon">{categoryIcons[category] || '📌'}</span>
                                        <span className="skills__category-name">{category}</span>
                                    </div>
                                    <div className="skills__tags">
                                        {skills.map((skill, i) => (
                                            <span key={i} className="skills__tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills__professional">
                        <h3 className="skills__category-title">Professional Skills</h3>
                        <div className="skills__list">
                            {data.professional_skills.map((skill, index) => (
                                <div key={index} className="skills__item">
                                    <span className="skills__bullet">▹</span>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
