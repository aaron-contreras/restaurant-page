import BurgerImage from './assets/burger.jpg';

const generateBurger = () => {
  const burgerImage = new Image();
  burgerImage.src = BurgerImage;
  burgerImage.classList.add('burger-bg');

  return burgerImage;
};

const generateBurgerSection = () => {
  const burgerSection = document.createElement('div');

  const burger = generateBurger();
  burgerSection.append(burger);

  return burgerSection;
};


export default generateBurgerSection;
