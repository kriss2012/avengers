import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Dossier from './components/Dossier'
import Movies from './components/Movies'
import BootScreen from './components/BootScreen'

function App() {
  const [isBooted, setIsBooted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Initialize theme audio
    audioRef.current = new Audio('./sounds/theme.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.4 // Set clear, ambient volume
  }, [])

  const handleBoot = () => {
    setIsBooted(true)
    // Start theme music right after Cap's assemble quote completes
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log('Theme music play failed:', e))
    }
  }

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log('Theme music play failed:', e))
    }
  }

  return (
    <>
      {!isBooted && <BootScreen onBoot={handleBoot} />}
      
      {isBooted && (
        <>
          <Navbar isPlaying={isPlaying} toggleMusic={toggleMusic} />
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
      )}
    </>
  )
}

export default App
