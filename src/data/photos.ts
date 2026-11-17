/**
 * TIJDELIJKE BEELDEN
 * De hero-afbeelding (heroBetonherstel) werd op 17-11-2026 door de klant aangeleverd via de chat.
 * Alle andere beelden:
 * Rechtenvrije stockfoto's (Unsplash License / Pexels License) als illustratie,
 * tot DD Contracting eigen werfbeelden aanlevert. Dit zijn géén projecten van DD Contracting.
 */
import heroBetonherstel from '../assets/images/hero-betonherstel.webp';
import dirBetonherstel from '../assets/images/dir-betonherstel.jpg';
import dirVloeren from '../assets/images/dir-vloeren.jpg';
import dirWaterdichting from '../assets/images/dir-waterdichting.jpg';
import dirOnderzoek from '../assets/images/dir-onderzoek.jpg';
import specBorenZagen from '../assets/images/spec-boren-zagen.jpg';
import specStaal from '../assets/images/spec-staal.jpg';
import specGrondwerk from '../assets/images/spec-grondwerk.jpg';
import workBetonconstructies from '../assets/images/work-betonconstructies.jpg';
import workParkeerdek from '../assets/images/work-parkeerdek.jpg';
import workGevel from '../assets/images/work-gevel.jpg';
import expUitvoering from '../assets/images/exp-uitvoering.jpg';
import expOnderzoek from '../assets/images/exp-onderzoek.jpg';

export const photos = {
  heroBetonherstel,
  dirBetonherstel,
  dirVloeren,
  dirWaterdichting,
  dirOnderzoek,
  specBorenZagen,
  specStaal,
  specGrondwerk,
  workBetonconstructies,
  workParkeerdek,
  workGevel,
  expUitvoering,
  expOnderzoek,
};

/** Herkomst van de tijdelijke beelden — handig om ze later gericht te vervangen. */
export const photoSources: Record<keyof typeof photos, string> = {
  heroBetonherstel: 'Aangeleverd door de klant (chat, 17-11-2026)',
  dirBetonherstel: 'https://unsplash.com/photos/x_eqQqnMCsU',
  dirVloeren: 'https://unsplash.com/photos/4yCaHDEfgfk',
  dirWaterdichting: 'https://www.pexels.com/photo/38510717/',
  dirOnderzoek: 'https://unsplash.com/photos/K4dBR3TiH4U',
  specBorenZagen: 'https://unsplash.com/photos/t9eQm2y1tn8',
  specStaal: 'https://unsplash.com/photos/T96azs3nDK0',
  specGrondwerk: 'https://unsplash.com/photos/HvvPceHYLOg',
  workBetonconstructies: 'https://unsplash.com/photos/L4gJ1Go7BmM',
  workParkeerdek: 'https://unsplash.com/photos/2dHoPvX-OPM',
  workGevel: 'https://unsplash.com/photos/gIuwiRLL0TU',
  expUitvoering: 'https://unsplash.com/photos/bzzSg8hTKKY',
  expOnderzoek: 'https://unsplash.com/photos/ZYUcxbMeaIY',
};
