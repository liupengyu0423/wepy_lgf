'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * 登录相关接口
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _interface = require('./interface.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var login = function () {
  function login() {
    _classCallCheck(this, login);
  }

  _createClass(login, null, [{
    key: 'doLogin',
    value: function doLogin(page, callback, failFn) {
      // 需要校验登录的按钮调用
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            callback && callback();
            return;
          } else {
            try {
              page.showLoginBox = true;
              page.loginSuccess = callback;
              page.loginFail = failFn;
              page.$apply();
            } catch (err) {
              console.log(err);
            }
          }
        }
      });
    }
  }, {
    key: 'toLogin',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(wxUserRes, callback) {
        var clientType, userInfo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 公司内部登录接口获取用户信息可以获取userid，用于接口调用用户信息校验
                clientType = this.getClientType();

                console.log();
                _context.next = 4;
                return _interface.Http.post({
                  url: _interface.Apis.url + _interface.Apis.update,
                  data: {
                    openid: wx.getStorageSync("openID"),
                    avatar: wxUserRes.userInfo.avatarUrl,
                    nickname: wxUserRes.userInfo.nickName,
                    gender: wxUserRes.userInfo.gender,
                    city: wxUserRes.userInfo.city,
                    province: wxUserRes.userInfo.province,
                    country: wxUserRes.userInfo.country
                  }
                });

              case 4:
                userInfo = _context.sent;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function toLogin(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return toLogin;
    }()
  }, {
    key: 'getClientType',
    value: function getClientType() {
      var systemInfo = _wepy2.default.getSystemInfoSync();
      var clientType = systemInfo.system && systemInfo.system.split(' ')[0].toLowerCase();
      return clientType || systemInfo['model'];
    }
  }]);

  return login;
}();

exports.default = login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwicGFnZSIsImNhbGxiYWNrIiwiZmFpbEZuIiwid3giLCJnZXRTZXR0aW5nIiwic3VjY2VzcyIsInJlcyIsImF1dGhTZXR0aW5nIiwic2hvd0xvZ2luQm94IiwibG9naW5TdWNjZXNzIiwibG9naW5GYWlsIiwiJGFwcGx5IiwiZXJyIiwiY29uc29sZSIsImxvZyIsInd4VXNlclJlcyIsImNsaWVudFR5cGUiLCJnZXRDbGllbnRUeXBlIiwiSHR0cCIsInBvc3QiLCJ1cmwiLCJBcGlzIiwidXBkYXRlIiwiZGF0YSIsIm9wZW5pZCIsImdldFN0b3JhZ2VTeW5jIiwiYXZhdGFyIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJuaWNrbmFtZSIsIm5pY2tOYW1lIiwiZ2VuZGVyIiwiY2l0eSIsInByb3ZpbmNlIiwiY291bnRyeSIsInN5c3RlbUluZm8iLCJ3ZXB5IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJzeXN0ZW0iLCJzcGxpdCIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3FqQkFBQTs7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7OztJQUlxQkEsSzs7Ozs7Ozs0QkFDSkMsSSxFQUFNQyxRLEVBQVVDLE0sRUFBUTtBQUNyQztBQUNBQyxTQUFHQyxVQUFILENBQWM7QUFDWkMsaUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQixjQUFHQSxJQUFJQyxXQUFKLENBQWdCLGdCQUFoQixDQUFILEVBQXFDO0FBQ25DTix3QkFBWUEsVUFBWjtBQUNBO0FBQ0QsV0FIRCxNQUdPO0FBQ0wsZ0JBQUk7QUFDRkQsbUJBQUtRLFlBQUwsR0FBb0IsSUFBcEI7QUFDQVIsbUJBQUtTLFlBQUwsR0FBb0JSLFFBQXBCO0FBQ0FELG1CQUFLVSxTQUFMLEdBQWlCUixNQUFqQjtBQUNBRixtQkFBS1csTUFBTDtBQUNELGFBTEQsQ0FLRSxPQUFNQyxHQUFOLEVBQVc7QUFDWEMsc0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0Y7QUFDRjtBQWZXLE9BQWQ7QUFpQkQ7Ozs7MEZBRW9CRyxTLEVBQVdkLFE7Ozs7OztBQUM5QjtBQUNNZSwwQixHQUFhLEtBQUtDLGFBQUwsRTs7QUFDbkJKLHdCQUFRQyxHQUFSOzt1QkFDcUJJLGdCQUFLQyxJQUFMLENBQVU7QUFDN0JDLHVCQUFLQyxnQkFBS0QsR0FBTCxHQUFXQyxnQkFBS0MsTUFEUTtBQUU3QkMsd0JBQU07QUFDSkMsNEJBQVFyQixHQUFHc0IsY0FBSCxDQUFrQixRQUFsQixDQURKO0FBRUpDLDRCQUFRWCxVQUFVWSxRQUFWLENBQW1CQyxTQUZ2QjtBQUdKQyw4QkFBVWQsVUFBVVksUUFBVixDQUFtQkcsUUFIekI7QUFJSkMsNEJBQVFoQixVQUFVWSxRQUFWLENBQW1CSSxNQUp2QjtBQUtKQywwQkFBTWpCLFVBQVVZLFFBQVYsQ0FBbUJLLElBTHJCO0FBTUpDLDhCQUFVbEIsVUFBVVksUUFBVixDQUFtQk0sUUFOekI7QUFPSkMsNkJBQVNuQixVQUFVWSxRQUFWLENBQW1CTztBQVB4QjtBQUZ1QixpQkFBVixDOzs7QUFBakJQLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBK0JpQjtBQUNyQixVQUFJUSxhQUFhQyxlQUFLQyxpQkFBTCxFQUFqQjtBQUNBLFVBQU1yQixhQUFhbUIsV0FBV0csTUFBWCxJQUFxQkgsV0FBV0csTUFBWCxDQUFrQkMsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkIsQ0FBN0IsRUFBZ0NDLFdBQWhDLEVBQXhDO0FBQ0EsYUFBT3hCLGNBQWNtQixXQUFXLE9BQVgsQ0FBckI7QUFDRDs7Ozs7O2tCQTdEa0JwQyxLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiog55m75b2V55u45YWz5o6l5Y+jXG4qL1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7XG4gIEFwaXMsXG4gIEh0dHBcbn0gZnJvbSAnbGlicy9pbnRlcmZhY2UnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsb2dpbiB7XG4gIHN0YXRpYyBkb0xvZ2luKHBhZ2UsIGNhbGxiYWNrLCBmYWlsRm4pIHtcbiAgICAvLyDpnIDopoHmoKHpqoznmbvlvZXnmoTmjInpkq7osIPnlKhcbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgaWYocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKXtcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2Uuc2hvd0xvZ2luQm94ID0gdHJ1ZVxuICAgICAgICAgICAgcGFnZS5sb2dpblN1Y2Nlc3MgPSBjYWxsYmFja1xuICAgICAgICAgICAgcGFnZS5sb2dpbkZhaWwgPSBmYWlsRm5cbiAgICAgICAgICAgIHBhZ2UuJGFwcGx5KClcbiAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgYXN5bmMgdG9Mb2dpbih3eFVzZXJSZXMsIGNhbGxiYWNrKSB7XG4gICAgLy8g5YWs5Y+45YaF6YOo55m75b2V5o6l5Y+j6I635Y+W55So5oi35L+h5oGv5Y+v5Lul6I635Y+WdXNlcmlk77yM55So5LqO5o6l5Y+j6LCD55So55So5oi35L+h5oGv5qCh6aqMXG4gICAgY29uc3QgY2xpZW50VHlwZSA9IHRoaXMuZ2V0Q2xpZW50VHlwZSgpXG4gICAgY29uc29sZS5sb2coKVxuICAgIGxldCB1c2VySW5mbyA9IGF3YWl0IEh0dHAucG9zdCh7XG4gICAgICB1cmw6IEFwaXMudXJsICsgQXBpcy51cGRhdGUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9wZW5pZDogd3guZ2V0U3RvcmFnZVN5bmMoXCJvcGVuSURcIiksXG4gICAgICAgIGF2YXRhcjogd3hVc2VyUmVzLnVzZXJJbmZvLmF2YXRhclVybCxcbiAgICAgICAgbmlja25hbWU6IHd4VXNlclJlcy51c2VySW5mby5uaWNrTmFtZSxcbiAgICAgICAgZ2VuZGVyOiB3eFVzZXJSZXMudXNlckluZm8uZ2VuZGVyLFxuICAgICAgICBjaXR5OiB3eFVzZXJSZXMudXNlckluZm8uY2l0eSxcbiAgICAgICAgcHJvdmluY2U6IHd4VXNlclJlcy51c2VySW5mby5wcm92aW5jZSxcbiAgICAgICAgY291bnRyeTogd3hVc2VyUmVzLnVzZXJJbmZvLmNvdW50cnlcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIGlmICh1c2VySW5mby5fb2spIHtcbiAgICAvLyAgIHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEudXNlckluZm8gPSB1c2VySW5mby5fcmVzdWx0IHx8IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEudXNlckluZm9cbiAgICAvLyAgIHRyeSB7XG4gICAgLy8gICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdVU0VSX0lORk8nLCB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnVzZXJJbmZvKVxuICAgIC8vICAgfSBjYXRjaCAoZSkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhlKVxuICAgIC8vICAgfVxuICAgIC8vICAgLy8g55m75b2V5rue5ZCO55qE6K+d54q25oCB6I635Y+W5LiN5YeG56Gu77yM5omA5Lul55m75b2V5oiQ5Yqf5ZCO5YaN5qyh6I635Y+W54q25oCBXG4gICAgLy8gICAvLyB1dGlscy5nZXRVc2VyU3RhdHVzKHRydWUpXG4gICAgLy8gICAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSAmJiBjYWxsYmFjaygpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB3eC5zaG93TW9kYWwoe1xuICAgIC8vICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgLy8gICAgIGNvbnRlbnQ6ICfnmbvlvZXlvILluLjvvIzor7fnqI3lkI7lho3or5UnLFxuICAgIC8vICAgICBzaG93Q2FuY2VsOiBmYWxzZVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gIH1cblxuICBzdGF0aWMgZ2V0Q2xpZW50VHlwZSgpIHtcbiAgICBsZXQgc3lzdGVtSW5mbyA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxuICAgIGNvbnN0IGNsaWVudFR5cGUgPSBzeXN0ZW1JbmZvLnN5c3RlbSAmJiBzeXN0ZW1JbmZvLnN5c3RlbS5zcGxpdCgnICcpWzBdLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gY2xpZW50VHlwZSB8fCBzeXN0ZW1JbmZvWydtb2RlbCddXG4gIH1cbn1cbiJdfQ==