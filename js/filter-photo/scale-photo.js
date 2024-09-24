const DEFAULT_SCALE = 100;
const STEP = 25;
const MAXIMUM_SCALE = 100;
const MINIMUM_SCALE = 25;

const getScalePhoto = () => {
  const scaleBlock = document.querySelector('.img-upload__scale');
  const scaleSmaller = scaleBlock.querySelector('.scale__control--smaller');
  const scaleBigger = scaleBlock.querySelector('.scale__control--bigger');
  const scaleValue = scaleBlock.querySelector('.scale__control--value');
  let countScale = DEFAULT_SCALE;

  const imagePreview = document.querySelector('.img-upload__preview').querySelector('img');


  const onMinusClick = () => {

    if (countScale > MINIMUM_SCALE) {
      countScale = countScale - STEP;
      scaleValue.value = `${countScale}%`;
      imagePreview.style.transform = `scale(${countScale / 100})`;
    }
  };

  const onPlusClick = () => {

    if (countScale < MAXIMUM_SCALE) {
      countScale = countScale + STEP;
      scaleValue.value = `${countScale}%`;
      imagePreview.style.transform = `scale(${countScale / 100})`;
    }

  };

  scaleSmaller.addEventListener('click', onMinusClick);
  scaleBigger.addEventListener('click', onPlusClick);

};

export {getScalePhoto};
