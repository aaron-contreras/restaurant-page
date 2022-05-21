import generateBurgerSection from './burgers/index';
import generateTitleSection from './titles/index'

const generateContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  return container;
};

const render = () => {
  const burgerSection = generateBurgerSection();
  const titleSection = generateTitleSection();

  const container = generateContainer();
  container.append(burgerSection);
  container.append(titleSection);

  return container;
};

export {
  render
};
