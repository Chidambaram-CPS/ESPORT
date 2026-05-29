function NeonBackground() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 15% 20%,rgba(183,0,255,0.09) 0%,transparent 55%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 85% 80%,rgba(255,26,26,0.07) 0%,transparent 55%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%,rgba(0,245,255,0.03) 0%,transparent 65%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(183,0,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(183,0,255,0.04) 1px,transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background:
            'linear-gradient(90deg,transparent,rgba(183,0,255,0.6),rgba(255,26,26,0.4),transparent)',
          animation: 'scanline 8s linear infinite',
          opacity: 0.35,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 200,
          height: 200,
          background: 'radial-gradient(circle,rgba(183,0,255,0.08),transparent)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 200,
          height: 200,
          background: 'radial-gradient(circle,rgba(255,26,26,0.06),transparent)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

export default NeonBackground;
