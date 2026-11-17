import type { ImageMetadata } from 'astro';
import { photos } from './photos';

export interface PhotoItem {
  image: ImageMetadata;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  /** Vakgebied in het overzicht "Alle 19 diensten" dat de link openklapt. */
  category?: string;
  /** CSS object-position voor een betere uitsnede. */
  position?: string;
}

export const hero = {
  eyebrow: 'Specialist construction contractor · Europe-wide',
  eyebrowShort: 'Specialist contractor · Europe',
  titleLines: ['Built on insight.', 'Delivered with precision.'],
  lead: 'Specialist repair, strengthening and protection of structures — backed by technical research and independent quality control.',
  image: photos.heroBetonherstel,
  alt: 'Worker applying repair mortar to a damaged concrete column with exposed reinforcement in a large concrete hall',
  areas: [
    { label: 'Concrete repair & strengthening', category: 'herstelling-versterking' },
    { label: 'Floors & coatings', category: 'vloeren-coatings' },
    { label: 'Waterproofing & renovation', category: 'dak-gevel-waterdichting' },
    { label: 'Research & quality control', category: 'onderzoek-controle' },
  ],
};

/** Eerlijke kerncijfers: enkel wat vaststaat (aantal diensten en vakgebieden, werkwijze, werkgebied). */
export const intro = {
  eyebrow: 'DD Contracting',
  title: 'Specialist work on concrete structures,',
  titleMuted: 'from the first measurement to the final handover.',
  stats: [
    { value: '19', label: 'Specialist services' },
    { value: '7', label: 'Service areas' },
    { value: '4', label: 'Steps from first question to handover' },
    { value: 'Europe', label: 'Where we take on projects' },
  ],
};

export const directions = {
  eyebrow: 'Our services',
  title: 'Repair, protect',
  titleMuted: 'and inspect.',
  titleBreak: true,
  lead: 'Four core areas that reinforce one another. Every project starts with a thorough analysis of the structure and the conditions on site.',
  items: [
    {
      image: photos.dirBetonherstel,
      alt: 'Concrete column with exposed reinforcing bars',
      eyebrow: 'Repair · Reinforcement · Injection · Grouting',
      title: 'Concrete repair & strengthening',
      description:
        'Durable repair of deteriorated or damaged concrete structures, and greater load-bearing capacity where the structure requires it.',
      href: '#vakgebied-herstelling-versterking',
      linkLabel: 'Explore concrete repair',
      category: 'herstelling-versterking',
      position: '50% 40%',
    },
    {
      image: photos.dirVloeren,
      alt: 'Crew applying a seamless floor coating in a large industrial hall',
      eyebrow: 'Resin floors · Coatings · Blasting',
      title: 'Floors & coatings',
      description:
        'Seamless PU and epoxy floors and protective coatings, always applied to a properly prepared substrate.',
      href: '#vakgebied-vloeren-coatings',
      linkLabel: 'Explore floors & coatings',
      category: 'vloeren-coatings',
      position: '65% 50%',
    },
    {
      image: photos.dirWaterdichting,
      alt: 'Roofer torching a bituminous roofing membrane onto a flat roof',
      eyebrow: 'Waterproofing · Roofs · Facades · Joints',
      title: 'Waterproofing & renovation',
      description:
        'Protecting basements, flat roofs, facades and joints against water and moisture, and technically renewing facades.',
      href: '#vakgebied-dak-gevel-waterdichting',
      linkLabel: 'Explore waterproofing',
      category: 'dak-gevel-waterdichting',
      position: '50% 72%',
    },
    {
      image: photos.dirOnderzoek,
      alt: 'Engineer in a hard hat taking a measurement on a wall',
      eyebrow: 'Inspection · Measurements · Quality control',
      title: 'Research & quality control',
      description:
        'Concrete investigations and inspections as the basis for a well-founded repair plan, and independent inspection of completed work.',
      href: '#vakgebied-onderzoek-controle',
      linkLabel: 'Explore research',
      category: 'onderzoek-controle',
      position: '30% 40%',
    },
  ] satisfies PhotoItem[],
};

export const specializations = {
  eyebrow: 'Additional specialisations',
  title: 'More than',
  titleMuted: 'repair.',
  lead: 'Drilling and sawing, steel structures and groundwork complement our core areas, for projects that bring several disciplines together.',
  items: [
    {
      image: photos.specBorenZagen,
      alt: 'Worker cutting through a concrete block with a grinder',
      eyebrow: 'Core drilling · Sawing · Demolition',
      title: 'Drilling, sawing & demolition',
      description: 'Openings, penetrations and selective demolition in concrete and reinforced concrete.',
      href: '#vakgebied-boren-zagen-afbraak',
      linkLabel: 'View services',
      category: 'boren-zagen-afbraak',
      position: '42% 50%',
    },
    {
      image: photos.specStaal,
      alt: 'Steel frame of a building under construction against a blue sky',
      eyebrow: 'Structures · Assembly',
      title: 'Steel & assembly',
      description: 'Load-bearing steel structures and on-site assembly work.',
      href: '#vakgebied-staal-montage',
      linkLabel: 'View services',
      category: 'staal-montage',
      position: '50% 50%',
    },
    {
      image: photos.specGrondwerk,
      alt: 'Excavator digging a foundation trench',
      eyebrow: 'Excavation · Road surface repair',
      title: 'Roads & groundwork',
      description: 'Groundwork and excavation, and the repair of asphalt and concrete pavements.',
      href: '#vakgebied-wegen-grondwerk',
      linkLabel: 'View services',
      category: 'wegen-grondwerk',
      position: '45% 50%',
    },
  ] satisfies PhotoItem[],
};

/**
 * "Onze expertise in beeld": voorbeelden van type werk.
 * Klaar om later met echte referenties gevuld te worden via `meta` (bv. locatie · jaar)
 * en een `href` naar een projectpagina.
 */
export const showcase = {
  eyebrow: 'Featured',
  title: 'Our expertise',
  titleMuted: 'in pictures.',
  lead: 'A selection of the work within our range of services, from structural concrete repair to the protection of floors and facades.',
  note: 'Images illustrate the type of work.',
  items: [
    {
      image: photos.workBetonconstructies,
      alt: 'Underside of a concrete viaduct with a row of columns',
      eyebrow: 'Concrete repair',
      title: 'Repair of concrete structures',
      description: 'Removing deteriorated concrete, treating the reinforcement and durably rebuilding the profile.',
      href: '#vakgebied-herstelling-versterking',
      linkLabel: 'View service',
      category: 'herstelling-versterking',
      position: '50% 45%',
    },
    {
      image: photos.workParkeerdek,
      alt: 'Underground car park with a glossy, seamless floor',
      eyebrow: 'Resin floors & coatings',
      title: 'Seamless floors for car parks and halls',
      description: 'Hard-wearing PU and epoxy systems, matched to the traffic and use of the space.',
      href: '#vakgebied-vloeren-coatings',
      linkLabel: 'View service',
      category: 'vloeren-coatings',
      position: '50% 60%',
    },
    {
      image: photos.workGevel,
      alt: 'Worker on scaffolding against a historic facade',
      eyebrow: 'Facade renovation',
      title: 'Repairing and renewing facades',
      description: 'Cleaning, repairing and repointing, with respect for the character of the building.',
      href: '#vakgebied-dak-gevel-waterdichting',
      linkLabel: 'View service',
      category: 'dak-gevel-waterdichting',
      position: '58% 50%',
    },
  ] satisfies PhotoItem[],
};

export const expertise = {
  eyebrow: 'Technical expertise',
  title: 'Execution',
  titleMuted: 'and investigation.',
  titleBreak: true,
  lead: 'DD Contracting combines specialist execution with research, inspection and independent quality control, so every intervention starts from the actual condition of the structure.',
  items: [
    {
      image: photos.expUitvoering,
      alt: 'Welder at work, surrounded by sparks',
      badge: 'Execution',
      title: 'Specialist works',
      description:
        'Concrete repair and strengthening, injections, floors, coatings, waterproofing and steelwork — carried out to the specifications of the chosen systems and the terms agreed in the proposal.',
      points: ['Repair & strengthening', 'Floors & coatings', 'Waterproofing & renovation'],
      href: '#diensten',
      linkLabel: 'View our services',
      position: '50% 55%',
    },
    {
      image: photos.expOnderzoek,
      alt: 'Two inspectors in hard hats examining and marking a wall',
      badge: 'Research & inspection',
      title: 'Inspection and independent control',
      description:
        'Measurements and concrete investigation as the basis for a well-founded repair plan, and an objective inspection of completed work — including work carried out by third parties.',
      points: ['Concrete investigation & inspection', 'Measurements & reporting', 'Independent quality control'],
      href: '#contact',
      linkLabel: 'Request an inspection',
      position: '50% 35%',
    },
  ],
};

export const process = {
  eyebrow: 'How we work',
  title: 'How a project',
  titleMuted: 'unfolds.',
  lead: 'A clear four-step approach, from your first question to handover.',
  steps: [
    {
      title: 'Discuss the project',
      text: 'You explain your question, the context and the timeline you have in mind. Together we determine what information and which investigations are needed.',
    },
    {
      title: 'Analysis & proposal',
      text: 'After a site visit and, where needed, measurements or investigation, we prepare a technical proposal and a quotation.',
    },
    {
      title: 'Execution',
      text: 'The work is prepared and carried out using the agreed method, with attention to safety and to the continued use of the building.',
    },
    {
      title: 'Inspection & handover',
      text: 'We check the result, review it with you and hand over the work together with the accompanying documentation.',
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  title: 'Discuss',
  titleMuted: 'your project.',
  titleBreak: true,
  lead: 'Tell us briefly what it is about. We will contact you to discuss your question and a possible approach.',
  checklistTitle: 'What helps with a first assessment',
  checklist: [
    'The location and type of structure',
    'A description of the damage or the work required',
    'Plans, photos or earlier reports, if available',
  ],
};
