/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() { return module['default']; } :
            /******/
            function getModuleExports() { return module; };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./src/index.js");
    /******/
})
/************************************************************************/
/******/
({

    /***/
    "./src/constants/constants.js":
    /*!************************************!*\
      !*** ./src/constants/constants.js ***!
      \************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";
        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANNEL_NAME_ICON = \"<span class=\\\"fas fa-male\\\"></span>\";\nvar DATE_ICON = \"<span class=\\\"fas fa-calendar-alt\\\"></span>\";\nvar VIEWS_ICON = \"<span class=\\\"far fa-eye\\\"></span>\";\n\nexports.CHANNEL_NAME_ICON = CHANNEL_NAME_ICON;\nexports.DATE_ICON = DATE_ICON;\nexports.VIEWS_ICON = VIEWS_ICON;\n\n//# sourceURL=webpack:///./src/constants/constants.js?");

        /***/
    }),

    /***/
    "./src/functions/auth.js":
    /*!*******************************!*\
      !*** ./src/functions/auth.js ***!
      \*******************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";
        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = oauth2SignIn;\n/*\r\n * Create form to request access token from Google's OAuth 2.0 server.\r\n */\nfunction oauth2SignIn() {\n\t// Google's OAuth 2.0 endpoint for requesting an access token\n\tvar oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';\n\n\t// Create element to open OAuth 2.0 endpoint in new window.\n\tvar form = document.createElement('form');\n\tform.setAttribute('method', 'GET'); // Send as a GET request.\n\tform.setAttribute('action', oauth2Endpoint);\n\n\t// Parameters to pass to OAuth 2.0 endpoint.\n\tvar params = {\n\t\t'client_id': '1009519695752-bop3h7hbh6bf509jmsk6tuu165c5jvse.apps.googleusercontent.com',\n\t\t'redirect_uri': 'http://127.0.0.1:5500/index.html',\n\t\t'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',\n\t\t'state': 'try_sample_request',\n\t\t'include_granted_scopes': 'true',\n\t\t'response_type': 'token'\n\t};\n\n\t// Add form parameters as hidden input values.\n\tfor (var p in params) {\n\t\tvar input = document.createElement('input');\n\t\tinput.setAttribute('type', 'hidden');\n\t\tinput.setAttribute('name', p);\n\t\tinput.setAttribute('value', params[p]);\n\t\tform.appendChild(input);\n\t}\n\n\t// Add form to page and submit it to open the OAuth 2.0 endpoint.\n\tdocument.body.appendChild(form);\n\tform.submit();\n}\n\n//# sourceURL=webpack:///./src/functions/auth.js?");

        /***/
    }),

    /***/
    "./src/functions/checkWindowWidth.js":
    /*!*******************************************!*\
      !*** ./src/functions/checkWindowWidth.js ***!
      \*******************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";
        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = checkWindowWidth;\n\nvar _displayElements = __webpack_require__(/*! ./displayElements */ \"./src/functions/displayElements.js\");\n\nvar _displayElements2 = _interopRequireDefault(_displayElements);\n\nvar _handleSwipe = __webpack_require__(/*! ./handleSwipe */ \"./src/functions/handleSwipe.js\");\n\nvar _handleSwipe2 = _interopRequireDefault(_handleSwipe);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction checkWindowWidth() {\n\tvar videoElements = document.querySelectorAll('div.element');\n\tvar screenWidth = document.body.clientWidth;\n\tvar displayedElements = [];\n\n\t// for selected screen width - render four elements\n\tif (screenWidth >= 1010) {\n\t\tdisplayedElements = [0, 1, 2, 3];\n\t}\n\n\t// for selected screen width - render two elements\n\tif (screenWidth > 520 && screenWidth < 1010) {\n\t\tdisplayedElements = [0, 1];\n\t}\n\n\t// for selected screen width - render one element\n\tif (screenWidth <= 520) {\n\t\tdisplayedElements = [0];\n\t}\n\t(0, _handleSwipe2.default)(videoElements, displayedElements);\n\t(0, _displayElements2.default)(videoElements, displayedElements);\n}\n\n//# sourceURL=webpack:///./src/functions/checkWindowWidth.js?");

        /***/
    }),

    /***/
    "./src/functions/displayElements.js":
    /*!******************************************!*\
      !*** ./src/functions/displayElements.js ***!
      \******************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";
        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = displayElements;\nfunction displayElements(elements, quantity) {\n\tvar indexArray = quantity.map(function (a) {\n\t\treturn a;\n\t});\n\n\telements.forEach(function (item) {\n\t\treturn item.style.display = 'none';\n\t});\n\n\telements.forEach(function (item, index) {\n\t\tif (indexArray.includes(index)) item.style.display = 'inline-block';\n\t});\n}\n\n//# sourceURL=webpack:///./src/functions/displayElements.js?");

        /***/
    }),

    /***/
    "./src/functions/handleSwipe.js":
    /*!**************************************!*\
      !*** ./src/functions/handleSwipe.js ***!
      \**************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";
        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = handleSwipe;\n\nvar _displayElements = __webpack_require__(/*! ./displayElements */ \"./src/functions/displayElements.js\");\n\nvar _displayElements2 = _interopRequireDefault(_displayElements);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction handleSwipe(videoElements, displayedElements) {\n\tvar touchstart = 0;\n\tvar touchend = 0;\n\tvar gestureZone = document.querySelector('div.content');\n\n\t// touchscreen\n\tgestureZone.addEventListener('touchstart', function (event) {\n\t\ttouchstart = event.changedTouches[0].screenX;\n\t}, false);\n\n\tgestureZone.addEventListener('touchend', function (event) {\n\t\ttouchend = event.changedTouches[0].screenX;\n\t\thandleGesture(touchstart, touchend);\n\t}, false);\n\n\t// mouse\n\tgestureZone.addEventListener('mousedown', function (event) {\n\t\ttouchstart = event.clientX;\n\t\tdocument.body.style.cursor = '-webkit-grab';\n\t}, false);\n\n\tgestureZone.addEventListener('mouseup', function (event) {\n\t\ttouchend = event.clientX;\n\t\tdocument.body.style.cursor = 'default';\n\t\thandleGesture(touchstart, touchend);\n\t}, false);\n\n\tfunction handleGesture(touchstart, touchend) {\n\t\tif (touchend <= touchstart) {\n\t\t\tdisplayedElements = displayedElements.map(function (a) {\n\t\t\t\treturn a + displayedElements.length;\n\t\t\t});\n\t\t\t(0, _displayElements2.default)(videoElements, displayedElements);\n\t\t}\n\n\t\tif (touchend >= touchstart) {\n\t\t\tdisplayedElements = displayedElements.map(function (a) {\n\t\t\t\treturn a - displayedElements.length;\n\t\t\t});\n\t\t\t(0, _displayElements2.default)(videoElements, displayedElements);\n\t\t}\n\t}\n}\n\n//# sourceURL=webpack:///./src/functions/handleSwipe.js?");

        /***/
    }),

    /***/
    "./src/functions/processRequest.js":
    /*!*****************************************!*\
      !*** ./src/functions/processRequest.js ***!
      \*****************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";
        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = processRequest;\n\nvar _renderRequestResult = __webpack_require__(/*! ./renderRequestResult */ \"./src/functions/renderRequestResult.js\");\n\nvar _renderRequestResult2 = _interopRequireDefault(_renderRequestResult);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction processRequest() {\n\tvar search = document.getElementById('searchInput');\n\tvar hash = location.hash.substring(1);\n\tvar accessToken = hash.match(/token=(.*)&token/)[0].split('=')[1].split('&')[0];\n\n\tvar request = new XMLHttpRequest();\n\trequest.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=' + search.value + '&mine=true&access_token=' + accessToken);\n\trequest.onload = function () {\n\t\tif (request.status === 200) {\n\t\t\tvar responseValue = JSON.parse(request.response);\n\t\t\t(0, _renderRequestResult2.default)(responseValue.items);\n\t\t}\n\t};\n\trequest.send();\n}\n\n//# sourceURL=webpack:///./src/functions/processRequest.js?");

        /***/
    }),

    /***/
    "./src/functions/renderInputElement.js":
    /*!*********************************************!*\
      !*** ./src/functions/renderInputElement.js ***!
      \*********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";
        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = renderInputElement;\nfunction renderInputElement() {\n\tvar input = document.createElement('input');\n\tinput.type = 'search';\n\tinput.placeholder = 'Search';\n\tinput.id = 'searchInput';\n\tdocument.body.appendChild(input);\n}\n\n//# sourceURL=webpack:///./src/functions/renderInputElement.js?");

        /***/
    }),

    /***/
    "./src/functions/renderRequestResult.js":
    /*!**********************************************!*\
      !*** ./src/functions/renderRequestResult.js ***!
      \**********************************************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";
        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\nexports.default = renderRequestResult;\n\nvar _constants = __webpack_require__(/*! ../constants/constants */ \"./src/constants/constants.js\");\n\nvar _checkWindowWidth = __webpack_require__(/*! ./checkWindowWidth */ \"./src/functions/checkWindowWidth.js\");\n\nvar _checkWindowWidth2 = _interopRequireDefault(_checkWindowWidth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction renderRequestResult(result) {\n\n\t\tvar content = document.createElement('div');\n\t\tcontent.classList.add('content');\n\t\tdocument.body.appendChild(content);\n\n\t\tresult.forEach(function (item) {\n\t\t\t\tvar element = document.createElement('div');\n\t\t\t\telement.classList.add('element');\n\t\t\t\telement.style.display = 'none';\n\t\t\t\tcontent.appendChild(element);\n\n\t\t\t\tvar thumbnail = document.createElement('img');\n\t\t\t\tthumbnail.src = item.snippet.thumbnails.medium.url + ' ';\n\t\t\t\tthumbnail.alt = '#';\n\t\t\t\telement.appendChild(thumbnail);\n\n\t\t\t\tvar link = document.createElement('a');\n\t\t\t\tlink.href = 'https://www.youtube.com/watch?v=' + item.id.videoId;\n\t\t\t\tlink.innerHTML = item.snippet.title;\n\t\t\t\tlink.target = '_blank';\n\t\t\t\telement.appendChild(link);\n\n\t\t\t\tvar channelTitle = document.createElement('p');\n\t\t\t\tchannelTitle.innerHTML = _constants.CHANNEL_NAME_ICON + ' ' + item.snippet.channelTitle;\n\t\t\t\telement.appendChild(channelTitle);\n\n\t\t\t\tvar publishedAt = document.createElement('p');\n\t\t\t\tpublishedAt.innerHTML = _constants.DATE_ICON + ' ' + item.snippet.publishedAt.match(/^.*(?=(\\T))/)[0];\n\t\t\t\telement.appendChild(publishedAt);\n\n\t\t\t\tvar description = document.createElement('p');\n\t\t\t\tdescription.classList.add('description');\n\t\t\t\tdescription.innerHTML = item.snippet.description;\n\t\t\t\telement.appendChild(description);\n\t\t});\n\n\t\t(0, _checkWindowWidth2.default)();\n}\n\n//# sourceURL=webpack:///./src/functions/renderRequestResult.js?");

        /***/
    }),

    /***/
    "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /*! no static exports found */
    /***/
        (function(module, exports, __webpack_require__) {

        "use strict";
        eval("\n\nvar _auth = __webpack_require__(/*! ./functions/auth.js */ \"./src/functions/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _renderInputElement = __webpack_require__(/*! ./functions/renderInputElement.js */ \"./src/functions/renderInputElement.js\");\n\nvar _renderInputElement2 = _interopRequireDefault(_renderInputElement);\n\nvar _processRequest = __webpack_require__(/*! ./functions/processRequest.js */ \"./src/functions/processRequest.js\");\n\nvar _processRequest2 = _interopRequireDefault(_processRequest);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _renderInputElement2.default)();\n\nif (!location.hash) {\n\t(0, _auth2.default)();\n}\n\ndocument.onkeydown = function (evt) {\n\tvar content = document.querySelector('div');\n\tevt = evt || window.event;\n\tif (evt.keyCode == 13) {\n\t\tif (content) content.remove();\n\t\t(0, _processRequest2.default)();\n\t}\n};\n\n//# sourceURL=webpack:///./src/index.js?");

        /***/
    })

    /******/
});