"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _reactTransitionGroup = require("react-transition-group");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _config = require("@config");

var _utils = require("@utils");

var _sr = _interopRequireDefault(require("@utils/sr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    query {\n      jobs: allMarkdownRemark(\n        filter: { fileAbsolutePath: { regex: \"/jobs/\" } }\n        sort: { fields: [frontmatter___date], order: DESC }\n      ) {\n        edges {\n          node {\n            frontmatter {\n              title\n              company\n              location\n              range\n              url\n            }\n            html\n          }\n        }\n      }\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  padding-top: 10px;\n  padding-left: 30px;\n\n  @media (max-width: 768px) {\n    padding-left: 20px;\n  }\n  @media (max-width: 600px) {\n    padding-left: 0;\n  }\n\n  ul {\n    ", ";\n  }\n\n  h3 {\n    margin-bottom: 5px;\n    font-size: var(--fz-xxl);\n    font-weight: 500;\n\n    .company {\n      color: var(--green);\n    }\n  }\n\n  .range {\n    margin-bottom: 30px;\n    color: var(--light-slate);\n    font-family: var(--font-mono);\n    font-size: var(--fz-xs);\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  width: 2px;\n  height: var(--tab-height);\n  border-radius: var(--border-radius);\n  background: var(--green);\n  transform: translateY(calc(", " * var(--tab-height)));\n  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-delay: 0.1s;\n\n  @media (max-width: 600px) {\n    top: auto;\n    bottom: 0;\n    width: 100%;\n    max-width: var(--tab-width);\n    height: 2px;\n    margin-left: 50px;\n    transform: translateX(calc(", " * var(--tab-width)));\n  }\n  @media (max-width: 480px) {\n    margin-left: 25px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: var(--tab-height);\n  padding: 0 20px 2px;\n  border-left: 2px solid var(--lightest-navy);\n  background-color: transparent;\n  color: ", ";\n  font-family: var(--font-mono);\n  font-size: var(--fz-xs);\n  text-align: left;\n  white-space: nowrap;\n\n  @media (max-width: 768px) {\n    padding: 0 15px 2px;\n  }\n  @media (max-width: 600px) {\n    ", ";\n    min-width: 120px;\n    padding: 0 15px;\n    border-left: 0;\n    border-bottom: 2px solid var(--lightest-navy);\n    text-align: center;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: var(--light-navy);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 3;\n  width: max-content;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n\n  @media (max-width: 600px) {\n    display: flex;\n    overflow-x: auto;\n    width: calc(100% + 100px);\n    margin-left: -50px;\n    margin-bottom: 30px;\n  }\n  @media (max-width: 480px) {\n    width: calc(100% + 50px);\n    margin-left: -25px;\n  }\n\n  li {\n    &:first-of-type {\n      @media (max-width: 600px) {\n        margin-left: 50px;\n      }\n      @media (max-width: 480px) {\n        margin-left: 25px;\n      }\n    }\n    &:last-of-type {\n      @media (max-width: 600px) {\n        padding-right: 50px;\n      }\n      @media (max-width: 480px) {\n        padding-right: 25px;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 700px;\n\n  .inner {\n    display: flex;\n\n    @media (max-width: 600px) {\n      display: block;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledJobsSection = _styledComponents["default"].section(_templateObject());

var StyledTabList = _styledComponents["default"].ul(_templateObject2());

var StyledTabButton = _styledComponents["default"].button(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return theme.mixins.link;
}, function (_ref2) {
  var isActive = _ref2.isActive;
  return isActive ? 'var(--green)' : 'var(--slate)';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.mixins.flexCenter;
});

var StyledHighlight = _styledComponents["default"].div(_templateObject4(), function (_ref4) {
  var activeTabId = _ref4.activeTabId;
  return activeTabId;
}, function (_ref5) {
  var activeTabId = _ref5.activeTabId;
  return activeTabId;
});

var StyledTabContent = _styledComponents["default"].div(_templateObject5(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.mixins.fancyList;
});

var Jobs = function Jobs() {
  var data = (0, _gatsby.useStaticQuery)((0, _gatsby.graphql)(_templateObject6()));
  var jobsData = data.jobs.edges;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeTabId = _useState2[0],
      setActiveTabId = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      tabFocus = _useState4[0],
      setTabFocus = _useState4[1];

  var tabs = (0, _react.useRef)([]);
  var revealContainer = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    return _sr["default"].reveal(revealContainer.current, (0, _config.srConfig)());
  }, []);

  var focusTab = function focusTab() {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    } // If we're at the end, go to the start


    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    } // If we're at the start, move to the end


    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  }; // Only re-run the effect if tabFocus changes


  (0, _react.useEffect)(function () {
    return focusTab();
  }, [tabFocus]); // Focus on tabs when using up & down arrow keys

  var onKeyDown = function onKeyDown(e) {
    if (e.key === _utils.KEY_CODES.ARROW_UP || e.key === _utils.KEY_CODES.ARROW_DOWN) {
      e.preventDefault(); // Move up

      if (e.key === _utils.KEY_CODES.ARROW_UP) {
        setTabFocus(tabFocus - 1);
      } // Move down


      if (e.key === _utils.KEY_CODES.ARROW_DOWN) {
        setTabFocus(tabFocus + 1);
      }
    }
  };
};

var _default = Jobs;
exports["default"] = _default;