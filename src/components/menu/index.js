import MenuIcon from './assets/menu-icon.png';

const generateMenuPicture = () => {
  const picture = new Image();
  picture.src = MenuIcon;
  picture.classList.add('phone-bg');

  return picture;
};

const generateMenuInformation = () => {
  const menuInformation = document.createElement('p');
  menuInformation.textContent = "The only thing we serve is our specialty 5-pounder. It's exactly what it sounds like. Price is $19.99";

  return menuInformation;
}

const render = () => {
  const menuPicture = generateMenuPicture();
  const menuInformation = generateMenuInformation();

  const container = document.createElement('div');
  container.classList.add('container');

  container.append(menuPicture);
  container.append(menuInformation);

  return container;
};

export {
  render
};

