import React from 'react'
import './Movies.css'

const movies = [
  {
    title: 'THE AVENGERS',
    year: '2012',
    date: 'May 4, 2012',
    director: 'Joss Whedon',
    boxOffice: '$1.518 Billion',
    trailer: 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
    color: '#e23c3c',
    code: 'INITIATIVE_2012',
    desc: 'Nick Fury of S.H.I.E.L.D. assembles a team of superheroes to save Earth from Loki and his alien army.'
  },
  {
    title: 'AGE OF ULTRON',
    year: '2015',
    date: 'May 1, 2015',
    director: 'Joss Whedon',
    boxOffice: '$1.405 Billion',
    trailer: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
    color: '#00d2ff',
    code: 'GLOBAL_DEFENSE_2015',
    desc: 'Tony Stark creates an artificial intelligence system named Ultron, which turns rogue and plans to eradicate humanity.'
  },
  {
    title: 'CIVIL WAR',
    year: '2016',
    date: 'May 6, 2016',
    director: 'Anthony & Joe Russo',
    boxOffice: '$1.153 Billion',
    trailer: 'https://www.youtube.com/watch?v=dKrVegVI0Us',
    color: '#3b82f6',
    code: 'DIVISION_2016',
    desc: 'Political involvement in the Avengers\' affairs causes a rift between Captain America and Iron Man, dividing the team into opposing factions.'
  },
  {
    title: 'INFINITY WAR',
    year: '2018',
    date: 'April 27, 2018',
    director: 'Anthony & Joe Russo',
    boxOffice: '$2.048 Billion',
    trailer: 'https://www.youtube.com/watch?v=QwievZ1Tx-8',
    color: '#a855f7',
    code: 'DECIMATION_2018',
    desc: 'The Avengers and their allies must sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation.'
  },
  {
    title: 'ENDGAME',
    year: '2019',
    date: 'April 26, 2019',
    director: 'Anthony & Joe Russo',
    boxOffice: '$2.798 Billion',
    trailer: 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
    color: '#fbbf24',
    code: 'RESURRECTION_2019',
    desc: 'After the devastating events of Infinity War, the remaining Avengers assemble once more to reverse Thanos\' actions.'
  }
]

const Movies = () => {
  return (
    <section className="movies-section" id="movies">
      <div className="section-header">
        <h2 className="hud-font">STARK_INDUSTRIES // ARCHIVE_LOGS</h2>
        <div className="header-line"></div>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.code} className="movie-card-container">
            <div className="movie-card">
              {/* Front of card */}
              <div className="card-face card-front" style={{ '--card-theme': movie.color }}>
                <div className="card-glow"></div>
                <div className="corner-decor top-left"></div>
                <div className="corner-decor top-right"></div>
                <div className="corner-decor bottom-left"></div>
                <div className="corner-decor bottom-right"></div>
                
                <div className="card-header">
                  <span className="code-tag hud-font">{movie.code}</span>
                  <span className="year-tag hud-font">{movie.year}</span>
                </div>
                
                <div className="card-body">
                  <h3 className="hud-font">{movie.title}</h3>
                  <div className="dossier-line"></div>
                  <p className="movie-desc">{movie.desc}</p>
                </div>
                
                <div className="card-footer">
                  <span className="hud-font hover-tip">ACCESS_DOSSIER ›</span>
                </div>
              </div>

              {/* Back of card */}
              <div className="card-face card-back" style={{ '--card-theme': movie.color }}>
                <div className="corner-decor top-left"></div>
                <div className="corner-decor top-right"></div>
                <div className="corner-decor bottom-left"></div>
                <div className="corner-decor bottom-right"></div>

                <h4 className="hud-font">MISSION_METRICS</h4>
                <div className="dossier-line"></div>

                <div className="metrics-list">
                  <div className="metric-item">
                    <span className="metric-label hud-font">DIRECTOR //</span>
                    <span className="metric-val">{movie.director}</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label hud-font">DEPLOYED //</span>
                    <span className="metric-val">{movie.date}</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label hud-font">VALUATION //</span>
                    <span className="metric-val font-glow" style={{ color: movie.color }}>{movie.boxOffice}</span>
                  </div>
                </div>

                <a 
                  href={movie.trailer} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="watch-button hud-font"
                  style={{ backgroundColor: movie.color }}
                >
                  PLAY_TRANSMISSION
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Movies
