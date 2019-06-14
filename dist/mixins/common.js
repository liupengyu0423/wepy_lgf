'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var testMixin = function (_wepy$mixin) {
  _inherits(testMixin, _wepy$mixin);

  function testMixin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, testMixin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = testMixin.__proto__ || Object.getPrototypeOf(testMixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      // login_box组件中显示隐藏控制参数
      showLoginBox: false,
      loginSuccess: null,
      loginFail: null
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(testMixin, [{
    key: 'onShow',
    value: function onShow() {
      console.log('mixin onShow');
      console.log('这里可以加入统计相关代码');
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      console.log('mixin onLoad');
    }
  }]);

  return testMixin;
}(_wepy2.default.mixin);

exports.default = testMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJ0ZXN0TWl4aW4iLCJkYXRhIiwic2hvd0xvZ2luQm94IiwibG9naW5TdWNjZXNzIiwibG9naW5GYWlsIiwibWV0aG9kcyIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwibWl4aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSSxHQUFPO0FBQ0w7QUFDQUMsb0JBQWMsS0FGVDtBQUdMQyxvQkFBYyxJQUhUO0FBSUxDLGlCQUFXO0FBSk4sSyxRQU1QQyxPLEdBQVUsRTs7Ozs7NkJBR0Q7QUFDUEMsY0FBUUMsR0FBUixDQUFZLGNBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZLGNBQVo7QUFDRDs7OzZCQUVRO0FBQ1BELGNBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0Q7Ozs7RUFqQm9DQyxlQUFLQyxLOztrQkFBdkJULFMiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdE1peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XG4gIGRhdGEgPSB7XG4gICAgLy8gbG9naW5fYm9457uE5Lu25Lit5pi+56S66ZqQ6JeP5o6n5Yi25Y+C5pWwXG4gICAgc2hvd0xvZ2luQm94OiBmYWxzZSxcbiAgICBsb2dpblN1Y2Nlc3M6IG51bGwsXG4gICAgbG9naW5GYWlsOiBudWxsXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgICBjb25zb2xlLmxvZygnbWl4aW4gb25TaG93JylcbiAgICBjb25zb2xlLmxvZygn6L+Z6YeM5Y+v5Lul5Yqg5YWl57uf6K6h55u45YWz5Luj56CBJylcbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnbWl4aW4gb25Mb2FkJylcbiAgfVxufVxuIl19