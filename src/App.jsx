import './App.css'
import landingSvg from './assets/landing.svg'
import applyPoster from './assets/apply_poster.svg'

function App() {
  return (
    <>
      {/* Landing page with SVG background */}
      <div className="landing-page">
        <img src={landingSvg} alt="HackDuke Landing" className="landing-svg" />

        {/* Apply button */}
        <button className="apply-button" onClick={() => console.log('Apply clicked')}>
          <img src={applyPoster} alt="Apply to HackDuke" />
        </button>
      </div>

      {/* Blank section below landing */}
      <div className="blank-section">

      </div>
    </>
  )
}

export default App
