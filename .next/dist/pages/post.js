'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-450313191'
  }, _react2.default.createElement('h1', {
    className: 'jsx-450313191'
  }, props.url.query.title), _react2.default.createElement('div', {
    className: 'jsx-450313191' + ' ' + 'markdown'
  }, _react2.default.createElement(_reactMarkdown2.default, { source: 'This is our blog post. Yes. We can have a [link](/). And we can have a title as well.\n### This is a title\nAnd here\'s the content.' })), _react2.default.createElement(_style2.default, {
    styleId: '450313191',
    css: ['.markdown,h1{font-family:\'Arial\';}', '.markdown a{text-decoration:none;color:blue;}', '.markdown a:hover{opacity:0.6;}', '.markdown h3{margin:0;padding:0;text-transform:uppercase;}']
  }));
};

exports.default = function (props) {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement(Content, { url: props.url }));
};