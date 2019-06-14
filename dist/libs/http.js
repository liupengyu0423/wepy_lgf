'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * http接口中的参数param说明
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * param = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *   url: '',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *   data: {},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *   header: {},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *   method: '',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *   dataType: 'json'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTTP = function () {
  function HTTP() {
    _classCallCheck(this, HTTP);
  }

  _createClass(HTTP, null, [{
    key: 'request',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { loading: true, title: '加载中' };
        var result, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = null;

                opts.loading && _wepy2.default.showLoading({ title: opts.title || '加载中' });
                _context.prev = 2;
                _context.next = 5;
                return _wepy2.default.request(param);

              case 5:
                res = _context.sent;

                if (res.data.errcode === 200) {
                  result = res.data;
                  _wepy2.default.hideLoading();
                } else {
                  // 这里添加授权登录失败判断
                  _wepy2.default.showToast({
                    title: res.data.errmsg,
                    icon: 'none',
                    duration: 1000
                  });
                }
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](2);

                opts.loading && _wepy2.default.hideLoading();
                _wepy2.default.showToast({
                  title: '服务器出错了',
                  icon: 'none',
                  duration: 1000
                });

              case 13:
                return _context.abrupt('return', result);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function request() {
        return _ref.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: 'get',
    value: function get(param, opts) {
      param = _extends({}, param, { method: 'GET', dataType: 'json' });
      return this.request(param, opts);
    }
  }, {
    key: 'post',
    value: function post(param, opts) {
      param = _extends({}, param, { method: 'POST', dataType: 'json', header: { "Content-Type": "application/x-www-form-urlencoded" } });
      return this.request(param, opts);
    }
  }, {
    key: 'put',
    value: function put(param, opts) {
      param = _extends({}, param, { method: 'PUT', dataType: 'json' });
      return this.request(param, opts);
    }
  }]);

  return HTTP;
}();

exports.default = HTTP;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuanMiXSwibmFtZXMiOlsiSFRUUCIsInBhcmFtIiwib3B0cyIsImxvYWRpbmciLCJ0aXRsZSIsInJlc3VsdCIsIndlcHkiLCJzaG93TG9hZGluZyIsInJlcXVlc3QiLCJyZXMiLCJkYXRhIiwiZXJyY29kZSIsImhpZGVMb2FkaW5nIiwic2hvd1RvYXN0IiwiZXJybXNnIiwiaWNvbiIsImR1cmF0aW9uIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJoZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztxakJBQUE7Ozs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7WUFDRUMsSyx1RUFBUSxFO1lBQUlDLEksdUVBQU8sRUFBQ0MsU0FBUyxJQUFWLEVBQWdCQyxPQUFPLEtBQXZCLEU7Ozs7OztBQUNsQ0Msc0IsR0FBUyxJOztBQUNiSCxxQkFBS0MsT0FBTCxJQUFnQkcsZUFBS0MsV0FBTCxDQUFpQixFQUFDSCxPQUFPRixLQUFLRSxLQUFMLElBQWMsS0FBdEIsRUFBakIsQ0FBaEI7Ozt1QkFFa0JFLGVBQUtFLE9BQUwsQ0FBYVAsS0FBYixDOzs7QUFBWlEsbUI7O0FBQ0osb0JBQUlBLElBQUlDLElBQUosQ0FBU0MsT0FBVCxLQUFxQixHQUF6QixFQUE4QjtBQUM1Qk4sMkJBQVNJLElBQUlDLElBQWI7QUFDQUosaUNBQUtNLFdBQUw7QUFDRCxpQkFIRCxNQUdPO0FBQ0w7QUFDQU4saUNBQUtPLFNBQUwsQ0FBZTtBQUNiVCwyQkFBT0ssSUFBSUMsSUFBSixDQUFTSSxNQURIO0FBRWJDLDBCQUFNLE1BRk87QUFHYkMsOEJBQVU7QUFIRyxtQkFBZjtBQUtEOzs7Ozs7OztBQUVEZCxxQkFBS0MsT0FBTCxJQUFnQkcsZUFBS00sV0FBTCxFQUFoQjtBQUNBTiwrQkFBS08sU0FBTCxDQUFlO0FBQ2JULHlCQUFPLFFBRE07QUFFYlcsd0JBQU0sTUFGTztBQUdiQyw0QkFBVTtBQUhHLGlCQUFmOzs7aURBTUtYLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFHRUosSyxFQUFPQyxJLEVBQU07QUFDdEJELDJCQUFZQSxLQUFaLEVBQXNCLEVBQUNnQixRQUFRLEtBQVQsRUFBZ0JDLFVBQVUsTUFBMUIsRUFBdEI7QUFDQSxhQUFPLEtBQUtWLE9BQUwsQ0FBYVAsS0FBYixFQUFvQkMsSUFBcEIsQ0FBUDtBQUNEOzs7eUJBRVdELEssRUFBT0MsSSxFQUFNO0FBQ3ZCRCwyQkFBWUEsS0FBWixFQUFzQixFQUFDZ0IsUUFBUSxNQUFULEVBQWlCQyxVQUFVLE1BQTNCLEVBQW1DQyxRQUFRLEVBQUUsZ0JBQWdCLG1DQUFsQixFQUEzQyxFQUF0QjtBQUNBLGFBQU8sS0FBS1gsT0FBTCxDQUFhUCxLQUFiLEVBQW9CQyxJQUFwQixDQUFQO0FBQ0Q7Ozt3QkFFVUQsSyxFQUFPQyxJLEVBQU07QUFDdEJELDJCQUFZQSxLQUFaLEVBQXNCLEVBQUNnQixRQUFRLEtBQVQsRUFBZ0JDLFVBQVUsTUFBMUIsRUFBdEI7QUFDQSxhQUFPLEtBQUtWLE9BQUwsQ0FBYVAsS0FBYixFQUFvQkMsSUFBcEIsQ0FBUDtBQUNEOzs7Ozs7a0JBekNrQkYsSSIsImZpbGUiOiJodHRwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiogaHR0cOaOpeWPo+S4reeahOWPguaVsHBhcmFt6K+05piOXG4qIHBhcmFtID0ge1xuKiAgIHVybDogJycsXG4qICAgZGF0YToge30sXG4qICAgaGVhZGVyOiB7fSxcbiogICBtZXRob2Q6ICcnLFxuKiAgIGRhdGFUeXBlOiAnanNvbidcbiogfVxuKi9cbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVFRQIHtcbiAgc3RhdGljIGFzeW5jIHJlcXVlc3QocGFyYW0gPSB7fSwgb3B0cyA9IHtsb2FkaW5nOiB0cnVlLCB0aXRsZTogJ+WKoOi9veS4rSd9KSB7XG4gICAgbGV0IHJlc3VsdCA9IG51bGxcbiAgICBvcHRzLmxvYWRpbmcgJiYgd2VweS5zaG93TG9hZGluZyh7dGl0bGU6IG9wdHMudGl0bGUgfHwgJ+WKoOi9veS4rSd9KVxuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHBhcmFtKTtcbiAgICAgIGlmIChyZXMuZGF0YS5lcnJjb2RlID09PSAyMDApIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzLmRhdGFcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDov5nph4zmt7vliqDmjojmnYPnmbvlvZXlpLHotKXliKTmlq1cbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5lcnJtc2csXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBvcHRzLmxvYWRpbmcgJiYgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5pyN5Yqh5Zmo5Ye66ZSZ5LqGJyxcbiAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgc3RhdGljIGdldChwYXJhbSwgb3B0cykge1xuICAgIHBhcmFtID0gey4uLnBhcmFtLCAuLi57bWV0aG9kOiAnR0VUJywgZGF0YVR5cGU6ICdqc29uJ319XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSwgb3B0cylcbiAgfVxuXG4gIHN0YXRpYyBwb3N0KHBhcmFtLCBvcHRzKSB7XG4gICAgcGFyYW0gPSB7Li4ucGFyYW0sIC4uLnttZXRob2Q6ICdQT1NUJywgZGF0YVR5cGU6ICdqc29uJywgaGVhZGVyOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfX19XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXJhbSwgb3B0cylcbiAgfVxuXG4gIHN0YXRpYyBwdXQocGFyYW0sIG9wdHMpIHtcbiAgICBwYXJhbSA9IHsuLi5wYXJhbSwgLi4ue21ldGhvZDogJ1BVVCcsIGRhdGFUeXBlOiAnanNvbid9fVxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QocGFyYW0sIG9wdHMpXG4gIH1cblxufVxuIl19