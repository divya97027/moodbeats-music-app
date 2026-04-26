function Navbar({ searchQuery, onSearch }) {
  return (
    <div className="sticky-nav">
      <div className="nav-icons">
        <i className="fa-solid fa-chevron-left" style={{ opacity: 0.7, cursor: 'pointer', fontSize: '1.1rem', marginRight: '0.5rem' }}></i>
        <i className="fa-solid fa-chevron-right hide" style={{ opacity: 0.7, cursor: 'pointer', fontSize: '1.1rem' }}></i>
      </div>

      {/* Search bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#2a2a2a',
        borderRadius: '100px',
        padding: '0.4rem 1rem',
        width: '280px',
        border: '1px solid transparent',
      }}>
        <i className="fa-solid fa-magnifying-glass" style={{ opacity: 0.6, marginRight: '0.5rem', fontSize: '0.85rem' }}></i>
        <input
          type="text"
          placeholder="What do you want to listen to?"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            color: 'white',
            fontSize: '0.85rem',
            width: '100%',
          }}
        />
        {/* Clear button */}
        {searchQuery && (
          <i
            className="fa-solid fa-xmark"
            onClick={() => onSearch('')}
            style={{ opacity: 0.6, cursor: 'pointer', fontSize: '0.85rem' }}
          ></i>
        )}
      </div>

      <div className="sticky-nav-options">
        <button className="badge nav-items hide">Explore Premium</button>
        <button className="badge nav-items dark-badge">
          <i className="fa-regular fa-circle-down" style={{ marginRight: '5px' }}></i>
          Install App
        </button>
        <i className="fa-regular fa-user nav-items"></i>
      </div>
    </div>
  )
}

export default Navbar