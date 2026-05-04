export const Countries = [
  { code: 'ca', name: 'Canada' },
  { code: 'us', name: 'United States' },
  { code: 'mx', name: 'Mexico' },
] as const;

export type CountryCode = (typeof Countries)[number]['code'];

export interface CountryInfo {
  country: CountryCode | null;
}

export const CountryDefault: CountryInfo = { country: null };
