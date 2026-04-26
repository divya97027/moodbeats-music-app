import { useState } from 'react'

function Cards({ songs, onPlay, currentSong }) {
  const [hoveredId, setHoveredId] = useState(null)

  if (!songs || songs.length === 0) return null

  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      overflowX: 'auto',
      paddingBottom: '1rem',
      scrollbarWidth: 'none',
    }}>
      {songs.map(song => (
        <div
          key={song.id}
          onClick={() => onPlay(song)}
          onMouseEnter={() => setHoveredId(song.id)}
          onMouseLeave={() => setHoveredId(null)}
          style={{
            minWidth: '160px',
            maxWidth: '160px',
            background: '#181818',
            borderRadius: '8px',
            padding: '1rem',
            cursor: 'pointer',
            border: currentSong?.id === song.id
              ? '2px solid #1db954'
              : '2px solid transparent',
            transition: 'background 0.2s',
            backgroundColor: hoveredId === song.id ? '#282828' : '#181818'
          }}
        >
          {/* Image + hover play button */}
          <div style={{ position: 'relative', marginBottom: '0.75rem' }}>
            <img
              src={song.image}
              alt={song.title}
              style={{
                width: '100%',
                aspectRatio: '1',
                objectFit: 'cover',
                borderRadius: '6px',
                display: 'block'
              }}
            />
            {hoveredId === song.id && (
              <div style={{
                position: 'absolute',
                bottom: '8px', right: '8px',
                background: '#1db954',
                borderRadius: '50%',
                width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
              }}>
                <i className="fa-solid fa-play" style={{ color: 'black', fontSize: '12px', marginLeft: '2px' }}></i>
              </div>
            )}
          </div>

          {/* Title */}
          <p style={{
            margin: '0 0 0.25rem',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: currentSong?.id === song.id ? '#1db954' : 'white',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}>
            {song.title}
          </p>

          {/* Artist */}
          <p style={{
            margin: 0,
            fontSize: '0.75rem',
            opacity: 0.6,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}>
            {song.artist}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Cards