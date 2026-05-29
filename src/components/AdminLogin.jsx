import { useState } from 'react';

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const ADMIN_USER = 'admin';
    const ADMIN_PASS = 'admin123';

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setError('');
      onLogin(true);
    } else {
      setError('Invalid username or password');
      setPassword('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="admin-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div
        style={{
          background: 'rgba(8,4,20,0.95)',
          border: '1px solid rgba(183,0,255,0.4)',
          borderRadius: '18px',
          padding: '60px 50px',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 0 60px rgba(183,0,255,0.15)',
          maxWidth: '420px',
          width: '90%',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔐</div>
        <div
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 900,
            fontSize: '28px',
            color: '#fff',
            marginBottom: '10px',
          }}
        >
          ADMIN LOGIN
        </div>
        <div
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: '14px',
            color: 'var(--text-muted)',
            marginBottom: '32px',
          }}
        >
          Enter your credentials to access the admin panel
        </div>

        {error && (
          <div
            style={{
              background: 'rgba(255,26,26,0.1)',
              border: '1px solid rgba(255,26,26,0.4)',
              borderRadius: '8px',
              padding: '12px',
              color: 'var(--neon-red)',
              fontSize: '13px',
              marginBottom: '20px',
              fontFamily: 'Rajdhani',
            }}
          >
            ⚠ {error}
          </div>
        )}

        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label
            style={{
              display: 'block',
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              color: 'var(--neon-purple)',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            👤 Username
          </label>
          <input
            type="text"
            placeholder="admin"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              width: '100%',
              padding: '13px 18px',
              borderRadius: '10px',
              background: 'rgba(8,4,22,0.8)',
              border: '1px solid rgba(183,0,255,0.25)',
              color: 'var(--text-primary)',
              fontFamily: 'Exo 2, sans-serif',
              fontSize: '15px',
              boxSizing: 'border-box',
              transition: 'all 0.3s',
            }}
            onFocus={(event) => (event.target.style.borderColor = 'var(--neon-purple)')}
            onBlur={(event) => (event.target.style.borderColor = 'rgba(183,0,255,0.25)')}
          />
        </div>

        <div style={{ marginBottom: '28px', textAlign: 'left' }}>
          <label
            style={{
              display: 'block',
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              color: 'var(--neon-purple)',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            🔑 Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              width: '100%',
              padding: '13px 18px',
              borderRadius: '10px',
              background: 'rgba(8,4,22,0.8)',
              border: '1px solid rgba(183,0,255,0.25)',
              color: 'var(--text-primary)',
              fontFamily: 'Exo 2, sans-serif',
              fontSize: '15px',
              boxSizing: 'border-box',
              transition: 'all 0.3s',
            }}
            onFocus={(event) => (event.target.style.borderColor = 'var(--neon-purple)')}
            onBlur={(event) => (event.target.style.borderColor = 'rgba(183,0,255,0.25)')}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #ff1a1a 0%, #8800dd 50%, #ff1a1a 100%)',
            backgroundSize: '200% 200%',
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            color: '#fff',
            letterSpacing: '2px',
            border: 'none',
            cursor: 'pointer',
            textTransform: 'uppercase',
            boxShadow: '0 0 30px rgba(183,0,255,0.3)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(event) => (event.target.style.boxShadow = '0 0 50px rgba(183,0,255,0.6)')}
          onMouseLeave={(event) => (event.target.style.boxShadow = '0 0 30px rgba(183,0,255,0.3)')}
        >
          🔓 LOGIN
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
