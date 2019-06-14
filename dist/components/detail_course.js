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

var LoginBox = function (_wepy$component) {
  _inherits(LoginBox, _wepy$component);

  function LoginBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoginBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginBox.__proto__ || Object.getPrototypeOf(LoginBox)).call.apply(_ref, [this].concat(args))), _this), _this.props = ['coursesData', 'iphonex'], _this.data = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoginBox, [{
    key: 'onLoad',
    value: function onLoad(e) {
      this.$apply();
      // this.loginAuth()
    }
  }]);

  return LoginBox;
}(_wepy2.default.component);

exports.default = LoginBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbF9jb3Vyc2UuanMiXSwibmFtZXMiOlsiTG9naW5Cb3giLCJwcm9wcyIsImRhdGEiLCJlIiwiJGFwcGx5Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxLLEdBQVEsQ0FBQyxhQUFELEVBQWdCLFNBQWhCLEMsUUFFUkMsSSxHQUFPLEU7Ozs7OzJCQUdBQyxDLEVBQUc7QUFDUixXQUFLQyxNQUFMO0FBQ0E7QUFDRDs7OztFQVRtQ0MsZUFBS0MsUzs7a0JBQXRCTixRIiwiZmlsZSI6ImRldGFpbF9jb3Vyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkJveCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSBbJ2NvdXJzZXNEYXRhJywgJ2lwaG9uZXgnXVxuXG4gIGRhdGEgPSB7XG4gIH1cblxuICBvbkxvYWQoZSkge1xuICAgIHRoaXMuJGFwcGx5KClcbiAgICAvLyB0aGlzLmxvZ2luQXV0aCgpXG4gIH1cbn1cbiJdfQ==