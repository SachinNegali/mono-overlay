"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _Popup = _interopRequireDefault(require("./components/Popup"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_Popup.default, {
    show: true,
    onClose: () => console.log('cndkjnvkfnvkjn..')
  }, /*#__PURE__*/React.createElement("h1", null, "Hello, Popup!")));
}
var _default = exports.default = App;