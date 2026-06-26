// Language-neutral testimonial data (id, name, location, avatar, rating).
// Localizable fields (role, service, quote) live in src/content/{es,en}/testimonials.js
// and are merged by index in TestimonialsCarousel via getContent(locale).
// Names, companies and locations are NOT translated.
export const testimonials = [
  { id: 1, name: 'Rafael Martínez', location: 'Valencia, Venezuela 🇻🇪', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', rating: 5 },
  { id: 2, name: 'Daniela Suárez', location: 'Maracay, Venezuela 🇻🇪', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', rating: 5 },
  { id: 3, name: 'Miguel Ángel Torres', location: 'Maturín, Venezuela 🇻🇪', avatar: 'https://randomuser.me/api/portraits/men/67.jpg', rating: 5 },
  { id: 4, name: 'Valentina Castro', location: 'Los Teques, Venezuela 🇻🇪', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', rating: 5 },
  { id: 5, name: 'James Rodríguez', location: 'Miami, Florida 🇺🇸', avatar: 'https://randomuser.me/api/portraits/men/75.jpg', rating: 5 },
  { id: 6, name: 'Sofía Méndez', location: 'Houston, Texas 🇺🇸', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', rating: 5 },
  { id: 7, name: 'Carlos Fernández', location: 'Madrid, Spain 🇪🇸', avatar: 'https://randomuser.me/api/portraits/men/52.jpg', rating: 5 },
  { id: 8, name: 'Lucía Herrera', location: 'Barcelona, Spain 🇪🇸', avatar: 'https://randomuser.me/api/portraits/women/30.jpg', rating: 5 },
  { id: 9, name: 'Patricia González', location: 'San José, Costa Rica 🇨🇷', avatar: 'https://randomuser.me/api/portraits/women/90.jpg', rating: 5 },
];
