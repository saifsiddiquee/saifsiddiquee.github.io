import './Hero.css';

/**
 * Hero Component
 * Single Responsibility: Display hero section with intro and CTAs
 */
function Hero({ data }) {
    const { name, title, location } = data.personal_details;

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" id="hero">
            <div className="hero__container container">
                <div className="hero__content">
                    <p className="hero__greeting animate-fade-in-up">
                        <span className="hero__wave">👋</span> Hello, I'm
                    </p>

                    <h1 className="hero__name animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {name.split(' ').map((word, i) => (
                            <span key={i}>
                                {i === 0 || i === 1 ? (
                                    <span className="text-gradient">{word}</span>
                                ) : (
                                    word
                                )}
                                {i < name.split(' ').length - 1 ? ' ' : ''}
                            </span>
                        ))}
                    </h1>

                    <h2 className="hero__title animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {title}
                    </h2>

                    <p className="hero__location animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {location}
                    </p>

                    <div className="hero__cta animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection('#projects')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            </svg>
                            View Projects
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => scrollToSection('#contact')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Get In Touch
                        </button>
                    </div>

                    <div className="hero__socials animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <a
                            href={data.personal_details.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-icon"
                            aria-label="GitHub"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href={`https://linkedin.com/in/${data.personal_details.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-icon"
                            aria-label="LinkedIn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a
                            href={data.personal_details.stackoverflow}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-icon"
                            aria-label="Stack Overflow"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__orb hero__orb--1"></div>
                    <div className="hero__orb hero__orb--2"></div>
                    <div className="hero__orb hero__orb--3"></div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel"></div>
                </div>
                <span>Scroll down</span>
            </div>
        </section>
    );
}

export default Hero;
