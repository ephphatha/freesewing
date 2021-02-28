import { version } from '../package.json'

export default {
  name: 'bella',
  version,
  design: 'Bella Incognito',
  code: 'Joost De Cock',
  department: 'womenswear',
  type: 'block',
  difficulty: 3,
  tags: ['block', 'top', 'basics'],
  optionGroups: {
    fit: ['chestEase', 'waistEase', 'bustSpanEase'],
    darts: ['backDartHeight', 'bustDartLength', 'waistDartLength', 'bustDartCurve'],
    armhole: [
      'armholeDepth',
      'backArmholeSlant',
      'backArmholeCurvature',
      'frontArmholePitchDepth',
      'backArmholePitchDepth'
    ],
    advanced: ['backNeckCutout', 'backHemSlope', 'frontShoulderWidth', 'highBustWidth']
  },
  measurements: [
    'highBust',
    'chest',
    'underbust',
    'waist',
    'waistBack',
    'bustSpan',
    'neck',
    'hpsToBust',
    'hpsToWaistFront',
    'hpsToWaistBack',
    'shoulderToShoulder',
    'shoulderSlope'
    // FIXME: Measurement from waist up to armhole (for sleeveless)
  ],
  dependencies: {
    back: 'frontSideDart'
  },
  inject: {},
  hide: [],
  parts: [
    'back',
    'frontSideDart'
    //   'frontShoulderDart'
  ],
  options: {
    // Constants
    acrossBackFactor: 0.925,
    shoulderSlopeBack: 1.23,
    neckWidthBack: 0.197,
    neckWidthFront: 0.17,
    shoulderToShoulderCorrection: 0.995,
    backDartLocation: 0.145,
    backCenterWaistReduction: 0.35,
    collarFactor: 0.19,

    // Percentages
    backNeckCutout: { pct: 6, min: 3, max: 9 },
    waistEase: { pct: 5, min: 1, max: 20 },
    chestEase: { pct: 11, min: 5, max: 20 },
    bustSpanEase: { pct: 10, min: 0, max: 20 },
    backDartHeight: { pct: 46, min: 38, max: 54 },
    armholeDepth: { pct: 44, min: 38, max: 46 },
    backHemSlope: { deg: 2.5, min: 0, max: 5 },
    backArmholeSlant: { deg: 5, min: 1, max: 9 },
    backArmholeCurvature: { pct: 63, min: 50, max: 85 },
    frontArmholeCurvature: { pct: 63, min: 50, max: 85 },
    fullChestEaseReduction: { pct: 4, min: 0, max: 8 },
    frontShoulderWidth: { pct: 95, max: 98, min: 92 },
    frontArmholePitchDepth: { pct: 29, max: 31, min: 27 },
    backArmholePitchDepth: { pct: 35, max: 40, min: 30 },
    highBustWidth: { pct: 86, max: 92, min: 80 },
    bustDartLength: { pct: 90, min: 75, max: 100 },
    waistDartLength: { pct: 90, min: 75, max: 95 },
    bustDartCurve: { pct: 100, min: 0, max: 100 }
  }
}
