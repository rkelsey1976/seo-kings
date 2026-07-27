import Link from 'next/link';

/**
 * Visible breadcrumb trail. JSON-LD BreadcrumbList schema is emitted
 * separately per-page (see each view's `schema` const) — this is the
 * on-page nav only, no duplicate structured data here.
 */
export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-2">
            {index > 0 && <span className="text-gray-600" aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-300">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
