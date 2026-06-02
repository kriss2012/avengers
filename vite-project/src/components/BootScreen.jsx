import React, { useState } from 'react'
import './BootScreen.css'

const BootScreen = ({ onBoot }) => {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const startBoot = () => {
    setLoading(true)
    // Play sound immediately on interaction
    const audio = new Audio('./sounds/assemble.mp3')
    audio.volume = 1.0; // Set to full volume as requested
    audio.play().catch(e => console.log('Audio playback failed:', e))

    // Simulate high-tech loading sequence
    let current = 0
    const interval = setInterval(() => {
      current += 2
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => {
          onBoot()
        }, 500)
      }
      setProgress(current)
    }, 30)
  }

  return (
    <div className="boot-overlay">
      <div className="boot-grid"></div>
      <div className="boot-container glass-panel">
        <div className="corner-decor top-left"></div>
        <div className="corner-decor top-right"></div>
        <div className="corner-decor bottom-left"></div>
        <div className="corner-decor bottom-right"></div>

        <div className="boot-logo-wrap">
          <img src="./images/logo.png" alt="Avengers Logo" className="boot-logo" />
        </div>

        <h1 className="hud-font title-pulse">S.H.I.E.L.D. MAINFRAME</h1>
        <p className="hud-font status-text">SECURE TERMINAL // ACCESS_RESTRICTED</p>

        {!loading ? (
          <button className="boot-btn hud-font" onClick={startBoot}>
            ACTIVATE_INTERFACE //
          </button>
        ) : (
          <div className="boot-loader-wrap">
            <div className="boot-progress-bar">
              <div className="boot-progress-inner" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="boot-loader-status hud-font">
              DECRYPTING_FILES: {progress}%
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BootScreen
