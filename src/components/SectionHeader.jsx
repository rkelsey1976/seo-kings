'use client';
import SectionTag from './SectionTag';

export default function SectionHeader({ tag, heading, subtitle, className = '', align = 'left' }) {
  const centerClass = align === 'center' ? 'text-center' : '';

  return (
    <div className={`mb-10${centerClass ? ` ${centerClass}` : ''}${className ? ` ${className}` : ''}`}>
      {tag && <SectionTag className="mb-4">{tag}</SectionTag>}
      <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
        {heading}
      </h2>
      {subtitle && (
        <p className={`text-lg mt-4 leading-relaxed text-white/55${align === 'center' ? ' mx-auto' : ''} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
