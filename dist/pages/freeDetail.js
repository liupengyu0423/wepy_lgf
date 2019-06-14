'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _interface = require('./../libs/interface.js');

var _utils = require('./../libs/utils.js');

var _detail_course = require('./../components/detail_course.js');

var _detail_course2 = _interopRequireDefault(_detail_course);

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
      video_url: '',
      videoShow: false,
      videoInd: 0,
      payed: false,
      iphonex: '',
      freeDetail: {},
      coursesData: [],
      otherList: [],
      course: {},
      id: '',
      course_id: ''
    }, _this.$repeat = {}, _this.$props = { "DetailCourse": { "xmlns:v-bind": "", "v-bind:coursesData.sync": "coursesData", "v-bind:iphonex.once": "iphonex" } }, _this.$events = {}, _this.components = {
      DetailCourse: _detail_course2.default
    }, _this.methods = {
      playVideo: function playVideo() {
        this.videoShow = true;
        this.$apply();
        this.getVideo();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var _this2 = this;

      wx.reportAnalytics('open_page', {
        url: 'pages/freeDetail/freeDetail'
      });
      wx.getSystemInfo({
        success: function success(res) {
          var model = res.model.substring(0, res.model.indexOf('X')) + 'X';
          if (model == 'iPhone X') {
            _this2.iphonex = 'detail-course-iphonx';
          }
          _this2.lessonid = options.id;
          _this2.$apply();
          _this2.getCourses();
          _this2.getFree();
          _this2.getLessons();
        }
      });
    }
  }, {
    key: 'getVideo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _interface.Http.get({
                  url: _interface.Apis.url + _interface.Apis.videoDetail + '/' + this.id,
                  data: {
                    openid: wx.getStorageSync('openID')
                  }
                });

              case 2:
                data = _context.sent;

                this.video_url = data.data.url;
                this.$apply();
                _context.next = 7;
                return _interface.Http.post({
                  url: _interface.Apis.url + _interface.Apis.playVideo,
                  data: {
                    openid: wx.getStorageSync('openID'),
                    id: data.data.id
                  }
                });

              case 7:
                wx.reportAnalytics('play_video', {
                  video_name: data.data.title,
                  lesson_name: this.freeDetail.title,
                  course_name: this.course.title,
                  course_origin: this.course.origin_fee,
                  course_current: this.course.fee
                });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getVideo() {
        return _ref2.apply(this, arguments);
      }

      return getVideo;
    }()
  }, {
    key: 'getFree',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data, date;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _interface.Http.get({
                  url: _interface.Apis.url + _interface.Apis.lessonDetail + '/' + this.lessonid,
                  data: {
                    openid: wx.getStorageSync('openID')
                  }
                });

              case 2:
                data = _context2.sent;

                data = data.data;
                if (data.start && data.end) {
                  date = data.start.replace(/-/g, '.') + '-' + data.end.slice(5).replace(/-/g, '.');

                  this.date = date;
                }
                this.course_id = data.course_id;
                this.freeDetail = (0, _utils.fakeCount)(data);
                this.$apply();
                this.getMycourse();
                this.getCurcourse();
                this.getOther();

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getFree() {
        return _ref3.apply(this, arguments);
      }

      return getFree;
    }()
  }, {
    key: 'getLessons',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _interface.Http.post({
                  url: _interface.Apis.url + _interface.Apis.video,
                  data: {
                    openid: wx.getStorageSync('openID'),
                    lesson_id: this.lessonid,
                    page: 1,
                    size: 5
                  }
                });

              case 2:
                data = _context3.sent;

                this.lessonList = data.data;
                this.id = data.data[0].id;
                this.$apply();

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getLessons() {
        return _ref4.apply(this, arguments);
      }

      return getLessons;
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
                    size: 6
                  }
                });

              case 2:
                data = _context4.sent;

                this.coursesData = (0, _utils.fakeCount)(data.data);
                this.$apply();

              case 5:
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
    key: 'getMycourse',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this3 = this;

        var data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _interface.Http.get({
                  url: _interface.Apis.url + _interface.Apis.myCourse,
                  data: {
                    openid: wx.getStorageSync('openID')
                  }
                });

              case 2:
                data = _context5.sent;

                data.data.forEach(function (obj) {
                  if (obj.id == _this3.course_id) {
                    _this3.payed = true;
                    _this3.$apply();
                  }
                });

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getMycourse() {
        return _ref6.apply(this, arguments);
      }

      return getMycourse;
    }()
  }, {
    key: 'getCurcourse',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var lessonType, data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                lessonType = '';
                _context6.next = 3;
                return _interface.Http.get({
                  url: _interface.Apis.url + _interface.Apis.course + this.course_id,
                  data: {
                    openid: wx.getStorageSync('openID')
                  }
                });

              case 3:
                data = _context6.sent;

                this.course = data.data;
                this.$apply();
                if (this.payed && this.freeDetail.tp != 1) {
                  lessonType = '付费课时已购';
                } else if (this.freeDetail.tp == 2) {
                  lessonType = '付费课时未购';
                } else if (this.freeDetail.tp == 1) {
                  lessonType = '限时免费';
                } else {
                  lessonType = '免费试学';
                }
                wx.reportAnalytics('lesson_detail', {
                  lesson_name: this.freeDetail.title,
                  course_name: data.data.title,
                  course_origin: data.data.origin_fee,
                  course_current: data.data.fee,
                  lesson_type: lessonType
                });

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getCurcourse() {
        return _ref7.apply(this, arguments);
      }

      return getCurcourse;
    }()
  }, {
    key: 'getOther',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var data;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _interface.Http.post({
                  url: _interface.Apis.url + _interface.Apis.lessonList,
                  data: {
                    openid: wx.getStorageSync('openID'),
                    course_id: this.course_id,
                    page: 1,
                    size: 3
                  }
                });

              case 2:
                data = _context7.sent;

                this.otherList = (0, _utils.fakeCount)(data.data);
                this.$apply();

              case 5:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getOther() {
        return _ref8.apply(this, arguments);
      }

      return getOther;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/freeDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyZWVEZXRhaWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwidmlkZW9fdXJsIiwidmlkZW9TaG93IiwidmlkZW9JbmQiLCJwYXllZCIsImlwaG9uZXgiLCJmcmVlRGV0YWlsIiwiY291cnNlc0RhdGEiLCJvdGhlckxpc3QiLCJjb3Vyc2UiLCJpZCIsImNvdXJzZV9pZCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkRldGFpbENvdXJzZSIsIm1ldGhvZHMiLCJwbGF5VmlkZW8iLCIkYXBwbHkiLCJnZXRWaWRlbyIsIm9wdGlvbnMiLCJ3eCIsInJlcG9ydEFuYWx5dGljcyIsInVybCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwibW9kZWwiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwibGVzc29uaWQiLCJnZXRDb3Vyc2VzIiwiZ2V0RnJlZSIsImdldExlc3NvbnMiLCJIdHRwIiwiZ2V0IiwiQXBpcyIsInZpZGVvRGV0YWlsIiwib3BlbmlkIiwiZ2V0U3RvcmFnZVN5bmMiLCJwb3N0IiwidmlkZW9fbmFtZSIsInRpdGxlIiwibGVzc29uX25hbWUiLCJjb3Vyc2VfbmFtZSIsImNvdXJzZV9vcmlnaW4iLCJvcmlnaW5fZmVlIiwiY291cnNlX2N1cnJlbnQiLCJmZWUiLCJsZXNzb25EZXRhaWwiLCJzdGFydCIsImVuZCIsImRhdGUiLCJyZXBsYWNlIiwic2xpY2UiLCJnZXRNeWNvdXJzZSIsImdldEN1cmNvdXJzZSIsImdldE90aGVyIiwidmlkZW8iLCJsZXNzb25faWQiLCJwYWdlIiwic2l6ZSIsImxlc3Nvbkxpc3QiLCJjb3Vyc2VzIiwibXlDb3Vyc2UiLCJmb3JFYWNoIiwib2JqIiwibGVzc29uVHlwZSIsInRwIiwibGVzc29uX3R5cGUiLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUlBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xB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QUFDRCxpQkFGTSxNQUVBLElBQUksS0FBSzlELFVBQUwsQ0FBZ0IrRCxFQUFoQixJQUFzQixDQUExQixFQUE2QjtBQUNsQ0QsK0JBQWEsTUFBYjtBQUNELGlCQUZNLE1BRUE7QUFDTEEsK0JBQWEsTUFBYjtBQUNEO0FBQ0Q5QyxtQkFBR0MsZUFBSCxDQUFtQixlQUFuQixFQUFvQztBQUNsQ3FCLCtCQUFhLEtBQUt0QyxVQUFMLENBQWdCcUMsS0FESztBQUVsQ0UsK0JBQWE3QyxLQUFLQSxJQUFMLENBQVUyQyxLQUZXO0FBR2xDRyxpQ0FBZTlDLEtBQUtBLElBQUwsQ0FBVStDLFVBSFM7QUFJbENDLGtDQUFnQmhELEtBQUtBLElBQUwsQ0FBVWlELEdBSlE7QUFLbENxQiwrQkFBYUY7QUFMcUIsaUJBQXBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFTaUJqQyxnQkFBS00sSUFBTCxDQUFVO0FBQ3pCakIsdUJBQUthLGdCQUFLYixHQUFMLEdBQVdhLGdCQUFLMEIsVUFESTtBQUV6Qi9ELHdCQUFNO0FBQ0p1Qyw0QkFBUWpCLEdBQUdrQixjQUFILENBQWtCLFFBQWxCLENBREo7QUFFSjdCLCtCQUFXLEtBQUtBLFNBRlo7QUFHSmtELDBCQUFNLENBSEY7QUFJSkMsMEJBQU07QUFKRjtBQUZtQixpQkFBVixDOzs7QUFBYjlELG9COztBQVNKLHFCQUFLUSxTQUFMLEdBQWlCLHNCQUFVUixLQUFLQSxJQUFmLENBQWpCO0FBQ0EscUJBQUttQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdEsrQm9ELGVBQUtWLEk7O2tCQUFuQjlELEsiLCJmaWxlIjoiZnJlZURldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7XG4gIEFwaXMsXG4gIEh0dHBcbn0gZnJvbSAnbGlicy9pbnRlcmZhY2UnXG5pbXBvcnQgeyBmYWtlQ291bnQgfSBmcm9tICcuLi9saWJzL3V0aWxzJ1xuaW1wb3J0IERldGFpbENvdXJzZSBmcm9tICdjb21wb25lbnRzL2RldGFpbF9jb3Vyc2UnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgdmlkZW9fdXJsOiAnJyxcbiAgICB2aWRlb1Nob3c6IGZhbHNlLFxuICAgIHZpZGVvSW5kOiAwLFxuICAgIHBheWVkOiBmYWxzZSxcbiAgICBpcGhvbmV4OiAnJyxcbiAgICBmcmVlRGV0YWlsOiB7fSxcbiAgICBjb3Vyc2VzRGF0YTogW10sXG4gICAgb3RoZXJMaXN0OiBbXSxcbiAgICBjb3Vyc2U6IHt9LFxuICAgIGlkOiAnJyxcbiAgICBjb3Vyc2VfaWQ6ICcnXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkRldGFpbENvdXJzZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y291cnNlc0RhdGEuc3luY1wiOlwiY291cnNlc0RhdGFcIixcInYtYmluZDppcGhvbmV4Lm9uY2VcIjpcImlwaG9uZXhcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIERldGFpbENvdXJzZVxuICB9XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgd3gucmVwb3J0QW5hbHl0aWNzKCdvcGVuX3BhZ2UnLCB7XG4gICAgICB1cmw6ICdwYWdlcy9mcmVlRGV0YWlsL2ZyZWVEZXRhaWwnXG4gICAgfSlcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgbGV0IG1vZGVsID0gcmVzLm1vZGVsLnN1YnN0cmluZygwLCByZXMubW9kZWwuaW5kZXhPZignWCcpKSArICdYJ1xuICAgICAgICBpZiAobW9kZWwgPT0gJ2lQaG9uZSBYJykge1xuICAgICAgICAgIHRoaXMuaXBob25leCA9ICdkZXRhaWwtY291cnNlLWlwaG9ueCdcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxlc3NvbmlkID0gb3B0aW9ucy5pZFxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIHRoaXMuZ2V0Q291cnNlcygpXG4gICAgICAgIHRoaXMuZ2V0RnJlZSgpXG4gICAgICAgIHRoaXMuZ2V0TGVzc29ucygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHBsYXlWaWRlbygpIHtcbiAgICAgIHRoaXMudmlkZW9TaG93ID0gdHJ1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgdGhpcy5nZXRWaWRlbygpXG4gICAgfVxuICB9XG4gIGFzeW5jIGdldFZpZGVvKCkge1xuICAgIGxldCBkYXRhID0gYXdhaXQgSHR0cC5nZXQoe1xuICAgICAgdXJsOiBBcGlzLnVybCArIEFwaXMudmlkZW9EZXRhaWwgKyAnLycgKyB0aGlzLmlkLFxuICAgICAgZGF0YToge1xuICAgICAgICBvcGVuaWQ6IHd4LmdldFN0b3JhZ2VTeW5jKCdvcGVuSUQnKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy52aWRlb191cmwgPSBkYXRhLmRhdGEudXJsXG4gICAgdGhpcy4kYXBwbHkoKVxuICAgIGF3YWl0IEh0dHAucG9zdCh7XG4gICAgICB1cmw6IEFwaXMudXJsICsgQXBpcy5wbGF5VmlkZW8sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9wZW5pZDogd3guZ2V0U3RvcmFnZVN5bmMoJ29wZW5JRCcpLFxuICAgICAgICBpZDogZGF0YS5kYXRhLmlkXG4gICAgICB9XG4gICAgfSlcbiAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ3BsYXlfdmlkZW8nLCB7XG4gICAgICB2aWRlb19uYW1lOiBkYXRhLmRhdGEudGl0bGUsXG4gICAgICBsZXNzb25fbmFtZTogdGhpcy5mcmVlRGV0YWlsLnRpdGxlLFxuICAgICAgY291cnNlX25hbWU6IHRoaXMuY291cnNlLnRpdGxlLFxuICAgICAgY291cnNlX29yaWdpbjogdGhpcy5jb3Vyc2Uub3JpZ2luX2ZlZSxcbiAgICAgIGNvdXJzZV9jdXJyZW50OiB0aGlzLmNvdXJzZS5mZWVcbiAgICB9KVxuICB9XG4gIGFzeW5jIGdldEZyZWUoKSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBIdHRwLmdldCh7XG4gICAgICB1cmw6IEFwaXMudXJsICsgQXBpcy5sZXNzb25EZXRhaWwgKyAnLycgKyB0aGlzLmxlc3NvbmlkLFxuICAgICAgZGF0YToge1xuICAgICAgICBvcGVuaWQ6IHd4LmdldFN0b3JhZ2VTeW5jKCdvcGVuSUQnKVxuICAgICAgfVxuICAgIH0pXG4gICAgZGF0YSA9IGRhdGEuZGF0YVxuICAgIGlmIChkYXRhLnN0YXJ0ICYmIGRhdGEuZW5kKSB7XG4gICAgICBsZXQgZGF0ZSA9IGRhdGEuc3RhcnQucmVwbGFjZSgvLS9nLCAnLicpICsgJy0nICsgZGF0YS5lbmQuc2xpY2UoNSkucmVwbGFjZSgvLS9nLCAnLicpXG4gICAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgfVxuICAgIHRoaXMuY291cnNlX2lkID0gZGF0YS5jb3Vyc2VfaWRcbiAgICB0aGlzLmZyZWVEZXRhaWwgPSBmYWtlQ291bnQoZGF0YSlcbiAgICB0aGlzLiRhcHBseSgpXG4gICAgdGhpcy5nZXRNeWNvdXJzZSgpXG4gICAgdGhpcy5nZXRDdXJjb3Vyc2UoKVxuICAgIHRoaXMuZ2V0T3RoZXIoKVxuICB9XG4gIGFzeW5jIGdldExlc3NvbnMoKSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBIdHRwLnBvc3Qoe1xuICAgICAgdXJsOiBBcGlzLnVybCArIEFwaXMudmlkZW8sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9wZW5pZDogd3guZ2V0U3RvcmFnZVN5bmMoJ29wZW5JRCcpLFxuICAgICAgICBsZXNzb25faWQ6IHRoaXMubGVzc29uaWQsXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHNpemU6IDVcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMubGVzc29uTGlzdCA9IGRhdGEuZGF0YVxuICAgIHRoaXMuaWQgPSBkYXRhLmRhdGFbMF0uaWRcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbiAgYXN5bmMgZ2V0Q291cnNlcygpIHtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IEh0dHAucG9zdCh7XG4gICAgICB1cmw6IEFwaXMudXJsICsgQXBpcy5jb3Vyc2VzLFxuICAgICAgZGF0YToge1xuICAgICAgICBvcGVuaWQ6IHd4LmdldFN0b3JhZ2VTeW5jKCdvcGVuSUQnKSxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgc2l6ZTogNlxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5jb3Vyc2VzRGF0YSA9IGZha2VDb3VudChkYXRhLmRhdGEpXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG4gIGFzeW5jIGdldE15Y291cnNlKCkge1xuICAgIGxldCBkYXRhID0gYXdhaXQgSHR0cC5nZXQoe1xuICAgICAgdXJsOiBBcGlzLnVybCArIEFwaXMubXlDb3Vyc2UsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9wZW5pZDogd3guZ2V0U3RvcmFnZVN5bmMoJ29wZW5JRCcpXG4gICAgICB9XG4gICAgfSlcbiAgICBkYXRhLmRhdGEuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLmlkID09IHRoaXMuY291cnNlX2lkKSB7XG4gICAgICAgIHRoaXMucGF5ZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGFzeW5jIGdldEN1cmNvdXJzZSgpIHtcbiAgICBsZXQgbGVzc29uVHlwZSA9ICcnXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBIdHRwLmdldCh7XG4gICAgICB1cmw6IEFwaXMudXJsICsgQXBpcy5jb3Vyc2UgKyB0aGlzLmNvdXJzZV9pZCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgb3BlbmlkOiB3eC5nZXRTdG9yYWdlU3luYygnb3BlbklEJylcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuY291cnNlID0gZGF0YS5kYXRhXG4gICAgdGhpcy4kYXBwbHkoKVxuICAgIGlmICh0aGlzLnBheWVkICYmIHRoaXMuZnJlZURldGFpbC50cCAhPSAxKSB7XG4gICAgICBsZXNzb25UeXBlID0gJ+S7mOi0ueivvuaXtuW3sui0rSdcbiAgICB9IGVsc2UgaWYgKHRoaXMuZnJlZURldGFpbC50cCA9PSAyKSB7XG4gICAgICBsZXNzb25UeXBlID0gJ+S7mOi0ueivvuaXtuacqui0rSdcbiAgICB9IGVsc2UgaWYgKHRoaXMuZnJlZURldGFpbC50cCA9PSAxKSB7XG4gICAgICBsZXNzb25UeXBlID0gJ+mZkOaXtuWFjei0uSdcbiAgICB9IGVsc2Uge1xuICAgICAgbGVzc29uVHlwZSA9ICflhY3otLnor5XlraYnXG4gICAgfVxuICAgIHd4LnJlcG9ydEFuYWx5dGljcygnbGVzc29uX2RldGFpbCcsIHtcbiAgICAgIGxlc3Nvbl9uYW1lOiB0aGlzLmZyZWVEZXRhaWwudGl0bGUsXG4gICAgICBjb3Vyc2VfbmFtZTogZGF0YS5kYXRhLnRpdGxlLFxuICAgICAgY291cnNlX29yaWdpbjogZGF0YS5kYXRhLm9yaWdpbl9mZWUsXG4gICAgICBjb3Vyc2VfY3VycmVudDogZGF0YS5kYXRhLmZlZSxcbiAgICAgIGxlc3Nvbl90eXBlOiBsZXNzb25UeXBlXG4gICAgfSlcbiAgfVxuICBhc3luYyBnZXRPdGhlcigpIHtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IEh0dHAucG9zdCh7XG4gICAgICB1cmw6IEFwaXMudXJsICsgQXBpcy5sZXNzb25MaXN0LFxuICAgICAgZGF0YToge1xuICAgICAgICBvcGVuaWQ6IHd4LmdldFN0b3JhZ2VTeW5jKCdvcGVuSUQnKSxcbiAgICAgICAgY291cnNlX2lkOiB0aGlzLmNvdXJzZV9pZCxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgc2l6ZTogM1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5vdGhlckxpc3QgPSBmYWtlQ291bnQoZGF0YS5kYXRhKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxufVxuIl19