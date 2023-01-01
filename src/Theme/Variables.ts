/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  primary: '#478EEF',
  success: '#28a745',
  error: '#dc3545',
  divider: 'grey',
  background: '#F5F5F6',
}

export const NavigationColors = {
  primary: Colors.primary,
  card: Colors.primary,
  background: Colors.background,
  text: Colors.white,
}

/**
 * FontSize
 */
export const FontSize = {
  caption: 10,
  small: 12,
  medium: 14,
  large: 16,
  title: 18,
  h4: 20,
  h3: 22,
  h2: 24,
  h1: 26,
}

/**
 * Metrics Sizes
 */
const XXS = 2
const XS = XXS * 2
const S = XS * 2 // 8
const R = XS * 3 // 12
const M = XS * 4 // 16
const L = XS * 5 // 20
const XL = XS * 6 // 24
const XXL = XS * 7 // 28
const XXXL = XS * 8 // 32

/**
 * Metrics Sizes
 */
const MetricsSizes = {
  XXS,
  XS,
  S,
  R,
  M,
  L,
  XL,
  XXL,
  XXXL,
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
}
