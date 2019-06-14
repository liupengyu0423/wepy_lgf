'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _interface = require('./../libs/interface.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      collectName: '课时',
      pageKey: 'freeDetail',
      loading: '',
      page: 1,
      courseData: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'more',
    value: function more(e) {
      this.$parent.more(e);
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      wx.reportAnalytics('open_page', {
        url: 'pages/myCourse/myCourse'
      });
      this.key = options.key;
      if (options.key === 'follow') {
        this.collectName = '课程';
        this.tp = 0;
        this.pageKey = 'coursesDetail';
        this.getCourse();
      } else if (options.key === 'collect') {
        this.tp = 1;
        this.getCourse();
      } else {
        this.collectName = '';
        this.tp = 2;
        this.pageKey = 'coursesDetail';
        this.getMycourse();
      }
    }
  }, {
    key: 'getCourse',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var course, data, _data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _interface.Http.get({
                  url: _interface.Apis.url + _interface.Apis.collect,
                  data: {
                    openid: wx.getStorageSync('openID'),
                    tp: this.tp,
                    page: this.page,
                    size: 10
                  }
                });

              case 2:
                course = _context.sent;

                if (course) {
                  _context.next = 7;
                  break;
                }

                this.setData({
                  loading: '已到底'
                });
                if (wx.hideLoading) {
                  wx.hideLoading();
                }
                return _context.abrupt('return');

              case 7:
                data = '';

                if (this.courseData) {
                  data = this.courseData;
                  (_data = data).push.apply(_data, _toConsumableArray(course.data));
                } else {
                  data = course.data;
                }
                this.courseData = data;
                this.$apply();

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCourse() {
        return _ref2.apply(this, arguments);
      }

      return getCourse;
    }()
  }, {
    key: 'getMycourse',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(state) {
        var course;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _interface.Http.get({
                  url: _interface.Apis.url + _interface.Apis.myCourse,
                  data: {
                    openid: wx.getStorageSync('openID')
                  }
                });

              case 2:
                course = _context2.sent;

                this.courseData = course.data;
                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getMycourse(_x) {
        return _ref3.apply(this, arguments);
      }

      return getMycourse;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/myCourse'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Q291cnNlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImNvbGxlY3ROYW1lIiwicGFnZUtleSIsImxvYWRpbmciLCJwYWdlIiwiY291cnNlRGF0YSIsImUiLCIkcGFyZW50IiwibW9yZSIsIm9wdGlvbnMiLCJ3eCIsInJlcG9ydEFuYWx5dGljcyIsInVybCIsImtleSIsInRwIiwiZ2V0Q291cnNlIiwiZ2V0TXljb3Vyc2UiLCJIdHRwIiwiZ2V0IiwiQXBpcyIsImNvbGxlY3QiLCJvcGVuaWQiLCJnZXRTdG9yYWdlU3luYyIsInNpemUiLCJjb3Vyc2UiLCJzZXREYXRhIiwiaGlkZUxvYWRpbmciLCJwdXNoIiwiJGFwcGx5Iiwic3RhdGUiLCJteUNvdXJzZSIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBSXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEksR0FBTztBQUNMQyxtQkFBYSxJQURSO0FBRUxDLGVBQVMsWUFGSjtBQUdMQyxlQUFTLEVBSEo7QUFJTEMsWUFBTSxDQUpEO0FBS0xDLGtCQUFZO0FBTFAsSzs7Ozs7eUJBT0ZDLEMsRUFBRztBQUNOLFdBQUtDLE9BQUwsQ0FBYUMsSUFBYixDQUFrQkYsQ0FBbEI7QUFDRDs7OzJCQUNNRyxPLEVBQVM7QUFDZEMsU0FBR0MsZUFBSCxDQUFtQixXQUFuQixFQUFnQztBQUM5QkMsYUFBSztBQUR5QixPQUFoQztBQUdBLFdBQUtDLEdBQUwsR0FBV0osUUFBUUksR0FBbkI7QUFDQSxVQUFJSixRQUFRSSxHQUFSLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCLGFBQUtaLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxhQUFLYSxFQUFMLEdBQVUsQ0FBVjtBQUNBLGFBQUtaLE9BQUwsR0FBZSxlQUFmO0FBQ0EsYUFBS2EsU0FBTDtBQUNELE9BTEQsTUFLTyxJQUFJTixRQUFRSSxHQUFSLEtBQWdCLFNBQXBCLEVBQStCO0FBQ3BDLGFBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsYUFBS0MsU0FBTDtBQUNELE9BSE0sTUFHQTtBQUNMLGFBQUtkLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxhQUFLYSxFQUFMLEdBQVUsQ0FBVjtBQUNBLGFBQUtaLE9BQUwsR0FBZSxlQUFmO0FBQ0EsYUFBS2MsV0FBTDtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozt1QkFFb0JDLGdCQUFLQyxHQUFMLENBQVM7QUFDMUJOLHVCQUFLTyxnQkFBS1AsR0FBTCxHQUFXTyxnQkFBS0MsT0FESztBQUUxQnBCLHdCQUFNO0FBQ0pxQiw0QkFBUVgsR0FBR1ksY0FBSCxDQUFrQixRQUFsQixDQURKO0FBRUpSLHdCQUFJLEtBQUtBLEVBRkw7QUFHSlYsMEJBQU0sS0FBS0EsSUFIUDtBQUlKbUIsMEJBQU07QUFKRjtBQUZvQixpQkFBVCxDOzs7QUFBZkMsc0I7O29CQVNDQSxNOzs7OztBQUNILHFCQUFLQyxPQUFMLENBQWE7QUFDWHRCLDJCQUFTO0FBREUsaUJBQWI7QUFHQSxvQkFBSU8sR0FBR2dCLFdBQVAsRUFBb0I7QUFDbEJoQixxQkFBR2dCLFdBQUg7QUFDRDs7OztBQUdDMUIsb0IsR0FBTyxFOztBQUNYLG9CQUFJLEtBQUtLLFVBQVQsRUFBcUI7QUFDbkJMLHlCQUFPLEtBQUtLLFVBQVo7QUFDQSxpQ0FBS3NCLElBQUwsaUNBQWFILE9BQU94QixJQUFwQjtBQUNELGlCQUhELE1BR087QUFDTEEseUJBQU93QixPQUFPeEIsSUFBZDtBQUNEO0FBQ0QscUJBQUtLLFVBQUwsR0FBa0JMLElBQWxCO0FBQ0EscUJBQUs0QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUVpQkMsSzs7Ozs7Ozt1QkFDRVosZ0JBQUtDLEdBQUwsQ0FBUztBQUMxQk4sdUJBQUtPLGdCQUFLUCxHQUFMLEdBQVdPLGdCQUFLVyxRQURLO0FBRTFCOUIsd0JBQU07QUFDSnFCLDRCQUFRWCxHQUFHWSxjQUFILENBQWtCLFFBQWxCO0FBREo7QUFGb0IsaUJBQVQsQzs7O0FBQWZFLHNCOztBQU1KLHFCQUFLbkIsVUFBTCxHQUFrQm1CLE9BQU94QixJQUF6QjtBQUNBLHFCQUFLNEIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBFK0JHLGVBQUszQixJOztrQkFBbkJMLEsiLCJmaWxlIjoibXlDb3Vyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQge1xuICBBcGlzLFxuICBIdHRwXG59IGZyb20gJ2xpYnMvaW50ZXJmYWNlJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBkYXRhID0ge1xuICAgIGNvbGxlY3ROYW1lOiAn6K++5pe2JyxcbiAgICBwYWdlS2V5OiAnZnJlZURldGFpbCcsXG4gICAgbG9hZGluZzogJycsXG4gICAgcGFnZTogMSxcbiAgICBjb3Vyc2VEYXRhOiBudWxsXG4gIH1cbiAgbW9yZShlKSB7XG4gICAgdGhpcy4kcGFyZW50Lm1vcmUoZSlcbiAgfVxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIHd4LnJlcG9ydEFuYWx5dGljcygnb3Blbl9wYWdlJywge1xuICAgICAgdXJsOiAncGFnZXMvbXlDb3Vyc2UvbXlDb3Vyc2UnXG4gICAgfSlcbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5XG4gICAgaWYgKG9wdGlvbnMua2V5ID09PSAnZm9sbG93Jykge1xuICAgICAgdGhpcy5jb2xsZWN0TmFtZSA9ICfor77nqIsnXG4gICAgICB0aGlzLnRwID0gMFxuICAgICAgdGhpcy5wYWdlS2V5ID0gJ2NvdXJzZXNEZXRhaWwnXG4gICAgICB0aGlzLmdldENvdXJzZSgpXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmtleSA9PT0gJ2NvbGxlY3QnKSB7XG4gICAgICB0aGlzLnRwID0gMVxuICAgICAgdGhpcy5nZXRDb3Vyc2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbGxlY3ROYW1lID0gJydcbiAgICAgIHRoaXMudHAgPSAyXG4gICAgICB0aGlzLnBhZ2VLZXkgPSAnY291cnNlc0RldGFpbCdcbiAgICAgIHRoaXMuZ2V0TXljb3Vyc2UoKVxuICAgIH1cbiAgfVxuICBhc3luYyBnZXRDb3Vyc2UoKSB7XG4gICAgbGV0IGNvdXJzZSA9IGF3YWl0IEh0dHAuZ2V0KHtcbiAgICAgIHVybDogQXBpcy51cmwgKyBBcGlzLmNvbGxlY3QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9wZW5pZDogd3guZ2V0U3RvcmFnZVN5bmMoJ29wZW5JRCcpLFxuICAgICAgICB0cDogdGhpcy50cCxcbiAgICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgICBzaXplOiAxMFxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKCFjb3Vyc2UpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxvYWRpbmc6ICflt7LliLDlupUnXG4gICAgICB9KVxuICAgICAgaWYgKHd4LmhpZGVMb2FkaW5nKSB7XG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgZGF0YSA9ICcnXG4gICAgaWYgKHRoaXMuY291cnNlRGF0YSkge1xuICAgICAgZGF0YSA9IHRoaXMuY291cnNlRGF0YVxuICAgICAgZGF0YS5wdXNoKC4uLmNvdXJzZS5kYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gY291cnNlLmRhdGFcbiAgICB9XG4gICAgdGhpcy5jb3Vyc2VEYXRhID0gZGF0YVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuICBhc3luYyBnZXRNeWNvdXJzZSAoc3RhdGUpIHtcbiAgICBsZXQgY291cnNlID0gYXdhaXQgSHR0cC5nZXQoe1xuICAgICAgdXJsOiBBcGlzLnVybCArIEFwaXMubXlDb3Vyc2UsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9wZW5pZDogd3guZ2V0U3RvcmFnZVN5bmMoJ29wZW5JRCcpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmNvdXJzZURhdGEgPSBjb3Vyc2UuZGF0YVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxufVxuIl19