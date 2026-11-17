/**
 * Volledig dienstenpakket van DD Contracting: 19 diensten in 7 vakgebieden.
 * Omschrijvingen zijn eigen teksten van DD Contracting.
 */
export interface Service {
  slug: string;
  name: string;
  description: string;
}

export interface ServiceCategory {
  slug: string;
  name: string;
  intro: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'herstelling-versterking',
    name: 'Repair & strengthening',
    intro: 'Structural repair of concrete structures and increasing their load-bearing capacity.',
    services: [
      {
        slug: 'betonherstellingen',
        name: 'Concrete repair',
        description:
          'Removing deteriorated concrete, treating the reinforcement and rebuilding the profile with repair mortars.',
      },
      {
        slug: 'opgelijmde-wapening',
        name: 'Externally bonded reinforcement',
        description:
          'Additional load-bearing capacity with bonded carbon or aramid fibre strips or fabrics, or with steel plates.',
      },
      {
        slug: 'injectiewerken',
        name: 'Injection work',
        description:
          'Structurally bonding or sealing cracks, and filling leaks and voids with epoxy, PU or acrylate resins.',
      },
      {
        slug: 'grouting',
        name: 'Grouting',
        description: 'Non-shrink grouting under machine foundations, column bases and bearings.',
      },
    ],
  },
  {
    slug: 'boren-zagen-afbraak',
    name: 'Drilling, sawing & demolition',
    intro: 'Precise interventions in existing structures, including reinforced concrete.',
    services: [
      {
        slug: 'boren-zagen-beton',
        name: 'Concrete drilling and sawing',
        description: 'Core drilling and wall or floor sawing for openings and penetrations in (reinforced) concrete.',
      },
      {
        slug: 'afbraakwerken',
        name: 'Demolition',
        description: 'Controlled, selective demolition of structural elements, including inside existing buildings.',
      },
    ],
  },
  {
    slug: 'vloeren-coatings',
    name: 'Floors & coatings',
    intro: 'Seamless floor systems and protective layers on a properly prepared substrate.',
    services: [
      {
        slug: 'gietvloeren',
        name: 'PU and epoxy resin floors',
        description: 'Seamless synthetic resin floors for production and storage areas, car parks and interiors.',
      },
      {
        slug: 'coatings',
        name: 'Coatings',
        description: 'Protective layers for concrete, steel and masonry against wear, moisture and chemical exposure.',
      },
      {
        slug: 'straaltechnieken',
        name: 'Blasting',
        description: 'Sand, grit, water or shot blasting to clean the substrate and ensure good adhesion.',
      },
    ],
  },
  {
    slug: 'dak-gevel-waterdichting',
    name: 'Roofs, facades & waterproofing',
    intro: 'Protecting the building envelope against water and moisture.',
    services: [
      {
        slug: 'waterdichtingen',
        name: 'Waterproofing',
        description: 'Protecting basements and structures against water ingress and rising damp.',
      },
      {
        slug: 'dakwerken',
        name: 'Roofing',
        description: 'Renewing and waterproofing flat roofs, roof terraces and roof edges.',
      },
      {
        slug: 'gevelrenovaties',
        name: 'Facade renovation',
        description: 'Cleaning, repairing and, where required, insulating facades with respect for their character.',
      },
      {
        slug: 'voegwerken',
        name: 'Joint sealing',
        description: 'Elastic and rigid joint seals in silicone or epoxy, including expansion joints.',
      },
    ],
  },
  {
    slug: 'staal-montage',
    name: 'Steel & assembly',
    intro: 'Steel structures and their installation on site.',
    services: [
      {
        slug: 'staalconstructies',
        name: 'Steel structures',
        description: 'Load-bearing steel structures, from technical design to installation.',
      },
      {
        slug: 'montagewerken',
        name: 'Assembly work',
        description: 'On-site assembly of steel and building elements.',
      },
    ],
  },
  {
    slug: 'wegen-grondwerk',
    name: 'Roads & groundwork',
    intro: 'Excavation and repair of paved surfaces.',
    services: [
      {
        slug: 'grondwerken',
        name: 'Groundwork and excavation',
        description: 'Excavating and backfilling for foundations, construction pits and trenches.',
      },
      {
        slug: 'wegdekherstellingen',
        name: 'Road surface repair',
        description: 'Local repair of asphalt and concrete pavements.',
      },
    ],
  },
  {
    slug: 'onderzoek-controle',
    name: 'Research & inspection',
    intro: 'Measurements, inspections and an objective view of completed work.',
    services: [
      {
        slug: 'betononderzoek',
        name: 'Concrete investigation and inspection',
        description:
          'Inspection, core sampling and measurements such as carbonation depth and concrete cover, translated into a repair proposal.',
      },
      {
        slug: 'kwaliteitscontrole',
        name: 'Independent quality control',
        description: 'Documented inspection of completed work, including work carried out by third parties.',
      },
    ],
  },
];

export const serviceCount = serviceCategories.reduce((total, c) => total + c.services.length, 0);
