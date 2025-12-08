import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolio.json';
import './App.css';

/**
 * App Component
 * Single Responsibility: Orchestrate all sections of the portfolio
 * Open/Closed: Easy to add new sections without modifying existing ones
 * Dependency Inversion: Data is injected into components via props
 */
function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero data={portfolioData} />
                <About data={portfolioData} />
                <Experience data={portfolioData} />
                <Projects data={portfolioData} />
                <Skills data={portfolioData} />
                <Education data={portfolioData} />
                <Contact data={portfolioData} />
            </main>
            <Footer data={portfolioData} />
        </div>
    );
}

export default App;
