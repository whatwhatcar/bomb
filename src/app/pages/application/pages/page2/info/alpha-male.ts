export interface AlphaMaleInfo {
  alpha_male: 'yes' | 'no' | '';

  leader: boolean;
  cynical: boolean;
  pretentious: boolean;
  narcissist: boolean;
  manipulative: boolean;
  misogynistic: boolean;

  reason: string;
}

export const AlphaMaleDefault: AlphaMaleInfo = {
  alpha_male: '',

  leader: false,
  cynical: false,
  pretentious: false,
  narcissist: false,
  manipulative: false,
  misogynistic: false,

  reason: '',
};
