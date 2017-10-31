import { NbMenuItem } from '@nebular/theme';

export var MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Quote',
    icon: 'nb-compose',
    link: '/pages/ui-features',
    children: [
        {
          title: 'Quote Create',
          link: '/pages/forms/inputs',
        },
        {
          title: 'Renewal',
          link: '/pages/forms/layouts',
        },
        {
          title: 'Quote List',
          link: '/pages/forms/layouts',
        },
        {
          title: 'Quote Documents',
          link: '/pages/forms/layouts',
        },
    ],
  },
  {
    title: 'Policy Management',
    icon: 'nb-gear',
    children: [
      {
        title: 'Inquiry',
        link: '/pages/forms/layouts',
      },
      {
        title: 'New/Renewal',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Endorsement',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Policy History',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Manage Policy Documents',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Reports',
        link: '/pages/forms/layouts',
      },
  ],
  },
  {
    title: 'Billing',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Create/Edit Transactions',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Billing Documents',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Transactions List',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Configure Tax',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Reports',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Reports Management',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Global Reports',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Regional Reports',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Document Management',
    icon: 'nb-title',
    children: [
      {
        title: 'Template Editor',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'Document Builder',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Accounting',
    icon: 'nb-tables',
    children: [
      {
        title: 'GL View',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Payments',
        link: '/pages/forms/layouts',
      },
    ],
  },
];
