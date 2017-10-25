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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/albingroen/Gymnasiearbete-17-18-Blog-Coming-soon/pages/posts/post2.js?entry';


var Post2 = function (_React$Component) {
  (0, _inherits3.default)(Post2, _React$Component);

  function Post2() {
    (0, _classCallCheck3.default)(this, Post2);

    return (0, _possibleConstructorReturn3.default)(this, (Post2.__proto__ || (0, _getPrototypeOf2.default)(Post2)).apply(this, arguments));
  }

  (0, _createClass3.default)(Post2, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-4223313349',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4223313349' + ' ' + 'header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement(_link2.default, { href: '/blog', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-4223313349' + ' ' + 'back',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, 'Tillbaka')), _react2.default.createElement('h1', {
        className: 'jsx-4223313349' + ' ' + 'blog-title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, '2. Fr\xE5n start'), _react2.default.createElement('h2', {
        className: 'jsx-4223313349' + ' ' + 'blog-authour',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Av: Albin Groen'), _react2.default.createElement('p', {
        className: 'jsx-4223313349' + ' ' + 'text',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'Vi visste vad vi ville g\xF6ra fr\xE5n f\xF6rsta b\xF6rjan. En hemsida d\xE4r spelare i spelet "League of Legends" skulle skulle kunna s\xF6ka p\xE5 sitt, eller n\xE5gon annans namn och f\xE5 upp statistik om den spelaren. Vi visste att spelets skapare "Riot" hade en API f\xF6r att h\xE4mta data.', _react2.default.createElement('br', {
        className: 'jsx-4223313349',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('br', {
        className: 'jsx-4223313349',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), 'Vi visste dock ingenting egentligen om i vilken \xE4nde man skulle b\xF6rja, eller vad vi skulle anv\xE4nda oss av. Vi var relativt arroganta och t\xE4nkte att vi kunde bygga sidan med vanligt HTML, CSS och JQuery. Det var egentligen de enda vi kunde vid det h\xE4r tillf\xE4llet. Det fungerade f\xF6rst\xE5s inte och vi best\xE4mde oss f\xF6r att g\xF6ra lite research. Snabbt efter att vi hade b\xF6rjat s\xF6ka s\xE5 ins\xE5g vi att man var tvungen att ha en s\xE5 kallad "server".', _react2.default.createElement('br', {
        className: 'jsx-4223313349',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('br', {
        className: 'jsx-4223313349',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), '"Server" var dock ingenting som vi var igenk\xE4nda med och vi blev nog relativt st\xE4llda, och visste inte vart vi skulle b\xF6rja. N\xE5gra veckor in i projektet fick vi h\xF6ra om ett ramverk vid namn', ' ', _react2.default.createElement(_link2.default, { href: 'meteor.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-4223313349' + ' ' + 'meteorLink',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'MeteorJS')), '. Det var ett ramverk som gjorde det enkelt att komma ig\xE5ng med projekt som dessa. Och gjorde det enkelt att binda samman server och klient delen. Vi startdde ig\xE5ng projektet genom att s\xE4tta upp ett "repository" p\xE5 Github f\xF6r att kunna samaarbeta och skicka och h\xE4mta kod fr\xE5n varandra. Vi l\xE4rde oss mycket p\xE5 v\xE4gen d\xE5 vi byggde med MetoerJS och det k\xE4ndes bra. Efter ett tag b\xF6rjade dock sidan ladda extremt l\xE5ngsamt p\xE5 f\xF6rsta laddning. Scrollningen var seg och sidan blev till slut inte anv\xE4ndbar.', _react2.default.createElement('br', {
        className: 'jsx-4223313349',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement('br', {
        className: 'jsx-4223313349',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), 'Detta g\xE4llde endast i Chrome, men vi best\xE4mde oss f\xF6r att byta ramverk. Mer om det i n\xE4sta inl\xE4gg!')), _react2.default.createElement(_style2.default, {
        styleId: '4223313349',
        css: '.content.jsx-4223313349{width:700px;margin:0 auto;text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:100px;}.meteorLink.jsx-4223313349{color:cornflowerblue;}@media screen and (max-width:800px){.content.jsx-4223313349{width:80%;}}.header.jsx-4223313349{width:700px;margin:0 auto;margin-top:50px;}@media screen and (max-width:800px){.header.jsx-4223313349{width:80%;}}.content-wrapper.jsx-4223313349{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.blog-title.jsx-4223313349{font-weight:normal;font-family:\'Roboto\',sans-serif;margin-top:30px;}.title.jsx-4223313349{font-weight:normal;font-size:23px;}.summary.jsx-4223313349{width:100%;opacity:0.5;}.text.jsx-4223313349{opacity:0.75;width:100%;line-height:25px;font-size:17px;}.postContainer.jsx-4223313349{margin-bottom:50px;padding:25px;border:1px dashed rgba(0,0,0,0.3);-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;}.postContainer.jsx-4223313349:hover{border:1px dashed rgba(0,0,0,0.6);-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;}.title.jsx-4223313349,.summary.jsx-4223313349,.date.jsx-4223313349,.blog-authour.jsx-4223313349,.github.jsx-4223313349,.text.jsx-4223313349,.back.jsx-4223313349{font-family:\'Roboto\',sans-serif;}.date.jsx-4223313349{opacity:0.7;}.blog-authour.jsx-4223313349{font-weight:normal;opacity:0.5;}a.jsx-4223313349{text-decoration:none;color:#333;}.slideOver.jsx-4223313349{height:100vh;width:100%;position:fixed;left:100%;-webkit-animation:1.5s slideOver-jsx-4223313349 ease;animation:1.5s slideOver-jsx-4223313349 ease;background:white;z-index:2;}@-webkit-keyframes slideOver-jsx-4223313349{0%{left:100%;}50%{left:50%;width:50%;}100%{left:-100%;width:0%;}}@keyframes slideOver-jsx-4223313349{0%{left:100%;}50%{left:50%;width:50%;}100%{left:-100%;width:0%;}}.fadeIn.jsx-4223313349{opacity:1;-webkit-transition:0.5s ease-out;transition:0.5s ease-out;}.github.jsx-4223313349{color:cornflowerblue;display:block;-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;}.github.jsx-4223313349:hover{color:#3a6dc5;-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;}.gh-ag.jsx-4223313349{margin-bottom:10px;}.back.jsx-4223313349{color:cornflowerblue;display:block;-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;margin-bottom:10px;}.back.jsx-4223313349:hover{color:#3a6dc5;-webkit-transition:0.1s ease-out 0s;transition:0.1s ease-out 0s;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3RzL3Bvc3QyLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEb0IsQUFHeUIsQUFVUyxBQUtULEFBS0EsQUFPQSxBQUtDLEFBT00sQUFNQSxBQUtSLEFBS0UsQUFPTSxBQU9rQixBQVdKLEFBSXJCLEFBSU8sQUFLRSxBQUtSLEFBV0QsQUFHRCxBQUlFLEFBTUgsQUFLVyxBQU1QLEFBS0ssQUFJRSxBQU9QLFNBcENGLENBakdaLEFBWUEsQUFrRkEsQUFheUIsQ0F4RWIsQUFrRUQsQ0FwSEcsQUFvQkEsQUFnRWhCLENBN0JhLEFBMkNBLENBbUNpQixBQWdCQSxLQTlHSyxBQU1sQixBQWlCRixBQTBCRCxBQXlCWixBQXlCRixDQXJCRSxDQTNHRixBQW1GYSxBQWtDRyxBQWVBLEVBM0ZoQixDQUttQixBQTJDRixFQWxHQyxBQW9CQSxLQW9FbEIsQ0ExQnVDLEFBaUJ2QyxBQWNBLEVBaERBLEFBdUI4QixDQTJEQSxBQWVBLElBM0NsQixFQTNDSyxDQXZERixBQW9CZixPQStFZ0MsRUE3RGQsS0FrQmxCLFVBTThCLENBdkI5QixDQWtGQSxNQTNGeUIsSUFzR3pCLEFBZ0JBLG9CQWhGQSxDQTJEQSxBQWVxQixpQkE3SUksRUE4SXpCLFlBaEZBLGlCQXFDbUIsaUJBQ1AsU0F0RVMsQ0F1RXJCLHlDQXBHd0IsbURBOEJBLDJCQTdCTCxpQkFDbkIsa0NBNkJBIiwiZmlsZSI6InBhZ2VzL3Bvc3RzL3Bvc3QyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGJpbmdyb2VuL0d5bW5hc2llYXJiZXRlLTE3LTE4LUJsb2ctQ29taW5nLXNvb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3QyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmFja1wiPlRpbGxiYWthPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYmxvZy10aXRsZVwiPjIuIEZyw6VuIHN0YXJ0PC9oMT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmxvZy1hdXRob3VyXCI+QXY6IEFsYmluIEdyb2VuPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICBWaSB2aXNzdGUgdmFkIHZpIHZpbGxlIGfDtnJhIGZyw6VuIGbDtnJzdGEgYsO2cmphbi4gRW4gaGVtc2lkYSBkw6RyXG4gICAgICAgICAgICBzcGVsYXJlIGkgc3BlbGV0IFwiTGVhZ3VlIG9mIExlZ2VuZHNcIiBza3VsbGUgc2t1bGxlIGt1bm5hIHPDtmthIHDDpVxuICAgICAgICAgICAgc2l0dCwgZWxsZXIgbsOlZ29uIGFubmFucyBuYW1uIG9jaCBmw6UgdXBwIHN0YXRpc3RpayBvbSBkZW4gc3BlbGFyZW4uXG4gICAgICAgICAgICBWaSB2aXNzdGUgYXR0IHNwZWxldHMgc2thcGFyZSBcIlJpb3RcIiBoYWRlIGVuIEFQSSBmw7ZyIGF0dCBow6RtdGEgZGF0YS5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBWaSB2aXNzdGUgZG9jayBpbmdlbnRpbmcgZWdlbnRsaWdlbiBvbSBpIHZpbGtlbiDDpG5kZSBtYW4gc2t1bGxlXG4gICAgICAgICAgICBiw7ZyamEsIGVsbGVyIHZhZCB2aSBza3VsbGUgYW52w6RuZGEgb3NzIGF2LiBWaSB2YXIgcmVsYXRpdnQgYXJyb2dhbnRhXG4gICAgICAgICAgICBvY2ggdMOkbmt0ZSBhdHQgdmkga3VuZGUgYnlnZ2Egc2lkYW4gbWVkIHZhbmxpZ3QgSFRNTCwgQ1NTIG9jaFxuICAgICAgICAgICAgSlF1ZXJ5LiBEZXQgdmFyIGVnZW50bGlnZW4gZGUgZW5kYSB2aSBrdW5kZSB2aWQgZGV0IGjDpHIgdGlsbGbDpGxsZXQuXG4gICAgICAgICAgICBEZXQgZnVuZ2VyYWRlIGbDtnJzdMOlcyBpbnRlIG9jaCB2aSBiZXN0w6RtZGUgb3NzIGbDtnIgYXR0IGfDtnJhIGxpdGVcbiAgICAgICAgICAgIHJlc2VhcmNoLiBTbmFiYnQgZWZ0ZXIgYXR0IHZpIGhhZGUgYsO2cmphdCBzw7ZrYSBzw6UgaW5zw6VnIHZpIGF0dCBtYW5cbiAgICAgICAgICAgIHZhciB0dnVuZ2VuIGF0dCBoYSBlbiBzw6Uga2FsbGFkIFwic2VydmVyXCIuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgXCJTZXJ2ZXJcIiB2YXIgZG9jayBpbmdlbnRpbmcgc29tIHZpIHZhciBpZ2Vua8OkbmRhIG1lZCBvY2ggdmkgYmxldiBub2dcbiAgICAgICAgICAgIHJlbGF0aXZ0IHN0w6RsbGRhLCBvY2ggdmlzc3RlIGludGUgdmFydCB2aSBza3VsbGUgYsO2cmphLiBOw6VncmEgdmVja29yXG4gICAgICAgICAgICBpbiBpIHByb2pla3RldCBmaWNrIHZpIGjDtnJhIG9tIGV0dCByYW12ZXJrIHZpZCBuYW1ueycgJ31cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJtZXRlb3IuY29tXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1ldGVvckxpbmtcIj5NZXRlb3JKUzwvYT5cbiAgICAgICAgICAgIDwvTGluaz4uIERldCB2YXIgZXR0IHJhbXZlcmsgc29tIGdqb3JkZSBkZXQgZW5rZWx0IGF0dCBrb21tYSBpZ8OlbmdcbiAgICAgICAgICAgIG1lZCBwcm9qZWt0IHNvbSBkZXNzYS4gT2NoIGdqb3JkZSBkZXQgZW5rZWx0IGF0dCBiaW5kYSBzYW1tYW4gc2VydmVyXG4gICAgICAgICAgICBvY2gga2xpZW50IGRlbGVuLiBWaSBzdGFydGRkZSBpZ8OlbmcgcHJvamVrdGV0IGdlbm9tIGF0dCBzw6R0dGEgdXBwXG4gICAgICAgICAgICBldHQgXCJyZXBvc2l0b3J5XCIgcMOlIEdpdGh1YiBmw7ZyIGF0dCBrdW5uYSBzYW1hYXJiZXRhIG9jaCBza2lja2Egb2NoXG4gICAgICAgICAgICBow6RtdGEga29kIGZyw6VuIHZhcmFuZHJhLiBWaSBsw6RyZGUgb3NzIG15Y2tldCBww6UgdsOkZ2VuIGTDpSB2aSBieWdnZGVcbiAgICAgICAgICAgIG1lZCBNZXRvZXJKUyBvY2ggZGV0IGvDpG5kZXMgYnJhLiBFZnRlciBldHQgdGFnIGLDtnJqYWRlIGRvY2sgc2lkYW5cbiAgICAgICAgICAgIGxhZGRhIGV4dHJlbXQgbMOlbmdzYW10IHDDpSBmw7Zyc3RhIGxhZGRuaW5nLiBTY3JvbGxuaW5nZW4gdmFyIHNlZyBvY2hcbiAgICAgICAgICAgIHNpZGFuIGJsZXYgdGlsbCBzbHV0IGludGUgYW52w6RuZGJhci5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBEZXR0YSBnw6RsbGRlIGVuZGFzdCBpIENocm9tZSwgbWVuIHZpIGJlc3TDpG1kZSBvc3MgZsO2ciBhdHQgYnl0YVxuICAgICAgICAgICAgcmFtdmVyay4gTWVyIG9tIGRldCBpIG7DpHN0YSBpbmzDpGdnIVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1ldGVvckxpbmsge1xuICAgICAgICAgICAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsb2ctdGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN1bW1hcnkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3RDb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dCAwcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdENvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dCAwcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUsXG4gICAgICAgICAgLnN1bW1hcnksXG4gICAgICAgICAgLmRhdGUsXG4gICAgICAgICAgLmJsb2ctYXV0aG91cixcbiAgICAgICAgICAuZ2l0aHViLFxuICAgICAgICAgIC50ZXh0LFxuICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsb2ctYXV0aG91ciB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNsaWRlT3ZlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiAxLjVzIHNsaWRlT3ZlciBlYXNlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGVPdmVyIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBsZWZ0OiAtMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYWRlSW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmdpdGh1YiB7XG4gICAgICAgICAgICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQgMHM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmdpdGh1Yjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzNhNmRjNTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQgMHM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmdoLWFnIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJhY2sge1xuICAgICAgICAgICAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0IDBzO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmFjazpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzNhNmRjNTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQgMHM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyojIHNvdXJjZU1hcHBpbmdVUkw9IGJsb2cuY3NzLm1hcCAqL1xuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/posts/post2.js?entry */'
      }));
    }
  }]);

  return Post2;
}(_react2.default.Component);

exports.default = Post2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3RzL3Bvc3QyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlBvc3QyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0ksQUFFYzs7Ozs7Ozs7Ozs7NkJBQ1YsQUFDUDs2QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7NENBQUEsQUFBYTs7b0JBQWI7c0JBQUE7QUFBQTtBQUFBLFNBRkosQUFDRSxBQUNFLEFBRUYsOEJBQUEsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0EscUNBQUEsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FMRixBQUtFLEFBQ0Esb0NBQUEsY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FLRTttQkFBQTs7b0JBQUE7c0JBTEYsQUFLRSxBQUNBO0FBREE7QUFBQTttQkFDQTs7b0JBQUE7c0JBTkYsQUFNRTtBQUFBO0FBQUEsVUFRQTttQkFBQTs7b0JBQUE7c0JBZEYsQUFjRSxBQUNBO0FBREE7QUFBQTttQkFDQTs7b0JBQUE7c0JBZkYsQUFlRTtBQUFBO0FBQUEsVUFHb0QsZ05BbEJ0RCxBQW1CRSxxQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FwQkosQUFtQkUsQUFDRSxjQVNGO21CQUFBOztvQkFBQTtzQkE3QkYsQUE2QkUsQUFDQTtBQURBO0FBQUE7bUJBQ0E7O29CQUFBO3NCQTlCRixBQThCRTtBQUFBO0FBQUEsVUFyQ04sQUFDRSxBQU1FO2lCQVBKO2FBREYsQUFDRSxBQXlNSDtBQXpNRzs7Ozs7RUFINkIsZ0JBQU0sQTs7a0JBQXBCLEEiLCJmaWxlIjoicG9zdDIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtQmxvZy1Db21pbmctc29vbiJ9