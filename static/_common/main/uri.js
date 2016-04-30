define(function(require, exports, module) {
	module.exports = {
		/**
		 * 获取URL参数
		 * @param {Object} name 参数名
		 */
		'getQueryString': function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return null;
		},
		/**
		 * 获取URL参数
		 * @param {Object} paramKey 参数名
		 */
		function getParam(paramKey) {
			//获取当前URL
			var url = location.href;
			//获取要取得的get参数位置
			var get = url.indexOf(paramKey + "=");
			if (get == -1) {
				return false;
			}
			//截取字符串
			var getParamStr = url.slice(paramKey.length + get + 1);
			//判断截取后的字符串是否还有其他get参数
			var nextparam = getParamStr.indexOf("&");
			if (nextparam != -1) {
				getParamStr = getParamStr.slice(0, nextparam);
			}
			return decodeURIComponent(getParamStr);
		},
		/**
		 * 添加url参数
		 * @param {Object} url 待添加参数的URL地址
		 * @param {Object} paramKey 参数名
		 * @param {Object} paramVal 参数值
		 */
		function addParam(url, paramKey, paramVal) {
			var andStr = "?";
			var beforeparam = url.indexOf("?");
			if (beforeparam != -1) andStr = "&";
			return url + andStr + paramKey + "=" + encodeURIComponent(paramVal);
		},
		/**
		 * 删除url参数
		 * @param {Object} url 待删除参数的URL地址
		 * @param {Object} paramKey 参数名
		 */
		function delParam(url, paramKey) {
			var urlParam = url.substr(url.indexOf("?") + 1);
			var beforeUrl = url.substr(0, url.indexOf("?"));
			var nextUrl = "";
			var arr = new Array();
			if (urlParam != "") {
				var urlParamArr = urlParam.split("&");
				for (var i = 0; i < urlParamArr.length; i++) {
					var paramArr = urlParamArr[i].split("=");
					if (paramArr[0] != paramKey) {
						arr.push(urlParamArr[i]);
					}
				}
			}
			if (arr.length > 0) nextUrl = "?" + arr.join("&");
			url = beforeUrl + nextUrl;
			return url;
		}
	}
});