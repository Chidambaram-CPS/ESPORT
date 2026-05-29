function SuccessModal({ squad, onClose }) {
  const tags = ['🔥 Stay Hydrated', '⚡ Practice Daily', '🎯 Aim True', '🛡 Team First'];

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-trophy">🏆</div>
        <div className="modal-title">SQUAD REGISTERED!</div>
        <div className="modal-squad">{squad}</div>
        <div className="modal-desc">
          Your squad has been successfully registered for the Free Fire Championship Series 2026.
        </div>

        <div
          style={{
            background: 'rgba(0,255,100,0.08)',
            border: '1px solid rgba(0,255,100,0.3)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              fontFamily: 'Rajdhani',
              fontWeight: 700,
              fontSize: 14,
              color: '#00ff64',
              marginBottom: 12,
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: 1.5,
            }}
          >
            💳 PAYMENT REQUIRED
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.95)',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: 14,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: '#333',
                marginBottom: 8,
                fontWeight: 700,
              }}
            >
              Scan QR Code to Pay via Google Pay
            </div>
            <div
              style={{
                width: '160px',
                height: '160px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '8px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '48px',
                fontWeight: 900,
              }}
            >
              📱
            </div>
          </div>

          <div
            style={{
              fontSize: 13,
              color: '#00ff64',
              textAlign: 'center',
              fontFamily: 'Rajdhani',
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            Amount: <span style={{ fontSize: 16 }}>₹40</span>
          </div>

          <div
            style={{
              fontSize: 11,
              color: '#00ff64',
              textAlign: 'center',
              fontFamily: 'Rajdhani',
              lineHeight: 1.6,
            }}
          >
            Scan the QR code above using Google Pay to complete your payment.
            <br />After payment, admin will verify and confirm your team.
          </div>
        </div>

        <div className="modal-tags">
          {tags.map((tag) => (
            <span key={tag} className="modal-tag">
              {tag}
            </span>
          ))}
        </div>
        <button className="modal-close" onClick={onClose}>
          CLOSE ✕
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
