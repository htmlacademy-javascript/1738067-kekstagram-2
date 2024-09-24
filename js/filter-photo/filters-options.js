const options = () => {

  const filters = {
    'effect-none':
      'none',

    'effect-chrome': {
      name: 'grayscale',
      minValue: 0,
      maxValue: 1,
      step: 0.1,
      unit: '',
      start: 1,
    },
    'effect-sepia': {
      name: 'sepia',
      minValue: 0,
      maxValue: 1,
      step: 0.1,
      unit: '',
      start: 1,
    },

    'effect-marvin': {
      name: 'invert',
      minValue: 0,
      maxValue: 100,
      step: 1,
      unit: '%',
      start: 100,
    },

    'effect-phobos': {
      name: 'blur',
      minValue: 0,
      maxValue: 3,
      step: 0.1,
      unit: 'px',
      start: 3,
    },

    'effect-heat': {
      name: 'brightness',
      minValue: 1,
      maxValue: 3,
      step: 0.1,
      unit: '',
      start: 3,
    },

  };

  return filters;
};


export {options};
