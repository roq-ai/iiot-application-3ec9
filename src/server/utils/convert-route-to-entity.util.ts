const mapping: Record<string, string> = {
  connectivities: 'connectivity',
  data: 'data',
  'edge-computings': 'edge_computing',
  machines: 'machine',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
