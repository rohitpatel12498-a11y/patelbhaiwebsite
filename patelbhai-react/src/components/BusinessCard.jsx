import { ArrowUpRight, Check, Globe, Mail, Phone, WhatsApp } from './Icons.jsx';

export default function BusinessCard({ business: b, index, hidden }) {
  const isRedirect = b.kind === 'redirect';
  const number = String(index + 1).padStart(2, '0');

  const image = (
    <img
      src={b.image}
      alt={isRedirect ? b.name : ''}
      loading="lazy"
      onError={(e) => {
        if (b.fallback && !e.currentTarget.src.endsWith(b.fallback)) e.currentTarget.src = b.fallback;
      }}
    />
  );

  return (
    <article
      id={b.id}
      className={`card ${b.kind} tone-${b.tone}`}
      data-kind={b.kind}
      hidden={hidden}
    >
      {isRedirect ? (
        <a className="thumb" href={b.url} target="_blank" rel="noopener noreferrer">
          {image}
          <span className="thumb-tag">{b.badge}</span>
          <span className="thumb-num">{number}</span>
        </a>
      ) : (
        <span className="thumb">
          {image}
          <span className="thumb-tag">{b.badge}</span>
          <span className="thumb-num">{number}</span>
        </span>
      )}

      <div className="card-body">
        <h2>{b.name}</h2>
        <p className="about">{b.about}</p>

        {b.offers?.length > 0 && (
          <ul className="offers">
            {b.offers.map((offer) => (
              <li key={offer} className="offer">
                <Check width={14} height={14} />
                {offer}
              </li>
            ))}
          </ul>
        )}

        <div className="details">
          {isRedirect && (
            <a href={b.url} target="_blank" rel="noopener noreferrer">
              <Globe /> {b.host}
            </a>
          )}
          {b.phoneTel !== '' && (
            <a href={`tel:${b.phoneTel}`}>
              <Phone /> {b.phoneDisplay}
            </a>
          )}
          {b.email && (
            <a href={`mailto:${b.email}`}>
              <Mail /> {b.email}
            </a>
          )}
        </div>

        <div className="actions">
          {isRedirect ? (
            <a className="btn btn-primary" href={b.url} target="_blank" rel="noopener noreferrer">
              Visit website <ArrowUpRight />
            </a>
          ) : (
            <>
              {b.phoneTel !== '' && (
                <a className="btn btn-primary" href={`tel:${b.phoneTel}`}>
                  <Phone /> Call
                </a>
              )}
              {b.whatsapp !== '' && (
                <a
                  className="btn btn-whatsapp"
                  href={`https://wa.me/${b.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsApp /> WhatsApp
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
