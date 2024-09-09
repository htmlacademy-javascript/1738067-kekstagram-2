import { filterOptions } from './filters-options';

const sliderParent = document.querySelector('.img-upload__effect-level');
const effectValue = sliderParent.querySelector('.effect-level__value');
const sliderBlock = sliderParent.querySelector('.effect-level__slider');
const effectsRadio = document.querySelectorAll('.effects__radio');
const photoPreview = document.querySelector('.img-upload__preview').querySelector('img');
sliderBlock.classList.add('hidden'); // заранее отключаю видимость слайдера, так как при открытии формы, мы сразу же попадаем на "нулевой" фильтр


noUiSlider.create(sliderBlock, {

  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',

});

function changeFilter() {

  effectsRadio.forEach((radio) => {

    radio.addEventListener('change', (evt) => {

      const targetId = evt.target.id;
      const options = filterOptions()[targetId];

      // если жмаем на "нулевой" фильтр, отключаем возможность тягать слайдер
      if (targetId === 'effect-none') {
        sliderBlock.classList.add('hidden');
        sliderBlock.style = '';
        return;
      }

      sliderBlock.classList.remove('hidden');

      sliderBlock.noUiSlider.updateOptions({
        range: {
          min: options.minValue,
          max: options.maxValue,
        },
        step: options.step,
        start: options.start,
      });


      sliderBlock.noUiSlider.on('update', () => {
        const valueSlider = sliderBlock.noUiSlider.get();

        effectValue.value = valueSlider;

        // пример нижней строчки — filter: grapescate(1) | .unit отвечает за % или px
        photoPreview.style.filter = `${options.name}(${valueSlider}${options.unit})`;

      });

    });

  });

}

export { changeFilter };
