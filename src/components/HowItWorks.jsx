function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: '📝',
      title: 'Fill Form',
      desc: 'Enter your squad details, UID, and contact information accurately.',
    },
    {
      num: '02',
      icon: '✅',
      title: 'Get Confirmed',
      desc: 'Receive instant confirmation. Your squad is now in the tournament.',
    },
    {
      num: '03',
      icon: '🎮',
      title: 'Practice Hard',
      desc: 'Sharpen your skills and strategies before the big day.',
    },
    {
      num: '04',
      icon: '🏆',
      title: 'Compete & Win',
      desc: 'Battle it out and claim the championship title and prize pool.',
    },
  ];

  return (
    <section className="how-section">
      <div className="section-title">
        HOW TO <span style={{ color: 'var(--neon-purple)' }}>PARTICIPATE</span>
      </div>
      <div className="section-sub">Get registered in 4 easy steps and prepare for battle</div>
      <div className="how-steps">
        {steps.map((step, index) => (
          <div key={step.num} className="how-step" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="how-step-num">{step.num}</div>
            <div className="how-step-icon">{step.icon}</div>
            <div className="how-step-title">{step.title}</div>
            <div className="how-step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
