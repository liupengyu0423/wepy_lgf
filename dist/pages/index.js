'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _interface = require('./../libs/interface.js');

var _utils = require('./../libs/utils.js');

var _login_box = require('./../components/login_box.js');

var _login_box2 = _interopRequireDefault(_login_box);

var _special_course = require('./../components/special_course.js');

var _special_course2 = _interopRequireDefault(_special_course);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '练歌房'
    }, _this.$repeat = {}, _this.$props = { "LoginBox": { "v-bind:shown.sync": "showLoginBox" }, "SpecialCourse": { "xmlns:v-bind": "", "v-bind:coursesData.sync": "coursesData" } }, _this.$events = {}, _this.components = {
      LoginBox: _login_box2.default,
      SpecialCourse: _special_course2.default
    }, _this.data = {
      showLoginBox: false,
      bannerData: [],
      freeData: [],
      coursesData: [],
      openClass: [],
      offset: (0, _utils.getDays)() - 5,
      toastLike: false
    }, _this.methods = {
      loadweb: function loadweb(url) {
        wx.navigateTo({
          url: url
        });
        wx.reportAnalytics('banner_url', {
          url: url
        });
      },
      more: function more(e) {
        // this.$parent.more(e)
      },
      closeToast: function closeToast() {
        this.toastLike = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function onShow() {
      wx.reportAnalytics('open_page', {
        url: 'pages/index/index'
      });
      if (wx.showLoading) {
        wx.showLoading({
          title: '加载中'
        });
      }
      if (!wx.getStorageSync('openID')) {
        this.getOpenid();
      } else {
        this.setData({
          openId: wx.getStorageSync('openID')
        });
        this.getBanner();
        this.getFree();
        this.getCourses();
        this.getOpen();
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      // 页面全局判断登录
      _interface.Login.doLogin(this, function () {
        _this2.showLoginBox = false;
        _this2.$apply();
      });
    }
  }, {
    key: 'getOpenid',
    value: function getOpenid() {
      var _this3 = this;

      wx.login({
        success: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!res.code) {
                      _context.next = 10;
                      break;
                    }

                    _context.next = 3;
                    return _interface.Http.get({
                      url: _interface.Apis.url + _interface.Apis.jsCode,
                      data: {
                        js_code: res.code
                      }
                    });

                  case 3:
                    data = _context.sent;

                    wx.setStorageSync('openID', data.openid);
                    wx.setStorageSync('session_key', data.session_key);
                    _this3.getBanner();
                    _this3.getFree();
                    _this3.getCourses();
                    _this3.getOpen();

                  case 10:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this3);
          }));

          function success(_x) {
            return _ref2.apply(this, arguments);
          }

          return success;
        }()
      });
    }
  }, {
    key: 'getBanner',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data, reg;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _interface.Http.get({
                  url: _interface.Apis.url + _interface.Apis.banner,
                  data: {
                    openid: wx.getStorageSync('openID')
                  }
                });

              case 2:
                data = _context2.sent;
                reg = /^(\.\.\/[a-zA-Z]+)\/(\S*)$/g;

                data.data.forEach(function (res) {
                  res.url.replace(reg, function ($1, $2, $3) {
                    res.url = './' + $3;
                  });
                });
                this.bannerData = data.data;

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getBanner() {
        return _ref3.apply(this, arguments);
      }

      return getBanner;
    }()
  }, {
    key: 'getFree',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _interface.Http.post({
                  url: _interface.Apis.url + _interface.Apis.lesson,
                  data: {
                    openid: wx.getStorageSync('openID'),
                    page: 1,
                    size: 3,
                    tp: 1
                  }
                });

              case 2:
                data = _context3.sent;

                this.freeData = data.data;

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getFree() {
        return _ref4.apply(this, arguments);
      }

      return getFree;
    }()
  }, {
    key: 'getCourses',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _interface.Http.post({
                  url: _interface.Apis.url + _interface.Apis.courses,
                  data: {
                    openid: wx.getStorageSync('openID'),
                    page: 1,
                    size: 3
                  }
                });

              case 2:
                data = _context4.sent;

                this.coursesData = (0, _utils.fakeCount)(data.data);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getCourses() {
        return _ref5.apply(this, arguments);
      }

      return getCourses;
    }()
  }, {
    key: 'getOpen',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _interface.Http.post({
                  url: _interface.Apis.url + _interface.Apis.lesson,
                  data: {
                    openid: wx.getStorageSync('openID'),
                    tp: 0,
                    page: -1,
                    offset: this.offset,
                    size: 6
                  }
                });

              case 2:
                data = _context5.sent;

                this.openClass = (0, _utils.fakeCount)(data.data).reverse();

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getOpen() {
        return _ref6.apply(this, arguments);
      }

      return getOpen;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkxvZ2luQm94IiwiU3BlY2lhbENvdXJzZSIsImRhdGEiLCJzaG93TG9naW5Cb3giLCJiYW5uZXJEYXRhIiwiZnJlZURhdGEiLCJjb3Vyc2VzRGF0YSIsIm9wZW5DbGFzcyIsIm9mZnNldCIsInRvYXN0TGlrZSIsIm1ldGhvZHMiLCJsb2Fkd2ViIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwicmVwb3J0QW5hbHl0aWNzIiwibW9yZSIsImUiLCJjbG9zZVRvYXN0Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImdldFN0b3JhZ2VTeW5jIiwiZ2V0T3BlbmlkIiwic2V0RGF0YSIsIm9wZW5JZCIsImdldEJhbm5lciIsImdldEZyZWUiLCJnZXRDb3Vyc2VzIiwiZ2V0T3BlbiIsIkxvZ2luIiwiZG9Mb2dpbiIsIiRhcHBseSIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsImNvZGUiLCJIdHRwIiwiZ2V0IiwiQXBpcyIsImpzQ29kZSIsImpzX2NvZGUiLCJzZXRTdG9yYWdlU3luYyIsIm9wZW5pZCIsInNlc3Npb25fa2V5IiwiYmFubmVyIiwicmVnIiwiZm9yRWFjaCIsInJlcGxhY2UiLCIkMSIsIiQyIiwiJDMiLCJwb3N0IiwibGVzc29uIiwicGFnZSIsInNpemUiLCJ0cCIsImNvdXJzZXMiLCJyZXZlcnNlIiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFLQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLHFCQUFvQixjQUFyQixFQUFaLEVBQWlELGlCQUFnQixF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SlQ7QUFLSjhDLDBCQUFNO0FBTEY7QUFGbUIsaUJBQVYsQzs7O0FBQWJwRCxvQjs7QUFVSixxQkFBS0ssU0FBTCxHQUFpQixzQkFBVUwsS0FBS0EsSUFBZixFQUFxQnVELE9BQXJCLEVBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEkrQkMsZUFBS0wsSTs7a0JBQW5CNUQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQge1xuICAgIEFwaXMsXG4gICAgSHR0cCxcbiAgICBMb2dpblxuICB9IGZyb20gJ2xpYnMvaW50ZXJmYWNlJ1xuICBpbXBvcnQgeyBnZXREYXlzLCBmYWtlQ291bnQgfSBmcm9tICcuLi9saWJzL3V0aWxzJ1xuICBpbXBvcnQgTG9naW5Cb3ggZnJvbSAnY29tcG9uZW50cy9sb2dpbl9ib3gnXG4gIGltcG9ydCBTcGVjaWFsQ291cnNlIGZyb20gJ2NvbXBvbmVudHMvc3BlY2lhbF9jb3Vyc2UnXG4gIFxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e7g+atjOaIvydcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkxvZ2luQm94XCI6e1widi1iaW5kOnNob3duLnN5bmNcIjpcInNob3dMb2dpbkJveFwifSxcIlNwZWNpYWxDb3Vyc2VcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmNvdXJzZXNEYXRhLnN5bmNcIjpcImNvdXJzZXNEYXRhXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIExvZ2luQm94LFxuICAgICAgU3BlY2lhbENvdXJzZVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBzaG93TG9naW5Cb3g6IGZhbHNlLFxuICAgICAgYmFubmVyRGF0YTogW10sXG4gICAgICBmcmVlRGF0YTogW10sXG4gICAgICBjb3Vyc2VzRGF0YTogW10sXG4gICAgICBvcGVuQ2xhc3M6IFtdLFxuICAgICAgb2Zmc2V0OiBnZXREYXlzKCkgLSA1LFxuICAgICAgdG9hc3RMaWtlOiBmYWxzZVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBsb2Fkd2ViKHVybCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IHVybFxuICAgICAgICB9KVxuICAgICAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ2Jhbm5lcl91cmwnLCB7XG4gICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBtb3JlKGUpIHtcbiAgICAgICAgLy8gdGhpcy4kcGFyZW50Lm1vcmUoZSlcbiAgICAgIH0sXG4gICAgICBjbG9zZVRvYXN0KCkge1xuICAgICAgICB0aGlzLnRvYXN0TGlrZSA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgd3gucmVwb3J0QW5hbHl0aWNzKCdvcGVuX3BhZ2UnLCB7XG4gICAgICAgIHVybDogJ3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgfSlcbiAgICAgIGlmICh3eC5zaG93TG9hZGluZykge1xuICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAoIXd4LmdldFN0b3JhZ2VTeW5jKCdvcGVuSUQnKSkge1xuICAgICAgICB0aGlzLmdldE9wZW5pZCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIG9wZW5JZDogd3guZ2V0U3RvcmFnZVN5bmMoJ29wZW5JRCcpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZ2V0QmFubmVyKClcbiAgICAgICAgdGhpcy5nZXRGcmVlKClcbiAgICAgICAgdGhpcy5nZXRDb3Vyc2VzKClcbiAgICAgICAgdGhpcy5nZXRPcGVuKClcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgLy8g6aG16Z2i5YWo5bGA5Yik5pat55m75b2VXG4gICAgICBMb2dpbi5kb0xvZ2luKHRoaXMsICgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93TG9naW5Cb3ggPSBmYWxzZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgICBnZXRPcGVuaWQoKSB7XG4gICAgICB3eC5sb2dpbih7XG4gICAgICAgIHN1Y2Nlc3M6IGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgSHR0cC5nZXQoe1xuICAgICAgICAgICAgICB1cmw6IEFwaXMudXJsICsgQXBpcy5qc0NvZGUsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBqc19jb2RlOiByZXMuY29kZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ29wZW5JRCcsIGRhdGEub3BlbmlkKVxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3Nlc3Npb25fa2V5JywgZGF0YS5zZXNzaW9uX2tleSlcbiAgICAgICAgICAgIHRoaXMuZ2V0QmFubmVyKClcbiAgICAgICAgICAgIHRoaXMuZ2V0RnJlZSgpXG4gICAgICAgICAgICB0aGlzLmdldENvdXJzZXMoKVxuICAgICAgICAgICAgdGhpcy5nZXRPcGVuKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIGdldEJhbm5lcigpIHtcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgSHR0cC5nZXQoe1xuICAgICAgICB1cmw6IEFwaXMudXJsICsgQXBpcy5iYW5uZXIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBvcGVuaWQ6IHd4LmdldFN0b3JhZ2VTeW5jKCdvcGVuSUQnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY29uc3QgcmVnID0gL14oXFwuXFwuXFwvW2EtekEtWl0rKVxcLyhcXFMqKSQvZ1xuICAgICAgZGF0YS5kYXRhLmZvckVhY2gocmVzID0+IHtcbiAgICAgICAgcmVzLnVybC5yZXBsYWNlKHJlZywgZnVuY3Rpb24oJDEsICQyLCAkMykge1xuICAgICAgICAgIHJlcy51cmwgPSAnLi8nICsgJDNcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICB0aGlzLmJhbm5lckRhdGEgPSBkYXRhLmRhdGFcbiAgICB9XG4gICAgYXN5bmMgZ2V0RnJlZSgpIHtcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgSHR0cC5wb3N0KHtcbiAgICAgICAgdXJsOiBBcGlzLnVybCArIEFwaXMubGVzc29uLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgb3BlbmlkOiB3eC5nZXRTdG9yYWdlU3luYygnb3BlbklEJyksXG4gICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICBzaXplOiAzLFxuICAgICAgICAgIHRwOiAxXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLmZyZWVEYXRhID0gZGF0YS5kYXRhXG4gICAgfVxuICAgIGFzeW5jIGdldENvdXJzZXMoKSB7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IEh0dHAucG9zdCh7XG4gICAgICAgIHVybDogQXBpcy51cmwgKyBBcGlzLmNvdXJzZXMsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBvcGVuaWQ6IHd4LmdldFN0b3JhZ2VTeW5jKCdvcGVuSUQnKSxcbiAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgIHNpemU6IDNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuY291cnNlc0RhdGEgPSBmYWtlQ291bnQoZGF0YS5kYXRhKVxuICAgIH1cbiAgICBhc3luYyBnZXRPcGVuKCkge1xuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBIdHRwLnBvc3Qoe1xuICAgICAgICB1cmw6IEFwaXMudXJsICsgQXBpcy5sZXNzb24sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBvcGVuaWQ6IHd4LmdldFN0b3JhZ2VTeW5jKCdvcGVuSUQnKSxcbiAgICAgICAgICB0cDogMCxcbiAgICAgICAgICBwYWdlOiAtMSxcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgIHNpemU6IDZcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMub3BlbkNsYXNzID0gZmFrZUNvdW50KGRhdGEuZGF0YSkucmV2ZXJzZSgpXG4gICAgfVxuICB9XG4iXX0=