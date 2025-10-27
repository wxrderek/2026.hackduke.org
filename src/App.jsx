import HorizontalScrollSection from './components/HorizontalScrollSection';
import VerticalSection from './components/VerticalSection';
import './App.css';

function App() {
  // Panel data for first horizontal section
  const panels1 = [
    {
      id: 1,
      color: '#1abc9c',
      title: 'Discover',
      description: 'Embark on a journey of exploration and unlock new possibilities in the digital world.',
      emoji: '🚀'
    },
    {
      id: 2,
      color: '#3498db',
      title: 'Explore',
      description: 'Dive deep into innovative solutions that transform the way we create and connect.',
      emoji: '🌊'
    },
    {
      id: 3,
      color: '#9b59b6',
      title: 'Create',
      description: 'Build extraordinary experiences that captivate and inspire your audience.',
      emoji: '✨'
    },
    {
      id: 4,
      color: '#e67e22',
      title: 'Innovate',
      description: 'Push boundaries and reimagine what\'s possible with cutting-edge technology.',
      emoji: '💡'
    },
    {
      id: 5,
      color: '#2ecc71',
      title: 'Achieve',
      description: 'Reach your goals and celebrate success through dedication and creativity.',
      emoji: '🎯'
    }
  ];

  // Panel data for second horizontal section (gallery/portfolio)
  const panels2 = [
    {
      id: 6,
      color: '#e74c3c',
      title: 'Vision',
      description: 'See the future through a lens of creativity and endless potential.',
      emoji: '👁️'
    },
    {
      id: 7,
      color: '#34495e',
      title: 'Design',
      description: 'Craft beautiful interfaces that merge form and function seamlessly.',
      emoji: '🎨'
    },
    {
      id: 8,
      color: '#16a085',
      title: 'Develop',
      description: 'Transform ideas into reality with robust and scalable solutions.',
      emoji: '⚡'
    },
    {
      id: 9,
      color: '#f39c12',
      title: 'Launch',
      description: 'Deploy your creations and make an impact in the digital landscape.',
      emoji: '🌟'
    }
  ];

  return (
    <div className="app">
      {/* Section 1: Hero/Intro - Vertical */}
      <VerticalSection backgroundColor="#0f0f1e">
        <div className="subtitle">Welcome to the Future</div>
        <h1>Scroll Beyond Limits</h1>
        <p>
          Experience a revolutionary scrolling journey that alternates between
          vertical and horizontal navigation, creating an immersive storytelling experience.
        </p>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="arrow-down">↓</div>
        </div>
      </VerticalSection>

      {/* Section 2: First Horizontal - Sliding panels */}
      <HorizontalScrollSection panels={panels1} />

      {/* Section 3: About/Features - Vertical */}
      <VerticalSection backgroundColor="#1a1a2e">
        <h2>Built for Innovation</h2>
        <p>
          A modern approach to web scrolling that creates engaging,
          memorable experiences for your users.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <span className="icon">⚡</span>
            <h4>Performant</h4>
            <p>Optimized with CSS transforms and passive scroll listeners for smooth 60fps animations.</p>
          </div>
          <div className="feature-card">
            <span className="icon">📱</span>
            <h4>Responsive</h4>
            <p>Adapts seamlessly across desktop, tablet, and mobile devices with touch support.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🎯</span>
            <h4>Precise</h4>
            <p>Mathematical scroll mapping ensures accurate horizontal translation at every point.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🎨</span>
            <h4>Beautiful</h4>
            <p>Modern design with smooth transitions, shadows, and glassmorphism effects.</p>
          </div>
        </div>
      </VerticalSection>

      {/* Section 4: Second Horizontal - Gallery/Portfolio */}
      <HorizontalScrollSection panels={panels2} />

      {/* Section 5: Footer/Contact - Vertical */}
      <VerticalSection backgroundColor="#0f0f1e">
        <h2>Ready to Begin?</h2>
        <p>
          Create your own alternating scroll experience and captivate your audience
          with this innovative approach to web design.
        </p>
        <button className="cta-button">Get Started</button>
        <div className="footer-info">
          <p style={{ marginTop: '3rem', fontSize: '1rem', opacity: 0.6 }}>
            Built with React, Vite, and modern web technologies
          </p>
        </div>
      </VerticalSection>
    </div>
  );
}

export default App;
