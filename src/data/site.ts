export const site = {
  name: 'DD Contracting',
  title: 'DD Contracting — Concrete repair, strengthening, protection and quality control',
  description:
    'DD Contracting carries out specialist construction work: repair and strengthening of concrete structures, floors and coatings, waterproofing and renovation, technical research and independent quality control.',
  lang: 'en-GB',
  ogLocale: 'en_GB',
  /**
   * TODO: bevestigde contactgegevens van DD Contracting toevoegen.
   * Bewust leeg gelaten — er worden geen gegevens verzonnen of overgenomen.
   */
  contact: {
    phone: null as string | null,
    email: null as string | null,
    address: null as string | null,
    vat: null as string | null,
  },
};

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'Services', href: '#diensten' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'How we work', href: '#werkwijze' },
  { label: 'Contact', href: '#contact' },
];

export const primaryCta: NavItem = { label: 'Discuss your project', href: '#contact' };
