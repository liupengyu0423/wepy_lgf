'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _interface = require('./../libs/interface.js');

var _utils = require('./../libs/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var famous = require('./../libs/famous.js');

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
      offset: (0, _utils.getDays)() - 5,
      famous: famous,
      listData: [],
      list: [],
      showLen: 1,
      loadingShow: false
    }, _this.config = {
      navigationBarTitleText: '公开课'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      wx.reportAnalytics('open_page', {
        url: 'pages/openClass/openClass'
      });
      this.getList();
    }
  }, {
    key: 'getList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var list, listData, data, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _interface.Http.post({
                  url: _interface.Apis.url + _interface.Apis.lesson,
                  data: {
                    openid: wx.getStorageSync('openID'),
                    page: -1,
                    offset: this.data.offset,
                    size: 12,
                    tp: 0
                  }
                });

              case 2:
                list = _context.sent;
                listData = this.list;
                data = list.data.reverse();

                for (i in data) {
                  listData.push(data[i]);
                }
                this.list = listData;
                this.listData = (0, _utils.courseList)(listData, this.days);
                this.$apply();
                wx.hideLoading();

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getList() {
        return _ref2.apply(this, arguments);
      }

      return getList;
    }()
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      if (!this.loadingShow) {
        this.showLen = ++this.data.showLen;
        this.days = --this.data.days;
        this.offset = this.data.offset - 6;
        this.$apply();
        this.getList();
        if (wx.showLoading) {
          wx.showLoading({
            title: '加载中'
          });
        }
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/openClass'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW5DbGFzcy5qcyJdLCJuYW1lcyI6WyJmYW1vdXMiLCJyZXF1aXJlIiwiSW5kZXgiLCJkYXRhIiwib2Zmc2V0IiwibGlzdERhdGEiLCJsaXN0Iiwic2hvd0xlbiIsImxvYWRpbmdTaG93IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInd4IiwicmVwb3J0QW5hbHl0aWNzIiwidXJsIiwiZ2V0TGlzdCIsIkh0dHAiLCJwb3N0IiwiQXBpcyIsImxlc3NvbiIsIm9wZW5pZCIsImdldFN0b3JhZ2VTeW5jIiwicGFnZSIsInNpemUiLCJ0cCIsInJldmVyc2UiLCJpIiwicHVzaCIsImRheXMiLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOztBQUlBOzs7Ozs7Ozs7Ozs7QUFOQSxJQUFNQSxTQUFTQyxRQUFRLG1CQUFSLENBQWY7O0lBT3FCQyxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEksR0FBTztBQUNMQyxjQUFRLHdCQUFZLENBRGY7QUFFTEosY0FBUUEsTUFGSDtBQUdMSyxnQkFBVSxFQUhMO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxlQUFTLENBTEo7QUFNTEMsbUJBQWE7QUFOUixLLFFBUVBDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSzs7Ozs7NkJBR0E7QUFDUEMsU0FBR0MsZUFBSCxDQUFtQixXQUFuQixFQUFnQztBQUM5QkMsYUFBSztBQUR5QixPQUFoQztBQUdBLFdBQUtDLE9BQUw7QUFDRDs7Ozs7Ozs7Ozs7dUJBRWtCQyxnQkFBS0MsSUFBTCxDQUFVO0FBQ3pCSCx1QkFBS0ksZ0JBQUtKLEdBQUwsR0FBV0ksZ0JBQUtDLE1BREk7QUFFekJmLHdCQUFNO0FBQ0pnQiw0QkFBUVIsR0FBR1MsY0FBSCxDQUFrQixRQUFsQixDQURKO0FBRUpDLDBCQUFNLENBQUMsQ0FGSDtBQUdKakIsNEJBQVEsS0FBS0QsSUFBTCxDQUFVQyxNQUhkO0FBSUprQiwwQkFBTSxFQUpGO0FBS0pDLHdCQUFJO0FBTEE7QUFGbUIsaUJBQVYsQzs7O0FBQWJqQixvQjtBQVVBRCx3QixHQUFXLEtBQUtDLEk7QUFDaEJILG9CLEdBQU9HLEtBQUtILElBQUwsQ0FBVXFCLE9BQVYsRTs7QUFDWCxxQkFBU0MsQ0FBVCxJQUFjdEIsSUFBZCxFQUFvQjtBQUNsQkUsMkJBQVNxQixJQUFULENBQWN2QixLQUFLc0IsQ0FBTCxDQUFkO0FBQ0Q7QUFDRCxxQkFBS25CLElBQUwsR0FBWUQsUUFBWjtBQUNBLHFCQUFLQSxRQUFMLEdBQWdCLHVCQUFXQSxRQUFYLEVBQXFCLEtBQUtzQixJQUExQixDQUFoQjtBQUNBLHFCQUFLQyxNQUFMO0FBQ0FqQixtQkFBR2tCLFdBQUg7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FFYztBQUNkLFVBQUksQ0FBQyxLQUFLckIsV0FBVixFQUF1QjtBQUNyQixhQUFLRCxPQUFMLEdBQWUsRUFBRSxLQUFLSixJQUFMLENBQVVJLE9BQTNCO0FBQ0EsYUFBS29CLElBQUwsR0FBWSxFQUFFLEtBQUt4QixJQUFMLENBQVV3QixJQUF4QjtBQUNBLGFBQUt2QixNQUFMLEdBQWMsS0FBS0QsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLENBQWpDO0FBQ0EsYUFBS3dCLE1BQUw7QUFDQSxhQUFLZCxPQUFMO0FBQ0EsWUFBSUgsR0FBR21CLFdBQVAsRUFBb0I7QUFDbEJuQixhQUFHbUIsV0FBSCxDQUFlO0FBQ2JDLG1CQUFPO0FBRE0sV0FBZjtBQUdEO0FBQ0Y7QUFDRjs7OztFQXBEZ0NDLGVBQUtYLEk7O2tCQUFuQm5CLEsiLCJmaWxlIjoib3BlbkNsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBmYW1vdXMgPSByZXF1aXJlKCcuLi9saWJzL2ZhbW91cy5qcycpXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHtcbiAgQXBpcyxcbiAgSHR0cFxufSBmcm9tICdsaWJzL2ludGVyZmFjZSdcbmltcG9ydCB7IGdldERheXMsIGZha2VDb3VudCwgY291cnNlTGlzdCB9IGZyb20gJy4uL2xpYnMvdXRpbHMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgb2Zmc2V0OiBnZXREYXlzKCkgLSA1LFxuICAgIGZhbW91czogZmFtb3VzLFxuICAgIGxpc3REYXRhOiBbXSxcbiAgICBsaXN0OiBbXSxcbiAgICBzaG93TGVuOiAxLFxuICAgIGxvYWRpbmdTaG93OiBmYWxzZVxuICB9XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YWs5byA6K++J1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ29wZW5fcGFnZScsIHtcbiAgICAgIHVybDogJ3BhZ2VzL29wZW5DbGFzcy9vcGVuQ2xhc3MnXG4gICAgfSlcbiAgICB0aGlzLmdldExpc3QoKVxuICB9XG4gIGFzeW5jIGdldExpc3QgKCkge1xuICAgIGxldCBsaXN0ID0gYXdhaXQgSHR0cC5wb3N0KHtcbiAgICAgIHVybDogQXBpcy51cmwgKyBBcGlzLmxlc3NvbixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgb3BlbmlkOiB3eC5nZXRTdG9yYWdlU3luYygnb3BlbklEJyksXG4gICAgICAgIHBhZ2U6IC0xLFxuICAgICAgICBvZmZzZXQ6IHRoaXMuZGF0YS5vZmZzZXQsXG4gICAgICAgIHNpemU6IDEyLFxuICAgICAgICB0cDogMFxuICAgICAgfVxuICAgIH0pXG4gICAgbGV0IGxpc3REYXRhID0gdGhpcy5saXN0XG4gICAgbGV0IGRhdGEgPSBsaXN0LmRhdGEucmV2ZXJzZSgpXG4gICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICBsaXN0RGF0YS5wdXNoKGRhdGFbaV0pXG4gICAgfVxuICAgIHRoaXMubGlzdCA9IGxpc3REYXRhXG4gICAgdGhpcy5saXN0RGF0YSA9IGNvdXJzZUxpc3QobGlzdERhdGEsIHRoaXMuZGF5cylcbiAgICB0aGlzLiRhcHBseSgpXG4gICAgd3guaGlkZUxvYWRpbmcoKVxuICB9XG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgaWYgKCF0aGlzLmxvYWRpbmdTaG93KSB7XG4gICAgICB0aGlzLnNob3dMZW4gPSArK3RoaXMuZGF0YS5zaG93TGVuXG4gICAgICB0aGlzLmRheXMgPSAtLXRoaXMuZGF0YS5kYXlzXG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMuZGF0YS5vZmZzZXQgLSA2XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB0aGlzLmdldExpc3QoKVxuICAgICAgaWYgKHd4LnNob3dMb2FkaW5nKSB7XG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==