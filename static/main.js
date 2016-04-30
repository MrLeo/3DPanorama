/*                     _ooOoo_
 *                    o8888888o
 *                    88" . "88
 *                    (| -_- |)
 *                    O\  =  /O
 *                 ____/`---'\____
 *               .'  \\|     |//  `.
 *              /  \\|||  :  |||//  \
 *             /  _||||| -:- |||||-  \
 *             |   | \\\  -  /// |   |
 *             | \_|  ''\---/''  |   |
 *             \  .-\__  `-`  ___/-. /
 *           ___`. .'  /--.--\  `. . __
 *        ."" '<  `.___\_<|>_/___.'  >'"".
 *       | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *       \  \ `-.   \_ __\ /__ _/   .-` /  /
 *  ======`-.____`-.___\_____/___.-`____.-'======
 *                     ‘=---=’
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *             佛祖保佑       永无BUG
 *
 *        源码地址：https://github.com/MrLeo/SeaJS
 */
define(function(require, exports, module) {
	//  =====================
	//  = 接口及资源路径Hosts =
	//  =====================
	window.path = '';

	//  ===========
	//  = 全局引用 =
	//  ===========
	/*require("../libs/zepto/zepto");//--全局引用zepto主文件
	require("../libs/zepto/event");//--全局引用zepto.event主文件
	require("../libs/zepto/ajax");//--全局引用zepto.ajax主文件
	require("../libs/zepto/fx");//--全局引用zepto.fx主文件*/

	require("jquery"); //--全局引用JQuery-1.8.3
	require("react"); //--全局引用ReactJS
	require("vue"); //--全局引用Vue.js
	require('underscore');//--全局引用Underscore工具库

	/**
	 * 获取当前页面名，不包含后缀".html"
	 */
	function getCurrentPage() {
		var urls = location.href.split("/");
		var page = urls[urls.length - 1];

		//TODO：将修改后缀名
		return page.split(".html")[0];
	}

	/**
	 * ---- 分发模块 ----
	 * js文件名要和对应页面的文件名相同
	 */
	exports.load = function() {
		try {
			require.async(['_module/controller/' + getCurrentPage()], function(page) {
				//--异步加载多个模块，在加载完成时，执行回调
			});
		} catch (e) {}
	};

	//example：seajs.use('../static/libs/main.js?1');
	//判断是否自动load（说明：~-1=0），参考：http://ask.dcloud.net.cn/question/3742
	if (!~module.id.indexOf('?1')) {
		exports.load();
	}
});