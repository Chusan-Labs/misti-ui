export enum VariantColors {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
  error = 'error'
}

export type VariantColorsProps = keyof typeof VariantColors;