import { useMemo, useState } from 'react';
import { businesses, resolveBusiness, site } from './data.js';
import BusinessCard from './components/BusinessCard.jsx';
import { ArrowRight } from './components/Icons.jsx';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'redirect', label: 'Websites' },
  { key: 'contact', label: 'Call us' },
];

export default function App() {
  const [filter, setFilter] = useState('all');
  const list = useMemo(() => businesses.map(resolveBusiness), []);
  const year = new Date().getFullYear();

  const countFor = (key) =>
    key === 'all' ? list.length : list.filter((b) => b.kind === key).length;

  return (
    <>
      <header className="hero">
        <div className="hero-bg" aria-hidden="true">
          <span className="blob b1" />
          <span className="blob b2" />
          <span className="blob b3" />
          <span className="grid-lines" />
        </div>

        <div className="wrap">
          <div className="hero-bar">
            <a className="brand" href="./">
              <span className="mark">PB</span>
              <span>
                <strong>{site.name}</strong>
                <span className="meta">{site.domain}</span>
              </span>
            </a>
            <span className="domain">
              <span className="dot" />
              {site.domain}
            </span>
          </div>

          <h1>
            Multi businesses, <span className="grad">one address.</span>
          </h1>
          <p className="hero-lead">
            {site.tagline} Visit our website or connect with us directly by phone or WhatsApp..
          </p>

          <nav className="jump" aria-label="Businesses">
            {list.map((b, i) => (
              <a key={b.id} href={`#${b.id}`} className={`tone-${b.tone}`}>
                <em>{String(i + 1).padStart(2, '0')}</em>
                <strong>{b.name}</strong>
                <ArrowRight className="jump-arrow" width={16} height={16} />
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="page">
        <div className="wrap">
          <div className="filters" role="toolbar" aria-label="Filter businesses">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                data-filter={f.key}
                aria-pressed={filter === f.key}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
                <span className="count">{countFor(f.key)}</span>
              </button>
            ))}
          </div>

          <main className="grid">
            {list.map((b, i) => (
              <BusinessCard
                key={b.id}
                business={b}
                index={i}
                hidden={filter !== 'all' && b.kind !== filter}
              />
            ))}
          </main>

          <footer>
            <span>
              © {year} {site.name}
            </span>
            <span>{site.domain}</span>
          </footer>
        </div>
      </div>
    </>
  );
}
