import { NavList} from '../models/navbar-models';

export const navConfig: NavList[] = [
  {
    name: 'Account',
    icon: 'columns',
    href: '/account',
    disabled: true
  },
  {
    name: 'Billing',
    icon: 'debit-card',
    href: '/billing',
    disabled: true,
  },
  {
    name: 'Our Location',
    icon: 'dominos',
    routes: [
      {
        name: 'St Louis',
        href: '/location/stl',
        disabled: true,
      },
      {
        name: 'Chicago',
        href: '/location/chicago',
        disabled: true,
      },
      {
        name: 'Nashville',
        href: '/location/nashville',
        disabled: true,
      }
    ],
  },
  {
    name: 'About Us',
    icon: 'person',
    routes: [
      {
        name: 'Our Firm',
        href: '/about/Firm',
        disabled: false,
      },
      {
        name: 'Our Projects',
        href: '/about/Projects',
        disabled: false,
      },
      {
        name: 'Our Clients',
        href: '/about/Clients',
        disabled: false,
      },
      {
        name: 'Our Team',
        href: '/about/Team',
        disabled: false,
      }
    ],
  },
  {
    name: 'Management',
    icon: 'graph',
    href: '/management',
    disabled: true
  },
  {
    name: 'Clients',
    icon: 'skyline',
    href: '/clients',
    routes: [
      {
        name: 'Bayer',
        href: '/clients/bayer',
        disabled: false,
      },
      {
        name: 'Charter',
        href: '/clients/charter',
        disabled: false,
      },
      {
        name: 'Centene',
        href: '/clients/centene',
        disabled: false,
      },
      {
        name: 'Ocelot',
        href: '/clients/ocelot',
        disabled: false
      },
  ],
  },
  {
    name: 'Quality Assurance (404)',
    icon: 'hammer',
    href: '/qa',
  },
  {
    name: 'Quote',
    icon: 'dollar-paper',
    href: '/another-page',
  }
];