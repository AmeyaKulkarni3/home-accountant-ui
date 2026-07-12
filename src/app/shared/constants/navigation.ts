import { NavigationItem } from "../models/navigation-item.model";
import { APP_ROUTES } from "./routes";

export const NAVIGATION_ITEMS: NavigationItem[] = [
    {
      label: 'Home',
      icon: 'home',
      route: APP_ROUTES.DASHBOARD,
    },
    {
      label: 'Transactions',
      icon: 'receipt_long',
      route: APP_ROUTES.TRANSACTIONS,
    },
    {
      label: 'Reports',
      icon: 'analytics',
      route: APP_ROUTES.REPORTS,
    },
    {
      label: 'Settings',
      icon: 'settings',
      route: APP_ROUTES.SETTINGS,
    },
  ];