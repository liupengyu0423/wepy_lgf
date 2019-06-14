'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _interface = require('./../libs/interface.js');

var _utils = require('./../libs/utils.js');

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      coursesData: []
    }, _this.$repeat = {}, _this.$props = { "SpecialCourse": { "xmlns:v-bind": "", "v-bind:coursesData.sync": "coursesData" } }, _this.$events = {}, _this.components = {
      SpecialCourse: _special_course2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      wx.reportAnalytics('open_page', {
        url: 'pages/specialCourse/specialCourse'
      });
      this.getCourse();
    }
  }, {
    key: 'getCourse',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _interface.Http.post({
                  url: _interface.Apis.url + _interface.Apis.courses,
                  data: {
                    openid: wx.getStorageSync('openID'),
                    page: 1,
                    size: 6
                  }
                });

              case 2:
                data = _context.sent;

                this.coursesData = (0, _utils.fakeCount)(data.data);
                this.$apply();

              case 5:
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
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/ocDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9jRGV0YWlsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImNvdXJzZXNEYXRhIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU3BlY2lhbENvdXJzZSIsInd4IiwicmVwb3J0QW5hbHl0aWNzIiwidXJsIiwiZ2V0Q291cnNlIiwiSHR0cCIsInBvc3QiLCJBcGlzIiwiY291cnNlcyIsIm9wZW5pZCIsImdldFN0b3JhZ2VTeW5jIiwicGFnZSIsInNpemUiLCIkYXBwbHkiLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUlBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxJLEdBQU87QUFDTEMsbUJBQWE7QUFEUixLLFFBR1JDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDJCQUEwQixhQUE3QyxFQUFqQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEs7Ozs7OzZCQUdIO0FBQ1BDLFNBQUdDLGVBQUgsQ0FBbUIsV0FBbkIsRUFBZ0M7QUFDOUJDLGFBQUs7QUFEeUIsT0FBaEM7QUFHQSxXQUFLQyxTQUFMO0FBQ0Q7Ozs7Ozs7Ozs7O3VCQUVrQkMsZ0JBQUtDLElBQUwsQ0FBVTtBQUN6QkgsdUJBQUtJLGdCQUFLSixHQUFMLEdBQVdJLGdCQUFLQyxPQURJO0FBRXpCZCx3QkFBTTtBQUNKZSw0QkFBUVIsR0FBR1MsY0FBSCxDQUFrQixRQUFsQixDQURKO0FBRUpDLDBCQUFNLENBRkY7QUFHSkMsMEJBQU07QUFIRjtBQUZtQixpQkFBVixDOzs7QUFBYmxCLG9COztBQVFKLHFCQUFLQyxXQUFMLEdBQW1CLHNCQUFVRCxLQUFLQSxJQUFmLENBQW5CO0FBQ0EscUJBQUttQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMUIrQkMsZUFBS0gsSTs7a0JBQW5CbEIsSyIsImZpbGUiOiJvY0RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7XG4gIEFwaXMsXG4gIEh0dHBcbn0gZnJvbSAnbGlicy9pbnRlcmZhY2UnXG5pbXBvcnQge2Zha2VDb3VudH0gZnJvbSAnLi4vbGlicy91dGlscydcbmltcG9ydCBTcGVjaWFsQ291cnNlIGZyb20gJ2NvbXBvbmVudHMvc3BlY2lhbF9jb3Vyc2UnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgY291cnNlc0RhdGE6IFtdXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlNwZWNpYWxDb3Vyc2VcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmNvdXJzZXNEYXRhLnN5bmNcIjpcImNvdXJzZXNEYXRhXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBTcGVjaWFsQ291cnNlXG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHd4LnJlcG9ydEFuYWx5dGljcygnb3Blbl9wYWdlJywge1xuICAgICAgdXJsOiAncGFnZXMvc3BlY2lhbENvdXJzZS9zcGVjaWFsQ291cnNlJ1xuICAgIH0pXG4gICAgdGhpcy5nZXRDb3Vyc2UoKVxuICB9XG4gIGFzeW5jIGdldENvdXJzZSgpIHtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IEh0dHAucG9zdCh7XG4gICAgICB1cmw6IEFwaXMudXJsICsgQXBpcy5jb3Vyc2VzLFxuICAgICAgZGF0YToge1xuICAgICAgICBvcGVuaWQ6IHd4LmdldFN0b3JhZ2VTeW5jKCdvcGVuSUQnKSxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgc2l6ZTogNlxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5jb3Vyc2VzRGF0YSA9IGZha2VDb3VudChkYXRhLmRhdGEpXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG59XG4iXX0=