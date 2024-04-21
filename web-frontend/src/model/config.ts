import type { NavItemConfig } from '../model/NavItem';
import { paths } from '../model/path';

export const navItems = [
    { key: 'overview', title: 'Home', href: paths.dashboard.overview, icon: 'chart-pie' },
    { key: 'customers', title: 'Friends', href: paths.dashboard.customers, icon: 'users' },
    { key: 'integrations', title: 'Templates', href: paths.dashboard.integrations, icon: 'plugs-connected' },
    { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
    { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
] satisfies NavItemConfig[];