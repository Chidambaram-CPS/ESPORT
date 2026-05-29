function PrizeSection() {
  const prizes = [
    { rank: '1st Place', prize: '200 Rs', trophy: '🥇', color: '#ffd700', glow: 'rgba(255,215,0,0.35)' },
    { rank: '2nd Place', prize: '100 Rs', trophy: '🥈', color: '#c0c0c0', glow: 'rgba(192,192,192,0.35)' },
    { rank: '3rd Place', prize: '40 Rs', trophy: '🥉', color: '#cd7f32', glow: 'rgba(205,127,50,0.35)' },
    { rank: 'MVP Award', prize: '60 Rs', trophy: '⭐', color: '#b700ff', glow: 'rgba(183,0,255,0.35)' },
  ];

  return (
    <section className="prize-section">
      <div className="section-title">
        🏆 PRIZE <span style={{ color: 'var(--neon-red)' }}>POOL</span>
      </div>
      <div className="section-sub">Top squads take home the glory and the gold</div>
      <div className="prize-cards">
        {prizes.map((prize) => (
          <div
            key={prize.rank}
            className="prize-card"
            style={{
              border: `1px solid ${prize.glow.replace('0.35', '0.5')}`,
              boxShadow: `0 0 40px ${prize.glow}`,
              color: prize.color,
            }}
          >
            <div className="prize-icon">{prize.trophy}</div>
            <div className="prize-rank">{prize.rank}</div>
            <div className="prize-amount" style={{ textShadow: `0 0 25px ${prize.glow}` }}>
              {prize.prize}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PrizeSection;
