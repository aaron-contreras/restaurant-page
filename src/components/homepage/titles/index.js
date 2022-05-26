const generateWording = () => {
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Krabby Patties';

  const subtitle = document.createElement('p');
  subtitle.classList.add('subtitle');
  subtitle.textContent = 'Best burgers in town.';

  return [title, subtitle];
};

const generateTitleSection = () => {
  const titleSection = document.createElement('header');
  titleSection.classList.add('title-section');

  titleSection.append(...generateWording());

  return titleSection;
};

export default generateTitleSection;