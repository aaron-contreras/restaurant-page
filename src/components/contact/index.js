import PhoneImage from './assets/phone-icon.png';

const generatePhonePicture = () => {
  const picture = new Image();
  picture.src = PhoneImage;
  picture.classList.add('phone-bg');

  return picture;
};

const generateContactInformation = () => {
  const contactInformation = document.createElement('p');
  contactInformation.textContent = "Our budget doesn't allow a phone bill or internet. We only communicate in person because the government is listening in us.";

  return contactInformation;
}

const render = () => {
  const phonePicture = generatePhonePicture();
  const contactInformation = generateContactInformation();

  const container = document.createElement('div');
  container.classList.add('container');

  container.append(phonePicture);
  container.append(contactInformation);

  return container;
};

export {
  render
};

