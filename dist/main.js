/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/contact/index.js":
/*!*****************************************!*\
  !*** ./src/components/contact/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _assets_phone_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/phone-icon.png */ "./src/components/contact/assets/phone-icon.png");


const generatePhonePicture = () => {
  const picture = new Image();
  picture.src = _assets_phone_icon_png__WEBPACK_IMPORTED_MODULE_0__;
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





/***/ }),

/***/ "./src/components/homepage/burgers/index.js":
/*!**************************************************!*\
  !*** ./src/components/homepage/burgers/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/burger.jpg */ "./src/components/homepage/burgers/assets/burger.jpg");


const generateBurger = () => {
  const burgerImage = new Image();
  burgerImage.src = _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_0__;
  burgerImage.classList.add('burger-bg');

  return burgerImage;
};

const generateBurgerSection = () => {
  const burgerSection = document.createElement('div');

  const burger = generateBurger();
  burgerSection.append(burger);

  return burgerSection;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateBurgerSection);


/***/ }),

/***/ "./src/components/homepage/index.js":
/*!******************************************!*\
  !*** ./src/components/homepage/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _burgers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burgers/index */ "./src/components/homepage/burgers/index.js");
/* harmony import */ var _titles_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titles/index */ "./src/components/homepage/titles/index.js");



const generateContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  return container;
};

const render = () => {
  const burgerSection = (0,_burgers_index__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const titleSection = (0,_titles_index__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const container = generateContainer();
  container.append(burgerSection);
  container.append(titleSection);

  return container;
};




/***/ }),

/***/ "./src/components/homepage/titles/index.js":
/*!*************************************************!*\
  !*** ./src/components/homepage/titles/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateTitleSection);

/***/ }),

/***/ "./src/components/menu/index.js":
/*!**************************************!*\
  !*** ./src/components/menu/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _assets_menu_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu-icon.png */ "./src/components/menu/assets/menu-icon.png");


const generateMenuPicture = () => {
  const picture = new Image();
  picture.src = _assets_menu_icon_png__WEBPACK_IMPORTED_MODULE_0__;
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





/***/ }),

/***/ "./src/components/contact/assets/phone-icon.png":
/*!******************************************************!*\
  !*** ./src/components/contact/assets/phone-icon.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea41085e59b7198bb4e2.png";

/***/ }),

/***/ "./src/components/homepage/burgers/assets/burger.jpg":
/*!***********************************************************!*\
  !*** ./src/components/homepage/burgers/assets/burger.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60fec129a74af52c76e2.jpg";

/***/ }),

/***/ "./src/components/menu/assets/menu-icon.png":
/*!**************************************************!*\
  !*** ./src/components/menu/assets/menu-icon.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd3bedb2798ad26a654b.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homepage */ "./src/components/homepage/index.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact */ "./src/components/contact/index.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu/index.js");
console.log('🌊');





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
      (0,_components_homepage__WEBPACK_IMPORTED_MODULE_0__.render)()
    );
  });

  contactLink.addEventListener('click', () => {
    wipeWrapper();

    wrapper.append(
      (0,_components_contact__WEBPACK_IMPORTED_MODULE_1__.render)()
    );
  });

  menuLink.addEventListener('click', () => {
    wipeWrapper();

    wrapper.append(
      (0,_components_menu__WEBPACK_IMPORTED_MODULE_2__.render)()
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
  (0,_components_homepage__WEBPACK_IMPORTED_MODULE_0__.render)()
);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7O0FBRWpEO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQVU7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBSUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEM0Qzs7QUFFOUM7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBVztBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxpRUFBZSxxQkFBcUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmU7QUFDSDs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsMERBQXFCO0FBQzdDLHVCQUF1Qix5REFBb0I7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUlFOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7QUNyQlc7O0FBRTlDO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQVE7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBSUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVpRTtBQUNFO0FBQ047O0FBRTdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU0sNERBQWM7QUFDcEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDJEQUFpQjtBQUN2QjtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLE1BQU0sd0RBQWM7QUFDcEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw0REFBYztBQUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UvYnVyZ2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lcGFnZS90aXRsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaG9uZUltYWdlIGZyb20gJy4vYXNzZXRzL3Bob25lLWljb24ucG5nJztcblxuY29uc3QgZ2VuZXJhdGVQaG9uZVBpY3R1cmUgPSAoKSA9PiB7XG4gIGNvbnN0IHBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgcGljdHVyZS5zcmMgPSBQaG9uZUltYWdlO1xuICBwaWN0dXJlLmNsYXNzTGlzdC5hZGQoJ3Bob25lLWJnJyk7XG5cbiAgcmV0dXJuIHBpY3R1cmU7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUNvbnRhY3RJbmZvcm1hdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFjdEluZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb250YWN0SW5mb3JtYXRpb24udGV4dENvbnRlbnQgPSBcIk91ciBidWRnZXQgZG9lc24ndCBhbGxvdyBhIHBob25lIGJpbGwgb3IgaW50ZXJuZXQuIFdlIG9ubHkgY29tbXVuaWNhdGUgaW4gcGVyc29uIGJlY2F1c2UgdGhlIGdvdmVybm1lbnQgaXMgbGlzdGVuaW5nIGluIHVzLlwiO1xuXG4gIHJldHVybiBjb250YWN0SW5mb3JtYXRpb247XG59XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgY29uc3QgcGhvbmVQaWN0dXJlID0gZ2VuZXJhdGVQaG9uZVBpY3R1cmUoKTtcbiAgY29uc3QgY29udGFjdEluZm9ybWF0aW9uID0gZ2VuZXJhdGVDb250YWN0SW5mb3JtYXRpb24oKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmQocGhvbmVQaWN0dXJlKTtcbiAgY29udGFpbmVyLmFwcGVuZChjb250YWN0SW5mb3JtYXRpb24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQge1xuICByZW5kZXJcbn07XG5cbiIsImltcG9ydCBCdXJnZXJJbWFnZSBmcm9tICcuL2Fzc2V0cy9idXJnZXIuanBnJztcblxuY29uc3QgZ2VuZXJhdGVCdXJnZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1cmdlckltYWdlID0gbmV3IEltYWdlKCk7XG4gIGJ1cmdlckltYWdlLnNyYyA9IEJ1cmdlckltYWdlO1xuICBidXJnZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCdidXJnZXItYmcnKTtcblxuICByZXR1cm4gYnVyZ2VySW1hZ2U7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUJ1cmdlclNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGJ1cmdlclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBidXJnZXIgPSBnZW5lcmF0ZUJ1cmdlcigpO1xuICBidXJnZXJTZWN0aW9uLmFwcGVuZChidXJnZXIpO1xuXG4gIHJldHVybiBidXJnZXJTZWN0aW9uO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUJ1cmdlclNlY3Rpb247XG4iLCJpbXBvcnQgZ2VuZXJhdGVCdXJnZXJTZWN0aW9uIGZyb20gJy4vYnVyZ2Vycy9pbmRleCc7XG5pbXBvcnQgZ2VuZXJhdGVUaXRsZVNlY3Rpb24gZnJvbSAnLi90aXRsZXMvaW5kZXgnXG5cbmNvbnN0IGdlbmVyYXRlQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1cmdlclNlY3Rpb24gPSBnZW5lcmF0ZUJ1cmdlclNlY3Rpb24oKTtcbiAgY29uc3QgdGl0bGVTZWN0aW9uID0gZ2VuZXJhdGVUaXRsZVNlY3Rpb24oKTtcblxuICBjb25zdCBjb250YWluZXIgPSBnZW5lcmF0ZUNvbnRhaW5lcigpO1xuICBjb250YWluZXIuYXBwZW5kKGJ1cmdlclNlY3Rpb24pO1xuICBjb250YWluZXIuYXBwZW5kKHRpdGxlU2VjdGlvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7XG4gIHJlbmRlclxufTtcbiIsImNvbnN0IGdlbmVyYXRlV29yZGluZyA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdLcmFiYnkgUGF0dGllcyc7XG5cbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N1YnRpdGxlJyk7XG4gIHN1YnRpdGxlLnRleHRDb250ZW50ID0gJ0Jlc3QgYnVyZ2VycyBpbiB0b3duLic7XG5cbiAgcmV0dXJuIFt0aXRsZSwgc3VidGl0bGVdO1xufTtcblxuY29uc3QgZ2VuZXJhdGVUaXRsZVNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICB0aXRsZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGl0bGUtc2VjdGlvbicpO1xuXG4gIHRpdGxlU2VjdGlvbi5hcHBlbmQoLi4uZ2VuZXJhdGVXb3JkaW5nKCkpO1xuXG4gIHJldHVybiB0aXRsZVNlY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVRpdGxlU2VjdGlvbjsiLCJpbXBvcnQgTWVudUljb24gZnJvbSAnLi9hc3NldHMvbWVudS1pY29uLnBuZyc7XG5cbmNvbnN0IGdlbmVyYXRlTWVudVBpY3R1cmUgPSAoKSA9PiB7XG4gIGNvbnN0IHBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgcGljdHVyZS5zcmMgPSBNZW51SWNvbjtcbiAgcGljdHVyZS5jbGFzc0xpc3QuYWRkKCdwaG9uZS1iZycpO1xuXG4gIHJldHVybiBwaWN0dXJlO1xufTtcblxuY29uc3QgZ2VuZXJhdGVNZW51SW5mb3JtYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnVJbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudUluZm9ybWF0aW9uLnRleHRDb250ZW50ID0gXCJUaGUgb25seSB0aGluZyB3ZSBzZXJ2ZSBpcyBvdXIgc3BlY2lhbHR5IDUtcG91bmRlci4gSXQncyBleGFjdGx5IHdoYXQgaXQgc291bmRzIGxpa2UuIFByaWNlIGlzICQxOS45OVwiO1xuXG4gIHJldHVybiBtZW51SW5mb3JtYXRpb247XG59XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgY29uc3QgbWVudVBpY3R1cmUgPSBnZW5lcmF0ZU1lbnVQaWN0dXJlKCk7XG4gIGNvbnN0IG1lbnVJbmZvcm1hdGlvbiA9IGdlbmVyYXRlTWVudUluZm9ybWF0aW9uKCk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBjb250YWluZXIuYXBwZW5kKG1lbnVQaWN0dXJlKTtcbiAgY29udGFpbmVyLmFwcGVuZChtZW51SW5mb3JtYXRpb24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQge1xuICByZW5kZXJcbn07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImNvbnNvbGUubG9nKCfwn4yKJyk7XG5cbmltcG9ydCB7IHJlbmRlciBhcyByZW5kZXJIb21lUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZXBhZ2VcIjtcbmltcG9ydCB7IHJlbmRlciBhcyByZW5kZXJDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIGFzIHJlbmRlck1lbnVQYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCI7XG5cbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb25zdCB3aXBlV3JhcHBlciA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFBhZ2VEaXNwbGF5ZWQgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgd3JhcHBlci5yZW1vdmVDaGlsZChjdXJyZW50UGFnZURpc3BsYXllZCk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZU5hdmlnYXRpb25CYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVwYWdlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBob21lcGFnZUxpbmsudGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cbiAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWVudUxpbmsudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgaG9tZXBhZ2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpcGVXcmFwcGVyKCk7XG5cbiAgICB3cmFwcGVyLmFwcGVuZChcbiAgICAgIHJlbmRlckhvbWVQYWdlKClcbiAgICApO1xuICB9KTtcblxuICBjb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aXBlV3JhcHBlcigpO1xuXG4gICAgd3JhcHBlci5hcHBlbmQoXG4gICAgICByZW5kZXJDb250YWN0UGFnZSgpXG4gICAgKTtcbiAgfSk7XG5cbiAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2lwZVdyYXBwZXIoKTtcblxuICAgIHdyYXBwZXIuYXBwZW5kKFxuICAgICAgcmVuZGVyTWVudVBhZ2UoKVxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IG5hdmlnYXRpb25CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2aWdhdGlvbkJhci5hcHBlbmQoaG9tZXBhZ2VMaW5rKTtcbiAgbmF2aWdhdGlvbkJhci5hcHBlbmQoY29udGFjdExpbmspO1xuICBuYXZpZ2F0aW9uQmFyLmFwcGVuZChtZW51TGluayk7XG5cbiAgcmV0dXJuIG5hdmlnYXRpb25CYXI7XG59O1xuXG5jb25zdCBuYXZpZ2F0aW9uQmFyID0gZ2VuZXJhdGVOYXZpZ2F0aW9uQmFyKCk7XG53cmFwcGVyLmFwcGVuZChuYXZpZ2F0aW9uQmFyKTtcblxuLy8gRmlyc3QtdGltZSBsb2FkXG53cmFwcGVyLmFwcGVuZChcbiAgcmVuZGVySG9tZVBhZ2UoKVxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==