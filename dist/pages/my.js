'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      userInfo: null
    }, _this.config = {
      'navigationBarTitleText': '我的'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      wx.reportAnalytics('open_page', {
        url: 'pages/my/my'
      });
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      var _this2 = this;

      wx.getUserInfo({
        success: function success(res) {
          _this2.userInfo = res.userInfo;
          _this2.$apply();
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsInVzZXJJbmZvIiwiY29uZmlnIiwid3giLCJyZXBvcnRBbmFseXRpY3MiLCJ1cmwiLCJ1cGRhdGUiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFETCxLLFFBR1BDLE0sR0FBUztBQUNQLGdDQUEwQjtBQURuQixLOzs7Ozs2QkFHQTtBQUNQQyxTQUFHQyxlQUFILENBQW1CLFdBQW5CLEVBQWdDO0FBQzlCQyxhQUFLO0FBRHlCLE9BQWhDO0FBR0EsV0FBS0MsTUFBTDtBQUNEOzs7NkJBQ1M7QUFBQTs7QUFDUkgsU0FBR0ksV0FBSCxDQUFlO0FBQ2JDLGlCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEIsaUJBQUtSLFFBQUwsR0FBZ0JRLElBQUlSLFFBQXBCO0FBQ0EsaUJBQUtTLE1BQUw7QUFDRDtBQUpZLE9BQWY7QUFNRDs7OztFQXBCZ0NDLGVBQUtDLEk7O2tCQUFuQmIsSyIsImZpbGUiOiJteS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgZGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG4gIGNvbmZpZyA9IHtcbiAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICfmiJHnmoQnXG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHd4LnJlcG9ydEFuYWx5dGljcygnb3Blbl9wYWdlJywge1xuICAgICAgdXJsOiAncGFnZXMvbXkvbXknXG4gICAgfSlcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cbiAgdXBkYXRlICgpIHtcbiAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIHRoaXMudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==