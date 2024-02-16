/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 120:
/***/ (() => {


const createdItems = Array.from(document.querySelectorAll('.result__item'))
const checkboxBtns = document.querySelectorAll('.sidebar__check-wrapper')
const resultItems = document.querySelectorAll('.result__item')


function addResultItem(newItem, selectedText) {
    newItem.classList.add('result__item')
    newItem.innerHTML = `
    ${selectedText}
    <span class="close-btn"></span>
  `

    newItem.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            newItem.remove()
            createdItems.splice(createdItems.indexOf(newItem), 1)
        })
    })
    document.querySelector('.result__wrapper').appendChild(newItem)
    createdItems.push(newItem)
}

checkboxBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const sidebarItems = document.querySelectorAll('.sidebar__item')
        const sidebarItem = sidebarItems[index]
        sidebarItem.classList.toggle('active')

        const selectedText = sidebarItem.querySelector('.sidebar__text').textContent
        const newItem = document.createElement('div')

        if (sidebarItem.classList.contains('active')) {
            addResultItem(newItem, selectedText)
        } else {
            const existingItem = createdItems.find(item => item.classList.contains('active'))
            if (existingItem) {
                existingItem.classList.remove('active')
                existingItem.remove()
                createdItems.splice(createdItems.indexOf(existingItem), 1)
            }
        }
    })
})

function removeResultItem(item) {
    item.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            item.remove()
            createdItems.splice(createdItems.indexOf(item), 1)
        })
    })
}

resultItems.forEach(item => {
    const closeBtn = item.querySelector('.close-btn')
    if (closeBtn) {
        removeResultItem(item)
    }
})



/***/ }),

/***/ 532:
/***/ (() => {

const buttons = document.querySelectorAll('.header__products_item')

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'))

        btn.classList.add('active')
    })
})

/***/ }),

/***/ 916:
/***/ (() => {

const toggleBtns = document.querySelectorAll('.sidebar-arrow')

toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target')
        const targetItem = document.getElementById(targetId)

        if (targetItem.classList.contains('sidebar-is-show')) {
            btn.style.setProperty('transform', 'rotate(0deg)')
            targetItem.classList.remove('sidebar-is-show')
        } else {
            btn.style.setProperty('transform', 'rotate(180deg)')
            targetItem.classList.add('sidebar-is-show')
        }
    })
})

/***/ }),

/***/ 104:
/***/ (() => {

const sortBtn = document.querySelector('.sort__btn')
const sortWrapper = document.querySelector('.sort__wrapper')
sortBtn.addEventListener('click', () => {
    sortWrapper.classList.toggle('toggle')
})

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_header_btns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(532);
/* harmony import */ var _js_header_btns_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_header_btns_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_sort_btn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony import */ var _js_sort_btn_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_sort_btn_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_checkbox_logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(120);
/* harmony import */ var _js_checkbox_logic_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_checkbox_logic_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_sidebarListToggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(916);
/* harmony import */ var _js_sidebarListToggle_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_sidebarListToggle_js__WEBPACK_IMPORTED_MODULE_3__);






})();

/******/ })()
;