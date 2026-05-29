import { useState } from 'react';

function RegistrationForm({ onSubmit, loading }) {
  const [form, setForm] = useState({
    squadName: '',
    leaderName: '',
    uid: '',
    igName: '',
    phone: '',
    players: '4',
    teamMembers: ['', '', ''],
  });
  const [errors, setErrors] = useState({});

  const updateField = (key, value) => {
    if (key === 'players') {
      const numberOfPlayers = parseInt(value, 10);
      const membersNeeded = Math.max(0, numberOfPlayers - 1);
      const updatedMembers = [...form.teamMembers].slice(0, membersNeeded);
      while (updatedMembers.length < membersNeeded) {
        updatedMembers.push('');
      }
      setForm((previous) => ({ ...previous, [key]: value, teamMembers: updatedMembers }));
    } else {
      setForm((previous) => ({ ...previous, [key]: value }));
    }
  };

  const updateTeamMember = (index, value) => {
    const updatedMembers = [...form.teamMembers];
    updatedMembers[index] = value;
    setForm((previous) => ({ ...previous, teamMembers: updatedMembers }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.squadName.trim()) nextErrors.squadName = 'Squad name is required';
    if (!form.leaderName.trim()) nextErrors.leaderName = 'Leader name is required';
    if (!/^\d{9,12}$/.test(form.uid)) nextErrors.uid = 'Enter a valid UID (9–12 digits)';
    if (!form.igName.trim()) nextErrors.igName = 'In-game name is required';
    if (!/^\d{10}$/.test(form.phone)) nextErrors.phone = 'Enter a valid 10-digit phone number';
    if (!form.players) nextErrors.players = 'Select number of players';

    const numberOfPlayers = parseInt(form.players, 10);
    if (numberOfPlayers > 1) {
      form.teamMembers.forEach((member, index) => {
        if (!member.trim()) {
          nextErrors[`member${index}`] = 'Team member name is required';
        }
      });
    }

    return nextErrors;
  };

  const handleSubmit = () => {
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      onSubmit(form);
    }
  };

  const inputClass = (key) => `field-input${errors[key] ? ' error' : ''}`;

  return (
    <section id="register" className="reg-section">
      <div className="section-title">
        SQUAD <span style={{ color: 'var(--neon-red)' }}>REGISTRATION</span>
      </div>
      <div className="section-sub">Fill in your squad details to enter the championship</div>

      <div className="reg-card">
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            width: 20,
            height: 20,
            borderTop: '2px solid var(--neon-purple)',
            borderLeft: '2px solid var(--neon-purple)',
            borderRadius: '2px 0 0 0',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            width: 20,
            height: 20,
            borderTop: '2px solid var(--neon-purple)',
            borderRight: '2px solid var(--neon-purple)',
            borderRadius: '0 2px 0 0',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 14,
            left: 14,
            width: 20,
            height: 20,
            borderBottom: '2px solid var(--neon-purple)',
            borderLeft: '2px solid var(--neon-purple)',
            borderRadius: '0 0 0 2px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 14,
            right: 14,
            width: 20,
            height: 20,
            borderBottom: '2px solid var(--neon-purple)',
            borderRight: '2px solid var(--neon-purple)',
            borderRadius: '0 0 2px 0',
          }}
        />

        <div style={{ position: 'relative' }}>
          <div className="reg-grid">
            <div className="field">
              <label className="field-label">🛡 Squad Name</label>
              <input
                className={inputClass('squadName')}
                placeholder="e.g. Shadow Wolves"
                value={form.squadName}
                onChange={(event) => updateField('squadName', event.target.value)}
              />
              {errors.squadName && <div className="field-error">⚠ {errors.squadName}</div>}
            </div>

            <div className="field">
              <label className="field-label">👑 Team Leader Name</label>
              <input
                className={inputClass('leaderName')}
                placeholder="Leader's real / game name"
                value={form.leaderName}
                onChange={(event) => updateField('leaderName', event.target.value)}
              />
              {errors.leaderName && <div className="field-error">⚠ {errors.leaderName}</div>}
            </div>

            <div className="field">
              <label className="field-label">🆔 Free Fire UID</label>
              <input
                className={inputClass('uid')}
                placeholder="9–12 digit UID"
                type="text"
                inputMode="numeric"
                value={form.uid}
                onChange={(event) => updateField('uid', event.target.value.replace(/\D/g, ''))}
              />
              {errors.uid && <div className="field-error">⚠ {errors.uid}</div>}
            </div>

            <div className="field">
              <label className="field-label">🎮 In-Game Name (IGN)</label>
              <input
                className={inputClass('igName')}
                placeholder="Your in-game display name"
                value={form.igName}
                onChange={(event) => updateField('igName', event.target.value)}
              />
              {errors.igName && <div className="field-error">⚠ {errors.igName}</div>}
            </div>

            <div className="field">
              <label className="field-label">📱 Phone Number</label>
              <input
                className={inputClass('phone')}
                placeholder="10-digit mobile number"
                type="tel"
                inputMode="numeric"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value.replace(/\D/g, '').slice(0, 10))}
              />
              {errors.phone && <div className="field-error">⚠ {errors.phone}</div>}
            </div>

            <div className="field">
              <label className="field-label">👥 Number of Players</label>
              <select
                className={inputClass('players')}
                value={form.players}
                onChange={(event) => updateField('players', event.target.value)}
              >
                <option value="1">1 – Solo</option>
                <option value="2">2 – Duo</option>
                <option value="3">3 – Trio</option>
                <option value="4">4 – Squad (Full)</option>
              </select>
              {errors.players && <div className="field-error">⚠ {errors.players}</div>}
            </div>
          </div>

          {parseInt(form.players, 10) > 1 && (
            <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid rgba(183,0,255,0.15)' }}>
              <div
                style={{
                  fontFamily: 'Orbitron',
                  fontWeight: 900,
                  fontSize: 18,
                  color: 'var(--neon-purple)',
                  marginBottom: 20,
                  textAlign: 'center',
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                }}
              >
                ⚡ Add Your Team Members
              </div>

              <div className="reg-grid">
                {form.teamMembers.map((member, index) => (
                  <div key={index} className="field">
                    <label className="field-label">🎯 Player {index + 2} Name</label>
                    <input
                      className={`field-input${errors[`member${index}`] ? ' error' : ''}`}
                      placeholder={`Team member ${index + 2} name`}
                      value={member}
                      onChange={(event) => updateTeamMember(index, event.target.value)}
                    />
                    {errors[`member${index}`] && <div className="field-error">⚠ {errors[`member${index}`]}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? '⚡ REGISTERING YOUR SQUAD...' : '🔥 REGISTER SQUAD NOW'}
          </button>

          <div style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: 'var(--text-muted)', fontFamily: 'Rajdhani' }}>
            By registering you agree to the tournament rules and code of conduct.
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;
