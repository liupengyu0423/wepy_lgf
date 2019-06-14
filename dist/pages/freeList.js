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
      freeData: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      wx.reportAnalytics('open_page', {
        url: 'pages/freeList/freeList'
      });
      this.getFree();
    }
  }, {
    key: 'getFree',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data, obj, i, date;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _interface.Http.post({
                  url: _interface.Apis.url + _interface.Apis.lesson,
                  data: {
                    openid: wx.getStorageSync('openID'),
                    page: 1,
                    size: 5,
                    tp: 1
                  }
                });

              case 2:
                data = _context.sent;
                obj = [];

                for (i in data.data) {
                  obj[i] = data[i];
                  if (data[i].start && data[i].end) {
                    date = data[i].start.replace(/-/g, '.') + '-' + data[i].end.slice(5).replace(/-/g, '.');

                    obj[i].date = date;
                  }
                }
                this.freeData = (0, _utils.checkNew)(obj);
                this.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getFree() {
        return _ref2.apply(this, arguments);
      }

      return getFree;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/freeList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyZWVMaXN0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImZyZWVEYXRhIiwid3giLCJyZXBvcnRBbmFseXRpY3MiLCJ1cmwiLCJnZXRGcmVlIiwiSHR0cCIsInBvc3QiLCJBcGlzIiwibGVzc29uIiwib3BlbmlkIiwiZ2V0U3RvcmFnZVN5bmMiLCJwYWdlIiwic2l6ZSIsInRwIiwib2JqIiwiaSIsInN0YXJ0IiwiZW5kIiwiZGF0ZSIsInJlcGxhY2UiLCJzbGljZSIsIiRhcHBseSIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFETCxLOzs7Ozs2QkFHRTtBQUNQQyxTQUFHQyxlQUFILENBQW1CLFdBQW5CLEVBQWdDO0FBQzlCQyxhQUFLO0FBRHlCLE9BQWhDO0FBR0EsV0FBS0MsT0FBTDtBQUNEOzs7Ozs7Ozs7Ozt1QkFFa0JDLGdCQUFLQyxJQUFMLENBQVU7QUFDekJILHVCQUFLSSxnQkFBS0osR0FBTCxHQUFXSSxnQkFBS0MsTUFESTtBQUV6QlQsd0JBQU07QUFDSlUsNEJBQVFSLEdBQUdTLGNBQUgsQ0FBa0IsUUFBbEIsQ0FESjtBQUVKQywwQkFBTSxDQUZGO0FBR0pDLDBCQUFNLENBSEY7QUFJSkMsd0JBQUk7QUFKQTtBQUZtQixpQkFBVixDOzs7QUFBYmQsb0I7QUFTQWUsbUIsR0FBTSxFOztBQUNWLHFCQUFTQyxDQUFULElBQWNoQixLQUFLQSxJQUFuQixFQUF5QjtBQUN2QmUsc0JBQUlDLENBQUosSUFBU2hCLEtBQUtnQixDQUFMLENBQVQ7QUFDQSxzQkFBSWhCLEtBQUtnQixDQUFMLEVBQVFDLEtBQVIsSUFBaUJqQixLQUFLZ0IsQ0FBTCxFQUFRRSxHQUE3QixFQUFrQztBQUM1QkMsd0JBRDRCLEdBQ3JCbkIsS0FBS2dCLENBQUwsRUFBUUMsS0FBUixDQUFjRyxPQUFkLENBQXNCLElBQXRCLEVBQTRCLEdBQTVCLElBQW1DLEdBQW5DLEdBQXlDcEIsS0FBS2dCLENBQUwsRUFBUUUsR0FBUixDQUFZRyxLQUFaLENBQWtCLENBQWxCLEVBQXFCRCxPQUFyQixDQUE2QixJQUE3QixFQUFtQyxHQUFuQyxDQURwQjs7QUFFaENMLHdCQUFJQyxDQUFKLEVBQU9HLElBQVAsR0FBY0EsSUFBZDtBQUNEO0FBQ0Y7QUFDRCxxQkFBS2xCLFFBQUwsR0FBZ0IscUJBQVNjLEdBQVQsQ0FBaEI7QUFDQSxxQkFBS08sTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdCK0JDLGVBQUtYLEk7O2tCQUFuQmIsSyIsImZpbGUiOiJmcmVlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7XG4gIEFwaXMsXG4gIEh0dHBcbn0gZnJvbSAnbGlicy9pbnRlcmZhY2UnXG5pbXBvcnQgeyBjaGVja05ldyB9IGZyb20gJy4uL2xpYnMvdXRpbHMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgZnJlZURhdGE6IFtdXG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHd4LnJlcG9ydEFuYWx5dGljcygnb3Blbl9wYWdlJywge1xuICAgICAgdXJsOiAncGFnZXMvZnJlZUxpc3QvZnJlZUxpc3QnXG4gICAgfSlcbiAgICB0aGlzLmdldEZyZWUoKVxuICB9XG4gIGFzeW5jIGdldEZyZWUoKSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBIdHRwLnBvc3Qoe1xuICAgICAgdXJsOiBBcGlzLnVybCArIEFwaXMubGVzc29uLFxuICAgICAgZGF0YToge1xuICAgICAgICBvcGVuaWQ6IHd4LmdldFN0b3JhZ2VTeW5jKCdvcGVuSUQnKSxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgdHA6IDFcbiAgICAgIH1cbiAgICB9KVxuICAgIGxldCBvYmogPSBbXVxuICAgIGZvciAobGV0IGkgaW4gZGF0YS5kYXRhKSB7XG4gICAgICBvYmpbaV0gPSBkYXRhW2ldXG4gICAgICBpZiAoZGF0YVtpXS5zdGFydCAmJiBkYXRhW2ldLmVuZCkge1xuICAgICAgICB2YXIgZGF0ZSA9IGRhdGFbaV0uc3RhcnQucmVwbGFjZSgvLS9nLCAnLicpICsgJy0nICsgZGF0YVtpXS5lbmQuc2xpY2UoNSkucmVwbGFjZSgvLS9nLCAnLicpXG4gICAgICAgIG9ialtpXS5kYXRlID0gZGF0ZVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZyZWVEYXRhID0gY2hlY2tOZXcob2JqKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxufVxuIl19