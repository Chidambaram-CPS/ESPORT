function Navbar({ onRegister, onAdmin }) {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <span style={{ color: 'var(--neon-red)' }}>FREE</span>
        <span style={{ color: 'var(--neon-purple)' }}>FIRE</span>
        <span
          style={{
            fontSize: 11,
            color: 'var(--text-muted)',
            marginLeft: 12,
            fontWeight: 400,
            letterSpacing: 3,
            fontFamily: 'Rajdhani',
          }}
        >
          ESPORTS
        </span>
      </div>
      <div className="nav-links" />
    </nav>
  );
}

export default Navbar;
