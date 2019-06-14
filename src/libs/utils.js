/*
* 公用方法集合
*/
function add0(m) { return m < 10 ? '0' + m : m }
function getTime(shijianchuo) {
  //shijianchuo是整数，否则要parseInt转换
  const time = new Date(shijianchuo);
  const y = time.getFullYear();
  const m = time.getMonth() + 1;
  const d = time.getDate();
  const s = time.getSeconds();
  return y + '-' + add0(m) + '-' + add0(d);
}
function debounce (callback, wait = 300) {
  let timeout, timestamp, context, args

  function laterFn () {
    let laster = Date.now() - timestamp
    if (laster < wait) {
      timeout = setTimeout(laterFn, wait - laster)
    } else {
      clearTimeout(timeout)
      timeout = null
      callback.apply(context, args)
      context = args = null
    }
  }
  return (function () {
    context = this
    args = arguments
    timestamp = Date.now()
    // console.log(`timestamp is ${timestamp}`)
    if (!timeout) {
      timeout = setTimeout(laterFn, wait)
    }
  })()
}
function json2Form(json) { 
  var str = []; 
  for(var p in json){ 
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p])); 
  } 
  return str.join("&"); 
} 
module.exports = {
  getTime,
  debounce,
  json2Form
}
