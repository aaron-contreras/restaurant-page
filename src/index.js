console.log('🌊');

import { render } from "./components/homepage";

const wrapper = document.querySelector('#content');

wrapper.append(
  render()
);
