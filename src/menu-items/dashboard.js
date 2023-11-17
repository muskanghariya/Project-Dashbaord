// assets
import { IconDashboard, IconAddressBook, IconCurrencyDollar, IconFileReport, IconRelationManyToMany, IconMan } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconAddressBook, IconCurrencyDollar, IconFileReport, IconRelationManyToMany, IconMan };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'MenuItems',
  type: 'group',

  children: [
    {
      id: 'DashBoard',
      title: 'DashBoard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'Accounts',
      title: 'Accounts',
      type: 'item',
      url: '/Accounts',
      icon: icons.IconAddressBook,
      breadcrumbs: false
    },
    {
      id: 'Payroll',
      title: 'Payroll',
      type: 'item',
      url: '/Payroll',
      icon: icons.IconCurrencyDollar,
      breadcrumbs: false
    },
    {
      id: 'Reports',
      title: 'Reports',
      type: 'item',
      url: '/Reports',
      icon: icons.IconFileReport,
      breadcrumbs: false
    },
    {
      id: 'Advisor',
      title: 'Advisor',
      type: 'item',
      url: '/Advisor',
      icon: icons.IconMan,
      breadcrumbs: false
    },
    {
      id: 'Contacts',
      title: 'Contacts',
      type: 'item',
      url: '/Contacts',
      icon: icons.IconRelationManyToMany,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
