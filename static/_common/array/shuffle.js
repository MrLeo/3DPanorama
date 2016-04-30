define(function(require, exports, module) {
	/**
	 * 数组顺序扰乱
	 * http://mp.weixin.qq.com/s?__biz=MzA4NDIzNzMwMw==&mid=402396591&idx=1&sn=0c05fa18784bd9eef1ee8a78fbff4e20&scene=1&srcid=0104sExsWNOZbAhbV2DyN7zO#wechat_redirect
	 */

	/**
	 * 每次随机抽一个数并移动到新数组中 
	 * @param {Object} array
	 */
	function shuffle(array) {
		var copy = [],
			n = array.length,
			i;
		// 如果还剩有元素则继续。。。
		while (n) {
			// 随机抽取一个元素
			i = Math.floor(Math.random() * array.length);
			// 如果这个元素之前没有被选中过。。
			if (i in array) {
				copy.push(array[i]);
				delete array[i];
				n--;
			}
		}
	}


	/**
	 * 跟方法1类似，只不过通过splice来去掉原数组已选项 
	 * @param {Object} array
	 */
	function shuffle2(array) {
		var copy = [],
			n = array.length,
			i;
		// 如果还剩有元素。。
		while (n) {
			// 随机选取一个元素
			i = Math.floor(Math.random() * n--);
			// 移动到新数组中
			copy.push(array.splice(i, 1)[0]);
		}
		return copy;
	}


	/**
	 * 前面随机抽数依次跟末尾的数交换，后面依次前移，即：第一次前n个数随机抽一个跟第n个交换，第二次前n-1个数跟第n-1个交换，依次类推。 
	 * @param {Object} array
	 */
	function shuffle3(array) {
		var m = array.length,
			t, i;
		// 如果还剩有元素…
		while (m) {
			// 随机选取一个元素…
			i = Math.floor(Math.random() * m--);
			// 与当前元素进行交换
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array;
	}


	module.exports = { // 或者通过 module.exports 提供整个接口
		'funcName': function() {}
	}

});