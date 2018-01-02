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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPosts() {
    return [{ id: "my-first-post", title: "My First post" }, { id: "my-second-post", title: "My Second post" }, { id: "my-third-post", title: "My Third post" }, { id: "i-love-blogging", title: "I love blogging" }];
}

var PostLink = function PostLink(_ref) {
    var post = _ref.post;
    return _react2.default.createElement('li', {
        className: 'jsx-3797835328'
    }, _react2.default.createElement(_link2.default, { as: '/post/' + post.id, href: '/post?title=' + post.title }, _react2.default.createElement('a', {
        className: 'jsx-3797835328'
    }, post.title)), _react2.default.createElement(_style2.default, {
        styleId: '3797835328',
        css: ['li.jsx-3797835328{margin:5px 0;}', 'a.jsx-3797835328{font-family:"Arial";text-decoration:none;color:blue;}', 'a.jsx-3797835328:hover{opacity:0.6;}']
    }));
};

exports.default = function () {
    return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('h1', {
        className: 'jsx-932002598'
    }, 'My Blog'), _react2.default.createElement('ul', {
        className: 'jsx-932002598'
    }, getPosts().map(function (post) {
        return _react2.default.createElement(PostLink, { key: post.id, post: post });
    })), _react2.default.createElement(_style2.default, {
        styleId: '932002598',
        css: ['h1.jsx-932002598{font-family:"Arial";}', 'ul.jsx-932002598{padding:0;list-style:none;}']
    }));
};