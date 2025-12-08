import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

/**
 * Contact Component
 * Single Responsibility: Display contact information and form
 */
function Contact({ data }) {
    const [ref, isVisible] = useScrollReveal();
    const { email, phone, linkedin, github, stackoverflow } = data.personal_details;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Open email client with form data
        const form = e.target;
        const name = form.name.value;
        const userEmail = form.email.value;
        const message = form.message.value;

        window.location.href = `mailto:${email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name}\nEmail: ${userEmail}\n\n${message}`)}`;
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to discuss opportunities? Feel free to reach out!
                    </p>
                </div>

                <div
                    ref={ref}
                    className={`contact__content scroll-reveal ${isVisible ? 'visible' : ''}`}
                >
                    <div className="contact__info">
                        <h3 className="contact__info-title">Let's Connect</h3>
                        <p className="contact__info-text">
                            I'm always interested in hearing about new projects, opportunities, and collaborations.
                        </p>

                        <div className="contact__links">
                            <a href={`mailto:${email}`} className="contact__link">
                                <div className="contact__link-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className="contact__link-content">
                                    <span className="contact__link-label">Email</span>
                                    <span className="contact__link-value">{email}</span>
                                </div>
                            </a>

                            <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="contact__link">
                                <div className="contact__link-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div className="contact__link-content">
                                    <span className="contact__link-label">Phone</span>
                                    <span className="contact__link-value">{phone}</span>
                                </div>
                            </a>

                            <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" className="contact__link">
                                <div className="contact__link-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                                <div className="contact__link-content">
                                    <span className="contact__link-label">LinkedIn</span>
                                    <span className="contact__link-value">@{linkedin}</span>
                                </div>
                            </a>
                        </div>

                        <div className="contact__socials">
                            <a href={github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href={stackoverflow} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="Stack Overflow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__form-group">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="contact__input"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="contact__input"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="message" className="contact__label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="contact__textarea"
                                placeholder="Your message..."
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary contact__submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
