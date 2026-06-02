
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Dossier from './components/Dossier'
import Movies from './components/Movies'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Dossier />
      <Movies />
      
      {/* Interactive S.H.I.E.L.D. status footer */}
      <footer className="glass-panel" style={{ padding: '40px 60px', borderTop: '1px solid var(--border-color)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, #e23c3c, transparent)' }}></div>
        <p className="hud-font" style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '3px' }}>
          STARK_INDUSTRIES // SECURE_ACCESS_NODE_4920
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px' }}>
          © {new Date().getFullYear()} S.H.I.E.L.D. GLOBAL SECURITY INITIATIVE. ALL CHARACTER DOSSIERS DECLASSIFIED.
        </p>
      </footer>
    </>
  )
}

export default App
