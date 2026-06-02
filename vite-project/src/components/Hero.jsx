import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const slides = [
  {
    title: 'IRON MAN',
    codename: 'TONY STARK',
    desc: `A visionary mind wrapped in cutting-edge armor. Powered by intellect, not superpowers. Tony Stark builds solutions where others see limits. Innovation, sacrifice, and responsibility define him. A hero forged by choice, not destiny.`,
    bg: 'linear-gradient(135deg, #180303 0%, #300606 50%, #030000 100%)',
    image: './images/a1.png',
    themeColor: '#e23c3c',
    number: '01'
  },
  {
    title: 'CAPTAIN AMERICA',
    codename: 'STEVE ROGERS',
    desc: `A symbol of hope in the face of chaos. Strength rooted in unwavering morals. Leads not by force, but by example. Loyal to truth, justice, and humanity. A soldier who never stops standing for what’s right.`,
    bg: 'linear-gradient(135deg, #020713 0%, #061938 50%, #010307 100%)',
    image: './images/a4.png',
    themeColor: '#4f46e5',
    number: '02'
  },
  {
    title: 'THOR',
    codename: 'THOR ODINSON',
    desc: `Born a god, tempered by humility. Wielder of Mjolnir and protector of realms. Strength guided by honor and loyalty. Thunder follows his command. A warrior learning what it truly means to be worthy.`,
    bg: 'linear-gradient(135deg, #02111a 0%, #08293d 50%, #010508 100%)',
    image: './images/a2.png',
    themeColor: '#06b6d4',
    number: '03'
  },
  {
    title: 'HULK',
    codename: 'BRUCE BANNER',
    desc: `An unstoppable force born of intellect and rage. Dr. Bruce Banner's scientific mind paired with the raw green giant. A protector of immense power, learning to balance brain and brawn to heal a broken world.`,
    bg: 'linear-gradient(135deg, #020d06 0%, #092a14 50%, #010402 100%)',
    image: './images/a5.png',
    themeColor: '#10b981',
    number: '04'
  },
  {
    title: 'BLACK WIDOW',
    codename: 'NATASHA ROMANOFF',
    desc: `A master spy and elite assassin. Armed with lethal skills, precision tactics, and a dark past she constantly seeks to redeem. Proof that humanity and heart are the greatest weapons of all.`,
    bg: 'linear-gradient(135deg, #120306 0%, #26060c 50%, #020001 100%)',
    image: './images/a6.png',
    themeColor: '#f43f5e',
    number: '05'
  },
  {
    title: 'HAWKEYE',
    codename: 'CLINT BARTON',
    desc: `The world's greatest marksman. Gifted with absolute focus and precision. A protector who never misses a shot, representing the human heart and reliability of the Avengers team.`,
    bg: 'linear-gradient(135deg, #0b0314 0%, #1c0930 50%, #030107 100%)',
    image: './images/a7.png',
    themeColor: '#8b5cf6',
    number: '06'
  },
  {
    title: 'SPIDER-MAN',
    codename: 'PETER PARKER',
    desc: `A friendly neighborhood hero with a heavy heart. Gifted with power, bound by responsibility. Balances courage, doubt, and sacrifice. Peter Parker proves that even ordinary lives can become extraordinary.`,
    bg: 'linear-gradient(135deg, #120202 0%, #260404 40%, #030c14 100%)',
    image: './images/a3.png',
    themeColor: '#ef4444',
    number: '07'
  },
  {
    title: 'DOCTOR STRANGE',
    codename: 'STEPHEN STRANGE',
    desc: `The Sorcerer Supreme and master of the mystic arts. Using magic, sling rings, and cosmic insight, Doctor Strange watches over the fabrics of reality, protecting the universe from unseen trans-dimensional evils.`,
    bg: 'linear-gradient(135deg, #160601 0%, #300e02 50%, #010000 100%)',
    image: './images/a8.png',
    themeColor: '#c2410c',
    number: '08'
  },
  {
    title: 'BLACK PANTHER',
    codename: "T'CHALLA",
    desc: `The sovereign king and protector of Wakanda. Heart-shaped herb enhancements paired with a vibranium kinetic suit. A symbol of royalty, unity, and strength, guiding both his nation and the Avengers.`,
    bg: 'linear-gradient(135deg, #040316 0%, #0b0933 50%, #010107 100%)',
    image: './images/a9.png',
    themeColor: '#6366f1',
    number: '09'
  },
  {
    title: 'ANT-MAN',
    codename: 'SCOTT LANG',
    desc: `A size-shifting hero operating in both micro and macro scales. Scott Lang utilizes Pym particles to bypass barriers, shrink, grow, and navigate the mysterious depths of the Quantum Realm.`,
    bg: 'linear-gradient(135deg, #140400 0%, #2c0e02 50%, #020100 100%)',
    image: './images/a10.png',
    themeColor: '#ea580c',
    number: '10'
  },
  {
    title: 'CAPTAIN MARVEL',
    codename: 'CAROL DANVERS',
    desc: `A cosmic powerhouse with Tesseract energy. Able to fly through space at lightspeed and project destructive energy blasts, Carol Danvers stands as a final deterrent against galactic threats.`,
    bg: 'linear-gradient(135deg, #1a0206 0%, #350611 50%, #020002 100%)',
    image: './images/a11.png',
    themeColor: '#e11d48',
    number: '11'
  },
  {
    title: 'NICK FURY',
    codename: 'NICK FURY',
    desc: `The tactical architect of the Avengers Initiative. Utilizing unmatched intelligence, strategic espionage, and state-of-the-art S.H.I.E.L.D. resources to protect the world from shadows.`,
    bg: 'linear-gradient(135deg, #07090b 0%, #151b21 50%, #010203 100%)',
    image: './images/a12.png',
    themeColor: '#475569',
    number: '12'
  },
  {
    title: 'FALCON',
    codename: 'SAM WILSON',
    desc: `A brave combat veteran soaring with mechanical wings. Harnessing advanced Stark technology and a noble heart, he takes to the sky to defend the helpless and bear the legacy of Captain America.`,
    bg: 'linear-gradient(135deg, #140202 0%, #2b0606 50%, #020000 100%)',
    image: './images/a13.png',
    themeColor: '#b91c1c',
    number: '13'
  },
  {
    title: 'WINTER SOLDIER',
    codename: 'BUCKY BARNES',
    desc: `A reformed super soldier with a vibranium arm. Forged in battle and brainwashed for espionage, Bucky Barnes now fights alongside the Avengers to clear his ledger and protect humanity.`,
    bg: 'linear-gradient(135deg, #080a0c 0%, #1a2228 50%, #010203 100%)',
    image: './images/a14.png',
    themeColor: '#64748b',
    number: '14'
  },
  {
    title: 'SCARLET WITCH',
    codename: 'WANDA MAXIMOFF',
    desc: `An extremely powerful magic user wielding reality-warping Chaos Magic. Capable of telekinesis, mind manipulation, and energy blasts, her raw power remains unmatched and highly volatile.`,
    bg: 'linear-gradient(135deg, #140202 0%, #2b0202 50%, #020000 100%)',
    image: './images/a15.png',
    themeColor: '#991b1b',
    number: '15'
  },
  {
    title: 'VISION',
    codename: 'VISION',
    desc: `A vibranium synthetic android powered by the Mind Stone. Combining advanced AI processing with molecular density control, Vision serves as an analytical protector of life on Earth.`,
    bg: 'linear-gradient(135deg, #020c0a 0%, #082923 50%, #010302 100%)',
    image: './images/a16.png',
    themeColor: '#0f766e',
    number: '16'
  }
]

const Hero = () => {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const scrollToDossiers = () => {
    const el = document.getElementById('dossiers')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home" style={{ background: slides[index].bg }}>
      <div className="grid-overlay"></div>
      
      {/* Background large text */}
      <div className="hero-bg-text-wrap">
        <h1 className="hero-bg-text select-none">{slides[index].title}</h1>
      </div>

      <div className="hero-content">
        {/* Left column info */}
        <div className="hero-info-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].number}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="info-wrap"
            >
              <div className="dossier-num-label hud-font" style={{ color: slides[index].themeColor }}>
                LOG_NO // {slides[index].number}
              </div>
              <h2 className="codename-sub hud-font">{slides[index].codename}</h2>
              <h1 className="hero-title hud-font text-glow" style={{ '--c-theme': slides[index].themeColor }}>
                {slides[index].title}
              </h1>
              <div className="divider-line" style={{ background: slides[index].themeColor }}></div>
              <p className="hero-desc">{slides[index].desc}</p>
              
              <button 
                className="action-btn hud-font" 
                onClick={scrollToDossiers}
                style={{ 
                  borderColor: slides[index].themeColor,
                  '--hover-bg': slides[index].themeColor
                }}
              >
                ACCESS_DOSSIER //
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right column character render */}
        <div className="hero-image-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].image}
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -100 }}
              transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
              className="render-wrap"
            >
              <img src={slides[index].image} alt={slides[index].title} className="character-render" />
              <div className="character-shadow" style={{ background: `radial-gradient(ellipse, ${slides[index].themeColor}55 0%, transparent 70%)` }}></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Nav Controls */}
      <div className="slider-nav">
        <button className="nav-arrow prev hud-font" onClick={prev}>
          ‹ PREV
        </button>
        <div className="slider-dots">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`dot ${i === index ? 'active' : ''}`}
              style={{ backgroundColor: i === index ? slides[index].themeColor : 'rgba(255,255,255,0.2)' }}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>
        <button className="nav-arrow next hud-font" onClick={next}>
          NEXT ›
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={scrollToDossiers}>
        <span className="scroll-text hud-font">SCROLL_DOWN</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  )
}

export default Hero
