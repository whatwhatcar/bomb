export interface AlphaMaleInfo {
  alpha_male: 'true' | 'false' | '';

  pretentious: boolean;
  leader: boolean;

  reason: string;
}

export const AlphaMaleDefault: AlphaMaleInfo = {
  alpha_male: '',

  pretentious: false,
  leader: false,

  reason: '',
};
