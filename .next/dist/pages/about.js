'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement('div', null, _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('h1', null, 'About this page')));
};