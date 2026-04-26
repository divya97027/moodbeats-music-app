import { useState } from 'react'

function Sidebar() {
  const [showModal, setShowModal] = useState(false)
  const [playlistName, setPlaylistName] = useState('')
  const [playlists, setPlaylists] = useState([
    { id: 1, name: 'Liked Songs', icon: 'fa-heart', gradient: 'linear-gradient(135deg, #450af5, #c4efd9)', count: 24 },
    { id: 2, name: 'Favourites', icon: 'fa-star', gradient: 'linear-gradient(135deg, #e91e63, #ff9800)', count: 12 },
    { id: 3, name: 'Recently Played', icon: 'fa-clock-rotate-left', gradient: 'linear-gradient(135deg, #1db954, #191414)', count: 8 },
    { id: 4, name: 'My Playlist #1', icon: 'fa-music', gradient: 'linear-gradient(135deg, #3d5afe, #00b0ff)', count: 5 },
    { id: 5, name: 'Downloaded', icon: 'fa-download', gradient: 'linear-gradient(135deg, #607d8b, #90a4ae)', count: 3 },
  ])

  const handleCreate = () => {
    if (!playlistName.trim()) return
    const newPlaylist = {
      id: Date.now(),
      name: playlistName,
      icon: 'fa-music',
      gradient: 'linear-gradient(135deg, #3d5afe, #00b0ff)',
      count: 0
    }
    setPlaylists([...playlists, newPlaylist])
    setPlaylistName('')
    setShowModal(false)
  }

  return (
    <div className="sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', overflowY: 'auto' }}>

      {/* Create Playlist Modal */}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0,
          width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#282828',
            borderRadius: '12px',
            padding: '2rem',
            width: '340px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
          }}>
            <h3 style={{ margin: '0 0 1.5rem', fontSize: '1.3rem' }}>
  Create New Playlist
</h3>

            {/* Playlist name input */}
            <input
              type="text"
              placeholder="Enter playlist name..."
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
              autoFocus
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: '#3e3e3e',
                color: 'white',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box',
                marginBottom: '1.5rem'
              }}
            />

            {/* Quick name suggestions */}
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '0.5rem' }}>Suggestions:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Chill Vibes', 'Party Mix', 'Morning Mood', 'Late Night'].map(name => (
                  <button
                    key={name}
                    onClick={() => setPlaylistName(name)}
                    style={{
                      background: '#3e3e3e',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '100px',
                      color: 'white',
                      padding: '0.3rem 0.75rem',
                      fontSize: '0.78rem',
                      cursor: 'pointer'
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                onClick={() => { setShowModal(false); setPlaylistName('') }}
                style={{
                  background: 'none',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  borderRadius: '100px',
                  padding: '0.5rem 1.25rem',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                disabled={!playlistName.trim()}
                style={{
                  background: playlistName.trim() ? '#1db954' : '#535353',
                  border: 'none',
                  color: playlistName.trim() ? 'black' : 'white',
                  borderRadius: '100px',
                  padding: '0.5rem 1.25rem',
                  cursor: playlistName.trim() ? 'pointer' : 'not-allowed',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Nav */}
      <div className="nav">
        <div className="nav-option" style={{ opacity: 1 }}>
          <i className="fa-solid fa-house"></i>
          <a href="#">Home</a>
        </div>
        <div className="nav-option">
          <i className="fa-solid fa-magnifying-glass"></i>
          <a href="#">Search</a>
        </div>
      </div>

      {/* Library */}
      <div className="library" style={{ flex: 1 }}>
        <div className="options">
          <div className="lib-option nav-option">
            <i className="fa-solid fa-book"></i>
            <a href="#">Your Library</a>
          </div>
          <div className="icons">
            {/* + button — click karo toh modal khulega */}
            <i
              className="fa-solid fa-plus"
              onClick={() => setShowModal(true)}
              style={{ cursor: 'pointer', fontSize: '1.1rem' }}
              title="Naya playlist banao"
            ></i>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        {/* MY MUSIC section */}
        <div style={{ marginTop: '1rem' }}>
          <p style={{
            fontSize: '0.7rem', opacity: 0.5,
            textTransform: 'uppercase', letterSpacing: '1px',
            padding: '0 0.5rem', marginBottom: '0.5rem'
          }}>
            My Music
          </p>

          {playlists.map(playlist => (
            <div
              key={playlist.id}
              className="nav-option"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0.7rem', borderRadius: '0.5rem' }}
            >
              <div style={{
                width: '40px', height: '40px',
                background: playlist.gradient,
                borderRadius: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
              }}>
                <i className={`fa-solid ${playlist.icon}`} style={{ color: 'white', fontSize: '0.85rem' }}></i>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {playlist.name}
                </p>
                <p style={{ margin: 0, fontSize: '0.72rem', opacity: 0.6 }}>
                  Playlist • {playlist.count} songs
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '1rem 0' }}></div>

        {/* Create playlist box */}
        {/* <div className="box">
          <p className="box-p1">Create your first playlist</p>
          <p className="box-p2">It's easy, we'll help you</p>
          <button className="badge" onClick={() => setShowModal(true)}>
            Create playlist
          </button>
        </div> */}

      </div>
    </div>
  )
}

export default Sidebar