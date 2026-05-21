'use client';

export default function SectionTag({ children, className = '', color = 'coral' }) {
  const colorClass = color === 'teal' ? 'text-secondary' : 'text-primary';

  return (
    <p className={`text-[11px] font-mono font-medium tracking-[0.12em] uppercase ${colorClass}${className ? ` ${className}` : ''}`.trim()}>
      {children}
    </p>
  );
}
