/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/homepage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/contact'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/menu'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/homepage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()
    );
  });

  contactLink.addEventListener('click', () => {
    wipeWrapper();

    wrapper.append(
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/contact'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()
    );
  });

  menuLink.addEventListener('click', () => {
    wipeWrapper();

    wrapper.append(
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/menu'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()
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
  Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/homepage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()
);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFaUU7QUFDRTtBQUNOOztBQUU3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLG9KQUFjO0FBQ3BCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EsTUFBTSxtSkFBaUI7QUFDdkI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLGdKQUFjO0FBQ3BCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsb0pBQWM7QUFDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zb2xlLmxvZygn8J+MiicpO1xuXG5pbXBvcnQgeyByZW5kZXIgYXMgcmVuZGVySG9tZVBhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWVwYWdlXCI7XG5pbXBvcnQgeyByZW5kZXIgYXMgcmVuZGVyQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRhY3RcIjtcbmltcG9ydCB7IHJlbmRlciBhcyByZW5kZXJNZW51UGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudVwiO1xuXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuY29uc3Qgd2lwZVdyYXBwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRQYWdlRGlzcGxheWVkID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIHdyYXBwZXIucmVtb3ZlQ2hpbGQoY3VycmVudFBhZ2VEaXNwbGF5ZWQpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVOYXZpZ2F0aW9uQmFyID0gKCkgPT4ge1xuICBjb25zdCBob21lcGFnZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaG9tZXBhZ2VMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lbnVMaW5rLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gIGhvbWVwYWdlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aXBlV3JhcHBlcigpO1xuXG4gICAgd3JhcHBlci5hcHBlbmQoXG4gICAgICByZW5kZXJIb21lUGFnZSgpXG4gICAgKTtcbiAgfSk7XG5cbiAgY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2lwZVdyYXBwZXIoKTtcblxuICAgIHdyYXBwZXIuYXBwZW5kKFxuICAgICAgcmVuZGVyQ29udGFjdFBhZ2UoKVxuICAgICk7XG4gIH0pO1xuXG4gIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpcGVXcmFwcGVyKCk7XG5cbiAgICB3cmFwcGVyLmFwcGVuZChcbiAgICAgIHJlbmRlck1lbnVQYWdlKClcbiAgICApO1xuICB9KTtcblxuICBjb25zdCBuYXZpZ2F0aW9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdmlnYXRpb25CYXIuYXBwZW5kKGhvbWVwYWdlTGluayk7XG4gIG5hdmlnYXRpb25CYXIuYXBwZW5kKGNvbnRhY3RMaW5rKTtcbiAgbmF2aWdhdGlvbkJhci5hcHBlbmQobWVudUxpbmspO1xuXG4gIHJldHVybiBuYXZpZ2F0aW9uQmFyO1xufTtcblxuY29uc3QgbmF2aWdhdGlvbkJhciA9IGdlbmVyYXRlTmF2aWdhdGlvbkJhcigpO1xud3JhcHBlci5hcHBlbmQobmF2aWdhdGlvbkJhcik7XG5cbi8vIEZpcnN0LXRpbWUgbG9hZFxud3JhcHBlci5hcHBlbmQoXG4gIHJlbmRlckhvbWVQYWdlKClcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=