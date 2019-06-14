'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _login = require('./../libs/login.js');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginBox = function (_wepy$component) {
  _inherits(LoginBox, _wepy$component);

  function LoginBox() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, LoginBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = LoginBox.__proto__ || Object.getPrototypeOf(LoginBox)).call.apply(_ref, [this].concat(args))), _this2), _this2.props = {
      shown: {
        type: Boolean,
        default: false,
        twoWay: true
      }
    }, _this2.data = {}, _this2.methods = {
      getUserInfo: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // 授权登录窗口允许或者拒绝操作回调
                  this.hideBox();
                  if (e.detail.userInfo) {
                    _login2.default.toLogin(e.detail, this.$parent.loginSuccess);
                  } else {
                    this.showBox();
                  }

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getUserInfo(_x) {
          return _ref2.apply(this, arguments);
        }

        return getUserInfo;
      }()
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(LoginBox, [{
    key: 'hideBox',
    value: function hideBox() {
      this.shown = false;
      this.$apply();
    }
  }, {
    key: 'showBox',
    value: function showBox() {
      this.shown = true;
      this.$apply();
    }
  }, {
    key: 'loginAuth',


    // 进入页面必需授权的需求直接在onLoad中执行就好
    value: function loginAuth() {
      var _this = this;
      // 查看是否授权
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          } else {
            _this.showBox();
          }
        },
        fail: function fail(res) {
          _this.showBox();
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(e) {
      // this.loginAuth()
    }
  }]);

  return LoginBox;
}(_wepy2.default.component);

exports.default = LoginBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luX2JveC5qcyJdLCJuYW1lcyI6WyJMb2dpbkJveCIsInByb3BzIiwic2hvd24iLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0d29XYXkiLCJkYXRhIiwibWV0aG9kcyIsImdldFVzZXJJbmZvIiwiZSIsImhpZGVCb3giLCJkZXRhaWwiLCJ1c2VySW5mbyIsImxvZ2luIiwidG9Mb2dpbiIsIiRwYXJlbnQiLCJsb2dpblN1Y2Nlc3MiLCJzaG93Qm94IiwiJGFwcGx5IiwiX3RoaXMiLCJ3eCIsImdldFNldHRpbmciLCJzdWNjZXNzIiwicmVzIiwiYXV0aFNldHRpbmciLCJmYWlsIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzZMQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsT0FERDtBQUVMQyxpQkFBUyxLQUZKO0FBR0xDLGdCQUFRO0FBSEg7QUFERCxLLFNBUVJDLEksR0FBTyxFLFNBYVBDLE8sR0FBVTtBQUNGQyxpQkFERTtBQUFBLDZGQUNVQyxDQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTjtBQUNBLHVCQUFLQyxPQUFMO0FBQ0Esc0JBQUlELEVBQUVFLE1BQUYsQ0FBU0MsUUFBYixFQUF1QjtBQUNyQkMsb0NBQU1DLE9BQU4sQ0FBY0wsRUFBRUUsTUFBaEIsRUFBd0IsS0FBS0ksT0FBTCxDQUFhQyxZQUFyQztBQUNELG1CQUZELE1BRU87QUFDTCx5QkFBS0MsT0FBTDtBQUNEOztBQVJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7OEJBVkE7QUFDUixXQUFLaEIsS0FBTCxHQUFhLEtBQWI7QUFDQSxXQUFLaUIsTUFBTDtBQUNEOzs7OEJBRVM7QUFDUixXQUFLakIsS0FBTCxHQUFhLElBQWI7QUFDQSxXQUFLaUIsTUFBTDtBQUNEOzs7OztBQWNEO2dDQUNZO0FBQ1YsVUFBTUMsUUFBUSxJQUFkO0FBQ0E7QUFDQUMsU0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBRFksbUJBQ0pDLEdBREksRUFDQztBQUNYLGNBQUlBLElBQUlDLFdBQUosQ0FBZ0IsZ0JBQWhCLENBQUosRUFBdUM7QUFDckM7QUFDRCxXQUZELE1BRU87QUFDTEwsa0JBQU1GLE9BQU47QUFDRDtBQUNGLFNBUFc7QUFRWlEsWUFSWSxnQkFRUEYsR0FSTyxFQVFGO0FBQ1JKLGdCQUFNRixPQUFOO0FBQ0Q7QUFWVyxPQUFkO0FBWUQ7OzsyQkFFTVIsQyxFQUFHO0FBQ1I7QUFDRDs7OztFQXREbUNpQixlQUFLQyxTOztrQkFBdEI1QixRIiwiZmlsZSI6ImxvZ2luX2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBsb2dpbiBmcm9tICdsaWJzL2xvZ2luJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Cb3ggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHNob3duOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9XG4gIH1cblxuICBkYXRhID0ge1xuICB9XG5cbiAgaGlkZUJveCgpIHtcbiAgICB0aGlzLnNob3duID0gZmFsc2VcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cblxuICBzaG93Qm94KCkge1xuICAgIHRoaXMuc2hvd24gPSB0cnVlXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBnZXRVc2VySW5mbyhlKSB7XG4gICAgICAvLyDmjojmnYPnmbvlvZXnqpflj6PlhYHorrjmiJbogIXmi5Lnu53mk43kvZzlm57osINcbiAgICAgIHRoaXMuaGlkZUJveCgpXG4gICAgICBpZiAoZS5kZXRhaWwudXNlckluZm8pIHtcbiAgICAgICAgbG9naW4udG9Mb2dpbihlLmRldGFpbCwgdGhpcy4kcGFyZW50LmxvZ2luU3VjY2VzcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd0JveCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8g6L+b5YWl6aG16Z2i5b+F6ZyA5o6I5p2D55qE6ZyA5rGC55u05o6l5Zyob25Mb2Fk5Lit5omn6KGM5bCx5aW9XG4gIGxvZ2luQXV0aCgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXNcbiAgICAvLyDmn6XnnIvmmK/lkKbmjojmnYNcbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ewXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuc2hvd0JveCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsKHJlcykge1xuICAgICAgICBfdGhpcy5zaG93Qm94KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25Mb2FkKGUpIHtcbiAgICAvLyB0aGlzLmxvZ2luQXV0aCgpXG4gIH1cbn1cbiJdfQ==