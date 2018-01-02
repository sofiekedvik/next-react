'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Shows = function Shows(props) {
    return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('h1', null, 'Batman TV Shows'), _react2.default.createElement('ul', null, props.shows.map(function (_ref) {
        var show = _ref.show;
        return _react2.default.createElement('li', { key: show.id }, _react2.default.createElement(_link2.default, { as: '/show/' + show.id, href: '/show?id=' + show.id }, _react2.default.createElement('a', null, show.name)));
    })));
};

Shows.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    data = _context.sent;

                    console.log('Show data fetched. Count: ' + data.length);

                    return _context.abrupt('return', {
                        shows: data
                    });

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Shows;