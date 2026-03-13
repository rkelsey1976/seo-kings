import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0f172a]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="relative mb-8">
          <span className="text-[12rem] sm:text-[16rem] font-bold text-white/5 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#6366f1] flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Page not found
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
          This page doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
