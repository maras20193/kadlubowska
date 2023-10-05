export const bottomFadeVariant = {
  offscreen: {
    y: 40,
    x: 0,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const leftFadeVariant = {
  offscreen: {
    y: 0,
    x: -40,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const rightFadeVariant = {
  offscreen: {
    y: 0,
    x: 40,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const opacityVariant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const opacityVariantFast = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
