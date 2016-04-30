define(function(require, exports, module) {
	/**
	 * 数组去重
	 * http://mp.weixin.qq.com/s?__biz=MzA4NDIzNzMwMw==&mid=402396591&idx=1&sn=0c05fa18784bd9eef1ee8a78fbff4e20&scene=1&srcid=0104sExsWNOZbAhbV2DyN7zO#wechat_redirect
	 */

	/**
	 * 通过构建hash对象方式数组去重
	 * @param {Object} arr
	 * unique([ new String(1), new Number(1) ]);这种输入就无法判断
	 */
	function unique(arr) { //https://github.com/lifesinger/blog/issues/113
		var res = []
		var hash = {}
		for (var i = 0; i < arr.length; i++) {
			var item = arr[i]
			var key = typeof(item) + item
			if (!hash[key]) {
				res.push(item)
				hash[key] = 1
			}
		}
		return res;
	}

	/**
	 * 利用数组的indexOf方法
	 * @param {Object} arr
	 */
	function unique1(arr) {
		var result = [];
		for (var i = 0; i < arr.length; i++) {
			if (result.indexOf(arr[i]) == -1) result.push(arr[i]);
		}
		return result;
	}

	/**
	 * 排序后比较相邻，如果一样则放弃，否则加入到result。会出现与方法2一样的问题，如果数组中存在1,1,'1'这样的情况，则会排错
	 * @param {Object} arr
	 */
	function unique2(arr) {
		arr.sort();
		var result = [arr[0]];
		for (var i = 1; i < arr.length; i++) {
			if (arr[i] !== arr[i - 1]) {
				result.push(arr[i]);
			}
		}
		return result;
	}


	/**
	 * 最简单但是效率最低的算法,也不会出现方法2和方法3出现的bug
	 * @param {Object} arr
	 */
	function unique3(arr) {
		if (arr.length == 0) return;
		var result = [arr[0]],
			isRepeate;
		for (var i = 0, j = arr.length; i < j; i++) {
			isRepeate = false;
			for (var k = 0, h = result.length; k < h; k++) {
				if (result[k] === arr[i]) {
					isRepeate = true;
					break;
				}
				if (k == h) break;
			}
			if (!isRepeate) result.push(arr[i]);
		}
		return result;
	}


	/**
	 * 此方法充分利用了递归和indexOf方法
	 * @param {Object} arr
	 * @param {Object} newArr
	 */
	function unique4(arr, newArr) {
		var num;

		if (-1 == arr.indexOf(num = arr.shift())) newArr.push(num);

		arr.length && unique(arr, newArr);
	}

	module.exports = {
		'unique': unique,
		'unique1': unique1,
		'unique2': unique2,
		'unique3': unique3,
		'unique4': unique4
	}

});