/**
 * Patel Bhai — one page for every business.
 *
 * kind = "redirect"  → card opens another website
 * kind = "contact"   → card shows a phone number (Call + WhatsApp)
 */

export const site = {
  name: 'Patel Bhai',
  domain: 'patelbhai.com',
  tagline: 'Meals, care, technology, and wholesale supply.',
  phone_display: '+91 70666 38986',
  phone_tel: '+917066638986',
  whatsapp: '7066638986',
};

export const businesses = [
  {
    name: 'FreshONeed',
    about: 'Fresh and healthy freeze-dried meals, ready in minutes.',
    kind: 'redirect',
    url: 'https://www.freshoneed.com/',
    image: '/images/image - 2026-10-16T122924.478.png',
    tone: 'meal',
    id: 'freshoneed',
  },
  {
    name: 'Physical Therapy',
    about: 'Move Better. Recover Stronger. In Surat & Online gLOBALLY.',
    kind: 'contact',
    image: 'https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?auto=format&fit=crop&w=1200&q=80',
    fallback: '/images/therapy.svg',
    tone: 'care',
    id: 'therapy',
    offers: ['Surat clinic', 'Online across India'],
    phone_display: '+91 99989 29880',
    phone_tel: '+919998929880',
    whatsapp: '919998929880',
  },
  // {
  //   name: 'IT Services',
  //   about: 'Custom websites, Android and iOS apps, and servers for your business.',
  //   kind: 'contact',
  //   badge: 'Services',
  //   image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  //   fallback: '/images/it-services.svg',
  //   tone: 'tech',
  //   id: 'it-services',
  //   offers: ['Websites', 'Android apps', 'iOS apps', 'Servers'],
  //   phone_display: '+91 70666 38986',
  //   phone_tel: '+917066638986',
  //   whatsapp: '917066638986',
  //   email: 'rohitpatel.bizconnect@gmail.com',
  // },
  {
    name: 'Wholesale Vegetables',
    about:
      'Fresh Vegetables. Full Loads. Reliable Supply.',
    kind: 'contact',
    badge: 'Bulk',
    image: 'https://images.unsplash.com/photo-1632776350300-11016768b521?auto=format&fit=crop&w=1200&q=80',
    fallback: '/images/vegetables.svg',
    tone: 'produce',
    id: 'vegetables',
    offers: ['Eicher load', 'Truck load', 'Wholesale only'],
    phone_display: '+91 70666 38986',
    phone_tel: '+917066638986',
    whatsapp: '917066638986',
  },
];

/** Same resolution rules as the original PHP page. */
export function resolveBusiness(b) {
  let kind = b.kind ?? 'redirect';
  if (!['contact', 'redirect', 'info'].includes(kind)) kind = 'redirect';

  let host = '';
  if (kind === 'redirect' && b.url) {
    try {
      host = new URL(b.url).host.replace(/^www\./, '');
    } catch {
      host = '';
    }
  }

  return {
    ...b,
    kind,
    tone: b.tone ?? '',
    badge: b.badge ?? (kind === 'contact' ? 'Call us' : 'Website'),
    phoneDisplay: b.phone_display ?? site.phone_display,
    phoneTel: b.phone_tel ?? site.phone_tel,
    whatsapp: b.whatsapp ?? site.whatsapp,
    host,
  };
}
