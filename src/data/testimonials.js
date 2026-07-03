// Language-neutral testimonial data (id, name, location, rating). Initials avatars are
// derived from the name in TestimonialsCarousel (no external stock photos).
// Localizable fields (role, service, quote) live in src/content/{es,en}/testimonials.js
// and are merged by index in TestimonialsCarousel via getContent(locale).
// Names, companies and locations are NOT translated. Locations reflect the global
// English-first + Spanish-speaking target markets (no local/VE signals).
export const testimonials = [
  { id: 1, name: 'Rafael Martínez', location: 'Miami, USA 🇺🇸', rating: 5 },
  { id: 2, name: 'Daniela Suárez', location: 'Madrid, Spain 🇪🇸', rating: 5 },
  { id: 3, name: 'Miguel Ángel Torres', location: 'Houston, USA 🇺🇸', rating: 5 },
  { id: 4, name: 'Valentina Castro', location: 'Barcelona, Spain 🇪🇸', rating: 5 },
  { id: 5, name: 'James Rodríguez', location: 'Los Angeles, USA 🇺🇸', rating: 5 },
  { id: 6, name: 'Sofía Méndez', location: 'Mexico City, Mexico 🇲🇽', rating: 5 },
  { id: 7, name: 'Carlos Fernández', location: 'London, UK 🇬🇧', rating: 5 },
  { id: 8, name: 'Lucía Herrera', location: 'Toronto, Canada 🇨🇦', rating: 5 },
  { id: 9, name: 'Patricia González', location: 'New York, USA 🇺🇸', rating: 5 },
];
