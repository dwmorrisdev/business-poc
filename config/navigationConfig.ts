import { NavList} from '../models/navbar-models';

export const navConfig: NavList[] = [
  {
    name: 'Account',
    icon: 'light-columns',
    href: '/account',
    disabled: true
  },
  {
    name: 'Billing',
    icon: 'light-debit-card',
    href: '/billing',
    disabled: true,
  },
  {
    name: 'Our Location',
    icon: 'light-dominos',
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
    icon: 'light-person',
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
    icon: 'light-graph',
    href: '/management',
    disabled: true
  },
  {
    name: 'Clients',
    icon: 'light-skyline',
    href: '/clients',
    routes: [
      {
        name: 'Client A',
        href: '/clients/a',
        disabled: false,
      },
      {
        name: 'Client B',
        href: '/clients/b',
        disabled: false,
      },
      {
        name: 'Client C',
        href: '/clients/c',
        disabled: false,
      },
      {
        name: 'Client D',
        href: '/clients/d',
        disabled: false
      },
  ],
  },
  {
    name: 'Quality Assurance (404)',
    icon: 'light-hammer',
    href: '/qa',
  },
  {
    name: 'Quote',
    icon: 'light-dollar-paper',
    href: '/another-page',
  }
];