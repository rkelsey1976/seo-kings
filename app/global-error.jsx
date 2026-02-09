'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en-GB">
      <body style={{ margin: 0, background: '#0f172a', color: '#fff', fontFamily: 'system-ui, sans-serif', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Something went wrong</h1>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>A critical error occurred. Please try again.</p>
          <button
            onClick={() => reset()}
            style={{ background: 'linear-gradient(to right, #7c3aed, #6366f1)', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
