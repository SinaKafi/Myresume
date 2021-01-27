"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("@components/icons");

var _config = require("@config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: var(--light-slate);\n  font-family: var(--font-mono);\n  font-size: var(--fz-xxs);\n  line-height: 1;\n\n  a {\n    padding: 10px;\n  }\n\n  .github-stats {\n    margin-top: 10px;\n\n    & > span {\n      display: inline-flex;\n      align-items: center;\n      margin: 0 7px;\n    }\n    svg {\n      display: inline-block;\n      margin-right: 5px;\n      width: 14px;\n      height: 14px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n\n  @media (max-width: 768px) {\n    display: block;\n    width: 100%;\n    max-width: 270px;\n    margin: 0 auto 10px;\n    color: var(--light-slate);\n  }\n\n  ul {\n    ", ";\n    padding: 0;\n    margin: 0;\n    list-style: none;\n\n    a {\n      padding: 10px;\n      svg {\n        width: 20px;\n        height: 20px;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  flex-direction: column;\n  height: auto;\n  min-height: 70px;\n  padding: 15px;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFooter = _styledComponents["default"].footer(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.mixins.flexCenter;
});

var StyledSocialLinks = _styledComponents["default"].div(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.mixins.flexBetween;
});

var StyledCredit = _styledComponents["default"].div(_templateObject3());

var Footer = function Footer() {
  var _useState = (0, _react.useState)({
    stars: null,
    forks: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      githubInfo = _useState2[0],
      setGitHubInfo = _useState2[1];

  (0, _react.useEffect)(function () {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    fetch('https://github.com/SinaKafi').then(function (response) {
      return response.json();
    }).then(function (json) {
      var stargazers_count = json.stargazers_count,
          forks_count = json.forks_count;
      setGitHubInfo({
        stars: stargazers_count,
        forks: forks_count
      });
    })["catch"](function (e) {
      return console.error(e);
    });
  }, []);
   return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>
      <StyledCredit tabindex="-1">
        <a href="https://github.com/SinaKafi">
          <div>Designed &amp; Built by  SINA KAFI</div>
          {githubInfo.stars && githubInfo.forks && (
            <div className="github-stats">
              <span>
                <Icon name="Star" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          )}
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};
//Brittany Chiang Customize by
Footer.propTypes = {
  githubInfo: _propTypes["default"].object
};
var _default = Footer;
exports["default"] = _default;