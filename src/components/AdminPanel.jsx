import { useState } from 'react';
import { formatDateTime } from '../utils/helpers.js';
import { DEMO_MODE } from '../constants/settings.js';

function AdminPanel({ regs, onDelete, onVerifyPayment, onAllowCompetition, onBack, onLogout }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [delId, setDelId] = useState(null);

  const filtered = regs.filter((registration) => {
    const query = search.toLowerCase();
    const matchesQuery =
      !query ||
      registration.squadName?.toLowerCase().includes(query) ||
      registration.leaderName?.toLowerCase().includes(query) ||
      registration.uid?.includes(query) ||
      registration.igName?.toLowerCase().includes(query) ||
      registration.phone?.includes(query);

    const matchesFilter =
      filter === 'all' ||
      (filter === 'solo' && registration.players === '1') ||
      (filter === 'duo' && registration.players === '2') ||
      (filter === 'trio' && registration.players === '3') ||
      (filter === 'squad' && registration.players === '4');

    return matchesQuery && matchesFilter;
  });

  const counts = {
    total: regs.length,
    solo: regs.filter((registration) => registration.players === '1').length,
    duo: regs.filter((registration) => registration.players === '2').length,
    trio: regs.filter((registration) => registration.players === '3').length,
    squad: regs.filter((registration) => registration.players === '4').length,
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-header">
        <button className="admin-back" onClick={onBack}>
          ← Back to Home
        </button>
        <div className="admin-title-block">
          <div className="admin-title">
            ⚔️ ADMIN <span style={{ color: 'var(--neon-purple)' }}>PANEL</span>
          </div>
          <div className="admin-subtitle">Manage all registered squads · Demo Mode: {DEMO_MODE ? 'ON' : 'OFF'}</div>
        </div>
        <button
          className="admin-back"
          onClick={onLogout}
          style={{
            marginLeft: 'auto',
            background: 'rgba(255,26,26,0.15)',
            borderColor: 'rgba(255,26,26,0.4)',
            color: 'var(--neon-red)',
          }}
        >
          🚪 LOGOUT
        </button>
      </div>

      <div className="stats-bar">
        {[
          { lbl: 'Total Squads', val: counts.total },
          { lbl: 'Full Squads', val: counts.squad },
          { lbl: 'Trios', val: counts.trio },
          { lbl: 'Duos', val: counts.duo },
          { lbl: 'Solos', val: counts.solo },
        ].map((stat) => (
          <div key={stat.lbl} className="stat-card">
            <div className="stat-card-val">{stat.val}</div>
            <div className="stat-card-lbl">{stat.lbl}</div>
          </div>
        ))}
      </div>

      <div className="admin-controls">
        <div className="admin-search-wrap">
          <span className="admin-search-icon">🔍</span>
          <input
            className="admin-search"
            placeholder="Search by squad, leader, UID, IGN or phone…"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>

      <div className="filter-group" style={{ marginBottom: 20 }}>
        <span className="filter-label">Filter:</span>
        {['all', 'solo', 'duo', 'trio', 'squad'].map((option) => (
          <button key={option} className={`filter-btn${filter === option ? ' active' : ''}`} onClick={() => setFilter(option)}>
            {option}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">😶</div>
          <div className="empty-text">No registrations found</div>
        </div>
      ) : (
        <div className="table-wrap">
          <table className="reg-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Squad Name</th>
                <th>Leader Name</th>
                <th>Free Fire UID</th>
                <th>IGN</th>
                <th>Phone</th>
                <th>Players</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Team Members</th>
                <th>Registered At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((registration, index) => (
                <tr key={registration.id} style={{ animationDelay: `${index * 0.04}s` }}>
                  <td style={{ color: 'var(--text-muted)', fontSize: 12 }}>{index + 1}</td>
                  <td>
                    <span className="squad-name">{registration.squadName}</span>
                  </td>
                  <td>{registration.leaderName}</td>
                  <td>
                    <span className="uid-text">{registration.uid}</span>
                  </td>
                  <td style={{ color: 'var(--text-muted)' }}>{registration.igName}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{registration.phone}</td>
                  <td>
                    <span className="players-badge">{registration.players}P</span>
                  </td>
                  <td style={{ fontSize: 12, fontWeight: 700 }}>
                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: registration.paymentStatus === 'paid' ? 'rgba(0,255,100,0.15)' : 'rgba(255,26,26,0.15)',
                        color: registration.paymentStatus === 'paid' ? '#00ff64' : 'var(--neon-red)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {registration.paymentStatus === 'paid' ? '✅ Paid' : '⏳ Pending'}
                    </span>
                  </td>
                  <td style={{ fontSize: 12, fontWeight: 700 }}>
                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: registration.competitionAllowed ? 'rgba(0,255,100,0.15)' : 'rgba(183,0,255,0.15)',
                        color: registration.competitionAllowed ? '#00ff64' : 'var(--neon-purple)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {registration.competitionAllowed ? '✅ Allowed' : '⏳ Pending'}
                    </span>
                  </td>
                  <td style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                    {registration.teamMembers && registration.teamMembers.length > 0 ? registration.teamMembers.join(', ') : '—'}
                  </td>
                  <td>
                    <span className="time-text">{formatDateTime(registration.time)}</span>
                  </td>
                  <td style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
                    {registration.paymentStatus === 'pending' && (
                      <button
                        style={{
                          padding: '6px 12px',
                          borderRadius: '6px',
                          background: 'linear-gradient(135deg, #00a8ff, #0080cc)',
                          color: '#fff',
                          fontFamily: 'Rajdhani',
                          fontWeight: 700,
                          fontSize: 11,
                          cursor: 'pointer',
                          border: 'none',
                          textTransform: 'uppercase',
                          transition: 'all 0.3s',
                        }}
                        onClick={() => onVerifyPayment(registration.id)}
                        title="Mark payment as verified"
                      >
                        💳 Verify
                      </button>
                    )}
                    {registration.paymentStatus === 'paid' && !registration.competitionAllowed && (
                      <button
                        style={{
                          padding: '6px 12px',
                          borderRadius: '6px',
                          background: 'linear-gradient(135deg, #00ff64, #00cc52)',
                          color: '#000',
                          fontFamily: 'Rajdhani',
                          fontWeight: 700,
                          fontSize: 11,
                          cursor: 'pointer',
                          border: 'none',
                          textTransform: 'uppercase',
                          transition: 'all 0.3s',
                        }}
                        onClick={() => onAllowCompetition(registration.id)}
                        title="Allow this squad for competition"
                      >
                        ✓ Allow
                      </button>
                    )}
                    <button className="delete-btn" onClick={() => setDelId(registration.id)} title="Delete registration">
                      🗑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {delId && (
        <div className="confirm-overlay">
          <div className="confirm-card">
            <div className="confirm-icon">⚠️</div>
            <div className="confirm-title">DELETE REGISTRATION?</div>
            <div className="confirm-text">
              This squad will be permanently removed from the tournament roster.
              This action cannot be undone.
            </div>
            <div className="confirm-btns">
              <button className="confirm-cancel" onClick={() => setDelId(null)}>
                CANCEL
              </button>
              <button
                className="confirm-delete"
                onClick={() => {
                  onDelete(delId);
                  setDelId(null);
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
