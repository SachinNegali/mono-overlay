"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Popup.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Popup = _ref => {
  let {
    show,
    onClose
  } = _ref;
  if (!show) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-content"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "popup-close",
    onClick: onClose
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("h1", null, "WTF THO"), /*#__PURE__*/_react.default.createElement("h1", null, "WTF THO"), /*#__PURE__*/_react.default.createElement("h1", null, "WTF THO"), /*#__PURE__*/_react.default.createElement("h1", null, "WTF THO"), /*#__PURE__*/_react.default.createElement("h1", null, "WTF THO"), /*#__PURE__*/_react.default.createElement("h1", null, "WTF THO"), /*#__PURE__*/_react.default.createElement("h1", null, "WTF THO"), /*#__PURE__*/_react.default.createElement("h1", null, "WTF THO")));
};
var _default = exports.default = Popup;