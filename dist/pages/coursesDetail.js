'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _interface = require('./../libs/interface.js');

var _utils = require('./../libs/utils.js');

var _htmlParser = require('./../components/htmlParser.js');

var _htmlParser2 = _interopRequireDefault(_htmlParser);

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
      code: false,
      iphonex: '',
      payed: false,
      page: 4,
      avatars: ['http://autodynemv.b0.upaiyun.com/0d3fe95da64a0cd5478092206b114ea7.jpg', 'http://autodynemv.b0.upaiyun.com/b9571d1db9e87c435b42856578220263.jpg', 'http://autodynemv.b0.upaiyun.com/0da2e036f257ed155b97c8efe53c33d8.jpg', 'http://autodynemv.b0.upaiyun.com/aedc27293a7af484e90c372c515a5d98.jpg', 'http://autodynemv.b0.upaiyun.com/fc0222e7b029d88cda0925be787a1064.jpg', 'http://autodynemv.b0.upaiyun.com/5c06d4f3f91f005e7dee3669dbf9098d.jpg', 'http://autodynemv.b0.upaiyun.com/767c01b1b3932ce01bd1ba5b2f86e623.jpg', 'http://autodynemv.b0.upaiyun.com/8d3ce488ab7cc09f52d16a98ac38d50c.jpg', 'http://autodynemv.b0.upaiyun.com/1519358c719fda6a002b1bdfe824039c.jpg'],
      count: false,
      md: '',
      lessonList: [],
      courseData: {},
      single: false,
      random: [],
      chapter_name: [],
      toggle: ''
    }, _this.$repeat = {}, _this.$props = { "htmlParser": { "xmlns:v-bind": "", "v-bind:parserContent.sync": "md", "parserType": "md" } }, _this.$events = {}, _this.components = {
      htmlParser: _htmlParser2.default
      // Wemark
    }, _this.methods = {
      toggleSong: function toggleSong() {
        var page = this.page == 4 ? this.lessonList[0].length : 4;
        this.page = page;
        this.single = !this.single;
      },
      toggle: function toggle() {
        this.code = !this.code;
      },
      copy: function copy() {
        wx.reportAnalytics('copy_weixin', {
          course_name: this.courseData.title,
          course_origin: this.courseData.origin_fee,
          course_current: this.courseData.fee
        });
        if (wx.setClipboardData) {
          wx.setClipboardData({
            data: 'lian-ge-fang',
            success: function success() {
              wx.showToast({
                title: '复制成功'
              });
            }
          });
        } else {
          wx.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
          });
        }
      },

      toggleSort: function toggleSort(ind) {
        var data = this.toggle;
        data[ind] = !data[ind];
        this.toggle = data;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var _this2 = this;

      wx.reportAnalytics('open_page', {
        url: 'pages/coursesDetail/coursesDetail'
      });
      this.courseId = options.id;
      this.getMycourse();
      this.getCourse();
      this.getLessonlist();
      this.$apply();
      wx.getSystemInfo({
        success: function success(res) {
          var model = res.model.substring(0, res.model.indexOf('X')) + 'X';
          if (model === 'iPhone X') {
            _this2.iphonex = 'pay-option-iphonex';
          }
        }
      });
    }
  }, {
    key: 'getCourse',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var course, roundCount;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _interface.Http.get({
                  url: _interface.Apis.url + _interface.Apis.course + this.courseId,
                  data: {
                    openid: wx.getStorageSync('openID')
                  }
                });

              case 2:
                course = _context.sent;

                course = (0, _utils.fakeCount)(course.data);
                course.play_count = course.play_count < 3 ? 3 : course.play_count;
                wx.reportAnalytics('course_detail', {
                  course_name: course.title,
                  course_origin: course.origin_fee,
                  course_current: course.fee
                });
                roundCount = 0;

                if (course.play_count < 1000) {
                  roundCount = course.play_count;
                } else if (course.play_count >= 1000) {
                  roundCount = Math.round(course.play_count / 1000) + 'K';
                }
                course.roundCount = roundCount;
                this.courseData = course;
                this.md = course.info;
                if (!this.count) {
                  this.getRandom();
                  this.count = true;
                }
                //  注意，在此处修改了content2之后，需要手动调用$apply()方法更新数据
                this.$apply();
                //  调用通知接口通知组件更新数据
                this.$invoke('htmlParser', 'htmlParserNotice');

              case 14:
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
    key: 'getLessonlist',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var arr, obj, toggle, single, lessonlist;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                arr = [];
                obj = {};
                toggle = [];
                single = false;
                _context2.next = 6;
                return _interface.Http.post({
                  url: _interface.Apis.url + _interface.Apis.lessonList,
                  data: {
                    openid: wx.getStorageSync('openID'),
                    course_id: this.courseId,
                    page: 1,
                    size: 100
                  }
                });

              case 6:
                lessonlist = _context2.sent;

                lessonlist.data.forEach(function (res) {
                  var ind = arr.indexOf(res.chapter_name);
                  if (ind === -1) {
                    arr.push(res.chapter_name);
                    toggle.push(false);
                    obj[arr.length - 1] = [res];
                  } else {
                    obj[ind].push(res);
                  }
                });
                if (Object.keys(obj).length === 1) {
                  single = true;
                }
                this.lessonList = obj;
                this.chapter_name = arr;
                this.toggle = toggle;
                this.single = single;
                this.$apply();

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getLessonlist() {
        return _ref3.apply(this, arguments);
      }

      return getLessonlist;
    }()
  }, {
    key: 'getMycourse',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this3 = this;

        var myCourse;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _interface.Http.get({
                  url: _interface.Apis.url + _interface.Apis.myCourse,
                  data: {
                    openid: wx.getStorageSync('openID')
                  }
                });

              case 2:
                myCourse = _context3.sent;

                myCourse.data.forEach(function (obj) {
                  if (obj.id == _this3.courseId) {
                    _this3.payed = true;
                  }
                });

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getMycourse() {
        return _ref4.apply(this, arguments);
      }

      return getMycourse;
    }()
  }, {
    key: 'getRandom',
    value: function getRandom() {
      var random = [];
      if (this.courseData.user_info) {
        this.courseData.user_info.forEach(function (res) {
          if (res.avatar != '') {
            random.push(res.avatar);
          }
        });
      }
      for (var i = 0; random.length < 3; i++) {
        var url = this.avatars[Math.floor(Math.random() * 9)];
        if (random.indexOf(url) == -1) {
          random.push(url);
        }
      }
      this.random = random;
      this.$apply();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/coursesDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXNEZXRhaWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwiY29kZSIsImlwaG9uZXgiLCJwYXllZCIsInBhZ2UiLCJhdmF0YXJzIiwiY291bnQiLCJtZCIsImxlc3Nvbkxpc3QiLCJjb3Vyc2VEYXRhIiwic2luZ2xlIiwicmFuZG9tIiwiY2hhcHRlcl9uYW1lIiwidG9nZ2xlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiaHRtbFBhcnNlciIsIm1ldGhvZHMiLCJ0b2dnbGVTb25nIiwibGVuZ3RoIiwiY29weSIsInd4IiwicmVwb3J0QW5hbHl0aWNzIiwiY291cnNlX25hbWUiLCJ0aXRsZSIsImNvdXJzZV9vcmlnaW4iLCJvcmlnaW5fZmVlIiwiY291cnNlX2N1cnJlbnQiLCJmZWUiLCJzZXRDbGlwYm9hcmREYXRhIiwic3VjY2VzcyIsInNob3dUb2FzdCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJ0b2dnbGVTb3J0IiwiaW5kIiwib3B0aW9ucyIsInVybCIsImNvdXJzZUlkIiwiaWQiLCJnZXRNeWNvdXJzZSIsImdldENvdXJzZSIsImdldExlc3Nvbmxpc3QiLCIkYXBwbHkiLCJnZXRTeXN0ZW1JbmZvIiwicmVzIiwibW9kZWwiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiSHR0cCIsImdldCIsIkFwaXMiLCJjb3Vyc2UiLCJvcGVuaWQiLCJnZXRTdG9yYWdlU3luYyIsInBsYXlfY291bnQiLCJyb3VuZENvdW50IiwiTWF0aCIsInJvdW5kIiwiaW5mbyIsImdldFJhbmRvbSIsIiRpbnZva2UiLCJhcnIiLCJvYmoiLCJwb3N0IiwiY291cnNlX2lkIiwic2l6ZSIsImxlc3Nvbmxpc3QiLCJmb3JFYWNoIiwicHVzaCIsIk9iamVjdCIsImtleXMiLCJteUNvdXJzZSIsInVzZXJfaW5mbyIsImF2YXRhciIsImkiLCJmbG9vciIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7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bGUiOiJjb3Vyc2VzRGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHtcbiAgQXBpcyxcbiAgSHR0cFxufSBmcm9tICdsaWJzL2ludGVyZmFjZSdcbmltcG9ydCB7IGZha2VDb3VudCB9IGZyb20gJy4uL2xpYnMvdXRpbHMnXG5pbXBvcnQgaHRtbFBhcnNlciBmcm9tICcuLi9jb21wb25lbnRzL2h0bWxQYXJzZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgY29kZTogZmFsc2UsXG4gICAgaXBob25leDogJycsXG4gICAgcGF5ZWQ6IGZhbHNlLFxuICAgIHBhZ2U6IDQsXG4gICAgYXZhdGFyczogW1xuICAgICAgJ2h0dHA6Ly9hdXRvZHluZW12LmIwLnVwYWl5dW4uY29tLzBkM2ZlOTVkYTY0YTBjZDU0NzgwOTIyMDZiMTE0ZWE3LmpwZycsXG4gICAgICAnaHR0cDovL2F1dG9keW5lbXYuYjAudXBhaXl1bi5jb20vYjk1NzFkMWRiOWU4N2M0MzViNDI4NTY1NzgyMjAyNjMuanBnJyxcbiAgICAgICdodHRwOi8vYXV0b2R5bmVtdi5iMC51cGFpeXVuLmNvbS8wZGEyZTAzNmYyNTdlZDE1NWI5N2M4ZWZlNTNjMzNkOC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9hdXRvZHluZW12LmIwLnVwYWl5dW4uY29tL2FlZGMyNzI5M2E3YWY0ODRlOTBjMzcyYzUxNWE1ZDk4LmpwZycsXG4gICAgICAnaHR0cDovL2F1dG9keW5lbXYuYjAudXBhaXl1bi5jb20vZmMwMjIyZTdiMDI5ZDg4Y2RhMDkyNWJlNzg3YTEwNjQuanBnJyxcbiAgICAgICdodHRwOi8vYXV0b2R5bmVtdi5iMC51cGFpeXVuLmNvbS81YzA2ZDRmM2Y5MWYwMDVlN2RlZTM2NjlkYmY5MDk4ZC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9hdXRvZHluZW12LmIwLnVwYWl5dW4uY29tLzc2N2MwMWIxYjM5MzJjZTAxYmQxYmE1YjJmODZlNjIzLmpwZycsXG4gICAgICAnaHR0cDovL2F1dG9keW5lbXYuYjAudXBhaXl1bi5jb20vOGQzY2U0ODhhYjdjYzA5ZjUyZDE2YTk4YWMzOGQ1MGMuanBnJyxcbiAgICAgICdodHRwOi8vYXV0b2R5bmVtdi5iMC51cGFpeXVuLmNvbS8xNTE5MzU4YzcxOWZkYTZhMDAyYjFiZGZlODI0MDM5Yy5qcGcnXG4gICAgXSxcbiAgICBjb3VudDogZmFsc2UsXG4gICAgbWQ6ICcnLFxuICAgIGxlc3Nvbkxpc3Q6IFtdLFxuICAgIGNvdXJzZURhdGE6IHt9LFxuICAgIHNpbmdsZTogZmFsc2UsXG4gICAgcmFuZG9tOiBbXSxcbiAgICBjaGFwdGVyX25hbWU6IFtdLFxuICAgIHRvZ2dsZTogJydcbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaHRtbFBhcnNlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGFyc2VyQ29udGVudC5zeW5jXCI6XCJtZFwiLFwicGFyc2VyVHlwZVwiOlwibWRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGh0bWxQYXJzZXJcbiAgICAvLyBXZW1hcmtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRvZ2dsZVNvbmcoKSB7XG4gICAgICBsZXQgcGFnZSA9IHRoaXMucGFnZSA9PSA0ID8gdGhpcy5sZXNzb25MaXN0WzBdLmxlbmd0aCA6IDRcbiAgICAgIHRoaXMucGFnZSA9IHBhZ2VcbiAgICAgIHRoaXMuc2luZ2xlID0gIXRoaXMuc2luZ2xlXG4gICAgfSxcbiAgICB0b2dnbGUoKSB7XG4gICAgICB0aGlzLmNvZGUgPSAhdGhpcy5jb2RlXG4gICAgfSxcbiAgICBjb3B5KCkge1xuICAgICAgd3gucmVwb3J0QW5hbHl0aWNzKCdjb3B5X3dlaXhpbicsIHtcbiAgICAgICAgY291cnNlX25hbWU6IHRoaXMuY291cnNlRGF0YS50aXRsZSxcbiAgICAgICAgY291cnNlX29yaWdpbjogdGhpcy5jb3Vyc2VEYXRhLm9yaWdpbl9mZWUsXG4gICAgICAgIGNvdXJzZV9jdXJyZW50OiB0aGlzLmNvdXJzZURhdGEuZmVlXG4gICAgICB9KVxuICAgICAgaWYgKHd4LnNldENsaXBib2FyZERhdGEpIHtcbiAgICAgICAgd3guc2V0Q2xpcGJvYXJkRGF0YSh7XG4gICAgICAgICAgZGF0YTogJ2xpYW4tZ2UtZmFuZycsXG4gICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICflpI3liLbmiJDlip8nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIGNvbnRlbnQ6ICflvZPliY3lvq7kv6HniYjmnKzov4fkvY7vvIzml6Dms5Xkvb/nlKjor6Xlip/og73vvIzor7fljYfnuqfliLDmnIDmlrDlvq7kv6HniYjmnKzlkI7ph43or5XjgIInXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICB0b2dnbGVTb3J0OmZ1bmN0aW9uKGluZCl7XG4gICAgICBsZXQgZGF0YSA9IHRoaXMudG9nZ2xlXG4gICAgICBkYXRhW2luZF0gPSAhZGF0YVtpbmRdXG4gICAgICB0aGlzLnRvZ2dsZSA9IGRhdGFcbiAgICB9XG4gIH1cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ29wZW5fcGFnZScsIHtcbiAgICAgIHVybDogJ3BhZ2VzL2NvdXJzZXNEZXRhaWwvY291cnNlc0RldGFpbCdcbiAgICB9KVxuICAgIHRoaXMuY291cnNlSWQgPSBvcHRpb25zLmlkXG4gICAgdGhpcy5nZXRNeWNvdXJzZSgpXG4gICAgdGhpcy5nZXRDb3Vyc2UoKVxuICAgIHRoaXMuZ2V0TGVzc29ubGlzdCgpXG4gICAgdGhpcy4kYXBwbHkoKVxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBsZXQgbW9kZWwgPSByZXMubW9kZWwuc3Vic3RyaW5nKDAsIHJlcy5tb2RlbC5pbmRleE9mKCdYJykpICsgJ1gnXG4gICAgICAgIGlmIChtb2RlbCA9PT0gJ2lQaG9uZSBYJykge1xuICAgICAgICAgIHRoaXMuaXBob25leCA9ICdwYXktb3B0aW9uLWlwaG9uZXgnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGFzeW5jIGdldENvdXJzZSgpIHtcbiAgICBsZXQgY291cnNlID0gYXdhaXQgSHR0cC5nZXQoe1xuICAgICAgdXJsOiBBcGlzLnVybCArIEFwaXMuY291cnNlICsgdGhpcy5jb3Vyc2VJZCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgb3BlbmlkOiB3eC5nZXRTdG9yYWdlU3luYygnb3BlbklEJylcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvdXJzZSA9IGZha2VDb3VudChjb3Vyc2UuZGF0YSlcbiAgICBjb3Vyc2UucGxheV9jb3VudCA9IGNvdXJzZS5wbGF5X2NvdW50IDwgMyA/IDMgOiBjb3Vyc2UucGxheV9jb3VudFxuICAgIHd4LnJlcG9ydEFuYWx5dGljcygnY291cnNlX2RldGFpbCcsIHtcbiAgICAgIGNvdXJzZV9uYW1lOiBjb3Vyc2UudGl0bGUsXG4gICAgICBjb3Vyc2Vfb3JpZ2luOiBjb3Vyc2Uub3JpZ2luX2ZlZSxcbiAgICAgIGNvdXJzZV9jdXJyZW50OiBjb3Vyc2UuZmVlXG4gICAgfSlcbiAgICB2YXIgcm91bmRDb3VudCA9IDBcbiAgICBpZiAoY291cnNlLnBsYXlfY291bnQgPCAxMDAwKSB7XG4gICAgICByb3VuZENvdW50ID0gY291cnNlLnBsYXlfY291bnRcbiAgICB9IGVsc2UgaWYgKGNvdXJzZS5wbGF5X2NvdW50ID49IDEwMDApIHtcbiAgICAgIHJvdW5kQ291bnQgPSBNYXRoLnJvdW5kKGNvdXJzZS5wbGF5X2NvdW50IC8gMTAwMCkgKyAnSydcbiAgICB9XG4gICAgY291cnNlLnJvdW5kQ291bnQgPSByb3VuZENvdW50XG4gICAgdGhpcy5jb3Vyc2VEYXRhID0gY291cnNlXG4gICAgdGhpcy5tZCA9IGNvdXJzZS5pbmZvXG4gICAgaWYgKCF0aGlzLmNvdW50KSB7XG4gICAgICB0aGlzLmdldFJhbmRvbSgpXG4gICAgICB0aGlzLmNvdW50ID0gdHJ1ZVxuICAgIH1cbiAgICAvLyAg5rOo5oSP77yM5Zyo5q2k5aSE5L+u5pS55LqGY29udGVudDLkuYvlkI7vvIzpnIDopoHmiYvliqjosIPnlKgkYXBwbHkoKeaWueazleabtOaWsOaVsOaNrlxuICAgIHRoaXMuJGFwcGx5KClcbiAgICAvLyAg6LCD55So6YCa55+l5o6l5Y+j6YCa55+l57uE5Lu25pu05paw5pWw5o2uXG4gICAgdGhpcy4kaW52b2tlKCdodG1sUGFyc2VyJywgJ2h0bWxQYXJzZXJOb3RpY2UnKVxuICB9XG4gIGFzeW5jIGdldExlc3Nvbmxpc3QoKSB7XG4gICAgbGV0IGFyciA9IFtdXG4gICAgbGV0IG9iaiA9IHt9XG4gICAgbGV0IHRvZ2dsZSA9IFtdXG4gICAgbGV0IHNpbmdsZSA9IGZhbHNlXG4gICAgbGV0IGxlc3Nvbmxpc3QgPSBhd2FpdCBIdHRwLnBvc3Qoe1xuICAgICAgdXJsOiBBcGlzLnVybCArIEFwaXMubGVzc29uTGlzdCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgb3BlbmlkOiB3eC5nZXRTdG9yYWdlU3luYygnb3BlbklEJyksXG4gICAgICAgIGNvdXJzZV9pZDogdGhpcy5jb3Vyc2VJZCxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgc2l6ZTogMTAwXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXNzb25saXN0LmRhdGEuZm9yRWFjaCgocmVzKSA9PiB7XG4gICAgICBsZXQgaW5kID0gYXJyLmluZGV4T2YocmVzLmNoYXB0ZXJfbmFtZSlcbiAgICAgIGlmIChpbmQgPT09IC0xKSB7XG4gICAgICAgIGFyci5wdXNoKHJlcy5jaGFwdGVyX25hbWUpXG4gICAgICAgIHRvZ2dsZS5wdXNoKGZhbHNlKVxuICAgICAgICBvYmpbYXJyLmxlbmd0aCAtIDFdID0gW3Jlc11cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtpbmRdLnB1c2gocmVzKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAxKSB7XG4gICAgICBzaW5nbGUgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMubGVzc29uTGlzdCA9IG9ialxuICAgIHRoaXMuY2hhcHRlcl9uYW1lID0gYXJyXG4gICAgdGhpcy50b2dnbGUgPSB0b2dnbGVcbiAgICB0aGlzLnNpbmdsZSA9IHNpbmdsZVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuICBhc3luYyBnZXRNeWNvdXJzZSgpIHtcbiAgICBsZXQgbXlDb3Vyc2UgPSBhd2FpdCBIdHRwLmdldCh7XG4gICAgICB1cmw6IEFwaXMudXJsICsgQXBpcy5teUNvdXJzZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgb3BlbmlkOiB3eC5nZXRTdG9yYWdlU3luYygnb3BlbklEJylcbiAgICAgIH1cbiAgICB9KVxuICAgIG15Q291cnNlLmRhdGEuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLmlkID09IHRoaXMuY291cnNlSWQpIHtcbiAgICAgICAgdGhpcy5wYXllZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGdldFJhbmRvbSgpIHtcbiAgICB2YXIgcmFuZG9tID0gW11cbiAgICBpZiAodGhpcy5jb3Vyc2VEYXRhLnVzZXJfaW5mbykge1xuICAgICAgdGhpcy5jb3Vyc2VEYXRhLnVzZXJfaW5mby5mb3JFYWNoKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5hdmF0YXIgIT0gJycpIHtcbiAgICAgICAgICByYW5kb20ucHVzaChyZXMuYXZhdGFyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgcmFuZG9tLmxlbmd0aCA8IDM7IGkrKykge1xuICAgICAgdmFyIHVybCA9IHRoaXMuYXZhdGFyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KV1cbiAgICAgIGlmIChyYW5kb20uaW5kZXhPZih1cmwpID09IC0xKSB7XG4gICAgICAgIHJhbmRvbS5wdXNoKHVybClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yYW5kb20gPSByYW5kb21cbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==