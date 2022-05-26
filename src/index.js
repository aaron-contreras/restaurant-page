console.log('🌊');

<<<<<<< HEAD
import { render } from "./components/homepage";

const wrapper = document.querySelector('#content');

wrapper.append(
  render()
=======
import { render as renderHomePage } from "./components/homepage";
import { render as renderContactPage } from "./components/contact";
import { render as renderMenuPage } from "./components/menu";

const wrapper = document.querySelector('#content');

const wipeWrapper = () => {
  const currentPageDisplayed = wrapper.querySelector('.container');
  wrapper.removeChild(currentPageDisplayed);
};

const generateNavigationBar = () => {
  const homepageLink = document.createElement('button');
  homepageLink.textContent = 'Home';

  const contactLink = document.createElement('button');
  contactLink.textContent = 'Contact';

  const menuLink = document.createElement('button');
  menuLink.textContent = 'Menu';

  homepageLink.addEventListener('click', () => {
    wipeWrapper();

    wrapper.append(
      renderHomePage()
    );
  });

  contactLink.addEventListener('click', () => {
    wipeWrapper();

    wrapper.append(
      renderContactPage()
    );
  });

  menuLink.addEventListener('click', () => {
    wipeWrapper();

    wrapper.append(
      renderMenuPage()
    );
  });

  const navigationBar = document.createElement('nav');
  navigationBar.append(homepageLink);
  navigationBar.append(contactLink);
  navigationBar.append(menuLink);

  return navigationBar;
};

const navigationBar = generateNavigationBar();
wrapper.append(navigationBar);

// First-time load
wrapper.append(
  renderHomePage()
>>>>>>> no-tkt-add-tab-switching-logic
);
