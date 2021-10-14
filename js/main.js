/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/aboutUs/aboutUs.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/aboutUs/aboutUs.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var counterRunNum = document.querySelector('.counter');

if (counterRunNum) {
  var number = document.querySelector('.counter'),
      numberTop = number.getBoundingClientRect().top,
      start = +number.innerHTML,
      end = +number.dataset.max;
  window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 1) {
      this.removeEventListener('scroll', onScroll);
      var interval = setInterval(function () {
        var counters = document.querySelectorAll('.counter');
        var counters2 = document.querySelectorAll('.counter2');
        var speed = 200; // The lower the slower

        var speed2 = 140; // The lower the slower

        counters.forEach(function (counter) {
          var updateCount = function updateCount() {
            var target = +counter.getAttribute('data-target');
            var count = +counter.innerText; // Lower inc to slow and higher to slow

            var inc = Math.round(target / speed); // Check if target is reached

            if (count < target) {
              // Add inc to count and output in counter
              counter.innerText = count + inc; // Call function every ms

              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target;
            }
          };

          setTimeout(updateCount, 1000);
        });
        counters2.forEach(function (counter2) {
          var updateCount2 = function updateCount2() {
            var target2 = +counter2.getAttribute('data-target-sec');
            var count2 = +counter2.innerText; // Lower inc to slow and higher to slow

            var inc2 = Math.round(target2 / speed2); // Check if target is reached

            if (count2 < target2) {
              // Add inc to count and output in counter
              counter2.innerText = count2 + inc2; // Call function every ms

              setTimeout(updateCount2, 1);
            } else {
              counter2.innerText = target2;
            }
          };

          setTimeout(updateCount2, 1200);
        });

        if (start == end) {
          clearInterval(interval);
        }
      }, 5);
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var btnMain = document.querySelector('.btn_1');

if (btnMain) {
  var btn1 = function btn1() {
    var btnMain = document.querySelector('.btn_1');
    var imgFirst = document.querySelector('.page1__row');
    imgFirst.style.opacity = '1';
    btnMain.style.display = 'inline-block';
  };

  setTimeout(btn1, 1000);
} //burger


window.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.header__list'),
      menuItem = document.querySelectorAll('.header__link'),
      hamburger = document.querySelector('.header__burger'),
      overflowHidden = document.querySelector('body');
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
    overflowHidden.classList.toggle('overflow-hidden-y');
  });
  menuItem.forEach(function (item) {
    item.addEventListener('click', function () {
      hamburger.classList.toggle('burger_active');
      menu.classList.toggle('menu_active');
      overflowHidden.classList.toggle('overflow-hidden-y');
    });
  });
});
document.addEventListener("scroll", function (e) {
  var content = document.querySelector("body");
  var scrolled = document.scrollingElement.scrollTop;
  var position = content.offsetTop;
  var header = document.querySelector("header");
  var firstImg = document.querySelector(".page1__img");

  if (scrolled > position + 60) {
    content.classList.add('header-bgc');
  } else {
    content.classList.remove('header-bgc');
    content.classList.add('header-none-bgc');
  }

  if (firstImg) {
    if (scrolled > position + 1200) {
      firstImg.style.display = "none";
    } else {
      firstImg.style.display = "block";
    }
  }
});

function parallaxInit() {
  var firstBgParallax = document.querySelector(".parallax");
  new simpleParallax(firstBgParallax, {
    orientation: 'up left',
    overflow: true,
    delay: 1.2,
    scale: 1.2,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
  var secBgParallax = document.querySelector(".parallax2");
  new simpleParallax(secBgParallax, {
    orientation: 'down right',
    overflow: true,
    delay: 1.1,
    scale: 1.2,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });
}

parallaxInit();
var pageBigData = document.querySelector('.big-data__img');

if (pageBigData) {
  window.addEventListener('resize', dataImgReplace);
  var firstDataImg = document.querySelector('.big-data__img');
  var firstDataImgMobContainer = document.querySelector('.big-data__mob-img');
  var firstDataImgPcContainer = document.querySelector('.big-data__item:last-child');

  var dataImgReplace = function dataImgReplace() {
    if (window.innerWidth <= 768) {
      firstDataImgMobContainer.insertBefore(firstDataImg, firstDataImgMobContainer.children[0]);
    } else {
      firstDataImgPcContainer.insertBefore(firstDataImg, firstDataImgPcContainer.children[1]);
    }
  };

  if (window.innerWidth <= 768) {
    dataImgReplace();
  }

  window.addEventListener('resize', dataImgReplace);
}

var page1Img = document.querySelector('.page1__mob-img');

if (page1Img) {
  window.addEventListener('resize', dataImgReplace);
  var firstImg = document.querySelector('.page1__img');
  var firstImgMobContainer = document.querySelector('.page1__mob-img');
  var firstImgPcContainer = document.querySelector('.page1__item:last-child');

  var dataImgReplace = function dataImgReplace() {
    if (window.innerWidth <= 768) {
      firstImgMobContainer.insertBefore(firstImg, firstImgMobContainer.children[0]);
    } else {
      firstImgPcContainer.insertBefore(firstImg, firstImgPcContainer.children[1]);
    }
  };

  if (window.innerWidth <= 768) {
    dataImgReplace();
  }

  window.addEventListener('resize', dataImgReplace);
}

var pageGroup = document.querySelector('.group-advantages__img');

if (pageGroup) {
  window.addEventListener('resize', dataImgReplace);

  var _firstImg = document.querySelector('.group-advantages__img');

  var _firstImgMobContainer = document.querySelector('.group-advantages__img-mob-wrap');

  var _firstImgPcContainer = document.querySelector('.group-advantages__item:last-child');

  var dataImgReplace = function dataImgReplace() {
    if (window.innerWidth <= 1024) {
      _firstImgMobContainer.insertBefore(_firstImg, _firstImgMobContainer.children[0]);
    } else {
      _firstImgPcContainer.insertBefore(_firstImg, _firstImgPcContainer.children[1]);
    }
  };

  if (window.innerWidth <= 1024) {
    dataImgReplace();
  }

  window.addEventListener('resize', dataImgReplace);
}

/***/ }),

/***/ "./src/blocks/modules/sliders/sliders.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/sliders/sliders.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is <= 499px
    100: {
      slidesPerView: 2,
      spaceBetweenSlides: 15
    },
    // when window width is <= 999px
    550: {
      slidesPerView: 3,
      spaceBetweenSlides: 40
    },
    650: {
      slidesPerView: 4,
      spaceBetweenSlides: 40
    }
  }
});
var swiperLogo = new Swiper('.swiper-container-logo', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is <= 499px
    100: {
      slidesPerView: 2,
      spaceBetweenSlides: 15
    },
    // when window width is <= 999px
    550: {
      slidesPerView: 3,
      spaceBetweenSlides: 40
    },
    768: {
      slidesPerView: 4,
      spaceBetweenSlides: 40
    }
  }
});
var swiperAboutUs = new Swiper('.swiper-container-aboutUs', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is <= 499px
    100: {
      slidesPerView: 1,
      spaceBetweenSlides: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetweenSlides: 40
    }
  }
});
var swiperExpertise = new Swiper('.swiper-container-expertise', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is <= 499px
    100: {
      slidesPerView: 2,
      spaceBetweenSlides: 15
    },
    550: {
      slidesPerView: 3,
      spaceBetweenSlides: 20
    }
  }
});
var swiperSectors = new Swiper('.swiper-container-sectors', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is <= 499px
    100: {
      slidesPerView: 2,
      spaceBetweenSlides: 15
    },
    550: {
      slidesPerView: 3,
      spaceBetweenSlides: 20
    }
  }
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_sliders_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/sliders/sliders */ "./src/blocks/modules/sliders/sliders.js");
/* harmony import */ var _modules_sliders_sliders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_sliders_sliders__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_aboutUs_aboutUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/aboutUs/aboutUs */ "./src/blocks/modules/aboutUs/aboutUs.js");
/* harmony import */ var _modules_aboutUs_aboutUs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_aboutUs_aboutUs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map