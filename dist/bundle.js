/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>Skips</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n    <div class=\\\"container\\\">\\r\\n        <header class=\\\"header\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"header__logo\\\">Marketplace</a>\\r\\n            <label class=\\\"header__search-label\\\">\\r\\n                <input class=\\\"header__search\\\" type=\\\"text\\\" placeholder=\\\"search for a product, flower, etc\\\">\\r\\n            </label>\\r\\n            <div class=\\\"header__products\\\">\\r\\n                <button class=\\\"header__products_item active\\\">Buds</button>\\r\\n                <button class=\\\"header__products_item\\\">Edible</button>\\r\\n                <button class=\\\"header__products_item\\\">Non Edible</button>\\r\\n                <button class=\\\"header__products_item\\\">Concentrate</button>\\r\\n            </div>\\r\\n        </header>\\r\\n        <main class=\\\"main\\\">\\r\\n            <section class=\\\"range\\\">\\r\\n                <div class=\\\"range__item\\\">\\r\\n                    <h3 class=\\\"range__title\\\">Price Range</h3>\\r\\n                    <div class=\\\"range__line \\\">\\r\\n                        <span class=\\\"range__tooltip first-tooltip\\\">234 $</span>\\r\\n                        <span class=\\\"green-line\\\"></span>\\r\\n                        <span class=\\\"dark-line\\\"></span>\\r\\n                    </div>\\r\\n                    <div class=\\\"range__summ\\\">\\r\\n                        <span class=\\\"range__current_sum\\\">234 $</span>\\r\\n                        <span class=\\\"range__total_sum\\\">9999 $</span>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"range__item\\\">\\r\\n                    <h3 class=\\\"range__title\\\">ТНС, %</h3>\\r\\n                    <div class=\\\"range__line \\\">\\r\\n                        <span class=\\\"range__tooltip second-tooltip\\\">65 %</span>\\r\\n                        <span class=\\\"green-line\\\"></span>\\r\\n                        <span class=\\\"dark-line\\\"></span>\\r\\n                    </div>\\r\\n                    <div class=\\\"range__summ\\\">\\r\\n                        <span class=\\\"range__total_sum\\\">65 %</span>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"range__item\\\">\\r\\n                    <h3 class=\\\"range__title\\\">CBD, %</h3>\\r\\n                    <div class=\\\"range__line \\\">\\r\\n                        <span class=\\\"range__tooltip third-tooltip\\\">65 %</span>\\r\\n                        <span class=\\\"green-line\\\"></span>\\r\\n                        <span class=\\\"dark-line\\\"></span>\\r\\n                    </div>\\r\\n                    <div class=\\\"range__summ\\\">\\r\\n                        <span class=\\\"range__total_sum\\\">65 %</span>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"range__item range__item-nose\\\">\\r\\n                    <h3 class=\\\"range__title range__title-mb\\\">Nose</h3>\\r\\n                    <div class=\\\"range__column-graph\\\">\\r\\n                        <span class=\\\"column column-yellow column-not-full\\\"></span>\\r\\n                        <span class=\\\"column column-yellow column-not-full\\\"></span>\\r\\n                        <span class=\\\"column column-yellow column-not-full\\\"></span>\\r\\n                        <span class=\\\"column column-yellow column-not-full\\\"></span>\\r\\n                        <span class=\\\"column column-yellow \\\"></span>\\r\\n                        <span class=\\\"column column-green column-not-full\\\"></span>\\r\\n                        <span class=\\\"column column-green column-not-full\\\"></span>\\r\\n                        <span class=\\\"column column-green column-not-full\\\"></span>\\r\\n                        <span class=\\\"column column-green column-not-full\\\"></span>\\r\\n                        <span class=\\\"column column-green\\\"></span>\\r\\n                    </div>\\r\\n                    <div class=\\\"range__min-max\\\">\\r\\n                        <span class=\\\"min-max\\\">min</span>\\r\\n                        <span class=\\\"min-max\\\">max</span>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"range__sort\\\">\\r\\n                    <button class=\\\"sort__btn\\\">\\r\\n                        <div class=\\\"sort__tooltip\\\">Открыть окно фильтрации</div>\\r\\n                    </button>\\r\\n                    <ul class=\\\"sort__wrapper toggle\\\">\\r\\n                        <p class=\\\"sort__title\\\">Sort by :</p>\\r\\n                        <li class=\\\"sort__item\\\">\\r\\n                            <span class=\\\"sort-icon sort-date\\\"></span>\\r\\n                            <a href=\\\"#\\\" class=\\\"sort__text\\\">\\r\\n                                Date (New first)\\r\\n                            </a>\\r\\n                        </li>\\r\\n                        <li class=\\\"sort__item\\\">\\r\\n                            <span class=\\\"sort-icon sort-date\\\"></span>\\r\\n                            <a href=\\\"#\\\" class=\\\"sort__text\\\">\\r\\n                                Date (Old first)\\r\\n                            </a>\\r\\n                        </li>\\r\\n                        <li class=\\\"sort__item\\\">\\r\\n                            <span class=\\\"sort-icon sort-hight\\\"></span>\\r\\n                            <a href=\\\"#\\\" class=\\\"sort__text\\\">\\r\\n                                Price (High first)\\r\\n                            </a>\\r\\n                        </li>\\r\\n                        <li class=\\\"sort__item\\\">\\r\\n                            <span class=\\\"sort-icon sort-low \\\"></span>\\r\\n                            <a href=\\\"#\\\" class=\\\"sort__text\\\">\\r\\n                                Price (Low first)\\r\\n                            </a>\\r\\n                        </li>\\r\\n                        <li class=\\\"sort__item\\\">\\r\\n                            <span class=\\\"sort-icon sort-thc-high\\\"></span>\\r\\n                            <a href=\\\"#\\\" class=\\\"sort__text\\\">\\r\\n                                Total THC (High first)\\r\\n                            </a>\\r\\n                        </li>\\r\\n                        <li class=\\\"sort__item\\\">\\r\\n                            <span class=\\\"sort-icon sort-thc-low\\\"></span>\\r\\n                            <a href=\\\"#\\\" class=\\\"sort__text\\\">\\r\\n                                Total THC (Low first)\\r\\n                            </a>\\r\\n                        </li>\\r\\n                        <li class=\\\"sort__item\\\">\\r\\n                            <span class=\\\"sort-icon sort-cbd-high\\\"></span>\\r\\n                            <a href=\\\"#\\\" class=\\\"sort__text\\\">\\r\\n                                Total CBD (High first)\\r\\n                            </a>\\r\\n                        </li>\\r\\n                        <li class=\\\"sort__item\\\">\\r\\n                            <span class=\\\"sort-icon sort-cbd-low\\\"></span>\\r\\n                            <a href=\\\"#\\\" class=\\\"sort__text\\\">\\r\\n                                Total CBD (Low first)\\r\\n                            </a>\\r\\n                        </li>\\r\\n                    </ul>\\r\\n                </div>\\r\\n            </section>\\r\\n            <section class=\\\"result\\\">\\r\\n                <h3 class=\\\"result__title\\\">1034,5 Results</h3>\\r\\n                <div class=\\\"result__wrapper\\\">\\r\\n                    <div class=\\\"result__item\\\">\\r\\n                        100% Indica\\r\\n                        <span class=\\\"close-btn\\\"></span>\\r\\n                    </div>\\r\\n                    <div class=\\\"result__item\\\">\\r\\n                        >50% Indica\\r\\n                        <span class=\\\"close-btn\\\"></span>\\r\\n                    </div>\\r\\n                    <div class=\\\"result__item\\\">\\r\\n                        Indoor\\r\\n                        <span class=\\\"close-btn\\\"></span>\\r\\n                    </div>\\r\\n                    <div class=\\\"result__item\\\">\\r\\n                        Flower\\r\\n                        <span class=\\\"close-btn\\\"></span>\\r\\n                    </div>\\r\\n                    <div class=\\\"result__item\\\">\\r\\n                        Michigan\\r\\n                        <span class=\\\"close-btn\\\"></span>\\r\\n                    </div>\\r\\n                    <div class=\\\"result__item\\\">\\r\\n                        SellerSeller\\r\\n                        <span class=\\\"close-btn\\\"></span>\\r\\n                    </div>\\r\\n                    <div class=\\\"result__item\\\">\\r\\n                        Distributor\\r\\n                        <span class=\\\"close-btn\\\"></span>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </section>\\r\\n            <aside class=\\\"sidebar\\\">\\r\\n                <div class=\\\"sidebar__lists\\\">\\r\\n                    <div class=\\\"sidebar__title\\\">\\r\\n                        Classification\\r\\n                        <span class=\\\"sidebar-arrow\\\" data-target=\\\"item-1\\\"></span>\\r\\n                    </div>\\r\\n                    <div id=\\\"item-1\\\">\\r\\n                        <div class=\\\"sidebar__item active\\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">100% Indica</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">100% Sativa</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item active\\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">>50% Indica</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">>50% Sativa</p>\\r\\n                        </div>\\r\\n\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"sidebar__lists\\\">\\r\\n                    <div class=\\\"sidebar__title\\\">\\r\\n                        Production Method\\r\\n                        <span class=\\\"sidebar-arrow \\\" data-target=\\\"item-2\\\"></span>\\r\\n                    </div>\\r\\n                    <div id=\\\"item-2\\\">\\r\\n                        <div class=\\\"sidebar__item active\\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Indoor</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">100% Sativa</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item\\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Outdoor</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Greenhouse</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Light Deprivation</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Mixed Light</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Other</p>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"sidebar__lists\\\">\\r\\n                    <div class=\\\"sidebar__title\\\">\\r\\n                        Size\\r\\n                        <span class=\\\"sidebar-arrow\\\" data-target=\\\"item-3\\\"></span>\\r\\n                    </div>\\r\\n                    <div id=\\\"item-3\\\">\\r\\n                        <div class=\\\"sidebar__item active\\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Flower</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Pre-Roll Flower</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Pre-Roll Infused</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Pre-Roll Leaf</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Shake</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Smalls</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Trim</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Shakes</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Keef</p>\\r\\n                        </div>\\r\\n                        <div class=\\\"sidebar__item \\\">\\r\\n                            <div class=\\\"sidebar__check-wrapper\\\">\\r\\n                                <span class=\\\"sidebar-check \\\"></span>\\r\\n                            </div>\\r\\n                            <p class=\\\"sidebar__text\\\">Fresh Frozen</p>\\r\\n                        </div>\\r\\n\\r\\n                    </div>\\r\\n                </div>\\r\\n            </aside>\\r\\n        </main>\\r\\n        <footer>\\r\\n            <p class=\\\"footer__desc\\\">Этот веб-ресурс создан в рамках тестового задания для потенциального работодателя.\\r\\n                Фронтенд частю проекта занимался я, Мамедов Шухрат , с целью продемонстрировать мои навыки\\r\\n                и знания в области веб-разработки. Сайт предназначен для ознакомления работодателя с моими способностями\\r\\n                и подходом к созданию веб-приложений.\\r\\n            </p>\\r\\n        </footer>\\r\\n    </div>\\r\\n\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://test-task-skips/./src/index.html?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-task-skips/./src/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _js_header_btns_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/header-btns.js */ \"./src/js/header-btns.js\");\n/* harmony import */ var _js_header_btns_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_header_btns_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_sort_btn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/sort-btn.js */ \"./src/js/sort-btn.js\");\n/* harmony import */ var _js_sort_btn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_sort_btn_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_checkbox_logic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/checkbox-logic.js */ \"./src/js/checkbox-logic.js\");\n/* harmony import */ var _js_checkbox_logic_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_checkbox_logic_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_sidebarListToggle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/sidebarListToggle.js */ \"./src/js/sidebarListToggle.js\");\n/* harmony import */ var _js_sidebarListToggle_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_sidebarListToggle_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _js_range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/range.js */ \"./src/js/range.js\");\n/* harmony import */ var _js_range_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_range_js__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://test-task-skips/./src/index.js?");

/***/ }),

/***/ "./src/js/checkbox-logic.js":
/*!**********************************!*\
  !*** ./src/js/checkbox-logic.js ***!
  \**********************************/
/***/ (() => {

eval("\r\nconst createdItems = Array.from(document.querySelectorAll('.result__item'))\r\nconst checkboxBtns = document.querySelectorAll('.sidebar__check-wrapper')\r\nconst resultItems = document.querySelectorAll('.result__item')\r\n\r\n\r\nfunction addResultItem(newItem, selectedText) {\r\n    newItem.classList.add('result__item')\r\n    newItem.innerHTML = `\r\n    ${selectedText}\r\n    <span class=\"close-btn\"></span>\r\n  `\r\n\r\n    newItem.querySelectorAll('.close-btn').forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            newItem.remove()\r\n            createdItems.splice(createdItems.indexOf(newItem), 1)\r\n        })\r\n    })\r\n    document.querySelector('.result__wrapper').appendChild(newItem)\r\n    createdItems.push(newItem)\r\n}\r\n\r\ncheckboxBtns.forEach((btn, index) => {\r\n    btn.addEventListener('click', () => {\r\n        const sidebarItems = document.querySelectorAll('.sidebar__item')\r\n        const sidebarItem = sidebarItems[index]\r\n        sidebarItem.classList.toggle('active')\r\n\r\n        const selectedText = sidebarItem.querySelector('.sidebar__text').textContent\r\n        const newItem = document.createElement('div')\r\n\r\n        if (sidebarItem.classList.contains('active')) {\r\n            addResultItem(newItem, selectedText)\r\n        } else {\r\n            const existingItem = createdItems.find(item => item.classList.contains('active'))\r\n            if (existingItem) {\r\n                existingItem.classList.remove('active')\r\n                existingItem.remove()\r\n                createdItems.splice(createdItems.indexOf(existingItem), 1)\r\n            }\r\n        }\r\n    })\r\n})\r\n\r\nfunction removeResultItem(item) {\r\n    item.querySelectorAll('.close-btn').forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            item.remove()\r\n            createdItems.splice(createdItems.indexOf(item), 1)\r\n        })\r\n    })\r\n}\r\n\r\nresultItems.forEach(item => {\r\n    const closeBtn = item.querySelector('.close-btn')\r\n    if (closeBtn) {\r\n        removeResultItem(item)\r\n    }\r\n})\r\n\r\n\n\n//# sourceURL=webpack://test-task-skips/./src/js/checkbox-logic.js?");

/***/ }),

/***/ "./src/js/header-btns.js":
/*!*******************************!*\
  !*** ./src/js/header-btns.js ***!
  \*******************************/
/***/ (() => {

eval("const buttons = document.querySelectorAll('.header__products_item')\r\n\r\nbuttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n        buttons.forEach(btn => btn.classList.remove('active'))\r\n\r\n        btn.classList.add('active')\r\n    })\r\n})\n\n//# sourceURL=webpack://test-task-skips/./src/js/header-btns.js?");

/***/ }),

/***/ "./src/js/range.js":
/*!*************************!*\
  !*** ./src/js/range.js ***!
  \*************************/
/***/ (() => {

eval("const rangeLines = document.querySelectorAll('.range__line')\r\n\r\nrangeLines.forEach(rangeLine => {\r\n    rangeLine.addEventListener('mousedown', onMouseDown)\r\n})\r\n\r\nfunction onMouseDown(event) {\r\n    document.addEventListener('mousemove', onMouseMove)\r\n    document.addEventListener('mouseup', onMouseUp)\r\n\r\n    const currentLine = event.currentTarget\r\n\r\n    function onMouseMove(event) {\r\n        const offsetX = Math.min(Math.max(event.clientX - currentLine.getBoundingClientRect().left, 0), currentLine.clientWidth)\r\n        const rangeLineWidth = currentLine.offsetWidth\r\n\r\n        const percentage = (offsetX / rangeLineWidth) * 100\r\n\r\n        const greenLine = currentLine.querySelector('.green-line')\r\n        const darkLine = currentLine.querySelector('.dark-line')\r\n        const tooltip = currentLine.querySelector('.range__tooltip')\r\n\r\n\r\n        const parentElement = currentLine.parentElement\r\n\r\n\r\n        const totalSum = parentElement.querySelector('.range__total_sum')\r\n        const totalCurSum = parentElement.querySelector('.range__current_sum')\r\n\r\n        const totalSumValue = totalSum.innerText\r\n        const getPercentOrDollar = (str) => {\r\n            return /%/.test(str) ? '%' : '$'\r\n        }\r\n        const innerText = `${Math.round(percentage)}${getPercentOrDollar(totalSumValue)}`\r\n\r\n        tooltip.style.left = `${offsetX - 31}px`\r\n        greenLine.style.width = `${percentage}%`\r\n        darkLine.style.width = `${100 - percentage}%`\r\n\r\n        tooltip.innerText = innerText\r\n        if (getPercentOrDollar(totalSumValue) == '%') {\r\n            totalSum.innerText = innerText\r\n        }\r\n        if (totalCurSum) {\r\n            const totalCurSumResult = Math.round((offsetX / rangeLineWidth) * 9999)\r\n            totalCurSum.innerText = `${totalCurSumResult}$`\r\n            tooltip.innerText = `${totalCurSumResult}$`\r\n        }\r\n\r\n    }\r\n\r\n    function onMouseUp() {\r\n        document.removeEventListener('mousemove', onMouseMove)\r\n        document.removeEventListener('mouseup', onMouseUp)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://test-task-skips/./src/js/range.js?");

/***/ }),

/***/ "./src/js/sidebarListToggle.js":
/*!*************************************!*\
  !*** ./src/js/sidebarListToggle.js ***!
  \*************************************/
/***/ (() => {

eval("const toggleBtns = document.querySelectorAll('.sidebar-arrow')\r\n\r\ntoggleBtns.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n        const targetId = btn.getAttribute('data-target')\r\n        const targetItem = document.getElementById(targetId)\r\n\r\n        if (targetItem.classList.contains('sidebar-is-show')) {\r\n            btn.style.setProperty('transform', 'rotate(0deg)')\r\n            targetItem.classList.remove('sidebar-is-show')\r\n        } else {\r\n            btn.style.setProperty('transform', 'rotate(180deg)')\r\n            targetItem.classList.add('sidebar-is-show')\r\n        }\r\n    })\r\n})\n\n//# sourceURL=webpack://test-task-skips/./src/js/sidebarListToggle.js?");

/***/ }),

/***/ "./src/js/sort-btn.js":
/*!****************************!*\
  !*** ./src/js/sort-btn.js ***!
  \****************************/
/***/ (() => {

eval("const sortBtn = document.querySelector('.sort__btn')\r\nconst sortWrapper = document.querySelector('.sort__wrapper')\r\nsortBtn.addEventListener('click', () => {\r\n    sortWrapper.classList.toggle('toggle')\r\n})\n\n//# sourceURL=webpack://test-task-skips/./src/js/sort-btn.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;