'use strict';

var _showdown = require('./showdown.js');

var _showdown2 = _interopRequireDefault(_showdown);

var _html2json = require('./html2json.js');

var _html2json2 = _interopRequireDefault(_html2json);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * author: Di (微信小程序开发工程师)
                                                                                                                                                                                                                   * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
                                                                                                                                                                                                                   *               垂直微信小程序开发交流社区
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * github地址: https://github.com/icindy/wxParse
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * for: 微信小程序富文本解析
                                                                                                                                                                                                                   * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
                                                                                                                                                                                                                   */

/**
 * utils函数引入
 **/


/**
 * 配置及公有属性
 **/
var realWindowWidth = 0;
var realWindowHeight = 0;
wx.getSystemInfo({
  success: function success(res) {
    realWindowWidth = res.windowWidth;
    realWindowHeight = res.windowHeight;
  }
});

/**
 * 主函数入口区
 **/
function wxParse() {
  var bindName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'wxParseData';
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'html';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '<div class="color:red;">数据不能为空</div>';
  var target = arguments[3];
  var imagePadding = arguments[4];

  var that = target;
  var transData = {}; //存放转化后的数据
  if (type == 'html') {
    transData = _html2json2.default.html2json(data, bindName);
    //console.log(JSON.stringify(transData, ' ', ' '))
  } else if (type == 'md' || type == 'markdown') {
    var converter = new _showdown2.default.Converter();
    var html = converter.makeHtml(data);
    transData = _html2json2.default.html2json(html, bindName);
    //console.log(JSON.stringify(transData, ' ', ' '))
  }
  transData.view = {};
  transData.view.imagePadding = 0;
  if (typeof imagePadding != 'undefined') {
    transData.view.imagePadding = imagePadding;
  }
  var bindData = {};
  bindData[bindName] = transData;
  that.setData(bindData);
  that.bindData = bindData;
  that.wxParseImgLoad = wxParseImgLoad;
  that.wxParseImgTap = wxParseImgTap;

  //新增
  bindData.wxParseImgLoad = wxParseImgLoad;
  bindData.wxParseImgTap = wxParseImgTap;

  return bindData;
}

// 图片点击事件
function wxParseImgTap(e, bindData) {
  var that = this;
  var nowImgUrl = e.target.dataset.src;
  var tagFrom = e.target.dataset.from;

  if (typeof tagFrom != 'undefined' && tagFrom.length > 0) {
    wx.previewImage({
      current: nowImgUrl, // 当前显示图片的http链接
      urls: bindData[tagFrom].imageUrls // 需要预览的图片http链接列表
    });
  }
}

/**
 * 图片视觉宽高计算函数区
 **/
function wxParseImgLoad(e) {
  var that = this;
  var tagFrom = e.target.dataset.from;
  var idx = e.target.dataset.idx;
  if (typeof tagFrom != 'undefined' && tagFrom.length > 0) {
    calMoreImageInfo(e, idx, that, tagFrom);
  }
}

// 假循环获取计算图片视觉最佳宽高
function calMoreImageInfo(e, idx, that, bindName) {
  var _that$setData;

  var temData = that.data[bindName];
  if (!temData || temData.images.length == 0) {
    return;
  }
  var temImages = temData.images;
  //因为无法获取view宽度 需要自定义padding进行计算，稍后处理
  var recal = wxAutoImageCal(e.detail.width, e.detail.height, that, bindName);
  // temImages[idx].width = recal.imageWidth;
  // temImages[idx].height = recal.imageheight;
  // temData.images = temImages;
  // var bindData = {};
  // bindData[bindName] = temData;
  // that.setData(bindData);
  var index = temImages[idx].index;
  var key = '' + bindName;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = index.split('.')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      key += '.nodes[' + i + ']';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var keyW = key + '.width';
  var keyH = key + '.height';
  that.setData((_that$setData = {}, _defineProperty(_that$setData, keyW, recal.imageWidth), _defineProperty(_that$setData, keyH, recal.imageheight), _that$setData));
}

// 计算视觉优先的图片宽高
function wxAutoImageCal(originalWidth, originalHeight, that, bindName) {
  //获取图片的原始长宽
  var windowWidth = 0,
      windowHeight = 0;
  var autoWidth = 0,
      autoHeight = 0;
  var results = {};
  var padding = that.data[bindName].view.imagePadding;
  windowWidth = realWindowWidth - 2 * padding;
  windowHeight = realWindowHeight;
  //判断按照那种方式进行缩放
  // console.log("windowWidth" + windowWidth);
  if (originalWidth > windowWidth) {
    //在图片width大于手机屏幕width时候
    autoWidth = windowWidth;
    // console.log("autoWidth" + autoWidth);
    autoHeight = autoWidth * originalHeight / originalWidth;
    // console.log("autoHeight" + autoHeight);
    results.imageWidth = autoWidth;
    results.imageheight = autoHeight;
  } else {
    //否则展示原来的数据
    results.imageWidth = originalWidth;
    results.imageheight = originalHeight;
  }
  return results;
}

function wxParseTemArray(temArrayName, bindNameReg, total, that) {
  var array = [];
  var temData = that.data;
  var obj = null;
  for (var i = 0; i < total; i++) {
    var simArr = temData[bindNameReg + i].nodes;
    array.push(simArr);
  }

  temArrayName = temArrayName || 'wxParseTemArray';
  obj = JSON.parse('{"' + temArrayName + '":""}');
  obj[temArrayName] = array;
  that.setData(obj);
}

/**
 * 配置emojis
 *
 */

function emojisInit() {
  var reg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var baseSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/wxParse/emojis/';
  var emojis = arguments[2];

  _html2json2.default.emojisInit(reg, baseSrc, emojis);
}

module.exports = {
  wxParse: wxParse,
  wxParseImgTap: wxParseImgTap,
  wxParseTemArray: wxParseTemArray,
  emojisInit: emojisInit
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UGFyc2UuanMiXSwibmFtZXMiOlsicmVhbFdpbmRvd1dpZHRoIiwicmVhbFdpbmRvd0hlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsInd4UGFyc2UiLCJiaW5kTmFtZSIsInR5cGUiLCJkYXRhIiwidGFyZ2V0IiwiaW1hZ2VQYWRkaW5nIiwidGhhdCIsInRyYW5zRGF0YSIsIkh0bWxUb0pzb24iLCJodG1sMmpzb24iLCJjb252ZXJ0ZXIiLCJzaG93ZG93biIsIkNvbnZlcnRlciIsImh0bWwiLCJtYWtlSHRtbCIsInZpZXciLCJiaW5kRGF0YSIsInNldERhdGEiLCJ3eFBhcnNlSW1nTG9hZCIsInd4UGFyc2VJbWdUYXAiLCJlIiwibm93SW1nVXJsIiwiZGF0YXNldCIsInNyYyIsInRhZ0Zyb20iLCJmcm9tIiwibGVuZ3RoIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJpbWFnZVVybHMiLCJpZHgiLCJjYWxNb3JlSW1hZ2VJbmZvIiwidGVtRGF0YSIsImltYWdlcyIsInRlbUltYWdlcyIsInJlY2FsIiwid3hBdXRvSW1hZ2VDYWwiLCJkZXRhaWwiLCJ3aWR0aCIsImhlaWdodCIsImluZGV4Iiwia2V5Iiwic3BsaXQiLCJpIiwia2V5VyIsImtleUgiLCJpbWFnZVdpZHRoIiwiaW1hZ2VoZWlnaHQiLCJvcmlnaW5hbFdpZHRoIiwib3JpZ2luYWxIZWlnaHQiLCJhdXRvV2lkdGgiLCJhdXRvSGVpZ2h0IiwicmVzdWx0cyIsInBhZGRpbmciLCJ3eFBhcnNlVGVtQXJyYXkiLCJ0ZW1BcnJheU5hbWUiLCJiaW5kTmFtZVJlZyIsInRvdGFsIiwiYXJyYXkiLCJvYmoiLCJzaW1BcnIiLCJub2RlcyIsInB1c2giLCJKU09OIiwicGFyc2UiLCJlbW9qaXNJbml0IiwicmVnIiwiYmFzZVNyYyIsImVtb2ppcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7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LFlBQUosSUFBb0JHLEtBQXBCO0FBQ0FyRCxPQUFLVyxPQUFMLENBQWEyQyxHQUFiO0FBQ0Q7O0FBRUQ7Ozs7O0FBS0EsU0FBU00sVUFBVCxHQUFxRTtBQUFBLE1BQWhEQyxHQUFnRCx1RUFBMUMsRUFBMEM7QUFBQSxNQUF0Q0MsT0FBc0MsdUVBQTVCLGtCQUE0QjtBQUFBLE1BQVJDLE1BQVE7O0FBQ25FN0Qsc0JBQVcwRCxVQUFYLENBQXNCQyxHQUF0QixFQUEyQkMsT0FBM0IsRUFBb0NDLE1BQXBDO0FBQ0Q7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnZFLFdBQVNBLE9BRE07QUFFZm1CLGlCQUFlQSxhQUZBO0FBR2ZvQyxtQkFBaUJBLGVBSEY7QUFJZlcsY0FBWUE7QUFKRyxDQUFqQiIsImZpbGUiOiJ3eFBhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBhdXRob3I6IERpICjlvq7kv6HlsI/nqIvluo/lvIDlj5Hlt6XnqIvluIgpXG4gKiBvcmdhbml6YXRpb246IFdlQXBwRGV2KOW+ruS/oeWwj+eoi+W6j+W8gOWPkeiuuuWdmykoaHR0cDovL3dlYXBwZGV2LmNvbSlcbiAqICAgICAgICAgICAgICAg5Z6C55u05b6u5L+h5bCP56iL5bqP5byA5Y+R5Lqk5rWB56S+5Yy6XG4gKlxuICogZ2l0aHVi5Zyw5Z2AOiBodHRwczovL2dpdGh1Yi5jb20vaWNpbmR5L3d4UGFyc2VcbiAqXG4gKiBmb3I6IOW+ruS/oeWwj+eoi+W6j+WvjOaWh+acrOino+aekFxuICogZGV0YWlsIDogaHR0cDovL3dlYXBwZGV2LmNvbS90L3d4cGFyc2UtYWxwaGEwLTEtaHRtbC1tYXJrZG93bi8xODRcbiAqL1xuXG4vKipcbiAqIHV0aWxz5Ye95pWw5byV5YWlXG4gKiovXG5pbXBvcnQgc2hvd2Rvd24gZnJvbSAnLi9zaG93ZG93bi5qcydcbmltcG9ydCBIdG1sVG9Kc29uIGZyb20gJy4vaHRtbDJqc29uLmpzJ1xuXG4vKipcbiAqIOmFjee9ruWPiuWFrOacieWxnuaAp1xuICoqL1xudmFyIHJlYWxXaW5kb3dXaWR0aCA9IDBcbnZhciByZWFsV2luZG93SGVpZ2h0ID0gMFxud3guZ2V0U3lzdGVtSW5mbyh7XG4gIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICByZWFsV2luZG93V2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICByZWFsV2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICB9XG59KVxuXG4vKipcbiAqIOS4u+WHveaVsOWFpeWPo+WMulxuICoqL1xuZnVuY3Rpb24gd3hQYXJzZSAoYmluZE5hbWUgPSAnd3hQYXJzZURhdGEnLCB0eXBlID0gJ2h0bWwnLCBkYXRhID0gJzxkaXYgY2xhc3M9XCJjb2xvcjpyZWQ7XCI+5pWw5o2u5LiN6IO95Li656m6PC9kaXY+JywgdGFyZ2V0LCBpbWFnZVBhZGRpbmcpIHtcbiAgdmFyIHRoYXQgPSB0YXJnZXRcbiAgdmFyIHRyYW5zRGF0YSA9IHt9Ly/lrZjmlL7ovazljJblkI7nmoTmlbDmja5cbiAgaWYgKHR5cGUgPT0gJ2h0bWwnKSB7XG4gICAgdHJhbnNEYXRhID0gSHRtbFRvSnNvbi5odG1sMmpzb24oZGF0YSwgYmluZE5hbWUpXG4gICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0cmFuc0RhdGEsICcgJywgJyAnKSlcbiAgfSBlbHNlIGlmICh0eXBlID09ICdtZCcgfHwgdHlwZSA9PSAnbWFya2Rvd24nKSB7XG4gICAgdmFyIGNvbnZlcnRlciA9IG5ldyBzaG93ZG93bi5Db252ZXJ0ZXIoKVxuICAgIHZhciBodG1sID0gY29udmVydGVyLm1ha2VIdG1sKGRhdGEpXG4gICAgdHJhbnNEYXRhID0gSHRtbFRvSnNvbi5odG1sMmpzb24oaHRtbCwgYmluZE5hbWUpXG4gICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0cmFuc0RhdGEsICcgJywgJyAnKSlcbiAgfVxuICB0cmFuc0RhdGEudmlldyA9IHt9XG4gIHRyYW5zRGF0YS52aWV3LmltYWdlUGFkZGluZyA9IDBcbiAgaWYgKHR5cGVvZihpbWFnZVBhZGRpbmcpICE9ICd1bmRlZmluZWQnKSB7XG4gICAgdHJhbnNEYXRhLnZpZXcuaW1hZ2VQYWRkaW5nID0gaW1hZ2VQYWRkaW5nXG4gIH1cbiAgdmFyIGJpbmREYXRhID0ge31cbiAgYmluZERhdGFbYmluZE5hbWVdID0gdHJhbnNEYXRhXG4gIHRoYXQuc2V0RGF0YShiaW5kRGF0YSlcbiAgdGhhdC5iaW5kRGF0YSA9IGJpbmREYXRhXG4gIHRoYXQud3hQYXJzZUltZ0xvYWQgPSB3eFBhcnNlSW1nTG9hZFxuICB0aGF0Lnd4UGFyc2VJbWdUYXAgPSB3eFBhcnNlSW1nVGFwXG5cbiAgLy/mlrDlop5cbiAgYmluZERhdGEud3hQYXJzZUltZ0xvYWQgPSB3eFBhcnNlSW1nTG9hZFxuICBiaW5kRGF0YS53eFBhcnNlSW1nVGFwID0gd3hQYXJzZUltZ1RhcFxuXG4gIHJldHVybiBiaW5kRGF0YVxufVxuXG4vLyDlm77niYfngrnlh7vkuovku7ZcbmZ1bmN0aW9uIHd4UGFyc2VJbWdUYXAgKGUsIGJpbmREYXRhKSB7XG4gIHZhciB0aGF0ID0gdGhpc1xuICB2YXIgbm93SW1nVXJsID0gZS50YXJnZXQuZGF0YXNldC5zcmNcbiAgdmFyIHRhZ0Zyb20gPSBlLnRhcmdldC5kYXRhc2V0LmZyb21cblxuICBpZiAodHlwZW9mICh0YWdGcm9tKSAhPSAndW5kZWZpbmVkJyAmJiB0YWdGcm9tLmxlbmd0aCA+IDApIHtcbiAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgY3VycmVudDogbm93SW1nVXJsLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXG4gICAgICB1cmxzOiBiaW5kRGF0YVt0YWdGcm9tXS5pbWFnZVVybHMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiDlm77niYfop4bop4nlrr3pq5jorqHnrpflh73mlbDljLpcbiAqKi9cbmZ1bmN0aW9uIHd4UGFyc2VJbWdMb2FkIChlKSB7XG4gIHZhciB0aGF0ID0gdGhpc1xuICB2YXIgdGFnRnJvbSA9IGUudGFyZ2V0LmRhdGFzZXQuZnJvbVxuICB2YXIgaWR4ID0gZS50YXJnZXQuZGF0YXNldC5pZHhcbiAgaWYgKHR5cGVvZiAodGFnRnJvbSkgIT0gJ3VuZGVmaW5lZCcgJiYgdGFnRnJvbS5sZW5ndGggPiAwKSB7XG4gICAgY2FsTW9yZUltYWdlSW5mbyhlLCBpZHgsIHRoYXQsIHRhZ0Zyb20pXG4gIH1cbn1cblxuLy8g5YGH5b6q546v6I635Y+W6K6h566X5Zu+54mH6KeG6KeJ5pyA5L2z5a696auYXG5mdW5jdGlvbiBjYWxNb3JlSW1hZ2VJbmZvIChlLCBpZHgsIHRoYXQsIGJpbmROYW1lKSB7XG4gIHZhciB0ZW1EYXRhID0gdGhhdC5kYXRhW2JpbmROYW1lXVxuICBpZiAoIXRlbURhdGEgfHwgdGVtRGF0YS5pbWFnZXMubGVuZ3RoID09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdGVtSW1hZ2VzID0gdGVtRGF0YS5pbWFnZXNcbiAgLy/lm6DkuLrml6Dms5Xojrflj5Z2aWV35a695bqmIOmcgOimgeiHquWumuS5iXBhZGRpbmfov5vooYzorqHnrpfvvIznqI3lkI7lpITnkIZcbiAgdmFyIHJlY2FsID0gd3hBdXRvSW1hZ2VDYWwoZS5kZXRhaWwud2lkdGgsIGUuZGV0YWlsLmhlaWdodCwgdGhhdCwgYmluZE5hbWUpXG4gIC8vIHRlbUltYWdlc1tpZHhdLndpZHRoID0gcmVjYWwuaW1hZ2VXaWR0aDtcbiAgLy8gdGVtSW1hZ2VzW2lkeF0uaGVpZ2h0ID0gcmVjYWwuaW1hZ2VoZWlnaHQ7XG4gIC8vIHRlbURhdGEuaW1hZ2VzID0gdGVtSW1hZ2VzO1xuICAvLyB2YXIgYmluZERhdGEgPSB7fTtcbiAgLy8gYmluZERhdGFbYmluZE5hbWVdID0gdGVtRGF0YTtcbiAgLy8gdGhhdC5zZXREYXRhKGJpbmREYXRhKTtcbiAgdmFyIGluZGV4ID0gdGVtSW1hZ2VzW2lkeF0uaW5kZXhcbiAgdmFyIGtleSA9IGAke2JpbmROYW1lfWBcbiAgZm9yICh2YXIgaSBvZiBpbmRleC5zcGxpdCgnLicpKSBrZXkgKz0gYC5ub2Rlc1ske2l9XWBcbiAgdmFyIGtleVcgPSBrZXkgKyAnLndpZHRoJ1xuICB2YXIga2V5SCA9IGtleSArICcuaGVpZ2h0J1xuICB0aGF0LnNldERhdGEoe1xuICAgIFtrZXlXXTogcmVjYWwuaW1hZ2VXaWR0aCxcbiAgICBba2V5SF06IHJlY2FsLmltYWdlaGVpZ2h0LFxuICB9KVxufVxuXG4vLyDorqHnrpfop4bop4nkvJjlhYjnmoTlm77niYflrr3pq5hcbmZ1bmN0aW9uIHd4QXV0b0ltYWdlQ2FsIChvcmlnaW5hbFdpZHRoLCBvcmlnaW5hbEhlaWdodCwgdGhhdCwgYmluZE5hbWUpIHtcbiAgLy/ojrflj5blm77niYfnmoTljp/lp4vplb/lrr1cbiAgdmFyIHdpbmRvd1dpZHRoID0gMCwgd2luZG93SGVpZ2h0ID0gMFxuICB2YXIgYXV0b1dpZHRoID0gMCwgYXV0b0hlaWdodCA9IDBcbiAgdmFyIHJlc3VsdHMgPSB7fVxuICB2YXIgcGFkZGluZyA9IHRoYXQuZGF0YVtiaW5kTmFtZV0udmlldy5pbWFnZVBhZGRpbmdcbiAgd2luZG93V2lkdGggPSByZWFsV2luZG93V2lkdGggLSAyICogcGFkZGluZ1xuICB3aW5kb3dIZWlnaHQgPSByZWFsV2luZG93SGVpZ2h0XG4gIC8v5Yik5pat5oyJ54Wn6YKj56eN5pa55byP6L+b6KGM57yp5pS+XG4gIC8vIGNvbnNvbGUubG9nKFwid2luZG93V2lkdGhcIiArIHdpbmRvd1dpZHRoKTtcbiAgaWYgKG9yaWdpbmFsV2lkdGggPiB3aW5kb3dXaWR0aCkgey8v5Zyo5Zu+54mHd2lkdGjlpKfkuo7miYvmnLrlsY/luZV3aWR0aOaXtuWAmVxuICAgIGF1dG9XaWR0aCA9IHdpbmRvd1dpZHRoXG4gICAgLy8gY29uc29sZS5sb2coXCJhdXRvV2lkdGhcIiArIGF1dG9XaWR0aCk7XG4gICAgYXV0b0hlaWdodCA9IChhdXRvV2lkdGggKiBvcmlnaW5hbEhlaWdodCkgLyBvcmlnaW5hbFdpZHRoXG4gICAgLy8gY29uc29sZS5sb2coXCJhdXRvSGVpZ2h0XCIgKyBhdXRvSGVpZ2h0KTtcbiAgICByZXN1bHRzLmltYWdlV2lkdGggPSBhdXRvV2lkdGhcbiAgICByZXN1bHRzLmltYWdlaGVpZ2h0ID0gYXV0b0hlaWdodFxuICB9IGVsc2Ugey8v5ZCm5YiZ5bGV56S65Y6f5p2l55qE5pWw5o2uXG4gICAgcmVzdWx0cy5pbWFnZVdpZHRoID0gb3JpZ2luYWxXaWR0aFxuICAgIHJlc3VsdHMuaW1hZ2VoZWlnaHQgPSBvcmlnaW5hbEhlaWdodFxuICB9XG4gIHJldHVybiByZXN1bHRzXG59XG5cbmZ1bmN0aW9uIHd4UGFyc2VUZW1BcnJheSAodGVtQXJyYXlOYW1lLCBiaW5kTmFtZVJlZywgdG90YWwsIHRoYXQpIHtcbiAgdmFyIGFycmF5ID0gW11cbiAgdmFyIHRlbURhdGEgPSB0aGF0LmRhdGFcbiAgdmFyIG9iaiA9IG51bGxcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgdmFyIHNpbUFyciA9IHRlbURhdGFbYmluZE5hbWVSZWcgKyBpXS5ub2Rlc1xuICAgIGFycmF5LnB1c2goc2ltQXJyKVxuICB9XG5cbiAgdGVtQXJyYXlOYW1lID0gdGVtQXJyYXlOYW1lIHx8ICd3eFBhcnNlVGVtQXJyYXknXG4gIG9iaiA9IEpTT04ucGFyc2UoJ3tcIicgKyB0ZW1BcnJheU5hbWUgKyAnXCI6XCJcIn0nKVxuICBvYmpbdGVtQXJyYXlOYW1lXSA9IGFycmF5XG4gIHRoYXQuc2V0RGF0YShvYmopXG59XG5cbi8qKlxuICog6YWN572uZW1vamlzXG4gKlxuICovXG5cbmZ1bmN0aW9uIGVtb2ppc0luaXQgKHJlZyA9ICcnLCBiYXNlU3JjID0gJy93eFBhcnNlL2Vtb2ppcy8nLCBlbW9qaXMpIHtcbiAgSHRtbFRvSnNvbi5lbW9qaXNJbml0KHJlZywgYmFzZVNyYywgZW1vamlzKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgd3hQYXJzZTogd3hQYXJzZSxcbiAgd3hQYXJzZUltZ1RhcDogd3hQYXJzZUltZ1RhcCxcbiAgd3hQYXJzZVRlbUFycmF5OiB3eFBhcnNlVGVtQXJyYXksXG4gIGVtb2ppc0luaXQ6IGVtb2ppc0luaXRcbn1cblxuXG4iXX0=