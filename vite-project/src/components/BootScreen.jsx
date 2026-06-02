import React, { useState } from 'react'
import './BootScreen.css'

const BootScreen = ({ onBoot }) => {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const startBoot = () => {
    setLoading(true)
    
    // Play J.A.R.V.I.S. welcome sound immediately on interaction
    const welcomeAudio = new Audio('./sounds/jarvis_welcome.mp3')
    welcomeAudio.volume = 1.0 // Set to full volume as requested
    welcomeAudio.play().catch(e => console.log('Welcome audio failed:', e))

    // Simulate high-tech loading sequence
    let current = 0
    const interval = setInterval(() => {
      current += 2
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        
        // Play the movie dialogue "Avengers... Assemble!" when decryption finishes
        const assembleAudio = new Audio('./sounds/assemble.mp3')
        assembleAudio.volume = 1.0 // Set to full volume as requested
        assembleAudio.play().catch(e => console.log('Assemble audio failed:', e))
        
        // Wait for the dialogue to play before launching dashboard
        setTimeout(() => {
          onBoot()
        }, 2200)
      }
      setProgress(current)
    }, 45) // Slightly slower pacing to align with audio tracks
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
