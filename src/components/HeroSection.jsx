import { useState } from 'react';

function HeroSection({ onRegister, onAdmin }) {
  const [infoModal, setInfoModal] = useState(null);

  const infoContent = {
    'Prize Pool': {
      title: '🏆 PRIZE POOL',
      content: [
        { rank: '🥇 1st Prize (Squad)', amount: '200 Rs' },
        { rank: '🥈 2nd Prize (Squad)', amount: '100 Rs' },
        { rank: '🥉 3rd Prize (Squad)', amount: '40 Rs' },
      ],
    },
    'Max Teams': {
      title: '👥 SQUAD INFORMATION',
      content: [
        { label: 'Squad Size', value: '4 Members per Squad' },
        { label: 'Max Teams', value: '12 Squads Total' },
        { label: 'Total Players', value: '48 Players (4 x 12)' },
        { label: 'Team Composition', value: 'Leader + 3 Team Members' },
      ],
    },
    Tournament: {
      title: '📅 TOURNAMENT SCHEDULE',
      content: [
        { label: 'Event Date', value: 'December 2026' },
        { label: 'Registration Deadline', value: 'Dec 1, 2026' },
        { label: 'Tournament Start', value: 'Dec 15, 2026' },
        { label: 'Finals', value: 'Dec 31, 2026' },
      ],
    },
    Platform: {
      title: '🎮 PLATFORM REQUIREMENTS',
      content: [
        { label: 'Game', value: 'Free Fire Mobile Only' },
        { label: 'Device', value: 'iOS & Android Only' },
        { label: 'Requirements', value: 'No Emulators or Scripts Allowed' },
        { label: 'Note', value: 'Only mobile gamers are allowed to participate' },
      ],
    },
    '& FAQ': {
      title: '📋 TOURNAMENT RULES',
      content: [
        { rule: '✅ No cheating or hacking allowed' },
        { rule: '✅ No scripts, mods, or external tools permitted' },
        { rule: '✅ No abusive language or behavior' },
        { rule: '✅ Fair play and sportsmanship mandatory' },
        { rule: '✅ Mobile gameplay only - No emulators' },
        { rule: '✅ All participants must follow game ToS' },
        { rule: '✅ Violation = Disqualification' },
      ],
    },
  };

  const stats = [
    { icon: '🏆', val: '200 Rs', lbl: 'Prize Pool', key: 'Prize Pool' },
    { icon: '👥', val: '12 Squads', lbl: 'Max Teams', key: 'Max Teams' },
    { icon: '📅', val: 'Dec 2026', lbl: 'Tournament', key: 'Tournament' },
    { icon: '🎮', val: 'Mobile FF', lbl: 'Platform', key: 'Platform' },
    { icon: '📋', val: 'Rules', lbl: '& FAQ', key: '& FAQ' },
  ];

  return (
    <section className="hero">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center top,rgba(183,0,255,0.13) 0%,transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '35%',
          background: 'linear-gradient(to top,var(--dark-bg),transparent)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 960, width: '100%' }}>
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span
            style={{
              fontFamily: 'Rajdhani',
              fontWeight: 700,
              fontSize: 13,
              color: 'var(--neon-orange)',
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            Registration Open · Dec 2026
          </span>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div className="hero-title-line" style={{ color: '#fff', textShadow: '0 0 50px rgba(255,255,255,0.15)' }}>
            FREE FIRE
          </div>
          <div className="hero-title-line hero-title-gradient">CHAMPIONSHIP</div>
          <div className="hero-title-line" style={{ color: '#fff', textShadow: '0 0 50px rgba(255,255,255,0.15)' }}>
            SERIES 2026
          </div>
        </div>

        <p className="hero-desc">
          Prove your supremacy. Register your squad. Claim the ultimate championship title and glory on the battleground.
          Only the strongest survive.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
          <button className="btn-primary" style={{ animation: 'pulse-glow 2.5s ease infinite' }} onClick={onRegister}>
            🔥 Register Your Squad
          </button>
          <button className="btn-secondary" onClick={onAdmin}>
            👁 Admin Panel
          </button>
        </div>

        <div className="hero-stats">
          {stats.map((item) => (
            <div
              key={item.key}
              className="hero-stat"
              onClick={() => setInfoModal(item.key)}
              style={{ cursor: 'pointer', transition: 'all 0.3s' }}
            >
              <div className="hero-stat-icon">{item.icon}</div>
              <div className="hero-stat-val">{item.val}</div>
              <div className="hero-stat-lbl">{item.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {infoModal && (
        <div className="modal-overlay" onClick={() => setInfoModal(null)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <div
              style={{
                fontFamily: 'Orbitron',
                fontWeight: 900,
                fontSize: 24,
                color: 'var(--neon-purple)',
                marginBottom: 24,
                textAlign: 'center',
                letterSpacing: 2,
                textShadow: '0 0 30px rgba(183,0,255,0.8)',
              }}
            >
              {infoContent[infoModal].title}
            </div>

            <div style={{ marginBottom: 24 }}>
              {infoContent[infoModal].content.map((item, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: 16,
                    paddingBottom: 12,
                    borderBottom: '1px solid rgba(183,0,255,0.2)',
                  }}
                >
                  {item.rank ? (
                    <>
                      <div
                        style={{
                          fontFamily: 'Rajdhani',
                          fontWeight: 700,
                          fontSize: 16,
                          color: 'var(--neon-purple)',
                          marginBottom: 4,
                        }}
                      >
                        {item.rank}
                      </div>
                      <div
                        style={{
                          fontSize: 18,
                          color: 'var(--neon-gold)',
                          fontFamily: 'Orbitron',
                          fontWeight: 700,
                        }}
                      >
                        {item.amount}
                      </div>
                    </>
                  ) : item.label ? (
                    <>
                      <div
                        style={{
                          fontSize: 12,
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: 1.5,
                          marginBottom: 4,
                        }}
                      >
                        {item.label}
                      </div>
                      <div style={{ fontSize: 16, color: '#fff', fontFamily: 'Rajdhani', fontWeight: 700 }}>
                        {item.value}
                      </div>
                    </>
                  ) : (
                    <div style={{ fontSize: 14, color: '#fff', fontFamily: 'Rajdhani', lineHeight: 1.8 }}>
                      {item.rule}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="modal-close" onClick={() => setInfoModal(null)}>
              CLOSE ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
