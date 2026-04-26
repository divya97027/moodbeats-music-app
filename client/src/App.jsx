import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import MusicPlayer from './components/MusicPlayer'
import './App.css'

function App() {
  const [songs, setSongs] = useState([])
  const [currentSong, setCurrentSong] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
  // Local songs fetch karo
  fetch('http://localhost:5000/api/songs')
    .then(res => res.json())
    .then(data => setSongs(data))
    .catch(err => console.log('Local songs error:', err))

  // Jamendo songs fetch karo
  fetch('http://localhost:5000/api/songs/jamendo')
    .then(res => res.json())
    .then(data => {
      // Jamendo songs ko 'jamendo' category dو
      const jamendoSongs = data.map(s => ({ ...s, category: 'jamendo' }))
      setSongs(prev => [...prev, ...jamendoSongs])
    })
    .catch(err => console.log('Jamendo error:', err))
}, [])

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sections = [
  { key: 'featured', label: '🎵 Recently Played' },
  { key: 'trending', label: '🔥 Trending Now' },
  { key: 'recent', label: '🆕 New Releases' },
  { key: 'jamendo', label: '🌍 Free World Music' },  // ← ye add karo
  { key: '90s', label: '🕺 90s Hits' },
  { key: 'bhakti', label: '🙏 Bhakti & Bhajan' },
  { key: 'retro', label: '📻 Retro Classics' },
]

  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} />

        {searchQuery ? (
          <>
            <p style={{ opacity: 0.6, fontSize: '0.85rem' }}>
              "{searchQuery}" ke liye {filteredSongs.length} results mile
            </p>
            {filteredSongs.length > 0 ? (
              <Cards songs={filteredSongs} onPlay={setCurrentSong} currentSong={currentSong} />
            ) : (
              <div style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.5 }}>
                <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '3rem' }}></i>
                <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>"{searchQuery}" nahi mila</p>
              </div>
            )}
          </>
        ) : (
          <>
            {sections.map(section => {
              const sectionSongs = songs.filter(s => s.category === section.key)
              if (sectionSongs.length === 0) return null
              return (
                <div key={section.key} style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ margin: 0 }}>{section.label}</h2>
                    <span style={{
  fontSize: '0.75rem',
  fontWeight: 700,
  color: 'white',
  background: 'rgba(255,255,255,0.1)',
  border: '1px solid rgba(255,255,255,0.2)',
  borderRadius: '100px',
  padding: '0.3rem 0.9rem',
  cursor: 'pointer',
  letterSpacing: '0.5px',
  transition: 'background 0.2s'
}}
onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.2)'}
onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
>
  View All →
</span>
                  </div>
                  <Cards
                    songs={sectionSongs}
                    onPlay={setCurrentSong}
                    currentSong={currentSong}
                  />
                </div>
              )
            })}
          </>
        )}

        {/* Footer */}
        <div style={{ padding: '2rem 0' }}>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', marginBottom: '2rem' }}></div>

          {/* Social Icons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            {['fa-facebook-f','fa-youtube','fa-x-twitter','fa-instagram','fa-reddit-alien'].map((icon, i) => (
              <a key={i} href="#" style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '0.9rem'
              }}>
                <i className={`fa-brands ${icon}`}></i>
              </a>
            ))}
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)', margin: '0 0.5rem' }}></div>
            {['fa-google-play','fa-apple'].map((icon, i) => (
              <a key={i} href="#" style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '1rem'
              }}>
                <i className={`fa-brands ${icon}`}></i>
              </a>
            ))}
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', marginBottom: '1.5rem' }}></div>

          {/* About links */}
          {['About Us','Terms & Conditions','Privacy Policy','FAQ'].map((item, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.75rem 1rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              cursor: 'pointer'
            }}>
              <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{item}</span>
              <i className="fa-solid fa-chevron-right" style={{ opacity: 0.5, fontSize: '0.8rem' }}></i>
            </div>
          ))}

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', margin: '1.5rem 0' }}></div>

          {/* Quicklinks */}
          <p style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', padding: '0 1rem' }}>Quicklinks</p>
          {['Albums','Genres','Artists','New Release','Trending Songs','Trending Albums','Old Songs','Podcasts','MoodBeats Hits','Latest Songs','Devotional Songs'].map((item, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.75rem 1rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              cursor: 'pointer'
            }}>
              <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{item}</span>
              <i className="fa-solid fa-chevron-down" style={{ opacity: 0.5, fontSize: '0.8rem' }}></i>
            </div>
          ))}

          {/* Copyright */}
          <p style={{
            textAlign: 'center', fontSize: '0.8rem',
            opacity: 0.5, marginTop: '2rem',
            paddingBottom: '6rem'
          }}>
            © MoodBeats 2026, All Rights Reserved
          </p>
        </div>

      </div>
      <MusicPlayer currentSong={currentSong} songs={songs} onSongChange={setCurrentSong} />
    </div>
  )
}

export default App