const mapping: Record<string, string> = {
  accounts: 'account',
  beers: 'beer',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
