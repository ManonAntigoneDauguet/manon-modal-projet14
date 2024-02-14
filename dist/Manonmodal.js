"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styleModule = _interopRequireDefault(require("./style.module.css"));
var _close = _interopRequireDefault(require("./close.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Return a simple confirmation modal that can close itself with a button
 * @param { String } text 
 * @param { Function } onClose as the the method called when the close button is clicked
 * @returns { HTMLElement }
 */
var ManonModal = function ManonModal(_ref) {
  var text = _ref.text,
    onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _styleModule["default"].modalContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "confirmation",
    className: _styleModule["default"].modal
  }, /*#__PURE__*/_react["default"].createElement("span", null, text), /*#__PURE__*/_react["default"].createElement("div", {
    className: _styleModule["default"].closeButtonContainer
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _close["default"],
    alt: "close",
    className: _styleModule["default"].icon
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "button",
    onClick: onClose,
    className: _styleModule["default"].closeButton
  }))));
};
var _default = exports["default"] = ManonModal;