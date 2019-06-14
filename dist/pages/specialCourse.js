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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/specialCourse'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNpYWxDb3Vyc2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwiY291cnNlc0RhdGEiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTcGVjaWFsQ291cnNlIiwid3giLCJyZXBvcnRBbmFseXRpY3MiLCJ1cmwiLCJnZXRDb3Vyc2UiLCJIdHRwIiwicG9zdCIsIkFwaXMiLCJjb3Vyc2VzIiwib3BlbmlkIiwiZ2V0U3RvcmFnZVN5bmMiLCJwYWdlIiwic2l6ZSIsIiRhcHBseSIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEksR0FBTztBQUNMQyxtQkFBYTtBQURSLEssUUFHUkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsaUJBQWdCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMkJBQTBCLGFBQTdDLEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSzs7Ozs7NkJBR0g7QUFDUEMsU0FBR0MsZUFBSCxDQUFtQixXQUFuQixFQUFnQztBQUM5QkMsYUFBSztBQUR5QixPQUFoQztBQUdBLFdBQUtDLFNBQUw7QUFDRDs7Ozs7Ozs7Ozs7dUJBRWtCQyxnQkFBS0MsSUFBTCxDQUFVO0FBQ3pCSCx1QkFBS0ksZ0JBQUtKLEdBQUwsR0FBV0ksZ0JBQUtDLE9BREk7QUFFekJkLHdCQUFNO0FBQ0plLDRCQUFRUixHQUFHUyxjQUFILENBQWtCLFFBQWxCLENBREo7QUFFSkMsMEJBQU0sQ0FGRjtBQUdKQywwQkFBTTtBQUhGO0FBRm1CLGlCQUFWLEM7OztBQUFibEIsb0I7O0FBUUoscUJBQUtDLFdBQUwsR0FBbUIsc0JBQVVELEtBQUtBLElBQWYsQ0FBbkI7QUFDQSxxQkFBS21CLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExQitCQyxlQUFLSCxJOztrQkFBbkJsQixLIiwiZmlsZSI6InNwZWNpYWxDb3Vyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQge1xuICBBcGlzLFxuICBIdHRwXG59IGZyb20gJ2xpYnMvaW50ZXJmYWNlJ1xuaW1wb3J0IHtmYWtlQ291bnR9IGZyb20gJy4uL2xpYnMvdXRpbHMnXG5pbXBvcnQgU3BlY2lhbENvdXJzZSBmcm9tICdjb21wb25lbnRzL3NwZWNpYWxfY291cnNlJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBkYXRhID0ge1xuICAgIGNvdXJzZXNEYXRhOiBbXVxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTcGVjaWFsQ291cnNlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpjb3Vyc2VzRGF0YS5zeW5jXCI6XCJjb3Vyc2VzRGF0YVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgU3BlY2lhbENvdXJzZVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB3eC5yZXBvcnRBbmFseXRpY3MoJ29wZW5fcGFnZScsIHtcbiAgICAgIHVybDogJ3BhZ2VzL3NwZWNpYWxDb3Vyc2Uvc3BlY2lhbENvdXJzZSdcbiAgICB9KVxuICAgIHRoaXMuZ2V0Q291cnNlKClcbiAgfVxuICBhc3luYyBnZXRDb3Vyc2UoKSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBIdHRwLnBvc3Qoe1xuICAgICAgdXJsOiBBcGlzLnVybCArIEFwaXMuY291cnNlcyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgb3BlbmlkOiB3eC5nZXRTdG9yYWdlU3luYygnb3BlbklEJyksXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHNpemU6IDZcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuY291cnNlc0RhdGEgPSBmYWtlQ291bnQoZGF0YS5kYXRhKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxufVxuIl19