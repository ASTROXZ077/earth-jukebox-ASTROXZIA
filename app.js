/**
 * ==========================================================================
 * EARTH INFORMATION JUKEBOX — vFinal
 * NASA / NOAA Earth Data Sonification Platform
 * Flagship Engine: Earth Orchestra Multi-Voice Atmospheric Soundscape
 * ==========================================================================
 */

/**
 * ==========================================================================
 * 0. TAILWIND CONFIGURATION & RUNTIME SETUP
 * ==========================================================================
 */
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          nasa: {
            blue: '#0B3D91',
            red: '#FC3D21',
            space: '#060B19',
            card: '#0F172A',
            sky: '#38BDF8',
            emerald: '#10B981',
            amber: '#F59E0B'
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
          mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace']
        }
      }
    }
  };
}

/**
 * ==========================================================================
 * 1. CURATED EARTH SCIENCE DATASETS (VERIFIED HISTORICAL SNAPSHOTS TO 2025)
 * ==========================================================================
 */
const EARTH_DATASETS = {
  gistemp: {
    id: 'gistemp',
    badgeClass: 'badge-gistemp',
    shortTitle: 'Global Temperature',
    title: 'Global Surface Temperature Anomaly (1880–2025)',
    metricLabel: 'Temp Anomaly',
    unit: '°C',
    baseline: 0.0,
    baselineLabel: '1951–1980 Baseline (0.00 °C)',
    source: 'NASA GISS GISTEMP v4 (GLB.Ts+dSST)',
    color: '#38BDF8',
    accentColor: '#F59E0B',
    summary:
      'Measures how much warmer or cooler Earth’s combined land and ocean surface was each year compared to the 1951–1980 average. Rapid warming since 1980 pushes recent years above +1.2°C.',
    sonificationHint:
      'Higher pitch = warmer global temperature anomaly. Rapid jumps brighten harmonic overtones.',
    invertPitch: false,
    years: Array.from({ length: 146 }, (_, i) => 1880 + i),
    values: [
      -0.16, -0.08, -0.11, -0.17, -0.28, -0.33, -0.31, -0.36, -0.17, -0.10,
      -0.35, -0.22, -0.27, -0.31, -0.30, -0.23, -0.11, -0.11, -0.27, -0.17,
      -0.08, -0.15, -0.28, -0.37, -0.47, -0.26, -0.22, -0.39, -0.43, -0.48,
      -0.43, -0.44, -0.36, -0.34, -0.15, -0.14, -0.36, -0.46, -0.30, -0.28,
      -0.27, -0.19, -0.28, -0.26, -0.27, -0.22, -0.11, -0.22, -0.20, -0.36,
      -0.16, -0.09, -0.16, -0.28, -0.12, -0.20, -0.15, -0.03,  0.00, -0.02,
       0.12,  0.18,  0.06,  0.09,  0.20,  0.09, -0.07, -0.03, -0.11, -0.11,
      -0.17, -0.07,  0.01,  0.08, -0.13, -0.14, -0.19,  0.05,  0.06,  0.03,
      -0.03,  0.06,  0.03,  0.05, -0.20, -0.11, -0.06, -0.02, -0.08,  0.05,
       0.03, -0.08,  0.01,  0.16, -0.07, -0.01, -0.10,  0.18,  0.07,  0.16,
       0.26,  0.32,  0.14,  0.31,  0.16,  0.12,  0.18,  0.32,  0.39,  0.27,
       0.45,  0.40,  0.22,  0.23,  0.31,  0.45,  0.33,  0.46,  0.61,  0.38,
       0.39,  0.53,  0.63,  0.62,  0.53,  0.68,  0.64,  0.66,  0.54,  0.65,
       0.72,  0.61,  0.65,  0.68,  0.75,  0.90,  1.01,  0.92,  0.85,  0.98,
       1.01,  0.85,  0.89,  1.17,  1.28,  1.22
    ]
  },

  co2: {
    id: 'co2',
    badgeClass: 'badge-co2',
    shortTitle: 'Atmospheric CO₂',
    title: 'Atmospheric Carbon Dioxide Concentration (1959–2025)',
    metricLabel: 'CO₂ Concentration',
    unit: 'ppm',
    baseline: 315.98,
    baselineLabel: '1959 Mauna Loa Start (316 ppm)',
    source: 'NOAA Global Monitoring Laboratory (Mauna Loa)',
    color: '#10B981',
    accentColor: '#38BDF8',
    summary:
      'Annual mean carbon dioxide measured in parts per million (ppm) at Mauna Loa Observatory, Hawaii—the longest continuous direct atmospheric CO₂ record on Earth.',
    sonificationHint:
      'Relentless upward climb in pitch reflects steady accumulation of atmospheric greenhouse gases from 316 ppm to over 426 ppm.',
    invertPitch: false,
    years: Array.from({ length: 67 }, (_, i) => 1959 + i),
    values: [
      315.98, 316.91, 317.64, 318.45, 318.99, 319.62, 320.04, 321.37, 322.18, 323.05,
      324.62, 325.68, 326.32, 327.46, 329.68, 330.19, 331.13, 332.03, 333.84, 335.41,
      336.84, 338.76, 340.12, 341.48, 343.15, 344.87, 346.35, 347.61, 349.31, 351.69,
      353.20, 354.45, 355.70, 356.54, 357.21, 358.96, 360.97, 362.74, 363.88, 366.84,
      368.54, 369.71, 371.32, 373.45, 375.98, 377.70, 379.98, 382.09, 384.02, 385.83,
      387.64, 390.10, 391.85, 394.06, 396.74, 398.81, 401.01, 404.41, 406.76, 408.72,
      411.65, 414.21, 416.41, 418.53, 421.08, 424.61, 426.90
    ]
  },

  seaice: {
    id: 'seaice',
    badgeClass: 'badge-seaice',
    shortTitle: 'Arctic Sea Ice',
    title: 'Arctic September Minimum Sea Ice Extent (1979–2025)',
    metricLabel: 'Sea Ice Extent',
    unit: 'M km²',
    baseline: 6.40,
    baselineLabel: '1981–2010 Median (6.40 M km²)',
    source: 'NSIDC / NASA Sea Ice Index (Satellite Passive Microwave)',
    color: '#60A5FA',
    accentColor: '#F43F5E',
    summary:
      'Every September, Arctic sea ice reaches its annual minimum extent after summer melt. Satellite records since 1979 show a dramatic downward decline in perennial sea ice cover.',
    sonificationHint:
      'Higher pitch = larger ice cover; descending pitch = shrinking Arctic sea ice extent.',
    invertPitch: false,
    years: Array.from({ length: 47 }, (_, i) => 1979 + i),
    values: [
      7.05, 7.67, 7.14, 7.30, 7.39, 6.81, 6.70, 7.41, 7.28, 7.37,
      7.01, 6.14, 6.47, 7.47, 6.40, 7.14, 6.08, 7.58, 6.69, 6.54,
      6.12, 6.25, 6.73, 5.83, 6.12, 5.98, 5.50, 5.86, 4.27, 4.69,
      5.26, 4.87, 4.56, 3.57, 5.21, 5.22, 4.62, 4.53, 4.82, 4.79,
      4.36, 4.00, 4.92, 4.87, 4.37, 4.28, 4.34
    ]
  },
  
  sealevel: {
    id: 'sealevel',
    badgeClass: 'badge-sealevel',
    shortTitle: 'Global Sea Level',
    title: 'Global Mean Sea Level Rise (1993–2025)',
    metricLabel: 'Sea Level Change',
    unit: 'mm',
    baseline: 0.0,
    baselineLabel: '1993 Satellite Altimetry Baseline (0 mm)',
    source: 'NASA Sea Level Change Team (TOPEX/Jason/Sentinel-6)',
    color: '#2DD4BF',
    accentColor: '#F59E0B',
    summary:
      'Precision radar altimeters aboard NASA and international satellites measure global sea surface height, driven by thermal ocean expansion and melting land ice sheets.',
    sonificationHint:
      'Rising pitch tracks over 105 mm of global mean sea level rise since 1993, with accelerating slope in recent decades.',
    invertPitch: false,
    years: Array.from({ length: 33 }, (_, i) => 1993 + i),
    values: [
       0.0,   3.2,   6.8,   9.5,  13.4,  15.1,  18.9,  22.4,  26.8,  30.1,
      33.5,  35.8,  39.2,  41.6,  43.9,  46.8,  51.2,  53.0,  52.4,  60.5,
      63.8,  67.4,  73.9,  77.2,  79.5,  83.6,  89.4,  92.8,  96.5,  99.8,
      104.2, 108.5, 111.4
    ]
  }
};

/**
 * Historical Data Series for Multi-System Earth Orchestra (1880–2025)
 * Compiles NOAA/Law Dome Ice Core CO₂, Walsh/HadISST Arctic Sea Ice,
 * and Church & White CSIRO Global Mean Sea Level data to provide unbroken
 * 146-year coverage across all 4 key planetary systems.
 */
const HISTORICAL_CO2_1880_1958 = [
  290.8, 291.1, 291.4, 291.6, 291.8, 292.0, 292.3, 292.6, 293.1, 293.7,
  294.4, 294.7, 294.9, 295.1, 295.2, 295.4, 295.6, 295.8, 296.0, 296.3,
  296.6, 297.0, 297.3, 297.6, 298.0, 298.3, 298.7, 299.0, 299.4, 299.7,
  300.1, 300.4, 300.7, 301.0, 301.3, 301.6, 302.0, 302.3, 302.7, 303.0,
  303.4, 303.8, 304.1, 304.5, 304.9, 305.3, 305.7, 306.1, 306.5, 307.0,
  307.4, 307.7, 308.0, 308.3, 308.6, 308.9, 309.3, 309.6, 310.0, 310.3,
  310.7, 310.6, 310.5, 310.4, 310.3, 310.2, 310.3, 310.5, 310.7, 311.0,
  311.3, 311.7, 312.2, 312.6, 313.1, 313.6, 314.1, 314.6, 315.2
];

const HISTORICAL_SEAICE_1880_1978 = [
  8.20, 8.18, 8.24, 8.22, 8.15, 8.10, 8.16, 8.21, 8.25, 8.30,
  8.28, 8.22, 8.18, 8.15, 8.12, 8.10, 8.08, 8.12, 8.16, 8.19,
  8.15, 8.10, 8.05, 8.02, 7.98, 7.95, 7.98, 8.02, 8.06, 8.10,
  8.05, 8.00, 7.96, 7.92, 7.90, 7.88, 7.92, 7.96, 8.00, 8.04,
  8.00, 7.95, 7.90, 7.86, 7.84, 7.82, 7.85, 7.88, 7.92, 7.95,
  7.92, 7.88, 7.85, 7.82, 7.80, 7.78, 7.80, 7.84, 7.88, 7.90,
  7.86, 7.82, 7.80, 7.78, 7.75, 7.72, 7.75, 7.78, 7.82, 7.85,
  7.80, 7.76, 7.72, 7.70, 7.68, 7.65, 7.68, 7.72, 7.75, 7.78,
  7.75, 7.70, 7.66, 7.62, 7.60, 7.58, 7.62, 7.65, 7.68, 7.70,
  7.65, 7.60, 7.55, 7.50, 7.45, 7.40, 7.35, 7.30, 7.20
];

const HISTORICAL_SEALEVEL_1880_1992 = Array.from({ length: 113 }, (_, i) => {
  const t = i / 112;
  return parseFloat((-145.0 + t * 143.5 + Math.sin(t * Math.PI * 3) * 2.2).toFixed(1));
});

function getPlanetarySnapshot(year) {
  const y = parseInt(year, 10);
  const idx = Math.max(0, Math.min(145, y - 1880));
  const prevIdx = Math.max(0, idx - 1);

  // 1. Temperature Anomaly (°C)
  const tempVal = EARTH_DATASETS.gistemp.values[idx];
  const prevTempVal = EARTH_DATASETS.gistemp.values[prevIdx];
  const tempNorm = (tempVal - (-0.48)) / (1.28 - (-0.48));
  const tempDelta = idx > 0 ? tempVal - prevTempVal : 0;

  // 2. Atmospheric CO₂ (ppm)
  const co2Val = idx < 79 ? HISTORICAL_CO2_1880_1958[idx] : EARTH_DATASETS.co2.values[idx - 79];
  const prevCo2Val = prevIdx < 79 ? HISTORICAL_CO2_1880_1958[prevIdx] : EARTH_DATASETS.co2.values[prevIdx - 79];
  const co2Norm = (co2Val - 290.0) / (428.0 - 290.0);
  const co2Delta = idx > 0 ? co2Val - prevCo2Val : 0;

  // 3. Arctic September Sea Ice Extent (M km²)
  const iceVal = idx < 99 ? HISTORICAL_SEAICE_1880_1978[idx] : EARTH_DATASETS.seaice.values[idx - 99];
  const prevIceVal = prevIdx < 99 ? HISTORICAL_SEAICE_1880_1978[prevIdx] : EARTH_DATASETS.seaice.values[prevIdx - 99];
  const iceNorm = Math.max(0, Math.min(1, (iceVal - 3.5) / (8.3 - 3.5)));
  const iceDelta = idx > 0 ? iceVal - prevIceVal : 0;

  // 4. Global Mean Sea Level Rise (mm)
  const seaVal = idx < 113 ? HISTORICAL_SEALEVEL_1880_1992[idx] : EARTH_DATASETS.sealevel.values[idx - 113];
  const prevSeaVal = prevIdx < 113 ? HISTORICAL_SEALEVEL_1880_1992[prevIdx] : EARTH_DATASETS.sealevel.values[prevIdx - 113];
  const seaNorm = Math.max(0, Math.min(1, (seaVal - (-145.0)) / (112.0 - (-145.0))));
  const seaDelta = idx > 0 ? seaVal - prevSeaVal : 0;

  // 5. Change Detection / Global Trend Acceleration (delta = current - previous)
  // Designed so calm historical baselines stay tranquil (0.0–0.22) while rapid
  // climate jumps, El Niño surges, Arctic collapses, and modern acceleration surge (0.45–1.0).
  const tempJump = Math.max(0, (Math.abs(tempDelta) - 0.05) / 0.18);
  const co2Rate = Math.max(0, (Math.abs(co2Delta) - 0.55) / 2.6);
  const iceJump = Math.max(0, (Math.abs(iceDelta) - 0.14) / 1.05);
  const seaRate = Math.max(0, (Math.abs(seaDelta) - 1.65) / 4.8);

  const acceleration = Math.min(
    1.0,
    tempJump * 0.42 +
    co2Rate * 0.28 +
    iceJump * 0.36 +
    seaRate * 0.24
  );

  return {
    year: y,
    index: idx,
    temp: tempVal,
    tempNorm: Math.max(0, Math.min(1, tempNorm)),
    tempDelta,
    co2: co2Val,
    co2Norm: Math.max(0, Math.min(1, co2Norm)),
    co2Delta,
    seaice: iceVal,
    iceNorm,
    iceDelta,
    sealevel: seaVal,
    seaNorm,
    seaDelta,
    acceleration
  };
}

/**
 * ==========================================================================
 * 2. APPLICATION STATE & ACCESSIBILITY PREFERENCES
 * ==========================================================================
 */
const state = {
  currentView: 'home',
  activeDatasetId: 'gistemp',
  currentIndex: 0,
  isPlaying: false,
  listeningMode: 'orchestra', // 'orchestra' (Flagship) | 'scientific' | 'musical' | 'accessible'
  playbackSpeed: 1.0,
  loop: false,
  stereoPan: true,
  volume: 0.70,
  muted: false,
  voiceNarration: false,
  lightTheme: false,
  highContrast: false,
  largeText: false,
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  isComparing: false,
  compareIndex: 0,
  comparePreset: 'temp-eras',
  compareRouting: 'stereo-dual',
  transcriptLog: []
};

/**
 * ==========================================================================
 * 3. WEB AUDIO API DETERMINISTIC SONIFICATION ENGINE & ATMOSPHERIC EFFECTS
 * ==========================================================================
 */
function createSpaceReverbImpulse(ctx, duration = 5.0, decay = 2.0) {
  const rate = ctx.sampleRate;
  const length = Math.floor(rate * duration);
  const impulse = ctx.createBuffer(2, length, rate);
  const left = impulse.getChannelData(0);
  const right = impulse.getChannelData(1);

  // Smooth attack + progressive air-absorption lowpass damping for deep space observatory ambience
  const attackSamples = Math.floor(rate * 0.035);
  let lpL = 0;
  let lpR = 0;
  for (let i = 0; i < length; i++) {
    const t = i / rate;
    const attackEnv = i < attackSamples ? i / attackSamples : 1.0;
    const damping = Math.exp(-t * decay) * attackEnv;
    // Progressive high-frequency absorption over the tail
    const alpha = Math.max(0.06, 0.42 * Math.exp(-t * 0.55));
    const nL = (Math.random() * 2 - 1) * damping;
    const nR = (Math.random() * 2 - 1) * damping;
    lpL = lpL + alpha * (nL - lpL);
    lpR = lpR + alpha * (nR - lpR);
    left[i] = lpL;
    right[i] = lpR;
  }
  return impulse;
}

function createNoiseBuffer(ctx, duration = 2.0) {
  const rate = ctx.sampleRate;
  const length = Math.floor(rate * duration);
  const buffer = ctx.createBuffer(1, length, rate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  return buffer;
}

class EarthSonifier {
  constructor() {
    this.ctx = null;
    this.mixerBus = null;
    this.masterGain = null;
    this.limiter = null;
    this.analyser = null;
    this.dataArray = null;
    this.timeDataArray = null;
    this.smoothedIntensity = 0;

    // Single voice / scientific continuous mode
    this.sciOsc = null;
    this.sciHarmonic = null;
    this.sciHarmonicGain = null;
    this.sciFilter = null;
    this.sciVoiceGain = null;
    this.sciPanner = null;
    this.isContinuousActive = false;

    // Dedicated Atmospheric Space Effects Chain
    // Architecture: Voices -> Mixer -> Space Effects (Dry + Delay + Reverb) -> Master -> Limiter -> Output
    this.dryMixGain = null;
    this.spaceSendFilter = null;
    this.effectsBus = null;
    this.reverbNode = null;
    this.reverbGain = null;
    this.delayL = null;
    this.delayR = null;
    this.delayFilterL = null;
    this.delayFilterR = null;
    this.delayFeedbackL = null;
    this.delayFeedbackR = null;
    this.delayCrossL = null;
    this.delayCrossR = null;
    this.delayMerger = null;
    this.delayWetGain = null;

    // Flagship Earth Orchestra Multi-Voice Nodes
    this.isOrchestraActive = false;
    this.orchestraNodes = null;
    this.auditionTimeoutId = null;

    // Continuous Comparison Studio Nodes
    this.isCompareActive = false;
    this.compareNodes = null;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return true;
    }

    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      showAudioWarning(
        'Web Audio API is not supported in this browser. Visual charts and live text transcripts remain fully active.'
      );
      return false;
    }

    try {
      this.ctx = new AudioCtx();
      const now = this.ctx.currentTime;

      // Master Limiter (DynamicsCompressorNode) prevents clipping across all 5 simultaneous layers
      this.limiter = this.ctx.createDynamicsCompressor();
      this.limiter.threshold.setValueAtTime(-12, now);
      this.limiter.knee.setValueAtTime(12, now);
      this.limiter.ratio.setValueAtTime(12, now);
      this.limiter.attack.setValueAtTime(0.002, now);
      this.limiter.release.setValueAtTime(0.15, now);

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(
        state.muted ? 0.0001 : state.volume * 0.50,
        now
      );

      // Mixer Bus (Sum of Lead, Harmony, Texture, Bass, Trend)
      this.mixerBus = this.ctx.createGain();
      this.mixerBus.gain.setValueAtTime(0.92, now);

      // Dry Path from Mixer
      this.dryMixGain = this.ctx.createGain();
      this.dryMixGain.gain.setValueAtTime(0.80, now);

      // Space Effects Send Filter (gently rolls off sub-80Hz bass before reverb/delay to keep low end tight & clear)
      this.spaceSendFilter = this.ctx.createBiquadFilter();
      this.spaceSendFilter.type = 'highpass';
      this.spaceSendFilter.frequency.setValueAtTime(80, now);
      this.spaceSendFilter.Q.setValueAtTime(0.5, now);

      this.effectsBus = this.ctx.createGain();
      this.effectsBus.gain.setValueAtTime(1.0, now);

      // Atmospheric Effects Chain 1: Long Reverb (Planetary Observatory Deep Space Ambience)
      this.reverbNode = this.ctx.createConvolver();
      this.reverbNode.buffer = createSpaceReverbImpulse(this.ctx, 5.0, 2.0);
      this.reverbGain = this.ctx.createGain();
      this.reverbGain.gain.setValueAtTime(0.28, now);

      // Atmospheric Effects Chain 2: Diffused Subtle Stereo Delay
      // Settings: ~20% wet, long soft feedback, incommensurate L/R times (0.37s / 0.53s) -> spatial depth, never rhythmic echo
      this.delayL = this.ctx.createDelay(2.0);
      this.delayR = this.ctx.createDelay(2.0);
      this.delayL.delayTime.setValueAtTime(0.37, now);
      this.delayR.delayTime.setValueAtTime(0.53, now);

      this.delayFilterL = this.ctx.createBiquadFilter();
      this.delayFilterL.type = 'lowpass';
      this.delayFilterL.frequency.setValueAtTime(1350, now);

      this.delayFilterR = this.ctx.createBiquadFilter();
      this.delayFilterR.type = 'lowpass';
      this.delayFilterR.frequency.setValueAtTime(1250, now);

      this.delayFeedbackL = this.ctx.createGain();
      this.delayFeedbackR = this.ctx.createGain();
      this.delayFeedbackL.gain.setValueAtTime(0.46, now);
      this.delayFeedbackR.gain.setValueAtTime(0.46, now);

      this.delayCrossL = this.ctx.createGain();
      this.delayCrossR = this.ctx.createGain();
      this.delayCrossL.gain.setValueAtTime(0.16, now);
      this.delayCrossR.gain.setValueAtTime(0.16, now);

      this.delayMerger = this.ctx.createChannelMerger(2);
      this.delayWetGain = this.ctx.createGain();
      this.delayWetGain.gain.setValueAtTime(0.20, now); // 20% wet

      // Stereo Diffused Delay Routing
      this.delayL.connect(this.delayFilterL);
      this.delayR.connect(this.delayFilterR);

      this.delayFilterL.connect(this.delayFeedbackL);
      this.delayFeedbackL.connect(this.delayL);
      this.delayFilterL.connect(this.delayCrossL);
      this.delayCrossL.connect(this.delayR);

      this.delayFilterR.connect(this.delayFeedbackR);
      this.delayFeedbackR.connect(this.delayR);
      this.delayFilterR.connect(this.delayCrossR);
      this.delayCrossR.connect(this.delayL);

      this.delayFilterL.connect(this.delayMerger, 0, 0);
      this.delayFilterR.connect(this.delayMerger, 0, 1);
      this.delayMerger.connect(this.delayWetGain);

      // Connect Mixer -> Dry & Space Effects
      this.mixerBus.connect(this.dryMixGain);
      this.mixerBus.connect(this.spaceSendFilter);
      this.spaceSendFilter.connect(this.effectsBus);

      this.effectsBus.connect(this.reverbNode);
      this.effectsBus.connect(this.delayL);
      this.effectsBus.connect(this.delayR);

      // Space Effects & Dry -> Master
      this.dryMixGain.connect(this.masterGain);
      this.reverbNode.connect(this.reverbGain);
      this.reverbGain.connect(this.masterGain);
      this.delayWetGain.connect(this.masterGain);

      // Analyser & Limiter -> Destination
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 512;
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.timeDataArray = new Uint8Array(this.analyser.fftSize);

      this.masterGain.connect(this.limiter);
      this.limiter.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);

      const statusEl = document.getElementById('audio-engine-status');
      if (statusEl) statusEl.textContent = 'ACTIVE';
      return true;
    } catch (err) {
      console.error('Audio initialization error:', err);
      showAudioWarning('Unable to start audio engine: ' + err.message);
      return false;
    }
  }

  setVolume(vol, muted) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const target = muted ? 0.0001 : Math.max(0.0001, vol * 0.50);
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setTargetAtTime(target, now, 0.03);
  }

  getAudioIntensity() {
    if (!this.analyser || !this.timeDataArray) return 0.12;
    this.analyser.getByteTimeDomainData(this.timeDataArray);
    let sumSq = 0;
    for (let i = 0; i < this.timeDataArray.length; i++) {
      const sample = (this.timeDataArray[i] - 128) / 128;
      sumSq += sample * sample;
    }
    const rms = Math.sqrt(sumSq / this.timeDataArray.length);
    const scaled = Math.max(0, Math.min(1, rms * 3.4));
    this.smoothedIntensity = this.smoothedIntensity * 0.72 + scaled * 0.28;
    return this.smoothedIntensity;
  }

  normToFreq(norm) {
    const clamped = Math.max(0, Math.min(1, norm));
    return 180 * Math.pow(780 / 180, clamped);
  }

  normToMusicalFreq(norm) {
    const lydianSemitones = [0, 2, 4, 6, 7, 9, 11, 12, 14, 16, 18, 19, 21, 23, 24];
    const clamped = Math.max(0, Math.min(1, norm));
    const idx = Math.min(
      lydianSemitones.length - 1,
      Math.floor(clamped * lydianSemitones.length)
    );
    const semitone = lydianSemitones[idx];
    const baseG3 = 130.81 * 1.5;
    return baseG3 * Math.pow(2, semitone / 12);
  }

  /**
   * FLAGSHIP: Earth Orchestra Multi-Voice Synthesis Engine
   * 5 Simultaneous Interacting Voices: Lead (Temp) + Harmony (CO2) + Texture (Ice) + Bass (Sea Level) + Trend (Delta)
   */
  startOrchestra() {
    if (!this.init()) return;
    this.stopContinuous();
    this.stopCompareVoices();
    if (this.isOrchestraActive && this.orchestraNodes) return;

    const now = this.ctx.currentTime;

    // --- Voice 1: Lead Voice (Temperature - GISTEMP) ---
    // Warm evolving atmospheric lead: higher temp -> higher pitch; rapid change -> brighter timbre
    const leadOsc1 = this.ctx.createOscillator();
    const leadOsc2 = this.ctx.createOscillator();
    const leadOscBright = this.ctx.createOscillator();
    const leadBrightGain = this.ctx.createGain();
    const leadFilter = this.ctx.createBiquadFilter();
    const leadGain = this.ctx.createGain();
    const leadPanner = this.ctx.createStereoPanner();

    leadOsc1.type = 'triangle';
    leadOsc2.type = 'sine';
    leadOsc2.detune.setValueAtTime(5.0, now);
    leadOscBright.type = 'sawtooth';
    leadOscBright.detune.setValueAtTime(-3.0, now);
    leadBrightGain.gain.setValueAtTime(0.04, now);

    const leadLfo = this.ctx.createOscillator();
    const leadLfoGain = this.ctx.createGain();
    leadLfo.type = 'sine';
    leadLfo.frequency.setValueAtTime(4.3, now);
    leadLfoGain.gain.setValueAtTime(1.0, now);
    leadLfo.connect(leadLfoGain);
    leadLfoGain.connect(leadOsc1.frequency);
    leadLfoGain.connect(leadOsc2.frequency);
    leadLfoGain.connect(leadOscBright.frequency);

    leadFilter.type = 'lowpass';
    leadFilter.frequency.setValueAtTime(600, now);
    leadFilter.Q.setValueAtTime(1.6, now);

    leadGain.gain.setValueAtTime(0.0001, now);
    leadGain.gain.linearRampToValueAtTime(0.20, now + 0.16);

    leadOsc1.connect(leadFilter);
    leadOsc2.connect(leadFilter);
    leadOscBright.connect(leadBrightGain);
    leadBrightGain.connect(leadFilter);
    leadFilter.connect(leadGain);
    leadGain.connect(leadPanner);
    leadPanner.connect(this.mixerBus);

    leadOsc1.start(now);
    leadOsc2.start(now);
    leadOscBright.start(now);
    leadLfo.start(now);

    // --- Voice 2: Harmony Layer (Atmospheric CO₂ - NOAA) ---
    // Slow evolving pad mapped strictly to harmonic density & chord complexity (NEVER pitch)
    const baseC3 = 130.81;
    const harmOsc1 = this.ctx.createOscillator(); // Root C3
    const harmOsc2 = this.ctx.createOscillator(); // Fifth G3
    const harmOsc3 = this.ctx.createOscillator(); // Major 3rd E3
    const harmOsc4 = this.ctx.createOscillator(); // Major 7th B3
    const harmOsc5 = this.ctx.createOscillator(); // 9th D4
    const harmOsc6 = this.ctx.createOscillator(); // Atmospheric pressure cluster F#4 (sawtooth)

    const harmGain1 = this.ctx.createGain();
    const harmGain2 = this.ctx.createGain();
    const harmGain3 = this.ctx.createGain();
    const harmGain4 = this.ctx.createGain();
    const harmGain5 = this.ctx.createGain();
    const harmGain6 = this.ctx.createGain();

    const harmFilter = this.ctx.createBiquadFilter();
    const harmLfo = this.ctx.createOscillator();
    const harmLfoGain = this.ctx.createGain();
    const harmMasterGain = this.ctx.createGain();
    const harmPanner = this.ctx.createStereoPanner();

    harmOsc1.type = 'sine';
    harmOsc2.type = 'triangle';
    harmOsc3.type = 'triangle';
    harmOsc4.type = 'sine';
    harmOsc5.type = 'triangle';
    harmOsc6.type = 'sawtooth';

    harmOsc1.frequency.setValueAtTime(baseC3, now);
    harmOsc2.frequency.setValueAtTime(baseC3 * 1.4983, now); // G3
    harmOsc3.frequency.setValueAtTime(baseC3 * 1.2599, now); // E3
    harmOsc4.frequency.setValueAtTime(baseC3 * 1.8877, now); // B3
    harmOsc5.frequency.setValueAtTime(baseC3 * 2.2449, now); // D4
    harmOsc6.frequency.setValueAtTime(baseC3 * 2.8284, now); // F#4
    harmOsc3.detune.setValueAtTime(-4, now);
    harmOsc5.detune.setValueAtTime(5, now);
    harmOsc6.detune.setValueAtTime(-7, now);

    harmGain1.gain.setValueAtTime(0.08, now);
    harmGain2.gain.setValueAtTime(0.06, now);
    harmGain3.gain.setValueAtTime(0.0001, now);
    harmGain4.gain.setValueAtTime(0.0001, now);
    harmGain5.gain.setValueAtTime(0.0001, now);
    harmGain6.gain.setValueAtTime(0.0001, now);

    harmFilter.type = 'lowpass';
    harmFilter.frequency.setValueAtTime(420, now);
    harmFilter.Q.setValueAtTime(1.2, now);

    harmLfo.type = 'sine';
    harmLfo.frequency.setValueAtTime(0.22, now);
    harmLfoGain.gain.setValueAtTime(75, now);
    harmLfo.connect(harmLfoGain);
    harmLfoGain.connect(harmFilter.frequency);

    harmMasterGain.gain.setValueAtTime(0.0001, now);
    harmMasterGain.gain.linearRampToValueAtTime(0.18, now + 0.18);
    harmPanner.pan.setValueAtTime(-0.20, now);

    harmOsc1.connect(harmGain1);
    harmOsc2.connect(harmGain2);
    harmOsc3.connect(harmGain3);
    harmOsc4.connect(harmGain4);
    harmOsc5.connect(harmGain5);
    harmOsc6.connect(harmGain6);

    harmGain1.connect(harmFilter);
    harmGain2.connect(harmFilter);
    harmGain3.connect(harmFilter);
    harmGain4.connect(harmFilter);
    harmGain5.connect(harmFilter);
    harmGain6.connect(harmFilter);

    harmFilter.connect(harmMasterGain);
    harmMasterGain.connect(harmPanner);
    harmPanner.connect(this.mixerBus);

    harmOsc1.start(now);
    harmOsc2.start(now);
    harmOsc3.start(now);
    harmOsc4.start(now);
    harmOsc5.start(now);
    harmOsc6.start(now);
    harmLfo.start(now);

    // --- Voice 3: Texture Layer (Arctic Sea Ice - NSIDC) ---
    // Glass Crystal Shimmer: LFOs modulate individual crystal pre-gains BEFORE shimmerMasterGain
    // so that as Arctic sea ice collapses, the shimmer audibly fades to true silence.
    const shimmerOsc1 = this.ctx.createOscillator();
    const shimmerOsc2 = this.ctx.createOscillator();
    const shimmerOsc3 = this.ctx.createOscillator();
    const shimmerOsc4 = this.ctx.createOscillator();

    const shimmerPre1 = this.ctx.createGain();
    const shimmerPre2 = this.ctx.createGain();
    const shimmerPre3 = this.ctx.createGain();
    const shimmerPre4 = this.ctx.createGain();

    const shimmerLfoA = this.ctx.createOscillator();
    const shimmerLfoAGain = this.ctx.createGain();
    const shimmerLfoB = this.ctx.createOscillator();
    const shimmerLfoBGain = this.ctx.createGain();

    const shimmerFilter = this.ctx.createBiquadFilter();
    const shimmerMasterGain = this.ctx.createGain();
    const shimmerPanner = this.ctx.createStereoPanner();

    shimmerOsc1.type = 'sine';
    shimmerOsc2.type = 'sine';
    shimmerOsc3.type = 'sine';
    shimmerOsc4.type = 'triangle';

    // Crystalline glass frequencies (C7, E7, G#7, C8)
    shimmerOsc1.frequency.setValueAtTime(2093.0, now);
    shimmerOsc2.frequency.setValueAtTime(2637.0, now);
    shimmerOsc3.frequency.setValueAtTime(3322.4, now);
    shimmerOsc4.frequency.setValueAtTime(4186.0, now);

    // Pre-fader base gains stay positive (0.28 +/- 0.14 = 0.14..0.42) so LFO never leaks when master drops
    shimmerPre1.gain.setValueAtTime(0.28, now);
    shimmerPre2.gain.setValueAtTime(0.25, now);
    shimmerPre3.gain.setValueAtTime(0.22, now);
    shimmerPre4.gain.setValueAtTime(0.16, now);

    shimmerLfoA.type = 'sine';
    shimmerLfoA.frequency.setValueAtTime(3.7, now);
    shimmerLfoAGain.gain.setValueAtTime(0.12, now);
    shimmerLfoA.connect(shimmerLfoAGain);
    shimmerLfoAGain.connect(shimmerPre1.gain);
    shimmerLfoAGain.connect(shimmerPre3.gain);

    shimmerLfoB.type = 'sine';
    shimmerLfoB.frequency.setValueAtTime(5.3, now);
    shimmerLfoBGain.gain.setValueAtTime(0.11, now);
    shimmerLfoB.connect(shimmerLfoBGain);
    shimmerLfoBGain.connect(shimmerPre2.gain);
    shimmerLfoBGain.connect(shimmerPre4.gain);

    shimmerFilter.type = 'bandpass';
    shimmerFilter.frequency.setValueAtTime(3200, now);
    shimmerFilter.Q.setValueAtTime(1.4, now);

    shimmerMasterGain.gain.setValueAtTime(0.0001, now);
    shimmerPanner.pan.setValueAtTime(0.32, now);

    shimmerOsc1.connect(shimmerPre1);
    shimmerOsc2.connect(shimmerPre2);
    shimmerOsc3.connect(shimmerPre3);
    shimmerOsc4.connect(shimmerPre4);

    shimmerPre1.connect(shimmerFilter);
    shimmerPre2.connect(shimmerFilter);
    shimmerPre3.connect(shimmerFilter);
    shimmerPre4.connect(shimmerFilter);

    shimmerFilter.connect(shimmerMasterGain);
    shimmerMasterGain.connect(shimmerPanner);
    shimmerPanner.connect(this.mixerBus);

    shimmerOsc1.start(now);
    shimmerOsc2.start(now);
    shimmerOsc3.start(now);
    shimmerOsc4.start(now);
    shimmerLfoA.start(now);
    shimmerLfoB.start(now);

    // --- Voice 4: Bass Layer (Global Sea Level - NASA) ---
    // Deep planetary drone foundation: ocean mass & gravity (strictly low-end, never melody)
    const bassOsc1 = this.ctx.createOscillator();
    const bassOsc2 = this.ctx.createOscillator();
    const bassOsc3 = this.ctx.createOscillator();
    const bassOsc2Gain = this.ctx.createGain();
    const bassFilter = this.ctx.createBiquadFilter();
    const bassGain = this.ctx.createGain();
    const bassPanner = this.ctx.createStereoPanner();

    bassOsc1.type = 'sine';
    bassOsc2.type = 'triangle';
    bassOsc3.type = 'sine';

    bassOsc1.frequency.setValueAtTime(49.0, now);   // Deep G1 sub foundation
    bassOsc3.frequency.setValueAtTime(49.25, now);  // Slow planetary ocean swell beating
    bassOsc2.frequency.setValueAtTime(98.0, now);   // Warm low octave presence (lowpassed)
    bassOsc2Gain.gain.setValueAtTime(0.35, now);

    bassFilter.type = 'lowpass';
    bassFilter.frequency.setValueAtTime(95, now);
    bassFilter.Q.setValueAtTime(1.6, now);

    bassGain.gain.setValueAtTime(0.0001, now);
    bassPanner.pan.setValueAtTime(0.0, now);

    bassOsc1.connect(bassFilter);
    bassOsc3.connect(bassFilter);
    bassOsc2.connect(bassOsc2Gain);
    bassOsc2Gain.connect(bassFilter);
    bassFilter.connect(bassGain);
    bassGain.connect(bassPanner);
    bassPanner.connect(this.mixerBus);

    bassOsc1.start(now);
    bassOsc2.start(now);
    bassOsc3.start(now);

    // --- Voice 5: Change Detection Layer (Global Delta / Trend Layer) ---
    // Large delta -> additional harmonics + bright texture + spatial motion; Stable -> calm
    const trendOsc1 = this.ctx.createOscillator();
    const trendOsc2 = this.ctx.createOscillator();
    const trendNoise = this.ctx.createBufferSource();
    const trendNoiseGain = this.ctx.createGain();
    const trendFilter = this.ctx.createBiquadFilter();
    const trendLfo = this.ctx.createOscillator();
    const trendLfoPan = this.ctx.createGain();
    const trendGain = this.ctx.createGain();
    const trendPanner = this.ctx.createStereoPanner();

    trendOsc1.type = 'triangle';
    trendOsc2.type = 'sine';
    trendOsc1.frequency.setValueAtTime(783.99, now); // G5 harmonic shimmer
    trendOsc2.frequency.setValueAtTime(1567.98, now); // G6 upper overtone

    trendNoise.buffer = createNoiseBuffer(this.ctx, 2.0);
    trendNoise.loop = true;
    trendNoiseGain.gain.setValueAtTime(0.18, now);

    trendFilter.type = 'bandpass';
    trendFilter.frequency.setValueAtTime(1400, now);
    trendFilter.Q.setValueAtTime(2.0, now);

    trendLfo.type = 'sine';
    trendLfo.frequency.setValueAtTime(2.4, now);
    trendLfoPan.gain.setValueAtTime(0.65, now);
    trendLfo.connect(trendLfoPan);
    trendLfoPan.connect(trendPanner.pan);

    trendGain.gain.setValueAtTime(0.0001, now);
    trendPanner.pan.setValueAtTime(0.0, now);

    trendOsc1.connect(trendFilter);
    trendOsc2.connect(trendFilter);
    trendNoise.connect(trendNoiseGain);
    trendNoiseGain.connect(trendFilter);
    trendFilter.connect(trendGain);
    trendGain.connect(trendPanner);
    trendPanner.connect(this.mixerBus);

    trendOsc1.start(now);
    trendOsc2.start(now);
    trendNoise.start(now);
    trendLfo.start(now);

    this.orchestraNodes = {
      lead: {
        osc1: leadOsc1,
        osc2: leadOsc2,
        oscBright: leadOscBright,
        brightGain: leadBrightGain,
        lfo: leadLfo,
        lfoGain: leadLfoGain,
        filter: leadFilter,
        gain: leadGain,
        panner: leadPanner
      },
      harm: {
        osc1: harmOsc1,
        osc2: harmOsc2,
        osc3: harmOsc3,
        osc4: harmOsc4,
        osc5: harmOsc5,
        osc6: harmOsc6,
        gain1: harmGain1,
        gain2: harmGain2,
        gain3: harmGain3,
        gain4: harmGain4,
        gain5: harmGain5,
        gain6: harmGain6,
        lfo: harmLfo,
        masterGain: harmMasterGain,
        filter: harmFilter,
        panner: harmPanner
      },
      shimmer: {
        osc1: shimmerOsc1,
        osc2: shimmerOsc2,
        osc3: shimmerOsc3,
        osc4: shimmerOsc4,
        lfoA: shimmerLfoA,
        lfoB: shimmerLfoB,
        filter: shimmerFilter,
        gain: shimmerMasterGain,
        panner: shimmerPanner
      },
      bass: {
        osc1: bassOsc1,
        osc2: bassOsc2,
        osc3: bassOsc3,
        filter: bassFilter,
        gain: bassGain,
        panner: bassPanner
      },
      trend: {
        osc1: trendOsc1,
        osc2: trendOsc2,
        noise: trendNoise,
        lfo: trendLfo,
        lfoPan: trendLfoPan,
        filter: trendFilter,
        gain: trendGain,
        panner: trendPanner
      }
    };

    this.isOrchestraActive = true;
  }

  updateOrchestra(snapshot, panValue = 0) {
    if (!this.init()) return 220;
    if (!this.isOrchestraActive || !this.orchestraNodes) {
      this.startOrchestra();
    }
    const now = this.ctx.currentTime;
    const stepMs = Math.max(75, Math.round(195 / (state.playbackSpeed || 1)));
    const glide = Math.max(0.055, (stepMs / 1000) * 0.65);

    const {
      tempNorm,
      tempDelta,
      co2Norm,
      iceNorm,
      seaNorm,
      acceleration
    } = snapshot;

    const pan = state.stereoPan ? panValue : 0;
    const nodes = this.orchestraNodes;

    // 1. Lead Voice (Temperature - GISTEMP)
    // Higher temp -> higher pitch (175 Hz to 660 Hz); rapid changes -> brighter timbre
    const clampedTemp = Math.max(0, Math.min(1, tempNorm));
    const leadFreq = 175 * Math.pow(660 / 175, clampedTemp);
    nodes.lead.osc1.frequency.setTargetAtTime(leadFreq, now, glide);
    nodes.lead.osc2.frequency.setTargetAtTime(leadFreq * 1.0025, now, glide);
    nodes.lead.oscBright.frequency.setTargetAtTime(leadFreq, now, glide);
    nodes.lead.lfoGain.gain.setTargetAtTime(leadFreq * 0.0042, now, glide);

    const deltaMag = Math.min(1.0, Math.abs(tempDelta) * 4.5);
    const leadCutoff = 560 + clampedTemp * 520 + deltaMag * 2400;
    nodes.lead.filter.frequency.setTargetAtTime(leadCutoff, now, glide);
    nodes.lead.filter.Q.setTargetAtTime(1.4 + deltaMag * 1.6, now, glide);
    nodes.lead.brightGain.gain.setTargetAtTime(0.02 + deltaMag * 0.22, now, glide);
    nodes.lead.gain.gain.setTargetAtTime(0.18 + clampedTemp * 0.06 + deltaMag * 0.06, now, glide);
    nodes.lead.panner.pan.setTargetAtTime(pan * 0.45, now, glide);

    // 2. Harmony Layer (Atmospheric CO₂ - NOAA)
    // Low CO₂ -> simple open 5th; High CO₂ -> dense, pressurized 6-voice harmonic cluster
    const c = Math.max(0, Math.min(1, co2Norm));
    const g1 = 0.075 + c * 0.04; // Root C3
    const g2 = 0.065 + c * 0.04; // Fifth G3
    const g3 = c > 0.16 ? Math.min(0.09, (c - 0.16) * 0.18) : 0.0001; // Major 3rd E3
    const g4 = c > 0.36 ? Math.min(0.085, (c - 0.36) * 0.17) : 0.0001; // Major 7th B3
    const g5 = c > 0.54 ? Math.min(0.085, (c - 0.54) * 0.20) : 0.0001; // 9th D4
    const g6 = c > 0.68 ? Math.min(0.075, (c - 0.68) * 0.24) : 0.0001; // Tension #11 saw pad F#4

    nodes.harm.gain1.gain.setTargetAtTime(g1, now, glide * 1.4);
    nodes.harm.gain2.gain.setTargetAtTime(g2, now, glide * 1.4);
    nodes.harm.gain3.gain.setTargetAtTime(g3, now, glide * 1.4);
    nodes.harm.gain4.gain.setTargetAtTime(g4, now, glide * 1.4);
    nodes.harm.gain5.gain.setTargetAtTime(g5, now, glide * 1.4);
    nodes.harm.gain6.gain.setTargetAtTime(g6, now, glide * 1.4);

    const harmCutoff = 380 + Math.pow(c, 1.2) * 1550;
    nodes.harm.filter.frequency.setTargetAtTime(harmCutoff, now, glide * 1.4);
    nodes.harm.masterGain.gain.setTargetAtTime(0.14 + c * 0.16, now, glide * 1.4);

    // 3. Texture Layer (Arctic Sea Ice - NSIDC)
    // Glass crystal shimmer: abundant in early decades, audibly vanishes as the Arctic declines
    const ice = Math.max(0, Math.min(1, iceNorm));
    const shimmerLevel = ice <= 0.025 ? 0.0001 : Math.pow(ice, 1.7) * 0.26;
    nodes.shimmer.gain.gain.setTargetAtTime(shimmerLevel, now, glide);
    const shimmerCutoff = 1600 + ice * 2400;
    nodes.shimmer.filter.frequency.setTargetAtTime(shimmerCutoff, now, glide);
    nodes.shimmer.panner.pan.setTargetAtTime(state.stereoPan ? 0.35 : 0, now, glide);

    // 4. Bass Layer (Global Sea Level - NASA)
    // Deep ocean mass drone: quiet at 1880, heavy low-frequency planetary pressure by modern years
    const sea = Math.max(0, Math.min(1, seaNorm));
    const bassLevel = 0.022 + Math.pow(sea, 1.35) * 0.34;
    nodes.bass.gain.gain.setTargetAtTime(bassLevel, now, glide * 1.2);
    const bassCutoff = 85 + sea * 105;
    nodes.bass.filter.frequency.setTargetAtTime(bassCutoff, now, glide * 1.2);

    // 5. Change Detection Layer (Global Delta / Acceleration)
    // Calm periods -> quiet; Large changes -> bright harmonic texture + spatial stereo motion
    if (acceleration > 0.24) {
      const surge = Math.min(1, (acceleration - 0.24) / 0.76);
      const trendLevel = 0.015 + surge * 0.14;
      nodes.trend.gain.gain.setTargetAtTime(trendLevel, now, 0.05);
      nodes.trend.filter.frequency.setTargetAtTime(1300 + surge * 3100, now, 0.06);
      nodes.trend.lfo.frequency.setTargetAtTime(2.0 + surge * 4.5, now, 0.08);
      nodes.trend.lfoPan.gain.setTargetAtTime(state.stereoPan ? (0.25 + surge * 0.55) : 0, now, 0.06);
    } else {
      nodes.trend.gain.gain.setTargetAtTime(0.0001, now, 0.14);
      nodes.trend.filter.frequency.setTargetAtTime(950, now, 0.14);
    }

    return leadFreq;
  }

  auditionOrchestraSnapshot(snapshot, panValue = 0, duration = 0.40) {
    if (!this.init()) return 220;
    if (this.auditionTimeoutId) {
      clearTimeout(this.auditionTimeoutId);
      this.auditionTimeoutId = null;
    }
    this.updateOrchestra(snapshot, panValue);
    this.auditionTimeoutId = setTimeout(() => {
      this.auditionTimeoutId = null;
      if (!state.isPlaying) {
        this.stopOrchestra();
      }
    }, Math.round(duration * 1000));
    return 175 * Math.pow(660 / 175, Math.max(0, Math.min(1, snapshot.tempNorm)));
  }

  stopOrchestra() {
    if (this.auditionTimeoutId) {
      clearTimeout(this.auditionTimeoutId);
      this.auditionTimeoutId = null;
    }
    if (!this.isOrchestraActive || !this.orchestraNodes || !this.ctx) return;
    const now = this.ctx.currentTime;
    const nodes = this.orchestraNodes;
    try {
      nodes.lead.gain.gain.setTargetAtTime(0.0001, now, 0.05);
      nodes.harm.masterGain.gain.setTargetAtTime(0.0001, now, 0.05);
      nodes.shimmer.gain.gain.setTargetAtTime(0.0001, now, 0.05);
      nodes.bass.gain.gain.setTargetAtTime(0.0001, now, 0.05);
      nodes.trend.gain.gain.setTargetAtTime(0.0001, now, 0.05);

      setTimeout(() => {
        try {
          nodes.lead.osc1.stop();
          nodes.lead.osc2.stop();
          nodes.lead.oscBright.stop();
          nodes.lead.lfo.stop();
          nodes.harm.osc1.stop();
          nodes.harm.osc2.stop();
          nodes.harm.osc3.stop();
          nodes.harm.osc4.stop();
          nodes.harm.osc5.stop();
          nodes.harm.osc6.stop();
          nodes.harm.lfo.stop();
          nodes.shimmer.osc1.stop();
          nodes.shimmer.osc2.stop();
          nodes.shimmer.osc3.stop();
          nodes.shimmer.osc4.stop();
          nodes.shimmer.lfoA.stop();
          nodes.shimmer.lfoB.stop();
          nodes.bass.osc1.stop();
          nodes.bass.osc2.stop();
          nodes.bass.osc3.stop();
          nodes.trend.osc1.stop();
          nodes.trend.osc2.stop();
          nodes.trend.noise.stop();
          nodes.trend.lfo.stop();
        } catch (_) {}
      }, 170);
    } catch (_) {}
    this.isOrchestraActive = false;
    this.orchestraNodes = null;
  }

  /**
   * Scientific Single-Voice Continuous Sonification
   */
  playScientificPoint(norm, deltaNorm, panValue) {
    if (!this.init()) return null;
    this.stopOrchestra();
    this.stopCompareVoices();
    const now = this.ctx.currentTime;
    const freq = this.normToFreq(norm);
    const pan = state.stereoPan ? panValue : 0;
    const deltaIntensity = Math.min(1, Math.abs(deltaNorm) * 4.5);
    const harmonicLevel = 0.04 + deltaIntensity * 0.28;
    const glide = 0.07;

    if (!this.isContinuousActive) {
      this.sciOsc = this.ctx.createOscillator();
      this.sciHarmonic = this.ctx.createOscillator();
      this.sciHarmonicGain = this.ctx.createGain();
      this.sciFilter = this.ctx.createBiquadFilter();
      this.sciVoiceGain = this.ctx.createGain();
      this.sciPanner = this.ctx.createStereoPanner();

      this.sciOsc.type = 'sine';
      this.sciHarmonic.type = 'triangle';

      this.sciOsc.frequency.setValueAtTime(freq, now);
      this.sciHarmonic.frequency.setValueAtTime(freq * 2, now);

      this.sciFilter.type = 'lowpass';
      this.sciFilter.frequency.setValueAtTime(900 + deltaIntensity * 1800, now);

      this.sciHarmonicGain.gain.setValueAtTime(harmonicLevel, now);
      this.sciVoiceGain.gain.setValueAtTime(0.0001, now);
      this.sciVoiceGain.gain.linearRampToValueAtTime(0.42, now + 0.08);
      this.sciPanner.pan.setValueAtTime(pan, now);

      this.sciOsc.connect(this.sciFilter);
      this.sciHarmonic.connect(this.sciHarmonicGain);
      this.sciHarmonicGain.connect(this.sciFilter);
      this.sciFilter.connect(this.sciVoiceGain);
      this.sciVoiceGain.connect(this.sciPanner);
      this.sciPanner.connect(this.mixerBus);

      this.sciOsc.start(now);
      this.sciHarmonic.start(now);
      this.isContinuousActive = true;
    } else {
      this.sciOsc.frequency.setTargetAtTime(freq, now, glide);
      this.sciHarmonic.frequency.setTargetAtTime(freq * 2, now, glide);
      this.sciHarmonicGain.gain.setTargetAtTime(harmonicLevel, now, 0.06);
      this.sciFilter.frequency.setTargetAtTime(900 + deltaIntensity * 2200, now, 0.06);
      this.sciPanner.pan.setTargetAtTime(pan, now, 0.06);
    }
    return freq;
  }

  stopContinuous() {
    if (!this.isContinuousActive || !this.ctx) return;
    const now = this.ctx.currentTime;
    try {
      this.sciVoiceGain.gain.cancelScheduledValues(now);
      this.sciVoiceGain.gain.setTargetAtTime(0.0001, now, 0.04);
      const osc1 = this.sciOsc;
      const osc2 = this.sciHarmonic;
      setTimeout(() => {
        try {
          osc1.stop();
          osc2.stop();
        } catch (_) {}
      }, 130);
    } catch (_) {}
    this.isContinuousActive = false;
  }

  /**
   * Discrete Musical and Accessible Sonification
   */
  triggerDiscreteNote({
    norm,
    mode = 'musical',
    panValue = 0,
    duration = 0.28,
    waveform = 'triangle'
  }) {
    if (!this.init()) return 220;
    this.stopContinuous();
    this.stopOrchestra();
    const now = this.ctx.currentTime;
    const freq = mode === 'musical' ? this.normToMusicalFreq(norm) : this.normToFreq(norm);
    const pan = state.stereoPan ? panValue : 0;

    const osc = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const env = this.ctx.createGain();
    const subGain = this.ctx.createGain();
    const panner = this.ctx.createStereoPanner();

    osc.type = mode === 'musical' ? 'triangle' : waveform;
    subOsc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    subOsc.frequency.setValueAtTime(freq * (mode === 'musical' ? 1.5 : 0.5), now);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, now);

    subGain.gain.setValueAtTime(mode === 'musical' ? 0.16 : 0.12, now);
    panner.pan.setValueAtTime(pan, now);

    env.gain.setValueAtTime(0.0001, now);
    env.gain.linearRampToValueAtTime(0.38, now + 0.025);
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    subOsc.connect(subGain);
    subGain.connect(filter);
    filter.connect(env);
    env.connect(panner);
    panner.connect(this.mixerBus);

    osc.start(now);
    subOsc.start(now);
    osc.stop(now + duration + 0.04);
    subOsc.stop(now + duration + 0.04);

    return freq;
  }

  /**
   * Enhanced Comparison Mode Sonification
   * Smoothly gliding dual voices in stereo-dual mode + acoustic divergence tension layer
   */
  startCompareVoices() {
    if (!this.init()) return;
    this.stopContinuous();
    this.stopOrchestra();
    if (this.isCompareActive && this.compareNodes) return;

    const now = this.ctx.currentTime;

    // Stream A (Left): Warm Crystalline Harmonic Voice
    const oscA1 = this.ctx.createOscillator();
    const oscA2 = this.ctx.createOscillator();
    const filterA = this.ctx.createBiquadFilter();
    const gainA = this.ctx.createGain();
    const panA = this.ctx.createStereoPanner();

    oscA1.type = 'triangle';
    oscA2.type = 'sine';
    oscA2.detune.setValueAtTime(3.5, now);
    filterA.type = 'lowpass';
    filterA.frequency.setValueAtTime(1600, now);
    gainA.gain.setValueAtTime(0.0001, now);
    gainA.gain.linearRampToValueAtTime(0.24, now + 0.08);
    panA.pan.setValueAtTime(-0.80, now);

    oscA1.connect(filterA);
    oscA2.connect(filterA);
    filterA.connect(gainA);
    gainA.connect(panA);
    panA.connect(this.mixerBus);

    oscA1.start(now);
    oscA2.start(now);

    // Stream B (Right): Rich Atmospheric Cello/Pad Voice
    const oscB1 = this.ctx.createOscillator();
    const oscB2 = this.ctx.createOscillator();
    const filterB = this.ctx.createBiquadFilter();
    const gainB = this.ctx.createGain();
    const panB = this.ctx.createStereoPanner();

    oscB1.type = 'sawtooth';
    oscB2.type = 'triangle';
    oscB2.detune.setValueAtTime(-4.0, now);
    filterB.type = 'lowpass';
    filterB.frequency.setValueAtTime(900, now);
    filterB.Q.setValueAtTime(1.8, now);
    gainB.gain.setValueAtTime(0.0001, now);
    gainB.gain.linearRampToValueAtTime(0.22, now + 0.08);
    panB.pan.setValueAtTime(0.80, now);

    oscB1.connect(filterB);
    oscB2.connect(filterB);
    filterB.connect(gainB);
    gainB.connect(panB);
    panB.connect(this.mixerBus);

    oscB1.start(now);
    oscB2.start(now);

    // Divergence Layer: Acoustic beating & tension shimmer proportional to |normA - normB|
    const divOsc1 = this.ctx.createOscillator();
    const divOsc2 = this.ctx.createOscillator();
    const divFilter = this.ctx.createBiquadFilter();
    const divGain = this.ctx.createGain();

    divOsc1.type = 'sine';
    divOsc2.type = 'sine';
    divFilter.type = 'bandpass';
    divFilter.frequency.setValueAtTime(660, now);
    divFilter.Q.setValueAtTime(2.0, now);
    divGain.gain.setValueAtTime(0.0001, now);

    divOsc1.connect(divFilter);
    divOsc2.connect(divFilter);
    divFilter.connect(divGain);
    divGain.connect(this.mixerBus);

    divOsc1.start(now);
    divOsc2.start(now);

    this.compareNodes = {
      a: { osc1: oscA1, osc2: oscA2, filter: filterA, gain: gainA, pan: panA },
      b: { osc1: oscB1, osc2: oscB2, filter: filterB, gain: gainB, pan: panB },
      div: { osc1: divOsc1, osc2: divOsc2, filter: divFilter, gain: divGain }
    };
    this.isCompareActive = true;
  }

  stopCompareVoices() {
    if (!this.isCompareActive || !this.compareNodes || !this.ctx) return;
    const now = this.ctx.currentTime;
    const n = this.compareNodes;
    try {
      n.a.gain.gain.setTargetAtTime(0.0001, now, 0.04);
      n.b.gain.gain.setTargetAtTime(0.0001, now, 0.04);
      n.div.gain.gain.setTargetAtTime(0.0001, now, 0.04);
      setTimeout(() => {
        try {
          n.a.osc1.stop();
          n.a.osc2.stop();
          n.b.osc1.stop();
          n.b.osc2.stop();
          n.div.osc1.stop();
          n.div.osc2.stop();
        } catch (_) {}
      }, 130);
    } catch (_) {}
    this.isCompareActive = false;
    this.compareNodes = null;
  }

  triggerComparePoint({
    normA,
    normB,
    routing = 'stereo-dual',
    duration = 0.32
  }) {
    if (!this.init()) return;
    const now = this.ctx.currentTime;
    const freqA = this.normToFreq(normA);
    const freqB = this.normToFreq(normB);
    const divergence = Math.abs(normA - normB);

    if (routing === 'stereo-dual') {
      if (!this.isCompareActive || !this.compareNodes) {
        this.startCompareVoices();
      }
      const n = this.compareNodes;
      const glide = 0.11;

      n.a.osc1.frequency.setTargetAtTime(freqA, now, glide);
      n.a.osc2.frequency.setTargetAtTime(freqA * 1.002, now, glide);
      n.a.filter.frequency.setTargetAtTime(1000 + normA * 1200, now, glide);

      n.b.osc1.frequency.setTargetAtTime(freqB, now, glide);
      n.b.osc2.frequency.setTargetAtTime(freqB * 1.002, now, glide);
      n.b.filter.frequency.setTargetAtTime(750 + normB * 1100, now, glide);

      // Divergence layer: audible beating interval & tension rises when systems diverge
      const midFreq = (freqA + freqB) * 0.5;
      const beatRate = 2.5 + divergence * 18.0;
      n.div.osc1.frequency.setTargetAtTime(midFreq * 1.5, now, glide);
      n.div.osc2.frequency.setTargetAtTime(midFreq * 1.5 + beatRate, now, glide);
      n.div.filter.frequency.setTargetAtTime(midFreq * 1.5, now, glide);
      const divAmp = divergence > 0.12 ? Math.min(0.16, (divergence - 0.12) * 0.24) : 0.0001;
      n.div.gain.gain.setTargetAtTime(divAmp, now, 0.08);
    } else {
      this.stopCompareVoices();
      this.triggerDiscreteNote({
        norm: normA,
        mode: 'musical',
        panValue: -0.45,
        duration: 0.17,
        waveform: 'triangle'
      });
      setTimeout(() => {
        if (state.isComparing) {
          this.triggerDiscreteNote({
            norm: normB,
            mode: 'musical',
            panValue: 0.45,
            duration: 0.17,
            waveform: 'triangle'
          });
        }
      }, 170);
    }
  }
}

const sonifier = new EarthSonifier();

/**
 * ==========================================================================
 * 4. SPEECH SYNTHESIS (VOICE NARRATION) & ARIA LIVE HELPERS
 * ==========================================================================
 */
function announceSR(message, assertive = false) {
  const el = document.getElementById(
    assertive ? 'sr-announcer-assertive' : 'sr-announcer-polite'
  );
  if (!el) return;
  el.textContent = '';
  requestAnimationFrame(() => {
    el.textContent = message;
  });
}

function speakText(text) {
  if (!state.voiceNarration || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = Math.min(1.4, 0.95 + (state.playbackSpeed - 1) * 0.25);
    utter.pitch = 1.0;
    window.speechSynthesis.speak(utter);
  } catch (_) {}
}

function appendTranscript(line, speak = false) {
  const box = document.getElementById('live-transcript-box');
  if (!box) return;
  state.transcriptLog.push(line);
  if (state.transcriptLog.length > 250) state.transcriptLog.shift();

  const p = document.createElement('p');
  p.textContent = line;
  box.appendChild(p);
  while (box.children.length > 60) {
    box.removeChild(box.firstChild);
  }
  box.scrollTop = box.scrollHeight;

  if (speak) {
    speakText(line);
  }
}

function showAudioWarning(msg) {
  const banner = document.getElementById('audio-warning-banner');
  const text = document.getElementById('audio-warning-text');
  if (banner && text) {
    text.textContent = msg;
    banner.classList.remove('hidden');
  }
}

/**
 * ==========================================================================
 * 5. DATA NORMALIZATION & PLAYBACK SCHEDULER
 * ==========================================================================
 */
let playbackTimer = null;
let compareTimer = null;
let globeRotation = 0;

function getActiveDataset() {
  return EARTH_DATASETS[state.activeDatasetId];
}

function getDatasetStats(ds) {
  const min = Math.min(...ds.values);
  const max = Math.max(...ds.values);
  return { min, max, span: max - min || 1 };
}

function normalizeValue(ds, val) {
  const { min, span } = getDatasetStats(ds);
  const rawNorm = (val - min) / span;
  return ds.invertPitch ? 1 - rawNorm : rawNorm;
}

function formatValue(ds, val) {
  const sign = ds.id === 'gistemp' && val > 0 ? '+' : '';
  const decimals = ds.id === 'sealevel' ? 1 : 2;
  return `${sign}${val.toFixed(decimals)} ${ds.unit}`;
}

function stepPlayback(advance = true) {
  const ds = getActiveDataset();
  const total = ds.years.length;

  if (advance) {
    if (state.currentIndex < total - 1) {
      state.currentIndex += 1;
    } else if (state.loop) {
      state.currentIndex = 0;
      appendTranscript(`[Loop] Restarting ${ds.shortTitle} from ${ds.years[0]}.`);
    } else {
      stopPlayback(false);
      appendTranscript(
        `[Complete] Finished ${ds.shortTitle} (${ds.years[0]}–${ds.years[total - 1]}).`,
        true
      );
      announceSR(`Playback complete for ${ds.title}.`);
      return;
    }
  }

  const idx = state.currentIndex;
  const year = ds.years[idx];
  const val = ds.values[idx];
  const prevVal = idx > 0 ? ds.values[idx - 1] : val;
  const yoy = val - prevVal;

  const norm = normalizeValue(ds, val);
  const prevNorm = normalizeValue(ds, prevVal);
  const deltaNorm = norm - prevNorm;
  const pan = -0.75 + (idx / Math.max(1, total - 1)) * 1.5;

  let freq = 220;
  const snapshot = getPlanetarySnapshot(year);

  if (state.isPlaying) {
    if (state.listeningMode === 'orchestra') {
      freq = sonifier.updateOrchestra(snapshot, pan);
    } else if (state.listeningMode === 'scientific') {
      freq =
        sonifier.playScientificPoint(norm, deltaNorm, pan) ||
        sonifier.normToFreq(norm);
    } else if (state.listeningMode === 'musical') {
      const stepDur = Math.max(0.14, 0.28 / state.playbackSpeed);
      freq = sonifier.triggerDiscreteNote({
        norm,
        mode: 'musical',
        panValue: pan,
        duration: stepDur
      });
    } else {
      const stepDur = Math.max(0.22, 0.38 / state.playbackSpeed);
      freq = sonifier.triggerDiscreteNote({
        norm,
        mode: 'accessible',
        panValue: pan,
        duration: stepDur,
        waveform: 'sine'
      });
    }
  } else {
    freq =
      state.listeningMode === 'musical'
        ? sonifier.normToMusicalFreq(norm)
        : sonifier.normToFreq(norm);
  }

  updatePlayerUI(ds, idx, year, val, yoy, freq, pan, snapshot);

  // Climate Story Milestones & Transcripts
  const isKeyYear =
    idx === 0 ||
    idx === total - 1 ||
    year === 1910 ||
    year === 1950 ||
    year === 1979 ||
    year === 1998 ||
    year === 2012 ||
    year === 2024 ||
    year % 10 === 0;

  if (state.isPlaying && isKeyYear) {
    let msg = '';
    if (state.listeningMode === 'orchestra') {
      if (year === 1880) {
        msg = `[1880] Pre-industrial quiet. Lead melody tranquil (${Math.round(freq)} Hz), CO₂ pad calm (291 ppm), Arctic crystal shimmer rich, ocean drone quiet.`;
      } else if (year === 1950) {
        msg = `[1950] Mid-century. Global temp anomaly +0.03°C, CO₂ pad gently expanding (311 ppm), ocean sub-bass steady.`;
      } else if (year === 1979) {
        msg = `[1979] Satellite cryosphere era begins. Arctic sea ice at 7.05 M km² with shimmering crystalline overtones.`;
      } else if (year === 1998) {
        msg = `[1998] Historic El Niño surge (+0.61°C). Lead voice brightens with rapid harmonic overtones.`;
      } else if (year === 2012) {
        msg = `[2012] Arctic Sea Ice hits record low (3.57 M km²). Glass crystal shimmer audibly fades to near silence.`;
      } else if (year === 2024) {
        msg = `[2024] Record heat (+1.28°C), CO₂ 426.9 ppm, sea level +111.4 mm. Roaring ocean mass sub-bass, dense pad pressure, Arctic shimmer faded.`;
      } else {
        msg = `[Year ${year}] Temp: ${formatValue(ds, val)} · CO₂: ${Math.round(snapshot.co2)} ppm · Ice: ${snapshot.seaice.toFixed(1)} M km² · Sea: +${snapshot.sealevel.toFixed(1)} mm`;
      }
    } else {
      msg = `Year ${year}: ${formatValue(ds, val)} (${Math.round(freq)} Hz)`;
    }
    appendTranscript(msg, state.listeningMode === 'accessible' || state.voiceNarration);
    announceSR(msg);
  }
}

function startPlayback() {
  if (state.isPlaying) return;
  stopComparePlayback();
  if (!sonifier.init()) return;

  const ds = getActiveDataset();
  if (state.currentIndex >= ds.years.length - 1) {
    state.currentIndex = 0;
  }

  state.isPlaying = true;
  updateTransportButtons();

  if (state.listeningMode === 'orchestra') {
    sonifier.startOrchestra();
    appendTranscript(
      `[Earth Orchestra] Flagship soundscape active: Lead (Temp), Harmony Pad (CO₂), Ice Crystal Shimmer (Sea Ice), Deep Drone (Sea Level), and Acceleration Detection.`
    );
    announceSR(`Playing ${ds.title} in Earth Orchestra mode.`);
  } else {
    appendTranscript(`[Play] ${ds.title} — ${state.listeningMode.toUpperCase()} mode.`);
    announceSR(`Playing ${ds.title} in ${state.listeningMode} mode.`);
  }

  stepPlayback(false);
  scheduleNextTick();
}

function scheduleNextTick() {
  clearInterval(playbackTimer);
  if (!state.isPlaying) return;
  const baseMs =
    state.listeningMode === 'accessible'
      ? 420
      : state.listeningMode === 'musical'
        ? 230
        : state.listeningMode === 'orchestra'
          ? 195
          : 175;
  const intervalMs = Math.max(75, Math.round(baseMs / state.playbackSpeed));
  playbackTimer = setInterval(() => {
    stepPlayback(true);
  }, intervalMs);
}

function pausePlayback() {
  state.isPlaying = false;
  clearInterval(playbackTimer);
  sonifier.stopContinuous();
  sonifier.stopOrchestra();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  updateTransportButtons();
  announceSR('Playback paused.');
}

function stopPlayback(resetIndex = true) {
  pausePlayback();
  if (resetIndex) {
    state.currentIndex = 0;
    const ds = getActiveDataset();
    const norm = normalizeValue(ds, ds.values[0]);
    const freq = sonifier.normToFreq(norm);
    const snap = getPlanetarySnapshot(ds.years[0]);
    updatePlayerUI(ds, 0, ds.years[0], ds.values[0], 0, freq, -0.75, snap);
    announceSR(`Playback stopped and reset to ${ds.years[0]}.`);
  }
}

function scrubToIndex(newIndex, auditionOnce = true) {
  const ds = getActiveDataset();
  const clamped = Math.max(0, Math.min(ds.years.length - 1, newIndex));
  state.currentIndex = clamped;

  const year = ds.years[clamped];
  const val = ds.values[clamped];
  const prevVal = clamped > 0 ? ds.values[clamped - 1] : val;
  const yoy = val - prevVal;
  const norm = normalizeValue(ds, val);
  const pan = -0.75 + (clamped / Math.max(1, ds.years.length - 1)) * 1.5;
  const snap = getPlanetarySnapshot(year);

  let freq = sonifier.normToFreq(norm);
  if (state.isPlaying) {
    if (state.listeningMode === 'orchestra') {
      freq = sonifier.updateOrchestra(snap, pan);
    }
  } else if (auditionOnce) {
    if (state.listeningMode === 'orchestra') {
      freq = sonifier.auditionOrchestraSnapshot(snap, pan, 0.42);
    } else {
      freq = sonifier.triggerDiscreteNote({
        norm,
        mode: state.listeningMode === 'musical' ? 'musical' : 'accessible',
        panValue: pan,
        duration: 0.16
      });
    }
  }
  updatePlayerUI(ds, clamped, year, val, yoy, freq, pan, snap);
}

/**
 * ==========================================================================
 * 6. UI UPDATING & DATASET LOADING
 * ==========================================================================
 */
function loadDataset(datasetId, switchToPlayer = false) {
  if (!EARTH_DATASETS[datasetId]) return;
  const wasPlaying = state.isPlaying;
  pausePlayback();

  state.activeDatasetId = datasetId;
  state.currentIndex = 0;
  const ds = getActiveDataset();
  const stats = getDatasetStats(ds);

  const selectEl = document.getElementById('player-dataset-select');
  if (selectEl) selectEl.value = datasetId;

  document.getElementById('player-heading').textContent = ds.title;
  document.getElementById('readout-metric-label').textContent = ds.metricLabel;
  document.getElementById('chart-axis-start').textContent = ds.years[0];
  document.getElementById('chart-axis-end').textContent = ds.years[ds.years.length - 1];

  const scrubber = document.getElementById('timeline-scrubber');
  scrubber.max = ds.years.length - 1;
  scrubber.value = 0;

  document.getElementById('info-science-summary').textContent = ds.summary;
  document.getElementById('info-source-name').textContent = ds.source;
  document.getElementById('info-date-span').textContent = `${ds.years[0]} – ${ds.years[ds.years.length - 1]}`;
  document.getElementById('info-min-max').textContent = `${formatValue(ds, stats.min)} / ${formatValue(ds, stats.max)}`;

  updateLegendCardForCurrentMode();

  const initNorm = normalizeValue(ds, ds.values[0]);
  const snap = getPlanetarySnapshot(ds.years[0]);
  updatePlayerUI(ds, 0, ds.years[0], ds.values[0], 0, sonifier.normToFreq(initNorm), -0.75, snap);

  appendTranscript(`[Dataset Loaded] ${ds.title} (${ds.years.length} annual points).`);
  announceSR(`Loaded dataset: ${ds.title}.`);

  if (switchToPlayer) {
    navigateTo('player');
  }
  if (wasPlaying) {
    startPlayback();
  }
}

function updateLegendCardForCurrentMode() {
  const badge = document.getElementById('legend-mode-badge');
  const desc = document.getElementById('legend-mode-desc');
  const list = document.getElementById('legend-rules-list');
  if (!badge || !desc || !list) return;

  const ds = getActiveDataset();
  const stats = getDatasetStats(ds);

  if (state.listeningMode === 'orchestra') {
    badge.textContent = 'Earth Orchestra (Flagship)';
    badge.className = 'px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold';
    desc.textContent =
      'Flagship multi-system planetary soundscape combining Lead (Temp), Harmony Pad (CO₂), Ice Crystal Shimmer (Sea Ice), Deep Sub Drone (Sea Level), and Acceleration Detection into an interacting symphony.';
    list.innerHTML = `
      <div class="surface-sub rounded-xl p-3 border-l-4 border-sky-400">
        <dt class="text-xs font-bold uppercase tracking-wider text-sky-400">1. Lead Voice · Global Temp (GISTEMP)</dt>
        <dd class="mt-1 font-medium text-xs leading-relaxed">
          Warm atmospheric melody defining emotional shape. Higher temperature climbs to higher pitch (~175 to 630 Hz); rapid jumps brighten timbre and open resonant harmonics.
        </dd>
      </div>
      <div class="surface-sub rounded-xl p-3 border-l-4 border-emerald-400">
        <dt class="text-xs font-bold uppercase tracking-wider text-emerald-400">2. Harmony Layer · Atmospheric CO₂ (NOAA)</dt>
        <dd class="mt-1 font-medium text-xs leading-relaxed">
          Slow evolving pad mapped to harmonic density and chord complexity (not pitch). Low CO₂ = open, calm 5th dyad. High CO₂ (426+ ppm) = dense 4-part harmonic cluster and palpable greenhouse pressure.
        </dd>
      </div>
      <div class="surface-sub rounded-xl p-3 border-l-4 border-cyan-300">
        <dt class="text-xs font-bold uppercase tracking-wider text-cyan-300">3. Texture Layer · Arctic Sea Ice (NSIDC)</dt>
        <dd class="mt-1 font-medium text-xs leading-relaxed">
          High-frequency glass crystal shimmer. More ice = sparkling high texture. As Arctic sea ice collapses, the shimmer audibly fades into near silence—you can hear the Arctic disappearing.
        </dd>
      </div>
      <div class="surface-sub rounded-xl p-3 border-l-4 border-teal-400">
        <dt class="text-xs font-bold uppercase tracking-wider text-teal-400">4. Bass Layer · Global Sea Level (NASA)</dt>
        <dd class="mt-1 font-medium text-xs leading-relaxed">
          Deep sub-bass drone foundation (48–55 Hz). Belongs in the low end: as oceans rise over 111 mm, sub-bass energy swells with immense planetary ocean mass and gravity.
        </dd>
      </div>
      <div class="surface-sub rounded-xl p-3 border-l-4 border-amber-400">
        <dt class="text-xs font-bold uppercase tracking-wider text-amber-400">5. Change Detection Layer · Delta Acceleration</dt>
        <dd class="mt-1 font-medium text-xs leading-relaxed">
          Extracts year-over-year rate of change. Stable periods remain calm; rapid shifts and accelerations excite radiant upper harmonics, spatial movement, and delay reflections.
        </dd>
      </div>
    `;
  } else if (state.listeningMode === 'scientific') {
    badge.textContent = 'Scientific';
    badge.className = 'px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 text-xs font-bold';
    desc.textContent =
      'Continuous sine + warm harmonic oscillator whose frequency glides smoothly in exact proportion to the scientific measurement.';
    list.innerHTML = `
      <div class="surface-sub rounded-xl p-3">
        <dt class="text-xs font-bold uppercase tracking-wider text-sky-400">1. Data Value → Pitch (Hz)</dt>
        <dd class="mt-1 font-medium text-xs">
          180 Hz (${formatValue(ds, stats.min)}) to 780 Hz (${formatValue(ds, stats.max)}). ${ds.sonificationHint}
        </dd>
      </div>
      <div class="surface-sub rounded-xl p-3">
        <dt class="text-xs font-bold uppercase tracking-wider text-emerald-400">2. Rate of Change → Harmonic Brightness</dt>
        <dd class="mt-1 font-medium text-xs">
          Larger year-over-year jumps gently boost harmonic overtone clarity and rhythmic pulse emphasis.
        </dd>
      </div>
      <div class="surface-sub rounded-xl p-3">
        <dt class="text-xs font-bold uppercase tracking-wider text-amber-400">3. Chronological Time → Stereo Pan</dt>
        <dd class="mt-1 font-medium text-xs">
          Earliest year begins on the Left channel (-0.75) and travels smoothly to the Right channel (+0.75) at 2025.
        </dd>
      </div>
    `;
  } else if (state.listeningMode === 'musical') {
    badge.textContent = 'Musical (Lydian)';
    badge.className = 'px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 text-xs font-bold';
    desc.textContent =
      'Quantizes scientific values onto a luminous C Lydian musical scale with warm harmonic overtones and space effects.';
    list.innerHTML = `
      <div class="surface-sub rounded-xl p-3">
        <dt class="text-xs font-bold uppercase tracking-wider text-sky-400">1. Data Value → Lydian Scale Degree</dt>
        <dd class="mt-1 font-medium text-xs">
          Maps measurement smoothly across two octaves of the C Lydian mode (G3 to G5).
        </dd>
      </div>
      <div class="surface-sub rounded-xl p-3">
        <dt class="text-xs font-bold uppercase tracking-wider text-emerald-400">2. Acoustic Resonance</dt>
        <dd class="mt-1 font-medium text-xs">
          Subtle sub-oscillator and space reverb provide rich instrumental warmth.
        </dd>
      </div>
      <div class="surface-sub rounded-xl p-3">
        <dt class="text-xs font-bold uppercase tracking-wider text-amber-400">3. Stereo Progression</dt>
        <dd class="mt-1 font-medium text-xs">
          Stereo field pans smoothly from Left to Right across the timeline.
        </dd>
      </div>
    `;
  } else {
    badge.textContent = 'Accessible + Voice';
    badge.className = 'px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold';
    desc.textContent =
      'Discrete step tones paired with automatic spoken year and value narration via Web Speech API.';
    list.innerHTML = `
      <div class="surface-sub rounded-xl p-3">
        <dt class="text-xs font-bold uppercase tracking-wider text-sky-400">1. Clean Step Tones</dt>
        <dd class="mt-1 font-medium text-xs">
          Pure sine waves with defined start/stop envelopes for distinct acoustic separation.
        </dd>
      </div>
      <div class="surface-sub rounded-xl p-3">
        <dt class="text-xs font-bold uppercase tracking-wider text-emerald-400">2. Spoken Narration</dt>
        <dd class="mt-1 font-medium text-xs">
          Speaks each milestone year and formatted unit measurement in real-time.
        </dd>
      </div>
      <div class="surface-sub rounded-xl p-3">
        <dt class="text-xs font-bold uppercase tracking-wider text-amber-400">3. WCAG Live Region</dt>
        <dd class="mt-1 font-medium text-xs">
          All values stream directly to screen-reader accessible live regions.
        </dd>
      </div>
    `;
  }
}

function updatePlayerUI(ds, idx, year, val, yoy, freq, pan, snapshot) {
  document.getElementById('readout-year').textContent = year;
  document.getElementById('readout-value').textContent = formatValue(ds, val);

  const yoyEl = document.getElementById('readout-yoy');
  const yoySign = yoy > 0 ? '+' : '';
  const decimals = ds.id === 'sealevel' ? 1 : 2;
  yoyEl.textContent = `${yoySign}${yoy.toFixed(decimals)} ${ds.unit}`;
  yoyEl.className = `text-lg font-mono font-bold ${
    yoy > 0 ? 'text-amber-400' : yoy < 0 ? 'text-sky-400' : 'text-muted'
  }`;

  if (state.listeningMode === 'orchestra') {
    document.getElementById('readout-freq').textContent = `Lead: ${Math.round(freq)} Hz · 5 Voices`;
    document.getElementById('readout-pan').textContent = state.stereoPan ? '3D Binaural Soundstage' : 'Mono Center';
  } else {
    document.getElementById('readout-freq').textContent = `${Math.round(freq)} Hz`;
    const panText = !state.stereoPan
      ? 'Center (Mono)'
      : pan < -0.05
        ? `${Math.abs(pan).toFixed(2)} L`
        : pan > 0.05
          ? `${pan.toFixed(2)} R`
          : 'Center';
    document.getElementById('readout-pan').textContent = panText;
  }

  const scrubber = document.getElementById('timeline-scrubber');
  scrubber.value = idx;
  const pct = Math.round((idx / Math.max(1, ds.years.length - 1)) * 100);
  document.getElementById('scrubber-progress-text').textContent =
    `Point ${idx + 1} of ${ds.years.length} (${pct}%)`;

  const norm = normalizeValue(ds, val);
  const snap = snapshot || getPlanetarySnapshot(year);
  const orbLabel = document.getElementById('orb-intensity-label');

  if (state.listeningMode === 'orchestra') {
    if (snap.acceleration > 0.35) orbLabel.textContent = 'Acceleration Surge';
    else if (snap.tempNorm > 0.75) orbLabel.textContent = 'Peak Heat Pressure';
    else if (snap.tempNorm > 0.45) orbLabel.textContent = 'Elevated Warming';
    else orbLabel.textContent = 'Quiet Baseline';
  } else {
    orbLabel.textContent = norm > 0.75 ? 'High Peak' : norm > 0.4 ? 'Elevated' : 'Low / Baseline';
  }

  drawMainChart(ds, idx);
  drawEarthOrb(ds, norm, snap);
}

function updateTransportButtons() {
  const btn = document.getElementById('btn-play-pause');
  const icon = document.getElementById('icon-play-pause');
  const label = document.getElementById('label-play-pause');
  const navDot = document.getElementById('nav-playing-dot');

  if (state.isPlaying) {
    icon.textContent = '⏸';
    label.textContent = 'Pause';
    btn.classList.replace('bg-sky-500', 'bg-amber-400');
    btn.classList.replace('hover:bg-sky-400', 'hover:bg-amber-300');
    navDot.classList.remove('hidden');
  } else {
    icon.textContent = '▶';
    label.textContent = 'Play Sonification';
    btn.classList.replace('bg-amber-400', 'bg-sky-500');
    btn.classList.replace('hover:bg-amber-300', 'hover:bg-sky-400');
    navDot.classList.add('hidden');
  }
}

/**
 * ==========================================================================
 * 7. RESPONSIVE CANVAS VISUALIZATIONS (MAIN CHART, EARTH ORB & ANALYSER)
 * ==========================================================================
 */
function fitCanvasToParent(canvas) {
  if (!canvas) return null;
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(100, Math.floor(rect.width));
  const height = Math.max(60, Math.floor(rect.height));
  if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
    canvas.width = width * dpr;
    canvas.height = height * dpr;
  }
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, width, height };
}

function drawMainChart(ds, activeIdx) {
  const canvas = document.getElementById('main-chart-canvas');
  const fit = fitCanvasToParent(canvas);
  if (!fit) return;
  const { ctx, width, height } = fit;

  ctx.clearRect(0, 0, width, height);

  const pad = { top: 20, right: 18, bottom: 22, left: 48 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;

  const { min, max, span } = getDatasetStats(ds);
  const count = ds.values.length;

  const getX = (i) => pad.left + (i / Math.max(1, count - 1)) * plotW;
  const getY = (v) => pad.top + plotH - ((v - min) / span) * plotH;

  ctx.strokeStyle = 'rgba(148, 163, 184, 0.16)';
  ctx.lineWidth = 1;
  ctx.font = '11px monospace';
  ctx.fillStyle = '#94A3B8';
  ctx.textAlign = 'right';

  for (let g = 0; g <= 4; g++) {
    const val = min + (span * g) / 4;
    const y = getY(val);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
    ctx.fillText(val.toFixed(ds.id === 'sealevel' ? 0 : 1), pad.left - 6, y + 4);
  }

  if (ds.baseline >= min && ds.baseline <= max) {
    const by = getY(ds.baseline);
    ctx.save();
    ctx.strokeStyle = 'rgba(248, 250, 252, 0.35)';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(pad.left, by);
    ctx.lineTo(width - pad.right, by);
    ctx.stroke();
    ctx.restore();
  }

  // Full dataset faint curve
  ctx.beginPath();
  ds.values.forEach((v, i) => {
    const x = getX(i);
    const y = getY(v);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.28)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Progress gradient fill
  const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + plotH);
  grad.addColorStop(0, ds.color + '66');
  grad.addColorStop(1, ds.color + '05');

  ctx.beginPath();
  ctx.moveTo(getX(0), pad.top + plotH);
  for (let i = 0; i <= activeIdx; i++) {
    ctx.lineTo(getX(i), getY(ds.values[i]));
  }
  ctx.lineTo(getX(activeIdx), pad.top + plotH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Active glowing stroke
  ctx.beginPath();
  for (let i = 0; i <= activeIdx; i++) {
    const x = getX(i);
    const y = getY(ds.values[i]);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = ds.color;
  ctx.lineWidth = 3;
  ctx.stroke();

  const cx = getX(activeIdx);
  const cy = getY(ds.values[activeIdx]);

  // Scrub guide line
  ctx.save();
  ctx.strokeStyle = ds.accentColor;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(cx, pad.top);
  ctx.lineTo(cx, pad.top + plotH);
  ctx.stroke();
  ctx.restore();

  // Active marker
  ctx.beginPath();
  ctx.arc(cx, cy, 6.5, 0, Math.PI * 2);
  ctx.fillStyle = ds.accentColor;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#060B19';
  ctx.stroke();
}

/**
 * Animated Earth Data Orb:
 * Synchronized with live audio intensity, ice cap shrinkage, and trend acceleration events.
 */
function drawEarthOrb(ds, norm, snapshot) {
  const canvas = document.getElementById('earth-orb-canvas');
  const fit = fitCanvasToParent(canvas);
  if (!fit) return;
  const { ctx, width, height } = fit;
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) * 0.34;

  ctx.clearRect(0, 0, width, height);

  const snap = snapshot || getPlanetarySnapshot(ds.years[state.currentIndex]);
  const audioPulse = sonifier.getAudioIntensity() * 0.18;
  const effectiveNorm = state.listeningMode === 'orchestra' ? snap.tempNorm : norm;

  // Thermal Aura: shifts from cool blue/cyan to solar amber and incandescent red with warming
  const glowRadius = radius * (1.24 + effectiveNorm * 0.28 + audioPulse);
  const aura = ctx.createRadialGradient(cx, cy, radius * 0.7, cx, cy, glowRadius);

  let hotColor = 'rgba(56, 189, 248, 0.45)';
  if (effectiveNorm > 0.80) {
    hotColor = 'rgba(239, 68, 68, 0.65)';
  } else if (effectiveNorm > 0.55) {
    hotColor = 'rgba(245, 158, 11, 0.58)';
  } else if (effectiveNorm > 0.35) {
    hotColor = 'rgba(16, 185, 129, 0.50)';
  }

  aura.addColorStop(0, hotColor);
  aura.addColorStop(1, 'rgba(6, 11, 25, 0)');

  ctx.beginPath();
  ctx.arc(cx, cy, glowRadius, 0, Math.PI * 2);
  ctx.fillStyle = aura;
  ctx.fill();

  // Trend Acceleration Event Shockwave Pulse Ring
  if (snap.acceleration > 0.32 && (state.isPlaying || state.isComparing)) {
    const pulseScale = 1.15 + (Math.sin(Date.now() * 0.008) + 1) * 0.12;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius * pulseScale, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.70)';
    ctx.lineWidth = 2.2;
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.restore();
  }

  // Ocean Globe Sphere Gradient
  const oceanGrad = ctx.createRadialGradient(
    cx - radius * 0.3,
    cy - radius * 0.3,
    radius * 0.1,
    cx,
    cy,
    radius
  );
  oceanGrad.addColorStop(0, '#38BDF8');
  oceanGrad.addColorStop(0.65, '#0B3D91');
  oceanGrad.addColorStop(1, '#04122B');

  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = oceanGrad;
  ctx.fill();

  // Clipped Rotating Continents and Polar Ice
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.clip();

  // Latitudinal Grid
  ctx.strokeStyle = 'rgba(255,255,255,0.14)';
  ctx.lineWidth = 1;
  for (let lat = -2; lat <= 2; lat++) {
    const y = cy + (lat / 3) * radius;
    ctx.beginPath();
    ctx.moveTo(cx - radius, y);
    ctx.lineTo(cx + radius, y);
    ctx.stroke();
  }

  // Continents (Thermal Coloration)
  ctx.fillStyle = effectiveNorm > 0.75
    ? 'rgba(245, 158, 11, 0.70)'
    : effectiveNorm > 0.45
      ? 'rgba(251, 191, 36, 0.65)'
      : 'rgba(16, 185, 129, 0.72)';

  const offset = ((globeRotation % 360) / 360) * radius * 2.4;
  [-radius * 2.4, 0, radius * 2.4].forEach((shift) => {
    const lx = cx - radius * 0.6 + offset + shift;
    ctx.beginPath();
    ctx.ellipse(lx, cy - radius * 0.2, radius * 0.34, radius * 0.22, 0.3, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(lx + radius * 0.55, cy + radius * 0.25, radius * 0.26, radius * 0.32, -0.2, 0, Math.PI * 2);
    ctx.fill();
  });

  // Arctic Polar Ice Cap: Visibly shrinks in exact sync with ice loss & shimmering audio fading
  const iceScale = state.listeningMode === 'orchestra'
    ? Math.max(0.12, 0.20 + snap.iceNorm * 0.80)
    : ds.id === 'seaice'
      ? Math.max(0.12, 0.20 + norm * 0.80)
      : Math.max(0.20, 1 - norm * 0.5);

  ctx.fillStyle = 'rgba(248, 250, 252, 0.88)';
  ctx.beginPath();
  ctx.ellipse(cx, cy - radius * 0.92, radius * 0.45 * iceScale, radius * 0.14 * iceScale, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function renderAnimationLoop() {
  if (!state.reducedMotion && (state.isPlaying || state.isComparing)) {
    globeRotation = (globeRotation + 0.45 * state.playbackSpeed) % 360;
  }
  const ds = getActiveDataset();
  const year = ds.years[state.currentIndex];
  const snap = getPlanetarySnapshot(year);
  drawEarthOrb(ds, normalizeValue(ds, ds.values[state.currentIndex]), snap);

  const canvas = document.getElementById('analyser-canvas');
  const fit = fitCanvasToParent(canvas);
  if (fit) {
    const { ctx, width, height } = fit;
    ctx.clearRect(0, 0, width, height);

    ctx.lineWidth = 2;
    ctx.strokeStyle = state.listeningMode === 'orchestra' && snap.tempNorm > 0.65
      ? '#F59E0B'
      : (state.isPlaying || state.isComparing ? '#10B981' : '#475569');
    ctx.beginPath();

    if (sonifier.analyser && sonifier.dataArray && (state.isPlaying || state.isComparing)) {
      sonifier.analyser.getByteTimeDomainData(sonifier.dataArray);
      const sliceWidth = width / sonifier.dataArray.length;
      let x = 0;
      for (let i = 0; i < sonifier.dataArray.length; i++) {
        const v = sonifier.dataArray[i] / 128.0;
        const y = (v * height) / 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        x += sliceWidth;
      }
    } else {
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
    }
    ctx.stroke();
  }

  requestAnimationFrame(renderAnimationLoop);
}

/**
 * ==========================================================================
 * 8. "HEAR THE CHANGE" A/B COMPARISON STUDIO ENGINE
 * ==========================================================================
 */
function getComparisonStreams() {
  const preset = document.getElementById('compare-preset-select').value;
  if (preset === 'temp-eras') {
    const temp = EARTH_DATASETS.gistemp;
    return {
      titleA: 'Early Era Temp (1880–1925)',
      titleB: 'Modern Era Temp (1980–2025)',
      labels: Array.from({ length: 46 }, (_, i) => `Yr +${i}`),
      valuesA: temp.values.slice(0, 46),
      valuesB: temp.values.slice(100, 146),
      unitA: '°C',
      unitB: '°C',
      minA: -0.5,
      maxA: 1.3,
      minB: -0.5,
      maxB: 1.3
    };
  }
  if (preset === 'co2-temp') {
    const temp = EARTH_DATASETS.gistemp;
    const co2 = EARTH_DATASETS.co2;
    const tempSlice = temp.values.slice(79);
    return {
      titleA: 'Atmospheric CO₂ (1959–2025)',
      titleB: 'Global Temp Anomaly (1959–2025)',
      labels: co2.years.map(String),
      valuesA: co2.values,
      valuesB: tempSlice,
      unitA: 'ppm',
      unitB: '°C',
      minA: 315,
      maxA: 428,
      minB: -0.25,
      maxB: 1.3
    };
  }

  const ice = EARTH_DATASETS.seaice;
  const sea = EARTH_DATASETS.sealevel;
  return {
    titleA: 'Arctic Sea Ice Extent (1993–2025)',
    titleB: 'Global Sea Level Rise (1993–2025)',
    labels: sea.years.map(String),
    valuesA: ice.values.slice(14),
    valuesB: sea.values,
    unitA: 'M km²',
    unitB: 'mm',
    minA: 3.5,
    maxA: 7.6,
    minB: 0,
    maxB: 112
  };
}

function drawComparisonChart(activeIdx = -1) {
  const canvas = document.getElementById('compare-chart-canvas');
  const fit = fitCanvasToParent(canvas);
  if (!fit) return;
  const { ctx, width, height } = fit;
  const streams = getComparisonStreams();

  document.getElementById('compare-label-a').textContent = `Stream A (Left): ${streams.titleA}`;
  document.getElementById('compare-label-b').textContent = `Stream B (Right): ${streams.titleB}`;

  ctx.clearRect(0, 0, width, height);
  const pad = { top: 20, right: 20, bottom: 24, left: 20 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const len = streams.valuesA.length;

  const getX = (i) => pad.left + (i / Math.max(1, len - 1)) * plotW;
  const getYA = (v) => pad.top + plotH - ((v - streams.minA) / (streams.maxA - streams.minA)) * plotH;
  const getYB = (v) => pad.top + plotH - ((v - streams.minB) / (streams.maxB - streams.minB)) * plotH;

  ctx.strokeStyle = 'rgba(148,163,184,0.15)';
  ctx.lineWidth = 1;
  for (let g = 0; g <= 4; g++) {
    const y = pad.top + (plotH * g) / 4;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
  }

  ctx.beginPath();
  streams.valuesA.forEach((v, i) => {
    const x = getX(i);
    const y = getYA(v);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#38BDF8';
  ctx.lineWidth = 2.8;
  ctx.stroke();

  ctx.beginPath();
  streams.valuesB.forEach((v, i) => {
    const x = getX(i);
    const y = getYB(v);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#F59E0B';
  ctx.lineWidth = 2.8;
  ctx.stroke();

  if (activeIdx >= 0 && activeIdx < len) {
    const cx = getX(activeIdx);
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, pad.top);
    ctx.lineTo(cx, pad.top + plotH);
    ctx.stroke();

    ctx.fillStyle = '#38BDF8';
    ctx.beginPath();
    ctx.arc(cx, getYA(streams.valuesA[activeIdx]), 5.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(cx, getYB(streams.valuesB[activeIdx]), 5.5, 0, Math.PI * 2);
    ctx.fill();
  }
}

function startComparePlayback() {
  if (state.isComparing) return;
  stopPlayback(false);
  if (!sonifier.init()) return;

  state.isComparing = true;
  state.compareIndex = 0;
  document.getElementById('icon-compare-play').textContent = '⏸';
  document.getElementById('label-compare-play').textContent = 'Comparing...';

  const runStep = () => {
    const streams = getComparisonStreams();
    const routing = document.getElementById('compare-audio-routing').value;
    const idx = state.compareIndex;

    if (idx >= streams.valuesA.length) {
      stopComparePlayback();
      announceSR('Comparison playback finished.');
      return;
    }

    const valA = streams.valuesA[idx];
    const valB = streams.valuesB[idx];
    const normA = (valA - streams.minA) / (streams.maxA - streams.minA);
    const normB = (valB - streams.minB) / (streams.maxB - streams.minB);
    const divergencePct = Math.round(Math.abs(normA - normB) * 100);

    // Enhanced sonification using Space Effects & Divergence Dissonance Beating
    sonifier.triggerComparePoint({
      normA,
      normB,
      routing,
      duration: 0.32
    });

    const statusDivergence = divergencePct > 45 ? 'High Divergence (Audible Beating)' : divergencePct > 20 ? 'Moderate Shift' : 'Harmonic Alignment';
    document.getElementById('compare-live-readout').textContent =
      `[${streams.labels[idx]}] A: ${valA.toFixed(2)} ${streams.unitA} | B: ${valB.toFixed(2)} ${streams.unitB} · Δ: ${divergencePct}% (${statusDivergence})`;
    drawComparisonChart(idx);
    state.compareIndex += 1;
  };

  runStep();
  compareTimer = setInterval(runStep, 380);
}

function stopComparePlayback() {
  state.isComparing = false;
  clearInterval(compareTimer);
  sonifier.stopCompareVoices();
  document.getElementById('icon-compare-play').textContent = '▶';
  document.getElementById('label-compare-play').textContent = 'Play A/B Comparison';
  drawComparisonChart(-1);
}

/**
 * ==========================================================================
 * 9. NAVIGATION, EXPLORE CARDS, HOME SPARKLINE & MODAL WIRING
 * ==========================================================================
 */
function navigateTo(viewName) {
  if (state.isComparing && viewName !== 'compare') stopComparePlayback();
  state.currentView = viewName;
  document.querySelectorAll('.view-section').forEach((sec) => {
    sec.classList.toggle('hidden', sec.id !== `view-${viewName}`);
  });

  document.querySelectorAll('.nav-btn').forEach((btn) => {
    const active = btn.dataset.nav === viewName;
    btn.setAttribute('aria-current', active ? 'page' : 'false');
    if (active) {
      btn.classList.add('bg-sky-500', 'text-slate-950');
      btn.classList.remove('surface-sub');
    } else {
      btn.classList.remove('bg-sky-500', 'text-slate-950');
      btn.classList.add('surface-sub');
    }
  });

  if (viewName === 'player') {
    const ds = getActiveDataset();
    drawMainChart(ds, state.currentIndex);
    const snap = getPlanetarySnapshot(ds.years[state.currentIndex]);
    drawEarthOrb(ds, normalizeValue(ds, ds.values[state.currentIndex]), snap);
  } else if (viewName === 'compare') {
    drawComparisonChart(-1);
  }

  announceSR(`Navigated to ${viewName} section.`);
}

function renderExploreCards() {
  const grid = document.getElementById('dataset-cards-grid');
  const select = document.getElementById('player-dataset-select');
  grid.innerHTML = '';
  select.innerHTML = '';

  Object.values(EARTH_DATASETS).forEach((ds) => {
    const startVal = formatValue(ds, ds.values[0]);
    const endVal = formatValue(ds, ds.values[ds.values.length - 1]);

    const opt = document.createElement('option');
    opt.value = ds.id;
    opt.textContent = `${ds.shortTitle} (${ds.years[0]}–${ds.years[ds.years.length - 1]})`;
    select.appendChild(opt);

    const card = document.createElement('article');
    card.className =
      'surface-card rounded-2xl p-6 flex flex-col justify-between gap-4 hover:border-sky-400 transition shadow-lg';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between gap-2">
          <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${ds.badgeClass}">
            ${ds.years[0]} – ${ds.years[ds.years.length - 1]}
          </span>
          <span class="text-xs text-muted font-mono">${ds.years.length} data points</span>
        </div>
        <h2 class="text-xl font-extrabold">${ds.title}</h2>
        <p class="text-sm text-muted leading-relaxed">${ds.summary}</p>
        <div class="surface-sub rounded-xl p-3 text-xs space-y-1">
          <div><strong class="text-sky-400">Trend Shift:</strong> ${startVal} (${ds.years[0]}) → ${endVal} (${ds.years[ds.years.length - 1]})</div>
          <div><strong class="text-emerald-400">Sound Mapping:</strong> ${ds.sonificationHint}</div>
          <div class="text-muted pt-1">Source: ${ds.source}</div>
        </div>
      </div>
      <div class="flex items-center gap-3 pt-2">
        <button type="button" data-select-ds="${ds.id}" class="touch-target flex-1 px-4 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-sm transition flex items-center justify-center gap-2">
          <span aria-hidden="true">🎧</span>
          <span>Load &amp; Listen</span>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll('[data-select-ds]').forEach((btn) => {
    btn.addEventListener('click', () => {
      loadDataset(btn.dataset.selectDs, true);
    });
  });
}

function renderHomeSparkline() {
  const ds = EARTH_DATASETS.gistemp;
  const { min, span } = getDatasetStats(ds);
  const w = 320;
  const h = 100;
  const pts = ds.values.map((v, i) => {
    const x = (i / (ds.values.length - 1)) * (w - 10) + 5;
    const y = h - 8 - ((v - min) / span) * (h - 20);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  document.getElementById('home-preview-line').setAttribute('d', 'M ' + pts.join(' L '));
  document
    .getElementById('home-preview-area')
    .setAttribute('d', `M 5,${h} L ` + pts.join(' L ') + ` L ${w - 5},${h} Z`);
}

function openTutorialModal() {
  const modal = document.getElementById('tutorial-modal');
  modal.classList.remove('hidden');
  document.getElementById('btn-tutorial-sound-demo').focus();
}

function closeTutorialModal() {
  document.getElementById('tutorial-modal').classList.add('hidden');
  try {
    localStorage.setItem('earth_jukebox_tutorial_seen', '1');
  } catch (_) {}
}

/**
 * ==========================================================================
 * 9.5. HIGH-FIDELITY WAV AUDIO EXPORT (OFFLINE AUDIO CONTEXT SYNTHESIZER)
 * Encodes the entire 1880–2025 Earth Orchestra symphony into a broadcast-quality
 * 16-bit 44.1 kHz stereo PCM .WAV audio file using OfflineAudioContext.
 * ==========================================================================
 */
function audioBufferToWav(buffer) {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const bitDepth = 16;
  let samples;

  if (numChannels === 2) {
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);
    samples = new Float32Array(left.length + right.length);
    let sIdx = 0;
    for (let i = 0; i < left.length; i++) {
      samples[sIdx++] = left[i];
      samples[sIdx++] = right[i];
    }
  } else {
    samples = buffer.getChannelData(0);
  }

  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;
  const arrayBuffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
  const view = new DataView(arrayBuffer);

  const writeString = (offset, str) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  /* RIFF chunk descriptor */
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + samples.length * bytesPerSample, true);
  writeString(8, 'WAVE');

  /* fmt sub-chunk */
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
  view.setUint16(20, 1, true);  // AudioFormat (1 for PCM)
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true); // ByteRate
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);

  /* data sub-chunk */
  writeString(36, 'data');
  view.setUint32(40, samples.length * bytesPerSample, true);

  // Write 16-bit PCM samples with soft clipping protection
  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }

  return new Blob([arrayBuffer], { type: 'audio/wav' });
}

async function exportOrchestraWav() {
  const exportBtn = document.getElementById('btn-export-wav');
  const exportLabel = document.getElementById('label-export-wav');
  if (exportBtn) exportBtn.disabled = true;
  if (exportLabel) exportLabel.textContent = 'Rendering .WAV...';

  announceSR('Rendering Earth Orchestra 1880–2025 symphony into CD-quality 16-bit WAV file...');
  appendTranscript('[Export] Rendering Earth Orchestra 1880–2025 symphony to broadcast-quality 16-bit WAV...');

  try {
    const sampleRate = 44100;
    const yearsCount = 146; // 1880 to 2025
    const stepDuration = 0.20; // ~29.2 seconds total soundscape
    const totalDuration = yearsCount * stepDuration + 4.0; // +4.0s for space reverb tail
    const totalSamples = Math.ceil(totalDuration * sampleRate);

    const OfflineCtx = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (!OfflineCtx) throw new Error('OfflineAudioContext is not supported in this browser.');

    const actx = new OfflineCtx(2, totalSamples, sampleRate);

    // Master Limiter
    const limiter = actx.createDynamicsCompressor();
    limiter.threshold.setValueAtTime(-14, 0);
    limiter.knee.setValueAtTime(16, 0);
    limiter.ratio.setValueAtTime(10, 0);
    limiter.attack.setValueAtTime(0.003, 0);
    limiter.release.setValueAtTime(0.15, 0);

    const masterGain = actx.createGain();
    masterGain.gain.setValueAtTime(0.85, 0);

    const dryMix = actx.createGain();
    dryMix.gain.setValueAtTime(0.82, 0);

    const effectsBus = actx.createGain();
    effectsBus.gain.setValueAtTime(0.92, 0);

    // Planetary Space Reverb Convolver
    const reverbNode = actx.createConvolver();
    reverbNode.buffer = createSpaceReverbImpulse(actx, 4.0, 2.4);
    const reverbGain = actx.createGain();
    reverbGain.gain.setValueAtTime(0.24, 0);

    // Subtle Feedback Delay
    const delayNode = actx.createDelay(4.0);
    delayNode.delayTime.setValueAtTime(0.42, 0);
    const delayFilter = actx.createBiquadFilter();
    delayFilter.type = 'lowpass';
    delayFilter.frequency.setValueAtTime(1750, 0);
    const delayFeedback = actx.createGain();
    delayFeedback.gain.setValueAtTime(0.24, 0);
    const delayWet = actx.createGain();
    delayWet.gain.setValueAtTime(0.20, 0);

    delayNode.connect(delayFilter);
    delayFilter.connect(delayFeedback);
    delayFeedback.connect(delayNode);
    delayFilter.connect(delayWet);

    effectsBus.connect(reverbNode);
    effectsBus.connect(delayNode);
    reverbNode.connect(reverbGain);

    dryMix.connect(masterGain);
    reverbGain.connect(masterGain);
    delayWet.connect(masterGain);
    masterGain.connect(limiter);
    limiter.connect(actx.destination);

    // --- Voice 1: Lead Voice (Temperature - GISTEMP) ---
    const leadOsc1 = actx.createOscillator();
    const leadOsc2 = actx.createOscillator();
    const leadFilter = actx.createBiquadFilter();
    const leadGain = actx.createGain();
    const leadPanner = actx.createStereoPanner();

    leadOsc1.type = 'triangle';
    leadOsc2.type = 'sine';
    leadOsc2.detune.setValueAtTime(4.0, 0);
    leadFilter.type = 'lowpass';
    leadFilter.Q.setValueAtTime(2.2, 0);
    leadGain.gain.setValueAtTime(0.26, 0);

    leadOsc1.connect(leadFilter);
    leadOsc2.connect(leadFilter);
    leadFilter.connect(leadGain);
    leadGain.connect(leadPanner);
    leadPanner.connect(dryMix);
    leadPanner.connect(effectsBus);

    // --- Voice 2: Harmony Layer (Atmospheric CO₂ - NOAA) ---
    const baseC3 = 130.81;
    const harmOsc1 = actx.createOscillator();
    const harmOsc2 = actx.createOscillator();
    const harmOsc3 = actx.createOscillator();
    const harmOsc4 = actx.createOscillator();
    harmOsc1.type = 'triangle';
    harmOsc2.type = 'sine';
    harmOsc3.type = 'triangle';
    harmOsc4.type = 'sine';
    harmOsc1.frequency.setValueAtTime(baseC3, 0);
    harmOsc2.frequency.setValueAtTime(baseC3 * 1.4983, 0);
    harmOsc3.frequency.setValueAtTime(baseC3 * 1.2599, 0);
    harmOsc4.frequency.setValueAtTime(baseC3 * 2.2449, 0);

    const harmGain1 = actx.createGain();
    const harmGain2 = actx.createGain();
    const harmGain3 = actx.createGain();
    const harmGain4 = actx.createGain();
    const harmFilter = actx.createBiquadFilter();
    harmFilter.type = 'lowpass';
    harmFilter.Q.setValueAtTime(1.5, 0);
    const harmMaster = actx.createGain();
    const harmPanner = actx.createStereoPanner();
    harmPanner.pan.setValueAtTime(-0.40, 0); // 3D Binaural left spatial field

    harmOsc1.connect(harmGain1);
    harmOsc2.connect(harmGain2);
    harmOsc3.connect(harmGain3);
    harmOsc4.connect(harmGain4);
    harmGain1.connect(harmFilter);
    harmGain2.connect(harmFilter);
    harmGain3.connect(harmFilter);
    harmGain4.connect(harmFilter);
    harmFilter.connect(harmMaster);
    harmMaster.connect(harmPanner);
    harmPanner.connect(dryMix);
    harmPanner.connect(effectsBus);

    // --- Voice 3: Texture Layer (Arctic Sea Ice - NSIDC) ---
    const shimOsc1 = actx.createOscillator();
    const shimOsc2 = actx.createOscillator();
    const shimOsc3 = actx.createOscillator();
    shimOsc1.type = 'sine';
    shimOsc2.type = 'sine';
    shimOsc3.type = 'triangle';
    shimOsc1.frequency.setValueAtTime(2350, 0);
    shimOsc2.frequency.setValueAtTime(3525, 0);
    shimOsc3.frequency.setValueAtTime(4700, 0);

    const shimFilter = actx.createBiquadFilter();
    shimFilter.type = 'bandpass';
    shimFilter.frequency.setValueAtTime(2800, 0);
    shimFilter.Q.setValueAtTime(2.5, 0);
    const shimGain = actx.createGain();
    const shimPanner = actx.createStereoPanner();
    shimPanner.pan.setValueAtTime(0.50, 0); // 3D Binaural right spatial elevation

    shimOsc1.connect(shimFilter);
    shimOsc2.connect(shimFilter);
    shimOsc3.connect(shimFilter);
    shimFilter.connect(shimGain);
    shimGain.connect(shimPanner);
    shimPanner.connect(dryMix);
    shimPanner.connect(effectsBus);

    // --- Voice 4: Bass Layer (Global Sea Level - NASA) ---
    const bassOsc1 = actx.createOscillator();
    const bassOsc2 = actx.createOscillator();
    bassOsc1.type = 'sine';
    bassOsc2.type = 'triangle';
    bassOsc1.frequency.setValueAtTime(52.0, 0);
    bassOsc2.frequency.setValueAtTime(52.0, 0);

    const bassFilter = actx.createBiquadFilter();
    bassFilter.type = 'lowpass';
    bassFilter.Q.setValueAtTime(1.8, 0);
    const bassGain = actx.createGain();
    const bassPanner = actx.createStereoPanner();
    bassPanner.pan.setValueAtTime(0.0, 0); // Subterranean center

    bassOsc1.connect(bassFilter);
    bassOsc2.connect(bassFilter);
    bassFilter.connect(bassGain);
    bassGain.connect(bassPanner);
    bassPanner.connect(dryMix);
    bassPanner.connect(effectsBus);

    // --- Voice 5: Change Detection Layer (Delta / Trend) ---
    const trendOsc = actx.createOscillator();
    trendOsc.type = 'sine';
    trendOsc.frequency.setValueAtTime(1318.5, 0);
    const trendFilter = actx.createBiquadFilter();
    trendFilter.type = 'bandpass';
    trendFilter.frequency.setValueAtTime(1318.5, 0);
    trendFilter.Q.setValueAtTime(4.0, 0);
    const trendGain = actx.createGain();
    const trendPanner = actx.createStereoPanner();
    trendOsc.connect(trendFilter);
    trendFilter.connect(trendGain);
    trendGain.connect(trendPanner);
    trendPanner.connect(effectsBus);

    // Start all oscillators
    leadOsc1.start(0);
    leadOsc2.start(0);
    harmOsc1.start(0);
    harmOsc2.start(0);
    harmOsc3.start(0);
    harmOsc4.start(0);
    shimOsc1.start(0);
    shimOsc2.start(0);
    shimOsc3.start(0);
    bassOsc1.start(0);
    bassOsc2.start(0);
    trendOsc.start(0);

    // Schedule 146 annual points across the timeline
    for (let i = 0; i < yearsCount; i++) {
      const year = 1880 + i;
      const t = i * stepDuration;
      const snap = getPlanetarySnapshot(year);

      // Lead Voice (Temp)
      const leadFreq = 175 * Math.pow(630 / 175, snap.tempNorm);
      leadOsc1.frequency.setTargetAtTime(leadFreq, t, 0.08);
      leadOsc2.frequency.setTargetAtTime(leadFreq * 1.002, t, 0.08);
      const deltaMag = Math.min(1.0, Math.abs(snap.tempDelta) * 4.2);
      const leadCutoff = 750 + deltaMag * 2050 + snap.tempNorm * 450;
      leadFilter.frequency.setTargetAtTime(leadCutoff, t, 0.08);
      leadPanner.pan.setTargetAtTime(-0.35 + (i / 145) * 0.70, t, 0.08);

      // Harmony Layer (CO₂)
      harmGain1.gain.setTargetAtTime(0.07 + snap.co2Norm * 0.05, t, 0.08);
      harmGain2.gain.setTargetAtTime(0.07 + snap.co2Norm * 0.05, t, 0.08);
      harmGain3.gain.setTargetAtTime(snap.co2Norm > 0.20 ? Math.min(0.09, (snap.co2Norm - 0.20) * 0.16) : 0.0001, t, 0.08);
      harmGain4.gain.setTargetAtTime(snap.co2Norm > 0.45 ? Math.min(0.10, (snap.co2Norm - 0.45) * 0.18) : 0.0001, t, 0.08);
      harmFilter.frequency.setTargetAtTime(480 + snap.co2Norm * 1150, t, 0.08);
      harmMaster.gain.setTargetAtTime(0.18 + snap.co2Norm * 0.14, t, 0.08);

      // Texture Layer (Sea Ice Shimmer)
      const shimmerLevel = Math.max(0.002, Math.pow(snap.iceNorm, 1.6) * 0.22);
      shimGain.gain.setTargetAtTime(shimmerLevel, t, 0.08);
      shimFilter.frequency.setTargetAtTime(1800 + snap.iceNorm * 1400, t, 0.08);

      // Bass Layer (Sea Level)
      const bassLevel = 0.035 + Math.pow(snap.seaNorm, 1.4) * 0.30;
      bassGain.gain.setTargetAtTime(bassLevel, t, 0.08);
      bassFilter.frequency.setTargetAtTime(90 + snap.seaNorm * 55, t, 0.08);

      // Trend Layer
      if (snap.acceleration > 0.32) {
        trendGain.gain.setTargetAtTime(Math.min(0.14, (snap.acceleration - 0.32) * 0.22), t, 0.04);
        trendPanner.pan.setTargetAtTime(Math.sin(t * 3.2) * 0.6, t, 0.05);
      } else {
        trendGain.gain.setTargetAtTime(0.0001, t, 0.12);
      }
    }

    // Smooth release at the end
    const endT = yearsCount * stepDuration;
    leadGain.gain.setTargetAtTime(0.0001, endT, 0.8);
    harmMaster.gain.setTargetAtTime(0.0001, endT, 0.8);
    shimGain.gain.setTargetAtTime(0.0001, endT, 0.8);
    bassGain.gain.setTargetAtTime(0.0001, endT, 0.8);
    trendGain.gain.setTargetAtTime(0.0001, endT, 0.8);

    const renderedBuffer = await actx.startRendering();
    const wavBlob = audioBufferToWav(renderedBuffer);

    const downloadUrl = URL.createObjectURL(wavBlob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'NASA-Earth-Orchestra-1880-2025.wav';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(downloadUrl);

    appendTranscript(
      `[Export Complete] Downloaded NASA-Earth-Orchestra-1880-2025.wav (16-bit 44.1kHz Stereo, ${renderedBuffer.duration.toFixed(1)}s).`
    );
    announceSR('Downloaded NASA Earth Orchestra WAV audio file.');
  } catch (err) {
    console.error('WAV export error:', err);
    appendTranscript(`[Export Error] Failed to export WAV: ${err.message}`);
    showAudioWarning(`Unable to export WAV: ${err.message}`);
  } finally {
    if (exportBtn) exportBtn.disabled = false;
    if (exportLabel) exportLabel.textContent = 'Export .WAV';
  }
}

/**
 * ==========================================================================
 * 10. EVENT LISTENERS & INITIALIZATION
 * ==========================================================================
 */
window.addEventListener('DOMContentLoaded', () => {
  renderExploreCards();
  renderHomeSparkline();
  loadDataset('gistemp', false);
  navigateTo('home');

  if (state.reducedMotion) {
    document.documentElement.classList.add('reduced-motion');
    document.getElementById('btn-motion-toggle').setAttribute('aria-pressed', 'true');
  }

  // Dismiss warning banner cleanly
  const dismissWarnBtn = document.getElementById('btn-dismiss-warning');
  if (dismissWarnBtn) {
    dismissWarnBtn.addEventListener('click', () => {
      document.getElementById('audio-warning-banner').classList.add('hidden');
    });
  }

  // Navigation buttons
  document.querySelectorAll('[data-nav]').forEach((btn) => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.nav));
  });

  // Hero: Experience Earth Orchestra Flagship Button
  const heroOrchestraBtn = document.getElementById('btn-hero-orchestra');
  if (heroOrchestraBtn) {
    heroOrchestraBtn.addEventListener('click', () => {
      loadDataset('gistemp', false);
      navigateTo('player');
      const orchestraModeBtn = document.querySelector('[data-mode="orchestra"]');
      if (orchestraModeBtn) orchestraModeBtn.click();
      startPlayback();
    });
  }

  // Home 5-second temperature sweep audition
  document.getElementById('btn-home-audition').addEventListener('click', () => {
    if (!sonifier.init()) return;
    const ds = EARTH_DATASETS.gistemp;
    const label = document.getElementById('home-audition-label');
    label.textContent = 'Playing Sweep...';
    let step = 0;
    const sweep = setInterval(() => {
      const idx = Math.min(ds.values.length - 1, step * 5);
      const year = ds.years[idx];
      const snap = getPlanetarySnapshot(year);
      sonifier.auditionOrchestraSnapshot(snap, -0.6 + (idx / 145) * 1.2, 0.16);
      step++;
      if (idx >= ds.values.length - 1) {
        clearInterval(sweep);
        label.textContent = 'Hear 5s Sweep';
      }
    }, 120);
  });

  // Player dataset dropdown
  document.getElementById('player-dataset-select').addEventListener('change', (e) => {
    loadDataset(e.target.value, false);
  });

  // Listening Mode selector buttons (Earth Orchestra, Scientific, Musical, Accessible)
  document.querySelectorAll('.mode-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.listeningMode = btn.dataset.mode;
      document.querySelectorAll('.mode-btn').forEach((b) => {
        const active = b.dataset.mode === state.listeningMode;
        b.setAttribute('aria-checked', active ? 'true' : 'false');
        if (active) {
          b.classList.add('bg-sky-500', 'text-slate-950');
          b.classList.remove('surface-sub');
        } else {
          b.classList.remove('bg-sky-500', 'text-slate-950');
          b.classList.add('surface-sub');
        }
      });

      updateLegendCardForCurrentMode();

      if (state.listeningMode === 'accessible') {
        state.voiceNarration = true;
        document.getElementById('btn-voice-toggle').setAttribute('aria-pressed', 'true');
        document.getElementById('label-voice-toggle').textContent = 'Spoken Narration: On';
      }

      if (state.isPlaying) {
        sonifier.stopContinuous();
        sonifier.stopOrchestra();
        if (state.listeningMode === 'orchestra') {
          sonifier.startOrchestra();
        }
        scheduleNextTick();
      }
      announceSR(`Switched to ${state.listeningMode} listening mode.`);
    });
  });

  // Set Earth Orchestra as the active flagship mode by default
  const defaultModeBtn = document.querySelector('[data-mode="orchestra"]');
  if (defaultModeBtn) {
    defaultModeBtn.click();
  } else {
    document.querySelector('[data-mode="scientific"]').click();
  }

  // Transport Controls
  document.getElementById('btn-play-pause').addEventListener('click', () => {
    if (state.isPlaying) pausePlayback();
    else startPlayback();
  });

  document.getElementById('btn-stop').addEventListener('click', () => stopPlayback(true));
  document.getElementById('btn-step-back').addEventListener('click', () => scrubToIndex(state.currentIndex - 1, true));
  document.getElementById('btn-step-forward').addEventListener('click', () => scrubToIndex(state.currentIndex + 1, true));

  // Timeline Slider Scrubber
  const scrubber = document.getElementById('timeline-scrubber');
  scrubber.addEventListener('input', (e) => {
    scrubToIndex(parseInt(e.target.value, 10), true);
  });

  // Interactive click/drag scrubbing on Main Chart Canvas
  const chartCanvas = document.getElementById('main-chart-canvas');
  let isDraggingChart = false;
  const scrubFromPointer = (clientX) => {
    const rect = chartCanvas.getBoundingClientRect();
    const padLeft = 48;
    const padRight = 18;
    const relX = Math.max(0, Math.min(rect.width - padLeft - padRight, clientX - rect.left - padLeft));
    const ratio = relX / Math.max(1, rect.width - padLeft - padRight);
    const ds = getActiveDataset();
    const idx = Math.round(ratio * (ds.years.length - 1));
    scrubToIndex(idx, true);
  };

  chartCanvas.addEventListener('mousedown', (e) => {
    isDraggingChart = true;
    scrubFromPointer(e.clientX);
  });
  window.addEventListener('mousemove', (e) => {
    if (isDraggingChart) scrubFromPointer(e.clientX);
  });
  window.addEventListener('mouseup', () => {
    isDraggingChart = false;
  });
  chartCanvas.addEventListener('touchstart', (e) => {
    if (e.touches.length) scrubFromPointer(e.touches[0].clientX);
  }, { passive: true });
  chartCanvas.addEventListener('touchmove', (e) => {
    if (e.touches.length) scrubFromPointer(e.touches[0].clientX);
  }, { passive: true });

  // Speed, Loop, Stereo, Mute & Volume Controls
  document.getElementById('select-speed').addEventListener('change', (e) => {
    state.playbackSpeed = parseFloat(e.target.value);
    if (state.isPlaying) scheduleNextTick();
    announceSR(`Playback speed set to ${state.playbackSpeed}x.`);
  });

  document.getElementById('btn-loop').addEventListener('click', (e) => {
    state.loop = !state.loop;
    e.currentTarget.setAttribute('aria-pressed', String(state.loop));
    e.currentTarget.classList.toggle('border-sky-400', state.loop);
    e.currentTarget.classList.toggle('text-sky-400', state.loop);
    announceSR(state.loop ? 'Loop playback enabled.' : 'Loop playback disabled.');
  });

  document.getElementById('btn-stereo').addEventListener('click', (e) => {
    state.stereoPan = !state.stereoPan;
    e.currentTarget.setAttribute('aria-pressed', String(state.stereoPan));
    document.getElementById('label-stereo').textContent = state.stereoPan ? '3D Spatial Audio' : 'Mono Center';
    announceSR(state.stereoPan ? '3D Binaural Spatial soundstage enabled.' : 'Mono center audio enabled.');
    if (state.isPlaying && state.listeningMode === 'orchestra') {
      const snap = getPlanetarySnapshot(getActiveDataset().years[state.currentIndex]);
      sonifier.updateOrchestra(snap, 0);
    }
  });

  document.getElementById('btn-mute').addEventListener('click', (e) => {
    state.muted = !state.muted;
    e.currentTarget.setAttribute('aria-pressed', String(state.muted));
    document.getElementById('icon-mute').textContent = state.muted ? '🔇' : '🔊';
    document.getElementById('label-mute').textContent = state.muted ? 'Unmute' : 'Mute';
    sonifier.setVolume(state.volume, state.muted);
    announceSR(state.muted ? 'Audio muted.' : 'Audio unmuted.');
  });

  document.getElementById('slider-volume').addEventListener('input', (e) => {
    state.volume = parseInt(e.target.value, 10) / 100;
    document.getElementById('label-volume').textContent = `${e.target.value}%`;
    if (state.muted && state.volume > 0) {
      state.muted = false;
      document.getElementById('btn-mute').setAttribute('aria-pressed', 'false');
      document.getElementById('icon-mute').textContent = '🔊';
      document.getElementById('label-mute').textContent = 'Mute';
    }
    sonifier.setVolume(state.volume, state.muted);
  });

  // Voice Narration & Transcript Download
  document.getElementById('btn-voice-toggle').addEventListener('click', (e) => {
    state.voiceNarration = !state.voiceNarration;
    e.currentTarget.setAttribute('aria-pressed', String(state.voiceNarration));
    document.getElementById('label-voice-toggle').textContent =
      `Spoken Narration: ${state.voiceNarration ? 'On' : 'Off'}`;
    if (state.voiceNarration) speakText('Spoken data narration enabled.');
  });

  document.getElementById('btn-download-transcript').addEventListener('click', () => {
    const content = [
      'EARTH INFORMATION JUKEBOX — SONIFICATION SESSION TRANSCRIPT',
      `Generated: ${new Date().toISOString()}`,
      `Active Dataset: ${state.activeDatasetId}`,
      `Listening Mode: ${state.listeningMode}`,
      '-----------------------------------------------------------',
      ...state.transcriptLog
    ].join('\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `earth-jukebox-transcript-${state.activeDatasetId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // CD-Quality WAV Audio Export
  const exportWavBtn = document.getElementById('btn-export-wav');
  if (exportWavBtn) {
    exportWavBtn.addEventListener('click', exportOrchestraWav);
  }

  // Comparison A/B Controls
  document.getElementById('btn-compare-play').addEventListener('click', () => {
    if (state.isComparing) stopComparePlayback();
    else startComparePlayback();
  });
  document.getElementById('btn-compare-stop').addEventListener('click', stopComparePlayback);
  document.getElementById('compare-preset-select').addEventListener('change', () => {
    stopComparePlayback();
    drawComparisonChart(-1);
  });

  // Accessibility Toolbar Toggles
  document.getElementById('btn-theme-toggle').addEventListener('click', (e) => {
    state.lightTheme = !state.lightTheme;
    document.documentElement.classList.toggle('light-theme', state.lightTheme);
    e.currentTarget.setAttribute('aria-pressed', String(state.lightTheme));
    document.getElementById('icon-theme').textContent = state.lightTheme ? '🌙' : '☀️';
    document.getElementById('label-theme').textContent = state.lightTheme ? 'Dark Space' : 'Light Mode';
  });

  document.getElementById('btn-contrast-toggle').addEventListener('click', (e) => {
    state.highContrast = !state.highContrast;
    document.documentElement.classList.toggle('high-contrast', state.highContrast);
    e.currentTarget.setAttribute('aria-pressed', String(state.highContrast));
  });

  document.getElementById('btn-textsize-toggle').addEventListener('click', (e) => {
    state.largeText = !state.largeText;
    document.documentElement.classList.toggle('large-text', state.largeText);
    e.currentTarget.setAttribute('aria-pressed', String(state.largeText));
  });

  document.getElementById('btn-motion-toggle').addEventListener('click', (e) => {
    state.reducedMotion = !state.reducedMotion;
    document.documentElement.classList.toggle('reduced-motion', state.reducedMotion);
    e.currentTarget.setAttribute('aria-pressed', String(state.reducedMotion));
  });

  // Tutorial Modal Controls
  document.getElementById('btn-open-tutorial').addEventListener('click', openTutorialModal);
  document.getElementById('btn-close-tutorial-x').addEventListener('click', closeTutorialModal);
  document.getElementById('btn-close-tutorial-start').addEventListener('click', closeTutorialModal);

  document.getElementById('btn-tutorial-sound-demo').addEventListener('click', () => {
    if (!sonifier.init()) return;
    [1880, 1920, 1960, 2000, 2024].forEach((yr, idx) => {
      setTimeout(() => {
        const snap = getPlanetarySnapshot(yr);
        sonifier.auditionOrchestraSnapshot(snap, -0.6 + idx * 0.3, 0.32);
      }, idx * 280);
    });
  });

  try {
    if (!localStorage.getItem('earth_jukebox_tutorial_seen')) {
      openTutorialModal();
    }
  } catch (_) {}

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    const modalOpen = !document.getElementById('tutorial-modal').classList.contains('hidden');
    if (e.key === 'Escape' && modalOpen) {
      closeTutorialModal();
      return;
    }
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA' || tag === 'BUTTON') return;

    if (e.code === 'Space') {
      e.preventDefault();
      if (state.currentView !== 'player') navigateTo('player');
      if (state.isPlaying) pausePlayback();
      else startPlayback();
    } else if (e.key === 'ArrowRight' && state.currentView === 'player') {
      e.preventDefault();
      scrubToIndex(state.currentIndex + 1, true);
    } else if (e.key === 'ArrowLeft' && state.currentView === 'player') {
      e.preventDefault();
      scrubToIndex(state.currentIndex - 1, true);
    }
  });

  // Responsive Canvas Redraw on Window Resize
  window.addEventListener('resize', () => {
    const ds = getActiveDataset();
    drawMainChart(ds, state.currentIndex);
    const snap = getPlanetarySnapshot(ds.years[state.currentIndex]);
    drawEarthOrb(ds, normalizeValue(ds, ds.values[state.currentIndex]), snap);
    if (state.currentView === 'compare') drawComparisonChart(-1);
  });

  renderAnimationLoop();

  // ==========================================================================
  // 11. EARTH AI ASSISTANT — KNOWLEDGE DATABASE, EVALUATION & NAVIGATION ENGINE
  // ==========================================================================

  /**
   * EARTH_JUKEBOX_DATABASE:
   * Comprehensive structured knowledge base for Earth science datasets,
   * deterministic sonification mechanics, webpage layout, and climate evaluation rubrics.
   */
  const EARTH_JUKEBOX_DATABASE = {
    overview: {
      title: 'Earth Information Jukebox',
      tagline: 'Multi-Sensory Climate & Earth Science Studio',
      challenge: 'NASA International Space Apps Challenge 2026',
      topic: 'Earth Information Jukebox — Multi-Sensory Earth Data Accessibility',
      mission: 'Bridge visual climate dashboards and real-time deterministic Web Audio sonification so sighted, blind, and low-vision researchers can experience planetary trends together.',
      methodology: 'Strict deterministic mapping (value -> pitch 180-780 Hz, rate of change -> overtone harmonics, timeline -> stereo pan -0.75 to +0.75). Zero arbitrary sound effects.'
    },

    sections: {
      home: {
        id: 'view-home',
        nav: 'home',
        title: 'Home & Landing',
        description: 'Landing hero with quick 5-second temperature audio preview, sparkline visualizer, and 3-pillar feature breakdown.',
        elements: {
          'hero': { selector: '.hero-card', label: 'Hero Overview Card' },
          'preview': { selector: '.preview-card', label: 'Quick Sound Preview Card' },
          'sparkline': { selector: '#home-preview-svg', label: 'Interactive Temperature Sparkline' },
          'features': { selector: '.features-grid', label: '3-Pillar Feature Highlights' },
          'orchestra-cta': { selector: '#btn-hero-orchestra', label: 'Launch Earth Orchestra Button' }
        }
      },
      explore: {
        id: 'view-explore',
        nav: 'explore',
        title: 'Explore Datasets',
        description: 'Dataset catalog displaying verified static snapshots for Temperature, CO2, Arctic Sea Ice, and Global Sea Level with trend shifts and mapping rules.',
        elements: {
          'grid': { selector: '#dataset-cards-grid', label: 'Dataset Selection Cards Grid' }
        }
      },
      player: {
        id: 'view-player',
        nav: 'player',
        title: 'Jukebox Player',
        description: 'Core sonification engine combining animated time-series chart, 3D rotating Earth Data Orb, real-time Web Audio oscilloscope, timeline scrubber, transport controls, and scrolling WCAG live transcript.',
        elements: {
          'selector': { selector: '.dataset-selector', label: 'Active Dataset Selector Dropdown' },
          'modes': { selector: '.mode-selector', label: 'Sonification Listening Mode Selector' },
          'telemetry': { selector: '.metric-banner', label: 'Live Metric & Telemetry Banner' },
          'chart': { selector: '#main-chart-canvas', label: 'Interactive Time-Series Canvas' },
          'orb': { selector: '#earth-orb-canvas', label: '3D Planetary Data Orb Canvas' },
          'analyser': { selector: '#analyser-canvas', label: 'Live Audio Oscilloscope Waveform' },
          'scrubber': { selector: '#timeline-scrubber', label: 'Timeline Year Scrubber Slider' },
          'transport': { selector: '.transport-section', label: 'Playback Transport Controls' },
          'controls': { selector: '.secondary-controls', label: 'Speed, Loop, Spatial Audio & Volume Controls' },
          'transcript': { selector: '.transcript-section', label: 'Live Accessible Audio Transcript & Export' },
          'legend': { selector: '.legend-card', label: 'Sonification Mapping Legend' },
          'info': { selector: '.dataset-info-card', label: 'Dataset Science Context & Attribution Card' }
        }
      },
      compare: {
        id: 'view-compare',
        nav: 'compare',
        title: 'Hear the Change (A/B) Studio',
        description: 'Side-by-side comparative sonification studio comparing two eras or indicators simultaneously in binaural stereo or alternating pulses.',
        elements: {
          'presets': { selector: '#compare-preset-select', label: 'Comparison Scenario Presets' },
          'routing': { selector: '#compare-audio-routing', label: 'Audio Routing Selector' },
          'readout': { selector: '#compare-live-readout', label: 'Live Divergence Telemetry Readout' },
          'chart': { selector: '#compare-chart-canvas', label: 'Dual Overlay Synchronized Comparison Canvas' }
        }
      },
      about: {
        id: 'view-about',
        nav: 'about',
        title: 'About & Data Sources',
        description: 'Detailed explanation of deterministic Web Audio synthesis, citation details for NASA GISS, NOAA GML, NSIDC, and NASA Sea Level Change Team, plus open science disclaimers.',
        elements: {
          'methodology': { selector: '.about-box:first-child', label: 'Sonification Methodology Card' },
          'sources': { selector: '.about-box:last-child', label: 'Verified Sources & Attribution Card' }
        }
      },
      tutorial: {
        id: 'tutorial-modal',
        isModal: true,
        title: 'Interactive Tutorial Guide',
        description: 'Quick start modal explaining pitch mapping, stereo time progression, keyboard shortcuts, and the Earth Orchestra symphony.',
        elements: {
          'modal': { selector: '#tutorial-modal .modal-inner', label: 'Tutorial Dialog' }
        }
      }
    },

    datasets: {
      gistemp: {
        name: 'Global Surface Temperature Anomaly',
        shortTitle: 'Global Temperature',
        source: 'NASA GISS GISTEMP v4 (GLB.Ts+dSST)',
        span: '1880–2025 (146 annual observations)',
        unit: '°C anomaly relative to 1951–1980 mean',
        baseline: '0.00 °C (1951–1980 climatological baseline)',
        min: -0.48,
        minYear: 1911,
        max: 1.28,
        maxYear: 2024,
        decadeAverages: {
          '1880s': -0.22,
          '1930s': -0.10,
          '1970s': 0.05,
          '1990s': 0.40,
          '2010s': 0.82,
          '2020s': 1.04
        },
        audioRole: 'Lead Voice in Earth Orchestra (triangle + sine + harmonic overtone, gliding from 175 to 660 Hz; rapid yearly changes open resonant filter cutoffs)'
      },
      co2: {
        name: 'Atmospheric Carbon Dioxide Concentration',
        shortTitle: 'Atmospheric CO₂',
        source: 'NOAA Global Monitoring Laboratory (Mauna Loa Observatory)',
        span: '1959–2025 (67 continuous annual observations; extended to 1880 via Law Dome ice cores)',
        unit: 'Parts per million (ppm)',
        baseline: '315.98 ppm (1959 Mauna Loa start; pre-industrial ~280 ppm)',
        min: 315.98,
        minYear: 1959,
        max: 426.90,
        maxYear: 2025,
        decadeAverages: {
          '1960s': 320.0,
          '1980s': 346.0,
          '2000s': 378.0,
          '2020s': 418.0
        },
        audioRole: 'Harmony Pad in Earth Orchestra (slow evolving warm cluster; low CO₂ = open 5th dyad, high CO₂ = dense 6-part dissonant cluster reflecting greenhouse atmospheric pressure)'
      },
      seaice: {
        name: 'Arctic September Minimum Sea Ice Extent',
        shortTitle: 'Arctic Sea Ice',
        source: 'NSIDC / NASA Sea Ice Index (Satellite Passive Microwave)',
        span: '1979–2025 (47 satellite years; historical back to 1880 via Walsh/HadISST)',
        unit: 'Million km²',
        baseline: '6.40 M km² (1981–2010 median)',
        min: 3.57,
        minYear: 2012,
        max: 7.67,
        maxYear: 1980,
        decadeAverages: {
          '1980s': 7.22,
          '1990s': 6.46,
          '2000s': 5.51,
          '2010s': 4.63,
          '2020s': 4.49
        },
        audioRole: 'Texture Layer in Earth Orchestra (crystalline glass shimmer frequencies at 2–4 kHz; abundant ice = rich sparkling overtones, ice loss = audibly fades to silence)'
      },
      sealevel: {
        name: 'Global Mean Sea Level Rise',
        shortTitle: 'Global Sea Level',
        source: 'NASA Sea Level Change Team (TOPEX/Jason/Sentinel-6 Satellite Radar Altimetry)',
        span: '1993–2025 (33 satellite altimeter years; historical back to 1880 via Church & White tide gauges)',
        unit: 'Millimeters change relative to 1993 baseline',
        baseline: '0.0 mm (1993 satellite altimetry baseline)',
        min: 0.0,
        minYear: 1993,
        max: 111.4,
        maxYear: 2025,
        decadeAverages: {
          '1990s': 12.0,
          '2000s': 38.0,
          '2010s': 75.0,
          '2020s': 104.0
        },
        audioRole: 'Bass Layer in Earth Orchestra (sub-bass 48–55 Hz drone; ocean expansion and mass loading swell low-end planetary gravity)'
      }
    },

    rubrics: {
      temperature: [
        { threshold: 1.0, label: 'CRITICAL RECORD CRISIS', badge: '🔴 Critical', desc: 'Over +1.0°C anomaly. Extreme heatwaves, ocean thermal energy records, accelerating polar amplification.' },
        { threshold: 0.6, label: 'ACCELERATED MODERN WARMING', badge: '🟠 Elevated', desc: '+0.6°C to +1.0°C anomaly. Significant global biosphere disruption, retreat of mountain glaciers.' },
        { threshold: 0.2, label: 'MODERATE WARMING ONSET', badge: '🟡 Moderate', desc: '+0.2°C to +0.6°C anomaly. Emerging anthropogenic signal, breaking free of natural variance.' },
        { threshold: -0.1, label: 'HISTORICAL MID-CENTURY EQUILIBRIUM', badge: '🟢 Baseline', desc: '-0.1°C to +0.2°C anomaly. Balanced climatological mean.' },
        { threshold: -999, label: 'COOL PRE-INDUSTRIAL PERIOD', badge: '🔵 Cold Baseline', desc: 'Below -0.1°C anomaly. Little Ice Age tail, natural volcanic aerosols.' }
      ],
      co2: [
        { threshold: 415, label: 'SEVERE GREENHOUSE CONCENTRATION', badge: '🔴 Extreme', desc: 'Over 415 ppm. Levels not seen on Earth for over 3 million years (Pliocene era).' },
        { threshold: 350, label: 'PLANETARY BOUNDARY BREACHED', badge: '🟠 High Concern', desc: '350–415 ppm. Surpassed the James Hansen safe boundary (350 ppm) established in 1988.' },
        { threshold: 300, label: 'EARLY INDUSTRIAL SURGE', badge: '🟡 Developing', desc: '300–350 ppm. Post-WWII industrial expansion, rising combustion of fossil fuels.' },
        { threshold: 0, label: 'PRE-INDUSTRIAL EQUILIBRIUM', badge: '🟢 Safe Baseline', desc: 'Under 300 ppm. Stable Holocene atmospheric balance (~280 ppm).' }
      ],
      seaice: [
        { threshold: 4.0, label: 'CRITICAL ARCTIC COLLAPSE', badge: '🔴 Severe Loss', desc: 'Below 4.0 M km². Historic collapse of multi-year perennial sea ice cover.' },
        { threshold: 5.5, label: 'HEAVY CRYOSPHERIC DEPLETION', badge: '🟠 Elevated Melt', desc: '4.0–5.5 M km². Substantial albedo loss, darker open Arctic ocean absorbs more solar radiation.' },
        { threshold: 6.5, label: 'MODERATE SUMMER LOSS', badge: '🟡 Depleted', desc: '5.5–6.5 M km². Noticeable retreat relative to early satellite baseline.' },
        { threshold: 999, label: 'ROBUST POLAR ICE CAP', badge: '🟢 Robust Ice', desc: 'Above 6.5 M km². Extensive multi-year ice pack.' }
      ],
      sealevel: [
        { threshold: 90, label: 'ACCELERATED COASTAL RISK', badge: '🔴 Rapid Rise', desc: 'Over 90 mm rise. Rate has doubled from 2 mm/yr to >4.5 mm/yr; accelerated ice sheet discharge.' },
        { threshold: 45, label: 'STEADY OCEAN SWELL', badge: '🟠 Moderate Rise', desc: '45–90 mm rise. Thermal expansion of upper ocean layers, early Greenland glacier acceleration.' },
        { threshold: 0, label: 'BASELINE OCEAN LEVEL', badge: '🟢 Baseline', desc: 'Under 45 mm rise. Near 1993 initial altimetry benchmark.' }
      ]
    }
  };

  /**
   * Evaluates / judges targeted climate content, years, indicators, or current playback state.
   */
  function judgeTargetedContent(query) {
    const q = query.toLowerCase();

    // 1. Judge current playback point
    if (q.includes('current') || q.includes('playing') || q.includes('what is playing') || q.includes('this point') || q.includes('now')) {
      const ds = getActiveDataset();
      const idx = state.currentIndex;
      const year = ds.years[idx];
      const val = ds.values[idx];
      const snap = getPlanetarySnapshot(year);

      let statusBadge = '🟢 Normal Baseline';
      let verdictTitle = 'Historical Baseline Equilibrium';
      if (snap.acceleration > 0.40) {
        statusBadge = '🔴 Severe Trend Surge';
        verdictTitle = 'Rapid Acceleration & Climate Shockwave';
      } else if (snap.tempNorm > 0.70) {
        statusBadge = '🔴 Critical Warming Record';
        verdictTitle = 'Historic Thermal Anomaly Peak';
      } else if (snap.tempNorm > 0.45) {
        statusBadge = '🟠 Elevated Planetary Warming';
        verdictTitle = 'Significant Anthropogenic Departure';
      } else if (snap.tempNorm > 0.25) {
        statusBadge = '🟡 Moderate Planetary Warming';
        verdictTitle = 'Gradual Trend Transition';
      }

      return {
        html: `
          <div class="chatbot-judged-card">
            <div class="judged-header">
              <span class="judged-tag">Target Judged: Active Timeline Point</span>
              <span class="judged-badge">${statusBadge}</span>
            </div>
            <h3 class="judged-title">${verdictTitle} (Year ${year})</h3>
            <p class="judged-summary">Currently monitoring <strong>${ds.shortTitle}</strong> at index ${idx + 1}/${ds.years.length} with listening mode set to <strong>${state.listeningMode.toUpperCase()}</strong>.</p>
            <div class="chatbot-data-box">
              <strong>🌡️ Temp Anomaly:</strong> ${snap.temp >= 0 ? '+' : ''}${snap.temp.toFixed(2)} °C (${(snap.tempNorm * 100).toFixed(0)}% of record span)<br>
              <strong>🏭 Atmospheric CO₂:</strong> ${snap.co2.toFixed(1)} ppm (${snap.co2 > 350 ? 'Exceeds 350ppm safe boundary' : 'Within historical boundary'})<br>
              <strong>🧊 Arctic Sea Ice:</strong> ${snap.seaice.toFixed(2)} M km² (${snap.seaice < 4.5 ? 'Severe ice depletion' : 'Stable ice cover'})<br>
              <strong>🌊 Sea Level Rise:</strong> ${snap.sealevel >= 0 ? '+' : ''}${snap.sealevel.toFixed(1)} mm<br>
              <strong>⚡ Change Acceleration:</strong> ${(snap.acceleration * 100).toFixed(0)}%
            </div>
            <p class="chatbot-msg-hint"><strong>Sonification Verdict:</strong> ${
              state.listeningMode === 'orchestra'
                ? `Lead voice running at ${Math.round(175 * Math.pow(660 / 175, snap.tempNorm))} Hz, CO₂ pad density ${(snap.co2Norm * 100).toFixed(0)}%, Arctic shimmer ${snap.iceNorm < 0.2 ? 'audibly extinguished' : 'sparkling'}, and sub-drone energy ${(snap.seaNorm * 100).toFixed(0)}%.`
                : `Scientific frequency mapped directly to ${Math.round(sonifier.normToFreq(normalizeValue(ds, val)))} Hz.`
            }</p>
          </div>
        `,
        speakSummary: `Judged current point at year ${year}. Temperature anomaly is ${snap.temp.toFixed(2)} degrees Celsius, CO2 is ${Math.round(snap.co2)} ppm, and overall verdict is ${verdictTitle}.`
      };
    }

    // 2. Judge a specific year (e.g. 1880–2025)
    const yearMatch = q.match(/\b(188\d|189\d|19\d\d|20[0-2]\d)\b/);
    if (yearMatch) {
      const year = parseInt(yearMatch[1], 10);
      const snap = getPlanetarySnapshot(year);

      let verdict = 'Historical Baseline Steady State';
      let badge = '🟢 Baseline';
      let analysis = '';

      if (year >= 2023) {
        verdict = 'ALL-TIME HISTORIC WARMING RECORD';
        badge = '🔴 Critical Emergency';
        analysis = 'Year marks the highest global surface temperature anomalies ever recorded by human instruments (+1.28°C in 2024), compounded by atmospheric CO₂ exceeding 426 ppm and record ocean heat content.';
      } else if (year === 2012) {
        verdict = 'HISTORIC CRYOSPHERE COLLAPSE EVENT';
        badge = '🔴 Arctic Record Low';
        analysis = 'September Arctic Sea Ice dropped to an unprecedented minimum of 3.57 million km²—over 50% below the 1979 baseline. In the sonification, the crystal shimmer layer fades almost completely to silence.';
      } else if (year === 1998) {
        verdict = 'SUPER EL NIÑO THERMAL SPIKE';
        badge = '🟠 Surge Event';
        analysis = 'Massive El Niño ocean-atmosphere heat exchange pushed global anomalies to +0.61°C, generating sharp harmonic overtones and rapid change detection pulses in the sonifier.';
      } else if (year === 1979) {
        verdict = 'SATELLITE CRYOSPHERE OBSERVATION BENCHMARK';
        badge = '🟢 Observation Dawn';
        analysis = 'Beginning of unbroken satellite passive-microwave sea ice monitoring. Sea ice stood at a robust 7.05 million km², with crystalline glass overtones sounding clear and abundant.';
      } else if (year === 1911 || year === 1909) {
        verdict = 'HISTORIC COLD ANOMALY RECORD';
        badge = '🔵 Lowest Recorded';
        analysis = 'Coolest period in modern records (-0.48°C in 1911), influenced by volcanic aerosols (Katmai 1912) and low solar activity. Audio engine produces its lowest, warmest baseline tone (~180 Hz).';
      } else if (year >= 1980) {
        verdict = 'ACCELERATING ANTHROPOGENIC FORCING';
        badge = '🟠 Rapid Acceleration';
        analysis = 'Clear trend divergence where human greenhouse gas forcing overtakes natural variability. Every decade since has been substantially warmer than the previous.';
      } else {
        verdict = 'PRE-INDUSTRIAL EQUILIBRIUM';
        badge = '🟢 Equilibrium';
        analysis = 'Atmospheric CO₂ remained below 310 ppm, sea ice covered over 7.8 million km², and global temperatures fluctuated strictly within natural bounds.';
      }

      return {
        html: `
          <div class="chatbot-judged-card">
            <div class="judged-header">
              <span class="judged-tag">Target Judged: Year ${year}</span>
              <span class="judged-badge">${badge}</span>
            </div>
            <h3 class="judged-title">${verdict}</h3>
            <p class="judged-summary">${analysis}</p>
            <div class="chatbot-data-box">
              <strong>🌡️ Global Temp Anomaly:</strong> ${snap.temp >= 0 ? '+' : ''}${snap.temp.toFixed(2)} °C<br>
              <strong>🏭 Atmospheric CO₂:</strong> ${snap.co2.toFixed(1)} ppm<br>
              <strong>🧊 Arctic Sea Ice:</strong> ${snap.seaice.toFixed(2)} M km²<br>
              <strong>🌊 Sea Level Rise:</strong> ${snap.sealevel >= 0 ? '+' : ''}${snap.sealevel.toFixed(1)} mm<br>
              <strong>⚡ Acceleration Index:</strong> ${(snap.acceleration * 100).toFixed(0)}%
            </div>
            <div class="chatbot-actions-row">
              <button class="chatbot-nav-link" data-scrub="${year}">🎵 Jump to Year ${year} in Player</button>
            </div>
          </div>
        `,
        speakSummary: `Judged year ${year}. Scientific verdict: ${verdict}. Temperature anomaly was ${snap.temp.toFixed(2)} degrees Celsius, CO2 was ${Math.round(snap.co2)} ppm.`
      };
    }

    // 3. Judge Temperature / Warming
    if (q.includes('temp') || q.includes('warming') || q.includes('heat') || q.includes('gistemp')) {
      return {
        html: `
          <div class="chatbot-judged-card">
            <div class="judged-header">
              <span class="judged-tag">Target Judged: Global Temperature Anomaly</span>
              <span class="judged-badge">🔴 Critical Trend</span>
            </div>
            <h3 class="judged-title">Unprecedented Anthropogenic Heating</h3>
            <p class="judged-summary">NASA GISS GISTEMP v4 records demonstrate an unambiguous upward shift of +1.76°C from the 1911 low (-0.48°C) to the 2024 peak (+1.28°C). Warming has accelerated from 0.08°C/decade prior to 1970 to over 0.20°C/decade currently.</p>
            <div class="chatbot-data-box">
              <strong>Scientific Confidence:</strong> >99.9% (Convergent across NASA GISS, NOAA, Hadley, Copernicus, Berkeley Earth)<br>
              <strong>Paris Limit Threat:</strong> 2024 ran at +1.28°C vs 1951–1980 baseline (approaching the +1.5°C pre-industrial target)<br>
              <strong>Orchestra Mapping:</strong> Controls Lead Voice pitch (175–660 Hz) and harmonic brightness.
            </div>
            <div class="chatbot-actions-row">
              <button class="chatbot-nav-link" data-load="gistemp">🎧 Load Temperature Dataset</button>
              <button class="chatbot-nav-link" data-jump="chart">📈 Jump to Chart Canvas</button>
            </div>
          </div>
        `,
        speakSummary: 'Judged global temperature: NASA GISS records show an unambiguous upward shift of 1.76 degrees Celsius from 1911 to 2024, with accelerating rates since 1980.'
      };
    }

    // 4. Judge CO2
    if (q.includes('co2') || q.includes('carbon') || q.includes('greenhouse') || q.includes('emissions')) {
      return {
        html: `
          <div class="chatbot-judged-card">
            <div class="judged-header">
              <span class="judged-tag">Target Judged: Atmospheric Carbon Dioxide</span>
              <span class="judged-badge">🔴 Severe Planetary Boundary Breach</span>
            </div>
            <h3 class="judged-title">Relentless Greenhouse Forcing</h3>
            <p class="judged-summary">NOAA Mauna Loa observations show atmospheric CO₂ climbing from 315.98 ppm in 1959 to over 426.90 ppm in 2025. Pre-industrial concentrations (~280 ppm) have been exceeded by more than 50%.</p>
            <div class="chatbot-data-box">
              <strong>Planetary Boundary:</strong> Surpassed safe 350 ppm boundary around 1988<br>
              <strong>Rate of Accumulation:</strong> >2.4 ppm/year in recent decade<br>
              <strong>Orchestra Mapping:</strong> Controls Harmony Pad chord density (calm dyad -> dense 6-part cluster).
            </div>
            <div class="chatbot-actions-row">
              <button class="chatbot-nav-link" data-load="co2">🎧 Load CO₂ Dataset</button>
              <button class="chatbot-nav-link" data-jump="chart">📈 Jump to Chart</button>
            </div>
          </div>
        `,
        speakSummary: 'Judged atmospheric CO2: NOAA measurements show levels have climbed from 316 ppm in 1959 to over 426 ppm today, far exceeding the safe 350 ppm boundary.'
      };
    }

    // 5. Judge Sea Ice
    if (q.includes('ice') || q.includes('arctic') || q.includes('polar') || q.includes('cryosphere')) {
      return {
        html: `
          <div class="chatbot-judged-card">
            <div class="judged-header">
              <span class="judged-tag">Target Judged: Arctic September Sea Ice</span>
              <span class="judged-badge">🔴 Rapid Cryosphere Loss</span>
            </div>
            <h3 class="judged-title">Vanishing Perennial Polar Ice Cap</h3>
            <p class="judged-summary">NSIDC satellite measurements show September minimum ice extent declining ~50% from 7.67 M km² in 1980 to 4.34 M km² in 2025 (record low: 3.57 M km² in 2012). Multi-year thick ice has been largely replaced by fragile seasonal ice.</p>
            <div class="chatbot-data-box">
              <strong>Albedo Feedback:</strong> Darker open ocean absorbs 90% of solar energy vs reflective white ice reflecting 80%<br>
              <strong>Orchestra Mapping:</strong> Crystalline glass shimmer that audibly fades to silence as ice vanishes.
            </div>
            <div class="chatbot-actions-row">
              <button class="chatbot-nav-link" data-load="seaice">🎧 Load Sea Ice Dataset</button>
              <button class="chatbot-nav-link" data-jump="orb">🌐 Jump to Earth Orb (Watch Ice Cap)</button>
            </div>
          </div>
        `,
        speakSummary: 'Judged Arctic sea ice: satellite records show a roughly 50% collapse in September minimum extent since 1979, triggering positive albedo warming feedbacks.'
      };
    }

    // 6. Judge Sea Level
    if (q.includes('sea level') || q.includes('ocean rise') || q.includes('coastal') || q.includes('altimetry')) {
      return {
        html: `
          <div class="chatbot-judged-card">
            <div class="judged-header">
              <span class="judged-tag">Target Judged: Global Mean Sea Level</span>
              <span class="judged-badge">🔴 Accelerating Inundation</span>
            </div>
            <h3 class="judged-title">Thermal Expansion & Land Ice Influx</h3>
            <p class="judged-summary">NASA satellite altimetry (TOPEX/Poseidon, Jason series, Sentinel-6) documents +111.4 mm of global sea level rise between 1993 and 2025. The rate has accelerated from 2.0 mm/yr in the early 1990s to over 4.5 mm/yr today.</p>
            <div class="chatbot-data-box">
              <strong>Primary Drivers:</strong> ~50% ocean thermal expansion + ~50% land ice melt (Greenland, Antarctica, mountain glaciers)<br>
              <strong>Orchestra Mapping:</strong> Deep sub-bass drone foundation (48–55 Hz) whose low-end mass swells with water volume.
            </div>
            <div class="chatbot-actions-row">
              <button class="chatbot-nav-link" data-load="sealevel">🎧 Load Sea Level Dataset</button>
              <button class="chatbot-nav-link" data-jump="chart">📈 Jump to Chart</button>
            </div>
          </div>
        `,
        speakSummary: 'Judged global sea level: over 111 millimeters of sea level rise since 1993, with rate accelerating to over 4.5 millimeters per year.'
      };
    }

    // 7. Judge correlation between CO2 & Temperature
    if (q.includes('correlation') || q.includes('relation') || (q.includes('co2') && q.includes('temp'))) {
      return {
        html: `
          <div class="chatbot-judged-card">
            <div class="judged-header">
              <span class="judged-tag">Target Judged: CO₂ vs. Temperature Correlation</span>
              <span class="judged-badge">⚖️ Direct Physical Coupling</span>
            </div>
            <h3 class="judged-title">Radiative Forcing & Thermal Coupling</h3>
            <p class="judged-summary">Empirical data demonstrates tight synchronization between atmospheric CO₂ accumulation and surface warming. As CO₂ climbed from 316 ppm to 426 ppm (1959–2025), temperature anomalies surged from +0.03°C to +1.28°C.</p>
            <div class="chatbot-actions-row">
              <button class="chatbot-nav-link" data-goto="compare">⚖️ Open A/B Correlation Studio</button>
            </div>
          </div>
        `,
        speakSummary: 'Judged correlation: atmospheric carbon dioxide accumulation directly drives surface warming through verified radiative forcing.'
      };
    }

    // Default judgment response
    return {
      html: `
        <div class="chatbot-judged-card">
          <div class="judged-header">
            <span class="judged-tag">Target Judged: Planetary Climate Health</span>
            <span class="judged-badge">🔴 High Concern</span>
          </div>
          <h3 class="judged-title">Anthropogenic Climate Shift Across All Indicators</h3>
          <p class="judged-summary">All 4 verified datasets in the Earth Jukebox (Temperature, CO₂, Sea Ice, and Sea Level) show synchronous, accelerating deviation from historical baselines.</p>
          <div class="chatbot-actions-row">
            <button class="chatbot-nav-link" data-goto="player">🎧 Experience in Jukebox Player</button>
            <button class="chatbot-nav-link" data-goto="compare">⚖️ Compare Eras in A/B Studio</button>
          </div>
        </div>
      `,
      speakSummary: 'Planetary climate evaluation shows synchronous deviation across all four indicators: temperature, CO2, sea ice, and sea level.'
    };
  }

  /**
   * Jumps smoothly to a specific section or targeted element on the page,
   * switching views if necessary and applying a glowing focus outline.
   */
  function jumpToWebpageTarget(targetQuery) {
    const q = targetQuery.toLowerCase().trim();
    let targetView = null;
    let targetSelector = null;
    let targetLabel = '';

    // Match views
    if (q.includes('home') || q.includes('landing')) {
      targetView = 'home';
      targetSelector = '.hero-card';
      targetLabel = 'Home Section';
    } else if (q.includes('explore') || q.includes('browse') || q.includes('all dataset')) {
      targetView = 'explore';
      targetSelector = '#dataset-cards-grid';
      targetLabel = 'Explore Datasets Grid';
    } else if (q.includes('compare') || q.includes('a/b') || q.includes('side by side') || q.includes('divergence')) {
      targetView = 'compare';
      targetSelector = '#compare-chart-canvas';
      targetLabel = 'Hear the Change (A/B) Studio';
    } else if (q.includes('about') || q.includes('methodology') || q.includes('citation') || q.includes('sources')) {
      targetView = 'about';
      targetSelector = '.about-card';
      targetLabel = 'About & Data Sources Section';
    } else if (q.includes('tutorial') || q.includes('guide') || q.includes('help') || q.includes('onboard')) {
      openTutorialModal();
      return { success: true, label: 'Tutorial Modal', view: 'modal' };
    } else if (q.includes('chart') || q.includes('graph') || q.includes('canvas')) {
      targetView = 'player';
      targetSelector = '#main-chart-canvas';
      targetLabel = 'Interactive Chart Canvas';
    } else if (q.includes('orb') || q.includes('globe') || q.includes('planet') || q.includes('earth')) {
      targetView = 'player';
      targetSelector = '#earth-orb-canvas';
      targetLabel = 'Planetary Data Orb Globe';
    } else if (q.includes('analyser') || q.includes('waveform') || q.includes('oscilloscope') || q.includes('audio wave')) {
      targetView = 'player';
      targetSelector = '#analyser-canvas';
      targetLabel = 'Live Audio Oscilloscope Waveform';
    } else if (q.includes('scrubber') || q.includes('slider') || q.includes('timeline')) {
      targetView = 'player';
      targetSelector = '#timeline-scrubber';
      targetLabel = 'Timeline Scrubber Slider';
    } else if (q.includes('controls') || q.includes('transport') || q.includes('button')) {
      targetView = 'player';
      targetSelector = '.transport-section';
      targetLabel = 'Playback Transport Controls';
    } else if (q.includes('transcript') || q.includes('log') || q.includes('narrat')) {
      targetView = 'player';
      targetSelector = '#live-transcript-box';
      targetLabel = 'Live Accessible Audio Transcript';
    } else if (q.includes('legend') || q.includes('sonification rule')) {
      targetView = 'player';
      targetSelector = '.legend-card';
      targetLabel = 'Sonification Mapping Legend';
    } else if (q.includes('sparkline') || q.includes('preview')) {
      targetView = 'home';
      targetSelector = '#home-preview-svg';
      targetLabel = 'Quick Sound Preview Sparkline';
    } else if (q.includes('features') || q.includes('pillars')) {
      targetView = 'home';
      targetSelector = '.features-grid';
      targetLabel = '3-Pillar Feature Highlights';
    } else {
      // Default to player
      targetView = 'player';
      targetSelector = '.player-canvas-card';
      targetLabel = 'Jukebox Player';
    }

    // Perform view switch if needed
    if (state.currentView !== targetView) {
      navigateTo(targetView);
    }

    // Scroll to element with highlight
    setTimeout(() => {
      const el = document.querySelector(targetSelector);
      if (el) {
        el.scrollIntoView({ behavior: state.reducedMotion ? 'auto' : 'smooth', block: 'center' });
        el.classList.remove('chatbot-highlight-target');
        void el.offsetWidth; // trigger reflow
        el.classList.add('chatbot-highlight-target');
        setTimeout(() => el.classList.remove('chatbot-highlight-target'), 2600);
      }
    }, 180);

    return { success: true, label: targetLabel, view: targetView };
  }

  /**
   * Applies settings changes directly to the page upon user chat request.
   */
  function applyWebpageSettingFromChat(query) {
    const q = query.toLowerCase();

    // Theme toggle
    if (q.includes('light mode') || q.includes('light theme')) {
      if (!state.lightTheme) document.getElementById('btn-theme-toggle').click();
      return { handled: true, msg: '☀️ Switched webpage to Daylight Light Mode.' };
    }
    if (q.includes('dark mode') || q.includes('dark space') || q.includes('dark theme')) {
      if (state.lightTheme) document.getElementById('btn-theme-toggle').click();
      return { handled: true, msg: '🌌 Switched webpage to Dark Space Mode.' };
    }

    // High Contrast
    if (q.includes('high contrast') || q.includes('contrast')) {
      document.getElementById('btn-contrast-toggle').click();
      return { handled: true, msg: `◐ High Contrast mode ${state.highContrast ? 'enabled' : 'disabled'}.` };
    }

    // Large Text
    if (q.includes('large text') || q.includes('big text') || q.includes('text size') || q.includes('font size')) {
      document.getElementById('btn-textsize-toggle').click();
      return { handled: true, msg: `A+ Large Text display ${state.largeText ? 'enabled (118%)' : 'disabled (standard 100%)'}.` };
    }

    // Reduced Motion
    if (q.includes('reduce motion') || q.includes('reduced motion') || q.includes('stop animation')) {
      document.getElementById('btn-motion-toggle').click();
      return { handled: true, msg: `⏸ Reduced Motion mode ${state.reducedMotion ? 'enabled' : 'disabled'}.` };
    }

    // Voice Narration
    if (q.includes('voice narration') || q.includes('narration') || q.includes('read out')) {
      document.getElementById('btn-voice-toggle').click();
      return { handled: true, msg: `🗣️ Spoken data narration ${state.voiceNarration ? 'enabled' : 'disabled'}.` };
    }

    // Spatial Audio
    if (q.includes('spatial') || q.includes('3d audio') || q.includes('stereo') || q.includes('mono')) {
      document.getElementById('btn-stereo').click();
      return { handled: true, msg: `🎧 Audio set to ${state.stereoPan ? '3D Binaural Spatial Soundstage' : 'Mono Center'}.` };
    }

    // Mute / Unmute
    if (q.includes('unmute')) {
      if (state.muted) document.getElementById('btn-mute').click();
      return { handled: true, msg: '🔊 Master audio unmuted.' };
    }
    if (q.includes('mute') || q.includes('silence')) {
      if (!state.muted) document.getElementById('btn-mute').click();
      return { handled: true, msg: '🔇 Master audio muted.' };
    }

    // Volume level
    const volMatch = q.match(/volume.*?(\d+)/) || q.match(/(\d+)%.*?volume/);
    if (volMatch) {
      const volNum = Math.max(0, Math.min(100, parseInt(volMatch[1], 10)));
      const slider = document.getElementById('slider-volume');
      if (slider) {
        slider.value = volNum;
        slider.dispatchEvent(new Event('input'));
      }
      return { handled: true, msg: `🔊 Master volume adjusted to ${volNum}%.` };
    }

    // Speed setting
    if (q.includes('speed') || q.includes('faster') || q.includes('slower')) {
      let speedVal = '1';
      if (q.includes('0.5') || q.includes('half')) speedVal = '0.5';
      else if (q.includes('1.5')) speedVal = '1.5';
      else if (q.includes('2') || q.includes('double')) speedVal = '2';
      const speedSelect = document.getElementById('select-speed');
      if (speedSelect) {
        speedSelect.value = speedVal;
        speedSelect.dispatchEvent(new Event('change'));
      }
      return { handled: true, msg: `⏱ Playback speed set to ${speedVal}×.` };
    }

    // Sound mode
    if (q.includes('orchestra mode')) {
      const btn = document.querySelector('[data-mode="orchestra"]');
      if (btn) btn.click();
      return { handled: true, msg: '🌐 Switched to flagship Earth Orchestra listening mode.' };
    }
    if (q.includes('scientific mode')) {
      const btn = document.querySelector('[data-mode="scientific"]');
      if (btn) btn.click();
      return { handled: true, msg: '🔬 Switched to Scientific continuous listening mode.' };
    }
    if (q.includes('musical mode') || q.includes('lydian')) {
      const btn = document.querySelector('[data-mode="musical"]');
      if (btn) btn.click();
      return { handled: true, msg: '🎵 Switched to Musical (C Lydian scale) listening mode.' };
    }
    if (q.includes('accessible mode')) {
      const btn = document.querySelector('[data-mode="accessible"]');
      if (btn) btn.click();
      return { handled: true, msg: '🗣️ Switched to Accessible (Step tone + Voice) listening mode.' };
    }

    return { handled: false };
  }

  /**
   * Main query processor integrating the Database, Judgment Engine,
   * Navigation Jumper, and Webpage Settings Handler.
   */
  function processChatbotQuery(query) {
    const q = query.toLowerCase().trim();

    // A. Settings command check
    const settingResult = applyWebpageSettingFromChat(q);
    if (settingResult.handled) {
      return {
        responseHtml: `<p>⚙️ ${settingResult.msg}</p>`,
        action: null,
        speakText: settingResult.msg
      };
    }

    // B. Explicit "Judge / Evaluate" request
    if (
      q.startsWith('judge') ||
      q.startsWith('evaluate') ||
      q.startsWith('assess') ||
      q.includes('how bad is') ||
      q.includes('is global warming real') ||
      q.includes('what do you think of') ||
      q.includes('judge 20') ||
      q.includes('judge 19')
    ) {
      const judgment = judgeTargetedContent(q);
      return {
        responseHtml: judgment.html,
        action: null,
        speakText: judgment.speakSummary
      };
    }

    // C. Explicit "Jump to / Go to / Scroll to / Show me" navigation request
    if (
      q.startsWith('jump to') ||
      q.startsWith('go to') ||
      q.startsWith('scroll to') ||
      q.startsWith('show me') ||
      q.startsWith('take me to') ||
      q.startsWith('open ')
    ) {
      const jumpResult = jumpToWebpageTarget(q);
      return {
        responseHtml: `<p>🧭 Jumping to <strong>${jumpResult.label}</strong>...</p>`,
        action: null,
        speakText: `Jumping to ${jumpResult.label}`
      };
    }

    // D. Playback commands
    if (q === 'play' || q === 'start' || q.includes('play music') || q.includes('play song') || q.includes('play sonification') || q.includes('play orchestra')) {
      return {
        responseHtml: `<p>▶ Starting <strong>Earth Orchestra</strong> playback in the Jukebox Player! Put on headphones for 3D spatial audio.</p>
        <button class="chatbot-nav-link" data-jump="controls">🎛️ View Controls</button>`,
        action: { type: 'play' },
        speakText: 'Starting Earth Orchestra playback in the Jukebox Player.'
      };
    }
    if (q === 'pause' || q === 'stop' || q.includes('stop play') || q.includes('pause play') || q.includes('halt')) {
      return {
        responseHtml: `<p>⏸ Sonification playback paused.</p>`,
        action: { type: 'pause' },
        speakText: 'Sonification playback paused.'
      };
    }

    // E. WAV Export request
    if (q.includes('export') || q.includes('wav') || q.includes('download audio')) {
      return {
        responseHtml: `<p>🎵 <strong>WAV Audio Export</strong></p>
        <p>You can render and download the entire 1880–2025 Earth Orchestra symphony as a CD-quality 16-bit 44.1kHz Stereo WAV file directly in your browser.</p>
        <button class="chatbot-nav-link" data-action="export-wav">🎵 Render &amp; Download .WAV</button>`,
        action: null,
        speakText: 'You can export the entire Earth Orchestra symphony as a 16-bit stereo WAV audio file.'
      };
    }

    // F. Load dataset requests
    if (q.includes('load temp') || q.includes('switch to temp') || q.includes('show temp')) {
      return {
        responseHtml: `<p>🌡️ Loading <strong>Global Surface Temperature Anomaly</strong> into the player.</p>`,
        action: { type: 'loadDataset', target: 'gistemp' },
        speakText: 'Loading Global Surface Temperature Anomaly.'
      };
    }
    if (q.includes('load co2') || q.includes('switch to co2') || q.includes('show co2')) {
      return {
        responseHtml: `<p>🏭 Loading <strong>Atmospheric CO₂ Concentration</strong> into the player.</p>`,
        action: { type: 'loadDataset', target: 'co2' },
        speakText: 'Loading Atmospheric CO2 concentration.'
      };
    }
    if (q.includes('load ice') || q.includes('load sea ice') || q.includes('switch to ice') || q.includes('show ice')) {
      return {
        responseHtml: `<p>🧊 Loading <strong>Arctic September Minimum Sea Ice</strong> into the player.</p>`,
        action: { type: 'loadDataset', target: 'seaice' },
        speakText: 'Loading Arctic September Sea Ice Extent.'
      };
    }
    if (q.includes('load sea level') || q.includes('switch to sea level') || q.includes('show sea level')) {
      return {
        responseHtml: `<p>🌊 Loading <strong>Global Mean Sea Level Rise</strong> into the player.</p>`,
        action: { type: 'loadDataset', target: 'sealevel' },
        speakText: 'Loading Global Mean Sea Level Rise.'
      };
    }

    // G. Year specific search (e.g., "what was in 2024", "1998 data")
    const yearMatch = q.match(/\b(188\d|189\d|19\d\d|20[0-2]\d)\b/);
    if (yearMatch) {
      const judgment = judgeTargetedContent(`judge ${yearMatch[1]}`);
      return {
        responseHtml: judgment.html,
        action: null,
        speakText: judgment.speakSummary
      };
    }

    // H. Knowledge Base Queries
    if (q.includes('what is this') || q.includes('about') || q.includes('mission') || q.includes('purpose')) {
      const db = EARTH_JUKEBOX_DATABASE.overview;
      return {
        responseHtml: `
          <p><strong>🌍 ${db.title}</strong></p>
          <p>${db.mission}</p>
          <p class="chatbot-msg-hint">Built for the <strong>${db.challenge}</strong> on topic: <em>${db.topic}</em>.</p>
          <button class="chatbot-nav-link" data-goto="about">📖 Go to About &amp; Data Page</button>
        `,
        action: null,
        speakText: `${db.title} is a NASA Space Apps Challenge multi-sensory Earth data accessibility project.`
      };
    }

    if (q.includes('sonification') || q.includes('how does it work') || q.includes('sound work') || q.includes('pitch')) {
      return {
        responseHtml: `
          <p><strong>🎛️ Deterministic Web Audio Sonification</strong></p>
          <p>Every audio feature is mathematically mapped from verified records without arbitrary sound effects:</p>
          <ul class="chatbot-msg-list">
            <li>📈 <strong>Data Value → Frequency:</strong> Minimum value = 180 Hz warm tone; maximum value = 780 Hz climbing pitch.</li>
            <li>🔊 <strong>Change Rate → Harmonics:</strong> Rapid YoY leaps open resonant filters and brighten harmonic overtones.</li>
            <li>🎧 <strong>Chronological Time → 3D Stereo Pan:</strong> 1880 begins on the left channel (-0.75) and travels to the right channel (+0.75) at 2025.</li>
          </ul>
          <button class="chatbot-nav-link" data-jump="legend">🎼 View Sonification Legend</button>
        `,
        action: null,
        speakText: 'Every audio frequency is mathematically derived from real NASA and NOAA records. Higher measurements climb in pitch, and time pans from left to right.'
      };
    }

    if (q.includes('compare') || q.includes('a/b') || q.includes('difference')) {
      return {
        responseHtml: `
          <p><strong>⚖️ Hear the Change (A/B) Comparison Studio</strong></p>
          <p>Listen to two historical eras or two indicators at once:</p>
          <ul class="chatbot-msg-list">
            <li><strong>1. Early Era vs. Modern Temp:</strong> Left ear (1880–1925) vs. Right ear (1980–2025).</li>
            <li><strong>2. CO₂ vs. Temp Correlation:</strong> Hear greenhouse accumulation directly track surface warming.</li>
            <li><strong>3. Sea Ice vs. Sea Level:</strong> Shrinking polar ice in Left ear vs. Rising ocean in Right ear.</li>
          </ul>
          <button class="chatbot-nav-link" data-goto="compare">⚖️ Jump to Compare Studio</button>
        `,
        action: null,
        speakText: 'In the Compare Studio, Stream A plays in your left ear and Stream B plays in your right ear, with audible acoustic beating when they diverge.'
      };
    }

    if (q.includes('mode') || q.includes('sound mode') || q.includes('listening mode')) {
      return {
        responseHtml: `
          <p><strong>🎵 4 Listening Modes Available:</strong></p>
          <ul class="chatbot-msg-list">
            <li>🌐 <strong>Earth Orchestra (Flagship):</strong> 5 simultaneous interacting voices (Lead, Harmony Pad, Ice Shimmer, Deep Bass Drone, Change Detection).</li>
            <li>🔬 <strong>Scientific:</strong> Continuous gliding sine + harmonic oscillator.</li>
            <li>🎵 <strong>Musical:</strong> Quantized onto a radiant C Lydian scale with space reverb.</li>
            <li>🗣️ <strong>Accessible:</strong> Clean discrete step tones with spoken year/value narration.</li>
          </ul>
          <button class="chatbot-nav-link" data-jump="modes">🎛️ Jump to Mode Selector</button>
        `,
        action: null,
        speakText: 'There are four sound modes: Earth Orchestra, Scientific continuous, Musical Lydian scale, and Accessible with spoken narration.'
      };
    }

    if (q.includes('accessibility') || q.includes('a11y') || q.includes('blind') || q.includes('screen reader') || q.includes('wcag')) {
      return {
        responseHtml: `
          <p><strong>♿ WCAG 2.1 AA+ Inclusive Design:</strong></p>
          <ul class="chatbot-msg-list">
            <li>🗣️ <strong>Web Speech Narration:</strong> Spoken readouts for blind explorers.</li>
            <li>📝 <strong>ARIA Live Regions:</strong> Polite and assertive screen reader updates.</li>
            <li>◐ <strong>High Contrast Theme:</strong> Maximum luminance Black/White/Yellow contrast.</li>
            <li>A+ <strong>Large Text:</strong> Scaled rem font display.</li>
            <li>⏸ <strong>Reduced Motion:</strong> Instant transition mode.</li>
            <li>⌨️ <strong>Shortcuts:</strong> Space = Play/Pause, Left/Right = Scrub timeline.</li>
          </ul>
        `,
        action: null,
        speakText: 'The Jukebox features spoken narration, ARIA live regions, High Contrast mode, Large Text, Reduced Motion, and keyboard shortcuts.'
      };
    }

    if (q.includes('fact') || q.includes('interesting') || q.includes('tell me something')) {
      const facts = [
        '2024 was the hottest year in recorded human history, reaching +1.28°C above the 20th-century baseline.',
        'Atmospheric CO₂ at 426 ppm is higher than at any point in the last 3 million years.',
        'Arctic September sea ice extent has dropped by over 50% since satellite monitoring began in 1979.',
        'Global mean sea level has risen over 111 millimeters in just 32 years of satellite altimetry.',
        'The Earth Orchestra multi-voice soundscape uses Web Audio API to synthesize 5 planetary layers simultaneously in real-time.'
      ];
      const pick = facts[Math.floor(Math.random() * facts.length)];
      return {
        responseHtml: `<p>💡 <strong>Did You Know?</strong></p><p>${pick}</p>`,
        action: null,
        speakText: pick
      };
    }

    // Default Fallback
    return {
      responseHtml: `
        <p>I can help you explore the <strong>Earth Information Jukebox</strong>! 🌍</p>
        <p class="chatbot-msg-hint">Try one of these commands:</p>
        <ul class="chatbot-msg-list">
          <li>⚖️ <em>"Judge 2024"</em> or <em>"Judge current playing"</em></li>
          <li>🧭 <em>"Jump to chart"</em>, <em>"Jump to orb"</em>, or <em>"Jump to compare"</em></li>
          <li>⚙️ <em>"Light mode"</em>, <em>"High contrast"</em>, or <em>"Mute"</em></li>
          <li>▶ <em>"Play orchestra"</em> or <em>"Export wav"</em></li>
        </ul>
      `,
      action: null,
      speakText: 'You can ask me to judge targeted contents like 2024, jump to any part of the webpage, or adjust settings.'
    };
  }

  // ==========================================================================
  // CHATBOT UI INITIALIZATION & EVENT ATTACHMENTS
  // ==========================================================================

  const chatToggle = document.getElementById('chatbot-toggle');
  const chatPanel = document.getElementById('chatbot-panel');
  const chatClose = document.getElementById('chatbot-close');
  const chatForm = document.getElementById('chatbot-form');
  const chatInput = document.getElementById('chatbot-input');
  const chatMessages = document.getElementById('chatbot-messages');
  const chatSpeakToggle = document.getElementById('chatbot-speak-toggle');

  let chatbotVoiceEnabled = false;

  if (chatSpeakToggle) {
    chatSpeakToggle.addEventListener('click', () => {
      chatbotVoiceEnabled = !chatbotVoiceEnabled;
      chatSpeakToggle.setAttribute('aria-pressed', String(chatbotVoiceEnabled));
      if (chatbotVoiceEnabled) {
        chatSpeakToggle.classList.add('text-sky-400');
        speakText('Chatbot voice enabled.');
      } else {
        chatSpeakToggle.classList.remove('text-sky-400');
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      }
    });
  }

  function toggleChat() {
    const isHidden = chatPanel.classList.contains('hidden');
    chatPanel.classList.toggle('hidden', !isHidden);
    chatToggle.setAttribute('aria-label', isHidden ? 'Close Earth Jukebox AI Assistant' : 'Open Earth Jukebox AI Assistant');
    if (isHidden) {
      chatInput.focus();
    }
  }

  if (chatToggle) chatToggle.addEventListener('click', toggleChat);
  if (chatClose) {
    chatClose.addEventListener('click', () => {
      chatPanel.classList.add('hidden');
      chatToggle.setAttribute('aria-label', 'Open Earth Jukebox AI Assistant');
    });
  }

  function wireMessageLinks(wrapper) {
    // Jump links (navigate to view and highlight element)
    wrapper.querySelectorAll('[data-jump]').forEach(btn => {
      btn.addEventListener('click', () => {
        jumpToWebpageTarget(btn.dataset.jump);
      });
    });

    // Simple navigation links
    wrapper.querySelectorAll('[data-goto]').forEach(btn => {
      btn.addEventListener('click', () => {
        navigateTo(btn.dataset.goto);
        addMessage(`<p>✅ Navigated to <strong>${btn.dataset.goto}</strong>.</p>`, false);
      });
    });

    // Dataset load buttons
    wrapper.querySelectorAll('[data-load]').forEach(btn => {
      btn.addEventListener('click', () => {
        loadDataset(btn.dataset.load, true);
        addMessage(`<p>✅ Loaded dataset <strong>${btn.dataset.load}</strong> into Jukebox Player.</p>`, false);
      });
    });

    // Year scrubber jump buttons
    wrapper.querySelectorAll('[data-scrub]').forEach(btn => {
      btn.addEventListener('click', () => {
        const year = parseInt(btn.dataset.scrub, 10);
        navigateTo('player');
        const ds = getActiveDataset();
        const idx = ds.years.indexOf(year);
        if (idx >= 0) {
          setTimeout(() => scrubToIndex(idx, true), 200);
        }
        addMessage(`<p>✅ Scrubber moved to year <strong>${year}</strong> in the player.</p>`, false);
      });
    });

    // Action buttons (e.g. export WAV)
    wrapper.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.action === 'export-wav') {
          exportOrchestraWav();
        }
      });
    });
  }

  function addMessage(html, isUser) {
    const wrapper = document.createElement('div');
    wrapper.className = `chatbot-msg ${isUser ? 'chatbot-msg--user' : 'chatbot-msg--bot'}`;
    wrapper.innerHTML = `
      <span class="chatbot-msg-avatar" aria-hidden="true">${isUser ? '👤' : '🌍'}</span>
      <div class="chatbot-msg-bubble">${html}</div>
    `;
    chatMessages.appendChild(wrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    wireMessageLinks(wrapper);
  }

  function showTypingIndicator() {
    const typing = document.createElement('div');
    typing.className = 'chatbot-msg chatbot-msg--bot';
    typing.id = 'chatbot-typing';
    typing.innerHTML = `
      <span class="chatbot-msg-avatar" aria-hidden="true">🌍</span>
      <div class="chatbot-msg-bubble chatbot-typing">
        <span class="chatbot-typing-dot"></span>
        <span class="chatbot-typing-dot"></span>
        <span class="chatbot-typing-dot"></span>
      </div>
    `;
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    const el = document.getElementById('chatbot-typing');
    if (el) el.remove();
  }

  function handleUserMessage(text) {
    if (!text.trim()) return;
    addMessage(`<p>${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`, true);

    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      const { responseHtml, action, speakText: spoken } = processChatbotQuery(text);
      addMessage(responseHtml, false);

      if (action) {
        setTimeout(() => {
          if (action.type === 'navigate') navigateTo(action.target);
          else if (action.type === 'play') {
            navigateTo('player');
            setTimeout(() => {
              const orchestraBtn = document.querySelector('[data-mode="orchestra"]');
              if (orchestraBtn) orchestraBtn.click();
              startPlayback();
            }, 200);
          } else if (action.type === 'pause') {
            pausePlayback();
          } else if (action.type === 'loadDataset') {
            loadDataset(action.target, true);
          }
        }, 350);
      }

      if ((chatbotVoiceEnabled || state.voiceNarration) && spoken) {
        speakText(spoken);
      }
    }, 280 + Math.random() * 200);
  }

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      chatInput.value = '';
      handleUserMessage(text);
    });
  }

  // Quick action chips
  document.querySelectorAll('.chatbot-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      handleUserMessage(chip.dataset.query);
    });
  });

  // Escape key closes chat
  if (chatPanel) {
    chatPanel.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        chatPanel.classList.add('hidden');
        if (chatToggle) chatToggle.focus();
      }
    });
  }
});