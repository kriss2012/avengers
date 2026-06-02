import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Dossier.css'

const dossiers = [
  {
    id: 'ironman',
    name: 'TONY STARK',
    codename: 'IRON MAN',
    clearance: 'LEVEL 9',
    status: 'DECEASED // HEROIC_SACRIFICE',
    color: '#e23c3c',
    image: './images/a1.png',
    tech: 'STARK MK-85 NANOTECH ARMOR, ARC REACTOR, AI ASSISTANCE (FRIDAY)',
    background: 'After a near-fatal injury and captivity, genius inventor Tony Stark built a high-tech suit of armor to protect the world. As the anchor of the Avengers, he eventually made the ultimate sacrifice to defeat Thanos.',
    stats: { intelligence: 100, strength: 85, speed: 85, durability: 90, energy: 95, combat: 80 }
  },
  {
    id: 'captainamerica',
    name: 'STEVE ROGERS',
    codename: 'CAPTAIN AMERICA',
    clearance: 'LEVEL 8',
    status: 'RETIRED // TIMELINE_DISPLACEMENT',
    color: '#4f46e5',
    image: './images/a4.png',
    tech: 'VIBRANIUM-STEEL ALLOY SHIELD, SUPER SOLDIER SERUM ENHANCEMENTS',
    background: 'Recipient of the Super-Soldier serum, Steve Rogers fought in WWII before being frozen for decades. He woke up to lead the Avengers with unmatched integrity, courage, and shield-slinging tactical genius.',
    stats: { intelligence: 75, strength: 70, speed: 65, durability: 75, energy: 20, combat: 100 }
  },
  {
    id: 'thor',
    name: 'THOR ODINSON',
    codename: 'THOR',
    clearance: 'CLASS_10 // COSMIC',
    status: 'ACTIVE // OFF-WORLD_DEVIATION',
    color: '#06b6d4',
    image: './images/a2.png',
    tech: 'MJOLNIR (RECONSTRUCTED), STORMBREAKER, THUNDER/LIGHTNING MANIFESTATION',
    background: 'The Asgardian God of Thunder, Thor was cast out to Earth to learn humility. Tempered by sorrow and loss, he wields storm-summoning weapons and commands the electric fury of the heavens.',
    stats: { intelligence: 65, strength: 100, speed: 90, durability: 95, energy: 100, combat: 90 }
  },
  {
    id: 'hulk',
    name: 'BRUCE BANNER',
    codename: 'HULK',
    clearance: 'LEVEL 8',
    status: 'ACTIVE // INTEGRATED_SYNAPSE',
    color: '#10b981',
    image: './images/a5.png',
    tech: 'GAMMA RADIATION BIOLOGY, NANO-MOLECULAR REGENERATION, STARK TECH GAUNTLET ADAPTABILITIES',
    background: 'Dr. Bruce Banner was caught in a blast of gamma radiation, transforming him into the raw, green behemoth of pure rage. He eventually merged Banner\'s intellect with the Hulk\'s brute strength.',
    stats: { intelligence: 98, strength: 100, speed: 70, durability: 100, energy: 85, combat: 75 }
  },
  {
    id: 'blackwidow',
    name: 'NATASHA ROMANOFF',
    codename: 'BLACK WIDOW',
    clearance: 'LEVEL 9',
    status: 'DECEASED // VORMIR_EXCHANGE',
    color: '#f43f5e',
    image: './images/a6.png',
    tech: 'WIDOW\'S BITE ELECTRO-SHOCKERS, HIGH-TECH DUAL BATONS, STEALTH INFILTRATION GEAR',
    background: 'A former KGB assassin trained in the infamous Red Room, Natasha Romanoff defected to S.H.I.E.L.D. to clear the red in her ledger. She sacrificed her life to secure the Soul Stone for the universe.',
    stats: { intelligence: 85, strength: 50, speed: 60, durability: 55, energy: 30, combat: 95 }
  },
  {
    id: 'hawkeye',
    name: 'CLINT BARTON',
    codename: 'HAWKEYE',
    clearance: 'LEVEL 8',
    status: 'ACTIVE // SEMI-RETIRED',
    color: '#8b5cf6',
    image: './images/a7.png',
    tech: 'STARK TECH SPECIALIZED BOW & TRICK ARROWS, RONIN KATANA, TACTICAL VISOR',
    background: 'A master marksman who never misses, Clint Barton is S.H.I.E.L.D.\'s premier archer. After losing his family to the snap, he operated briefly as the lethal Ronin before aiding in the universe\'s salvation.',
    stats: { intelligence: 70, strength: 50, speed: 55, durability: 55, energy: 20, combat: 90 }
  },
  {
    id: 'spiderman',
    name: 'PETER PARKER',
    codename: 'SPIDER-MAN',
    clearance: 'LEVEL 7',
    status: 'ACTIVE // IDENTITY_RESTORED',
    color: '#ef4444',
    image: './images/a3.png',
    tech: 'STARK MK-85 STRETCH SUIT, WEB-SHOOTERS, NANOTECH IRON SPIDER ARMOR',
    background: 'A high school student bitten by a radioactive spider, Peter Parker balances adolescent life with defending New York. Under Tony Stark\'s guidance, he evolved into a brave defender and core Avenger.',
    stats: { intelligence: 90, strength: 80, speed: 85, durability: 80, energy: 45, combat: 80 }
  },
  {
    id: 'doctorstrange',
    name: 'STEPHEN STRANGE',
    codename: 'DOCTOR STRANGE',
    clearance: 'LEVEL 8 // MYSTIC',
    status: 'ACTIVE // SANCTUM_PROTECTOR',
    color: '#c2410c',
    image: './images/a8.png',
    tech: 'EYE OF AGAMOTTO, CLOAK OF LEVITATION, SLING RING, ELDRITCH MAGIC',
    background: 'A brilliant but arrogant neurosurgeon who discovered the mystic arts after a career-ending car accident. He rose to become the Sorcerer Supreme, guarding reality against mystical threats.',
    stats: { intelligence: 100, strength: 55, speed: 65, durability: 60, energy: 100, combat: 85 }
  },
  {
    id: 'blackpanther',
    name: 'T\'CHALLA',
    codename: 'BLACK PANTHER',
    clearance: 'LEVEL 9 // SOVEREIGN',
    status: 'DECEASED // SOUL_REALM',
    color: '#6366f1',
    image: './images/a9.png',
    tech: 'VIBRANIUM NANO-WEAVE SUIT, KINETIC ENERGY ABSORPTION/RELEASE, HEART-SHAPED HERB ENHANCEMENTS',
    background: 'The King and sworn protector of Wakanda. Empowered by the heart-shaped herb and utilizing state-of-the-art vibranium technology, T\'Challa guarded his nation and fought alongside the Avengers to save the cosmos.',
    stats: { intelligence: 90, strength: 80, speed: 80, durability: 85, energy: 35, combat: 98 }
  },
  {
    id: 'antman',
    name: 'SCOTT LANG',
    codename: 'ANT-MAN',
    clearance: 'LEVEL 7',
    status: 'ACTIVE // QUANTUM_DIVERGENT',
    color: '#ea580c',
    image: './images/a10.png',
    tech: 'PYM PARTICLE SUIT, EMP COMMUNICATION HELMET, QUANTUM TUNNELING DEVICES',
    background: 'A former thief who inherited the Ant-Man suit from Hank Pym. With the ability to shrink in size but increase in strength, or grow into a giant, he played a critical role in discovering the key to time travel.',
    stats: { intelligence: 80, strength: 60, speed: 60, durability: 65, energy: 30, combat: 75 }
  },
  {
    id: 'captainmarvel',
    name: 'CAROL DANVERS',
    codename: 'CAPTAIN MARVEL',
    clearance: 'CLASS_10 // COSMIC',
    status: 'ACTIVE // DEEP-SPACE_ASSIGNMENT',
    color: '#e11d48',
    image: './images/a11.png',
    tech: 'KREE TRANS-VIRAL GENETIC ENHANCEMENT, BINARY ENERGY FORMATION',
    background: 'An ex-U.S. Air Force pilot exposed to the Tesseract\'s energy, transforming her into one of the universe\'s most powerful heroes. She protects the galaxy, returning to Earth to turn the tide against Thanos.',
    stats: { intelligence: 75, strength: 100, speed: 95, durability: 98, energy: 100, combat: 85 }
  },
  {
    id: 'nickfury',
    name: 'NICK FURY',
    codename: 'NICK FURY',
    clearance: 'LEVEL 10 // COMMANDER',
    status: 'ACTIVE // SABER_COSMIC_STATION',
    color: '#475569',
    image: './images/a12.png',
    tech: 'TACTICAL FIREARMS, HOLOGRAPHIC CLOAKING DEPLOYER, S.H.I.E.L.D. COMMAND PROTOCOLS',
    background: 'The legendary former Director of S.H.I.E.L.D. who conceived and assembled the original Avengers Initiative. He continues to run global and cosmic security operations from deep space.',
    stats: { intelligence: 95, strength: 55, speed: 50, durability: 60, energy: 10, combat: 85 }
  },
  {
    id: 'falcon',
    name: 'SAM WILSON',
    codename: 'FALCON',
    clearance: 'LEVEL 8',
    status: 'ACTIVE // CAPTAIN_AMERICA_LEGACY',
    color: '#b91c1c',
    image: './images/a13.png',
    tech: 'EXO-7 FALCON WINGS (UPGRADED VIBRANIUM FEATHERS), REDWING DRONE, STARK TACTICAL GOGGLES',
    background: 'An ex-military pararescue specialist who became Captain America\'s loyal ally. He officially accepted the shield and legacy of Steve Rogers, taking flight as the new Captain America.',
    stats: { intelligence: 75, strength: 60, speed: 80, durability: 65, energy: 25, combat: 90 }
  },
  {
    id: 'wintersoldier',
    name: 'BUCKY BARNES',
    codename: 'WINTER SOLDIER',
    clearance: 'LEVEL 8',
    status: 'ACTIVE // REHABILITATED',
    color: '#64748b',
    image: './images/a14.png',
    tech: 'VIBRANIUM CYBERNETIC ARM, TACTICAL COMBAT ARSENAL, HYDRA SUPER SOLDIER ENHANCEMENTS',
    background: 'Steve Rogers\' childhood friend Bucky Barnes, captured and brainwashed by HYDRA into a lethal assassin. Now fully rehabilitated, he fights alongside the heroes using his advanced vibranium arm.',
    stats: { intelligence: 70, strength: 80, speed: 70, durability: 80, energy: 10, combat: 95 }
  },
  {
    id: 'scarletwitch',
    name: 'WANDA MAXIMOFF',
    codename: 'SCARLET WITCH',
    clearance: 'LEVEL 9 // DANGER_THREAT',
    status: 'UNKNOWN // MOUNT_WUNDAGORE',
    color: '#991b1b',
    image: './images/a15.png',
    tech: 'CHAOS MAGIC MANIFESTATION, TELEKINESIS, TELEPATHIC MIND WARPING',
    background: 'Subjected to HYDRA experiments with the Mind Stone, Wanda Maximoff gained reality-altering Chaos Magic. Tempered by severe grief, she holds power capable of single-handedly dismantling threats.',
    stats: { intelligence: 80, strength: 65, speed: 70, durability: 70, energy: 100, combat: 85 }
  },
  {
    id: 'vision',
    name: 'VISION',
    codename: 'VISION',
    clearance: 'LEVEL 9',
    status: 'DECEASED // SYNAPSE_RECONSTRUCTION',
    color: '#0f766e',
    image: './images/a16.png',
    tech: 'MIND STONE ENHANCED MATRIX, VIBRANIUM-SYNTHETIC BODY, DENSITY CONTROL',
    background: 'A synthetic android constructed by Tony Stark and Bruce Banner, powered by the Mind Stone and J.A.R.V.I.S. code. He fought for peace before his destruction at the hands of Thanos.',
    stats: { intelligence: 95, strength: 90, speed: 85, durability: 95, energy: 90, combat: 80 }
  }
]

const Dossier = () => {
  const [selectedChar, setSelectedChar] = useState(null)

  return (
    <section className="dossier-section" id="dossiers">
      <div className="section-header">
        <h2 className="hud-font">S.H.I.E.L.D. // PERSONNEL_DATABASE</h2>
        <div className="header-line"></div>
      </div>

      <div className="dossier-grid">
        {dossiers.map((char) => (
          <div 
            key={char.id} 
            className="dossier-card glass-panel glow-border"
            style={{ '--c-theme': char.color, '--c-theme-glow': char.color + '33' }}
            onClick={() => setSelectedChar(char)}
          >
            <div className="corner-decor top-left"></div>
            <div className="corner-decor top-right"></div>
            <div className="corner-decor bottom-left"></div>
            <div className="corner-decor bottom-right"></div>

            <div className="card-image-wrap">
              <img src={char.image} alt={char.codename} />
            </div>

            <div className="card-info">
              <span className="clearance-tag hud-font">{char.clearance}</span>
              <h3 className="hud-font">{char.codename}</h3>
              <p className="real-name">{char.name}</p>
            </div>
            
            <div className="card-hover-hint hud-font">
              VIEW_FILES //
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dossier Viewer */}
      <AnimatePresence>
        {selectedChar && (
          <motion.div 
            className="dossier-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedChar(null)}
          >
            <motion.div 
              className="dossier-modal-content glass-panel"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              style={{ '--c-theme': selectedChar.color }}
            >
              <div className="hud-grid-background"></div>
              <button className="close-btn hud-font" onClick={() => setSelectedChar(null)}>CLOSE_X</button>

              <div className="modal-body">
                {/* Left Render */}
                <div className="modal-left">
                  <div className="character-hologram">
                    <img src={selectedChar.image} alt={selectedChar.codename} />
                    <div className="holo-base"></div>
                    <div className="holo-ring animate-rotate"></div>
                  </div>
                </div>

                {/* Right Details */}
                <div className="modal-right">
                  <div className="dossier-meta">
                    <span className="meta-tag clearance-label hud-font">{selectedChar.clearance} CLEARANCE</span>
                    <h2 className="hud-font text-glow">{selectedChar.codename}</h2>
                    <p className="meta-sub">REAL_NAME: {selectedChar.name}</p>
                    <p className="meta-status hud-font">STATUS: <span className="status-val">{selectedChar.status}</span></p>
                  </div>

                  <div className="modal-dossier-line"></div>

                  <div className="dossier-block">
                    <h4 className="hud-font">BIOGRAPHICAL_OVERVIEW</h4>
                    <p className="dossier-bio">{selectedChar.background}</p>
                  </div>

                  <div className="dossier-block">
                    <h4 className="hud-font">TACTICAL_TECHNOLOGY</h4>
                    <p className="dossier-tech">{selectedChar.tech}</p>
                  </div>

                  <div className="modal-dossier-line"></div>

                  <div className="dossier-block">
                    <h4 className="hud-font">TACTICAL_POWER_GRID</h4>
                    <div className="power-grid">
                      {Object.entries(selectedChar.stats).map(([stat, val]) => (
                        <div key={stat} className="stat-row">
                          <span className="stat-label hud-font">{stat.toUpperCase()}</span>
                          <div className="stat-bar-outer">
                            <motion.div 
                              className="stat-bar-inner"
                              initial={{ width: 0 }}
                              animate={{ width: `${val}%` }}
                              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                              style={{ backgroundColor: selectedChar.color, boxShadow: `0 0 10px ${selectedChar.color}` }}
                            ></motion.div>
                          </div>
                          <span className="stat-val hud-font">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Dossier
