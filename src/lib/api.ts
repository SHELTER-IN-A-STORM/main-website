const BASE_URL = 'https://townhall.gg/api/sites/v1';

const ENDPOINTS = {
  individualsHelped: '8cbbf05c-1b38-413f-a32d-64808df6d47c',
  pantryItemsTaken: 'a4b0241b-d362-4220-abf6-77299fdf2311',
  donationsUsed: '4e10fbca-ffb6-4ba1-86a9-30e8652ffd2e',
  itemsNeeded: 'f09b791d-cb53-41d3-bbed-ae6c1986021a',
} as const;

interface TownhallResponse {
  id: string;
  key: string;
  value: string | number;
  type: string;
}

async function fetchVar(id: string): Promise<string | number | null> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) return null;
    const data: TownhallResponse = await res.json();
    return data.value;
  } catch {
    return null;
  }
}

export interface ImpactStats {
  individualsHelped: number;
  pantryItemsTaken: number;
  donationsUsed: number;
}

const IMPACT_DEFAULTS: ImpactStats = {
  individualsHelped: 200,
  pantryItemsTaken: 6000,
  donationsUsed: 55000,
};

export async function getImpactStats(): Promise<ImpactStats> {
  const [individuals, pantry, donations] = await Promise.all([
    fetchVar(ENDPOINTS.individualsHelped),
    fetchVar(ENDPOINTS.pantryItemsTaken),
    fetchVar(ENDPOINTS.donationsUsed),
  ]);

  return {
    individualsHelped: typeof individuals === 'number' ? individuals : IMPACT_DEFAULTS.individualsHelped,
    pantryItemsTaken: typeof pantry === 'number' ? pantry : IMPACT_DEFAULTS.pantryItemsTaken,
    donationsUsed: typeof donations === 'number' ? donations : IMPACT_DEFAULTS.donationsUsed,
  };
}

const ITEMS_NEEDED_DEFAULT = ['Mac & Cheese', 'Body Wash', 'Canned Vegetables', 'Laundry Detergent'];

export async function getItemsNeeded(): Promise<string[]> {
  const raw = await fetchVar(ENDPOINTS.itemsNeeded);
  if (typeof raw === 'string' && raw.trim().length > 0) {
    return raw.split(',').map(item => item.trim()).filter(Boolean);
  }
  return ITEMS_NEEDED_DEFAULT;
}
