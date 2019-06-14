'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/my', 'pages/freeList', 'pages/freeDetail', 'pages/specialCourse', 'pages/openClass', 'pages/coursesDetail', 'pages/ocDetail', 'pages/myCourse'],
      window: {
        'backgroundTextStyle': 'light',
        'navigationBarBackgroundColor': '#fff',
        'navigationBarTitleText': '练歌房',
        'navigationBarTextStyle': 'black'
      },
      tabBar: {
        'selectedColor': '#da3499',
        'backgroundColor': '#fff',
        'borderStyle': 'white',
        'color': '#ababb2',
        list: [{
          'pagePath': 'pages/index',
          'text': '首页',
          'iconPath': 'images/index.png',
          'selectedIconPath': 'images/index_sel.png'
        }, {
          'pagePath': 'pages/my',
          'text': '我的',
          'iconPath': 'images/my.png',
          'selectedIconPath': 'images/my_sel.png'
        }]
      }
    };
    _this.globalData = {
      // 便于管理
      version: '1.0.0',
      appName: 'wepy_demo',
      // 用户信息
      userInfo: null
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch(e) {
      var curPage = e.path.replace('pages/', '');
      console.log('onLaunch\u542F\u52A8\u7EDF\u8BA1, page is ' + curPage);
      this.globalData.userInfo = wx.getStorageSync('USER_INFO') || this.globalData.userInfo;
    }
  }, {
    key: 'more',
    value: function more(e) {
      var id = e.target.dataset.id || e.currentTarget.dataset.id;
      var key = e.target.dataset.key || e.currentTarget.dataset.key;
      if (id) {
        wx.navigateTo({
          url: './' + key + '?id=' + id
        });
      } else {
        wx.navigateTo({
          url: './' + key
        });
      }
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsInRhYkJhciIsImxpc3QiLCJnbG9iYWxEYXRhIiwidmVyc2lvbiIsImFwcE5hbWUiLCJ1c2VySW5mbyIsInVzZSIsImUiLCJjdXJQYWdlIiwicGF0aCIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImlkIiwidGFyZ2V0IiwiZGF0YXNldCIsImN1cnJlbnRUYXJnZXQiLCJrZXkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQW9ERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBakRmQSxNQWlEZSxHQWpETjtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLFVBRkssRUFHTCxnQkFISyxFQUlMLGtCQUpLLEVBS0wscUJBTEssRUFNTCxpQkFOSyxFQU9MLHFCQVBLLEVBUUwsZ0JBUkssRUFTTCxnQkFUSyxDQURBO0FBYVBDLGNBQVE7QUFDTiwrQkFBdUIsT0FEakI7QUFFTix3Q0FBZ0MsTUFGMUI7QUFHTixrQ0FBMEIsS0FIcEI7QUFJTixrQ0FBMEI7QUFKcEIsT0FiRDtBQW1CUEMsY0FBUTtBQUNOLHlCQUFpQixTQURYO0FBRU4sMkJBQW1CLE1BRmI7QUFHTix1QkFBZSxPQUhUO0FBSU4saUJBQVMsU0FKSDtBQUtOQyxjQUFNLENBQ0o7QUFDRSxzQkFBWSxhQURkO0FBRUUsa0JBQVEsSUFGVjtBQUdFLHNCQUFZLGtCQUhkO0FBSUUsOEJBQW9CO0FBSnRCLFNBREksRUFPSjtBQUNFLHNCQUFZLFVBRGQ7QUFFRSxrQkFBUSxJQUZWO0FBR0Usc0JBQVksZUFIZDtBQUlFLDhCQUFvQjtBQUp0QixTQVBJO0FBTEE7QUFuQkQsS0FpRE07QUFBQSxVQVJmQyxVQVFlLEdBUkY7QUFDWDtBQUNBQyxlQUFTLE9BRkU7QUFHWEMsZUFBUyxXQUhFO0FBSVg7QUFDQUMsZ0JBQVU7QUFMQyxLQVFFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFIYTtBQUlkOzs7OzZCQUVTQyxDLEVBQUc7QUFDWCxVQUFJQyxVQUFVRCxFQUFFRSxJQUFGLENBQU9DLE9BQVAsQ0FBZSxRQUFmLEVBQXlCLEVBQXpCLENBQWQ7QUFDQUMsY0FBUUMsR0FBUixnREFBcUNKLE9BQXJDO0FBQ0EsV0FBS04sVUFBTCxDQUFnQkcsUUFBaEIsR0FBMkJRLEdBQUdDLGNBQUgsQ0FBa0IsV0FBbEIsS0FBa0MsS0FBS1osVUFBTCxDQUFnQkcsUUFBN0U7QUFDRDs7O3lCQUVJRSxDLEVBQUc7QUFDTixVQUFJUSxLQUFLUixFQUFFUyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJGLEVBQWpCLElBQXVCUixFQUFFVyxhQUFGLENBQWdCRCxPQUFoQixDQUF3QkYsRUFBeEQ7QUFDQSxVQUFJSSxNQUFNWixFQUFFUyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJFLEdBQWpCLElBQXdCWixFQUFFVyxhQUFGLENBQWdCRCxPQUFoQixDQUF3QkUsR0FBMUQ7QUFDQSxVQUFJSixFQUFKLEVBQVE7QUFDTkYsV0FBR08sVUFBSCxDQUFjO0FBQ1pDLGVBQUssT0FBT0YsR0FBUCxHQUFhLE1BQWIsR0FBc0JKO0FBRGYsU0FBZDtBQUdELE9BSkQsTUFJTztBQUNMRixXQUFHTyxVQUFILENBQWM7QUFDWkMsZUFBSyxPQUFPRjtBQURBLFNBQWQ7QUFHRDtBQUNGOzs7O0VBMUUwQkcsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvbXknLFxuICAgICAgJ3BhZ2VzL2ZyZWVMaXN0JyxcbiAgICAgICdwYWdlcy9mcmVlRGV0YWlsJyxcbiAgICAgICdwYWdlcy9zcGVjaWFsQ291cnNlJyxcbiAgICAgICdwYWdlcy9vcGVuQ2xhc3MnLFxuICAgICAgJ3BhZ2VzL2NvdXJzZXNEZXRhaWwnLFxuICAgICAgJ3BhZ2VzL29jRGV0YWlsJyxcbiAgICAgICdwYWdlcy9teUNvdXJzZScsXG4gICAgICAvLyAncGFnZXMvd2VidmlldydcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgJ2JhY2tncm91bmRUZXh0U3R5bGUnOiAnbGlnaHQnLFxuICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnI2ZmZicsXG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICfnu4PmrYzmiL8nLFxuICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnYmxhY2snXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgICdzZWxlY3RlZENvbG9yJzogJyNkYTM0OTknLFxuICAgICAgJ2JhY2tncm91bmRDb2xvcic6ICcjZmZmJyxcbiAgICAgICdib3JkZXJTdHlsZSc6ICd3aGl0ZScsXG4gICAgICAnY29sb3InOiAnI2FiYWJiMicsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvaW5kZXgnLFxuICAgICAgICAgICd0ZXh0JzogJ+mmlumhtScsXG4gICAgICAgICAgJ2ljb25QYXRoJzogJ2ltYWdlcy9pbmRleC5wbmcnLFxuICAgICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJ2ltYWdlcy9pbmRleF9zZWwucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL215JyxcbiAgICAgICAgICAndGV4dCc6ICfmiJHnmoQnLFxuICAgICAgICAgICdpY29uUGF0aCc6ICdpbWFnZXMvbXkucG5nJyxcbiAgICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICdpbWFnZXMvbXlfc2VsLnBuZydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgLy8g5L6/5LqO566h55CGXG4gICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICBhcHBOYW1lOiAnd2VweV9kZW1vJyxcbiAgICAvLyDnlKjmiLfkv6Hmga9cbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXG4gIH1cblxuICBvbkxhdW5jaCAoZSkge1xuICAgIGxldCBjdXJQYWdlID0gZS5wYXRoLnJlcGxhY2UoJ3BhZ2VzLycsICcnKVxuICAgIGNvbnNvbGUubG9nKGBvbkxhdW5jaOWQr+WKqOe7n+iuoSwgcGFnZSBpcyAke2N1clBhZ2V9YClcbiAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSB3eC5nZXRTdG9yYWdlU3luYygnVVNFUl9JTkZPJykgfHwgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gIH1cblxuICBtb3JlKGUpIHtcbiAgICB2YXIgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkIHx8IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG4gICAgdmFyIGtleSA9IGUudGFyZ2V0LmRhdGFzZXQua2V5IHx8IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmtleVxuICAgIGlmIChpZCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vJyArIGtleSArICc/aWQ9JyArIGlkXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi8nICsga2V5XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19