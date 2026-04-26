import { useState, useRef, useEffect } from 'react'

function MusicPlayer({ currentSong, songs, onSongChange }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [volume, setVolume] = useState(70)
  const audioRef = useRef(null)

 useEffect(() => {
  if (currentSong && audioRef.current) {
    audioRef.current.src = currentSong.audioUrl || ''
    audioRef.current.play()
    setIsPlaying(true)
    setProgress(0)
    setCurrentTime('0:00')
  }
}, [currentSong])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    const percent = (audio.currentTime / audio.duration) * 100
    setProgress(percent)
    const mins = Math.floor(audio.currentTime / 60)
    const secs = Math.floor(audio.currentTime % 60).toString().padStart(2, '0')
    setCurrentTime(`${mins}:${secs}`)
  }

  const handleSeek = (e) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    audio.currentTime = (e.target.value / 100) * audio.duration
    setProgress(e.target.value)
  }

  const handleVolume = (e) => {
    const val = e.target.value
    setVolume(val)
    if (audioRef.current) audioRef.current.volume = val / 100
  }

  const playNext = () => {
    if (!songs || !currentSong) return
    const idx = songs.findIndex(s => s.id === currentSong.id)
    const next = songs[(idx + 1) % songs.length]
    onSongChange(next)
  }

  const playPrev = () => {
    if (!songs || !currentSong) return
    const idx = songs.findIndex(s => s.id === currentSong.id)
    const prev = songs[(idx - 1 + songs.length) % songs.length]
    onSongChange(prev)
  }

  const iconStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.1rem',
    cursor: 'pointer',
    opacity: 0.7,
    padding: '0 0.75rem'
  }

  const playBtnStyle = {
    background: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0.5rem'
  }

  return (
    <div className="music-player" style={{ padding: '0 1.5rem' }}>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={playNext}
      />

      {/* Album info — left */}
      <div className="album" style={{ display: 'flex', alignItems: 'center', minWidth: '200px' }}>
        {currentSong ? (
          <>
            <img
              src={currentSong.image}
              alt=""
              style={{ height: '48px', width: '48px', borderRadius: '6px', objectFit: 'cover' }}
            />
            <div style={{ marginLeft: '0.75rem' }}>
              <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600 }}>{currentSong.title}</p>
              <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>{currentSong.artist}</p>
            </div>
            <i
              className="fa-regular fa-heart"
              style={{ marginLeft: '1rem', opacity: 0.7, cursor: 'pointer', fontSize: '0.9rem' }}
            ></i>
          </>
        ) : (
          <p style={{ opacity: 0.5, fontSize: '0.85rem' }}>Koi song select nahi hua</p>
        )}
      </div>

      {/* Player controls — center */}
      <div className="player" style={{ flex: 1, maxWidth: '500px' }}>
        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.4rem' }}>
          {/* Shuffle */}
          <button style={iconStyle}>
            <i className="fa-solid fa-shuffle"></i>
          </button>
          {/* Previous */}
          <button style={iconStyle} onClick={playPrev}>
            <i className="fa-solid fa-backward-step"></i>
          </button>
          {/* Play/Pause — main button */}
          <button style={playBtnStyle} onClick={togglePlay}>
            <i
              className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}
              style={{ color: 'black', marginLeft: isPlaying ? '0' : '2px' }}
            ></i>
          </button>
          {/* Next */}
          <button style={iconStyle} onClick={playNext}>
            <i className="fa-solid fa-forward-step"></i>
          </button>
          {/* Repeat */}
          <button style={iconStyle}>
            <i className="fa-solid fa-repeat"></i>
          </button>
        </div>

        {/* Progress bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.7rem', opacity: 0.7, minWidth: '35px', textAlign: 'right' }}>
            {currentTime}
          </span>
          <input
            type="range"
            min="0" max="100"
            value={progress}
            className="progress-bar"
            style={{ flex: 1 }}
            onChange={handleSeek}
          />
          <span style={{ fontSize: '0.7rem', opacity: 0.7, minWidth: '35px' }}>
            {currentSong?.duration || '0:00'}
          </span>
        </div>
      </div>

      {/* Volume — right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: '150px', justifyContent: 'flex-end' }}>
        <i
          className={`fa-solid ${volume == 0 ? 'fa-volume-xmark' : volume < 50 ? 'fa-volume-low' : 'fa-volume-high'}`}
          style={{ opacity: 0.7, fontSize: '0.9rem' }}
        ></i>
        <input
          type="range"
          min="0" max="100"
          value={volume}
          className="progress-bar"
          style={{ width: '90px' }}
          onChange={handleVolume}
        />
      </div>
    </div>
  )
}

export default MusicPlayer