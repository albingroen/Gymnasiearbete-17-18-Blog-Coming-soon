'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _back = require('../comps/back.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/albingroen/Gymnasiearbete-17-18-Blog-Coming-soon/pages/blog.js?entry';


var Blog = function (_React$Component) {
  (0, _inherits3.default)(Blog, _React$Component);

  function Blog() {
    (0, _classCallCheck3.default)(this, Blog);

    return (0, _possibleConstructorReturn3.default)(this, (Blog.__proto__ || (0, _getPrototypeOf2.default)(Blog)).apply(this, arguments));
  }

  (0, _createClass3.default)(Blog, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-3396746119',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3396746119' + ' ' + 'header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_back.Back, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement('h1', {
        className: 'jsx-3396746119' + ' ' + 'blog-title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, 'Gymnasiearbetet-2017-2018'), _react2.default.createElement('h2', {
        className: 'jsx-3396746119' + ' ' + 'blog-authour',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, 'Albin Groen & Albin Iivari'), _react2.default.createElement(_link2.default, { href: 'https://github.com/albingroen', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-3396746119' + ' ' + 'github gh-ag',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'Github - Albin Groen')), _react2.default.createElement(_link2.default, { href: 'https://github.com/fearme99', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-3396746119' + ' ' + 'github gh-ai',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'Github - Albin Iivari'))), _react2.default.createElement('div', {
        className: 'jsx-3396746119' + ' ' + 'content-wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3396746119' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_link2.default, { href: 'posts/post2', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-3396746119',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3396746119' + ' ' + 'postContainer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-3396746119' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, '2. Fr\xE5n start.'), _react2.default.createElement('h4', {
        className: 'jsx-3396746119' + ' ' + 'date',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, '2017-10-25'), _react2.default.createElement('p', {
        className: 'jsx-3396746119' + ' ' + 'summary',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Vi visste vad vi ville g\xF6ra fr\xE5n f\xF6rsta b\xF6rjan. En hemsida d\xE4r spelare i spelet "League of Legends" skulle skulle kunna s\xF6ka p\xE5 sitt, eller n\xE5gon annans namn och f\xE5 upp statistik om den spelaren. Vi visste att spelets skapare "Riot" hade en API f\xF6r att h\xE4mta data.')))), _react2.default.createElement(_link2.default, { href: 'posts/post1', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-3396746119',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3396746119' + ' ' + 'postContainer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-3396746119' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, '1. V\xE5rt f\xF6rsta inl\xE4gg'), _react2.default.createElement('h4', {
        className: 'jsx-3396746119' + ' ' + 'date',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, '2017-10-23'), _react2.default.createElement('p', {
        className: 'jsx-3396746119' + ' ' + 'summary',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'V\xE4lkommen till v\xE5r blogg! Vi f\xE5r lov att urs\xE4kta att det har dragit ut p\xE5 tiden, d\xE5 vi inte lyckades komma ig\xE5ng med n\xE5got blogg-verktyg speciellt bra och ist\xE4llet best\xE4mde oss f\xF6r att bygga v\xE5rt eget. Det tog inte speciellt l\xE5ng tid att bygga den h\xE4r bloggen, och \xE4r ingenting som vi har lagt mycket krut p\xE5...')))))), _react2.default.createElement(_style2.default, {
        styleId: '3396746119',
        css: '.content{width:700px;margin:0 auto;text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:100px;}@media screen and (max-width:800px){.content{width:80%;}}.header{width:700px;margin:0 auto;margin-top:50px;}@media screen and (max-width:800px){.header{width:80%;}}.content-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.blog-title{font-weight:normal;font-family:\'Roboto\',sans-serif;margin-top:30px;}.title{font-weight:normal;font-size:23px;}.summary{width:100%;opacity:0.5;}.text{opacity:0.75;width:100%;line-height:25px;font-size:17px;}.postContainer{padding:25px;-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;-webkit-box-shadow:0px 20px 54px -4px rgba(0,0,0,0.05);-moz-box-shadow:0px 20px 54px -4px rgba(0,0,0,0.05);box-shadow:0px 20px 54px -4px rgba(0,0,0,0.05);border-radius:5px;background:white;margin-bottom:50px;}.postContainer:hover{-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;-webkit-box-shadow:0px 30px 54px -4px rgba(0,0,0,0.1);-moz-box-shadow:0px 30px 54px -4px rgba(0,0,0,0.1);box-shadow:0px 30px 54px -4px rgba(0,0,0,0.1);}.title,.summary,.date,.blog-authour,.github,.text{font-family:\'Roboto\',sans-serif;}.date{opacity:0.7;}.blog-authour{font-weight:normal;opacity:0.5;}a{text-decoration:none;color:#333;}.slideOver{height:100vh;width:100%;position:fixed;left:100%;-webkit-animation:1.5s slideOver ease;animation:1.5s slideOver ease;background:white;z-index:2;}@-webkit-keyframes slideOver{0%{left:100%;}50%{left:50%;width:50%;}100%{left:-100%;width:0%;}}@keyframes slideOver{0%{left:100%;}50%{left:50%;width:50%;}100%{left:-100%;width:0%;}}.fadeIn{opacity:1;-webkit-transition:0.5s ease-out;transition:0.5s ease-out;}.github{color:cornflowerblue;display:block;-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;}.github:hover{color:#3a6dc5;-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;}.gh-ag{margin-bottom:10px;}.back:hover{color:#3a6dc5;-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0QyQixBQUd5QixBQVdBLEFBS0EsQUFPQSxBQUtDLEFBT00sQUFNQSxBQUtSLEFBS0UsQUFPQSxBQVdlLEFBWUssQUFJckIsQUFJTyxBQUtFLEFBS1IsQUFXRCxBQUdELEFBSUUsQUFNSCxBQUtXLEFBTVAsQUFLSyxBQUlMLFNBN0JGLENBdEdaLEFBWUEsQUF1RkEsQUFheUIsQ0E3RWIsQUF1RUQsQ0FySEcsQUFnQkEsQUFxRWhCLENBbENhLEFBT2lCLEFBeUNqQixDQW1DaUIsQUFTQSxLQTVHSyxBQU1sQixBQWdESCxBQXlCWixBQXlCRixDQXJCRSxDQXhCVyxBQWtDRyxFQWpGaEIsQ0FLbUIsQUFnREYsRUFuR0MsQUFnQkEsS0F5RWxCLENBVEEsQUFjQSxFQXJEQSxDQXVGOEIsSUE1QmxCLEVBaERLLENBbkRGLEFBZ0JmLE9Bb0ZnQyxFQWxFZCxLQWtCbEIsUUFlMkQsR0FoQzNELENBdUZBLE1BaEd5QixHQStCbUMsQ0E0RTVELEFBU0EscUJBZEEsaUJBL0h5QixDQW9HTixDQWpDcUMsY0FWQyxFQTRDN0MsVUFDWix5QkFsQ21ELElBMUM5QixXQWdDK0IsK0JBekQ1QixBQW9FeEIsZ0JBVm9CLGtCQUNELGlCQWpDSyxBQWtDSCxtQkFDckIsUUE1RG1CLGlCQUNuQixrQ0F5QkEiLCJmaWxlIjoicGFnZXMvYmxvZy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxiaW5ncm9lbi9HeW1uYXNpZWFyYmV0ZS0xNy0xOC1CbG9nLUNvbWluZy1zb29uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQmFjayB9IGZyb20gJy4uL2NvbXBzL2JhY2suanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPEJhY2sgLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYmxvZy10aXRsZVwiPkd5bW5hc2llYXJiZXRldC0yMDE3LTIwMTg8L2gxPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJibG9nLWF1dGhvdXJcIj5BbGJpbiBHcm9lbiAmIEFsYmluIElpdmFyaTwvaDI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbGJpbmdyb2VuXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJnaXRodWIgZ2gtYWdcIj5HaXRodWIgLSBBbGJpbiBHcm9lbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9mZWFybWU5OVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ2l0aHViIGdoLWFpXCI+R2l0aHViIC0gQWxiaW4gSWl2YXJpPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwicG9zdHMvcG9zdDJcIj5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj4yLiBGcsOlbiBzdGFydC48L2gxPlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImRhdGVcIj4yMDE3LTEwLTI1PC9oND5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgVmkgdmlzc3RlIHZhZCB2aSB2aWxsZSBnw7ZyYSBmcsOlbiBmw7Zyc3RhIGLDtnJqYW4uIEVuIGhlbXNpZGFcbiAgICAgICAgICAgICAgICAgICAgZMOkciBzcGVsYXJlIGkgc3BlbGV0IFwiTGVhZ3VlIG9mIExlZ2VuZHNcIiBza3VsbGUgc2t1bGxlIGt1bm5hXG4gICAgICAgICAgICAgICAgICAgIHPDtmthIHDDpSBzaXR0LCBlbGxlciBuw6Vnb24gYW5uYW5zIG5hbW4gb2NoIGbDpSB1cHAgc3RhdGlzdGlrXG4gICAgICAgICAgICAgICAgICAgIG9tIGRlbiBzcGVsYXJlbi4gVmkgdmlzc3RlIGF0dCBzcGVsZXRzIHNrYXBhcmUgXCJSaW90XCIgaGFkZVxuICAgICAgICAgICAgICAgICAgICBlbiBBUEkgZsO2ciBhdHQgaMOkbXRhIGRhdGEuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJwb3N0cy9wb3N0MVwiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPjEuIFbDpXJ0IGbDtnJzdGEgaW5sw6RnZzwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGF0ZVwiPjIwMTctMTAtMjM8L2g0PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBWw6Rsa29tbWVuIHRpbGwgdsOlciBibG9nZyEgVmkgZsOlciBsb3YgYXR0IHVyc8Oka3RhIGF0dCBkZXQgaGFyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdpdCB1dCBww6UgdGlkZW4sIGTDpSB2aSBpbnRlIGx5Y2thZGVzIGtvbW1hIGlnw6VuZyBtZWRcbiAgICAgICAgICAgICAgICAgICAgbsOlZ290IGJsb2dnLXZlcmt0eWcgc3BlY2llbGx0IGJyYSBvY2ggaXN0w6RsbGV0IGJlc3TDpG1kZSBvc3NcbiAgICAgICAgICAgICAgICAgICAgZsO2ciBhdHQgYnlnZ2EgdsOlcnQgZWdldC4gRGV0IHRvZyBpbnRlIHNwZWNpZWxsdCBsw6VuZyB0aWQgYXR0XG4gICAgICAgICAgICAgICAgICAgIGJ5Z2dhIGRlbiBow6RyIGJsb2dnZW4sIG9jaCDDpHIgaW5nZW50aW5nIHNvbSB2aSBoYXIgbGFndFxuICAgICAgICAgICAgICAgICAgICBteWNrZXQga3J1dCBww6UuLi5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmxvZy10aXRsZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VtbWFyeSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdENvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dCAwcztcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDIwcHggNTRweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAyMHB4IDU0cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDIwcHggNTRweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3RDb250YWluZXI6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dCAwcztcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDMwcHggNTRweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDMwcHggNTRweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzMHB4IDU0cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlLFxuICAgICAgICAgIC5zdW1tYXJ5LFxuICAgICAgICAgIC5kYXRlLFxuICAgICAgICAgIC5ibG9nLWF1dGhvdXIsXG4gICAgICAgICAgLmdpdGh1YixcbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibG9nLWF1dGhvdXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zbGlkZU92ZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMS41cyBzbGlkZU92ZXIgZWFzZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlT3ZlciB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmFkZUluIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5naXRodWIge1xuICAgICAgICAgICAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0IDBzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5naXRodWI6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICMzYTZkYzU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0IDBzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5naC1hZyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5iYWNrOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjM2E2ZGM1O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dCAwcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiMgc291cmNlTWFwcGluZ1VSTD0gYmxvZy5jc3MubWFwICovXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/blog.js?entry */'
      }));
    }
  }]);

  return Blog;
}(_react2.default.Component);

exports.default = Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQmFjayIsIkJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFZOzs7Ozs7O0lBRUEsQTs7Ozs7Ozs7Ozs7NkJBQ1YsQUFDUDs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSw4Q0FBQSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSwrQ0FBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FMSixBQUlFLEFBQ0UsQUFFRiwwQ0FBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FUTixBQUNFLEFBT0UsQUFDRSxBQUdKLDRDQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxzQ0FBQSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSwrQkFBQSxjQUFBOzRDQUFBLEFBQWE7O29CQUFiO3NCQUFBO0FBQUE7QUFBQSxTQU5SLEFBQ0UsQUFDRSxBQUNFLEFBR0UsQUFVTixpVUFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtREFBQSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSwrQkFBQSxjQUFBOzRDQUFBLEFBQWE7O29CQUFiO3NCQUFBO0FBQUE7QUFBQSxTQWxDWixBQVlFLEFBQ0UsQUFnQkUsQUFDRSxBQUNFLEFBR0U7aUJBbENaO2FBREYsQUFDRSxBQXdNSDtBQXhNRzs7Ozs7RUFINEIsZ0JBQU0sQTs7a0JBQW5CLEEiLCJmaWxlIjoiYmxvZy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxiaW5ncm9lbi9HeW1uYXNpZWFyYmV0ZS0xNy0xOC1CbG9nLUNvbWluZy1zb29uIn0=