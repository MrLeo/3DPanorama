(function($) {
	$.extend({
		//矩形的碰撞检测
		/**
		 * x1,y1 第一个矩形的左上角
		 * x2,y2 第一个矩形的右下角
		 * x3,y3 第二个矩形的左上角
		 * x4,y4 第二个矩形的右下角
		 *
		 * return Boolean true=>碰撞
		 */
		isCollsion: function(x1, y1, x2, y2, x3, y3, x4, y4) {
			if (
				(x1 > x3 && x1 > x4) ||
				(x3 > x1 && x3 > x2) ||
				(y1 > y3 && y1 > y4) ||
				(y3 > y1 && y3 > y2)
			) {
				return false;
			} else {
				return true;
			}
		}
	});

	/**
	 * opt中包含了两个参数，元素实际位置的偏移
	 * @example $('.class').isVisable
	 * @return Boolean 是否在可视范围之内
	 */
	$.fn.isVisable = function(opt) {
		opt = $.extend({
			offsetTop: 0, //网页中元素比实际位置在垂直方向的偏移
			offsetLeft: 0 //网页中元素比实际位置在水平方向的偏移
		}, opt);
		var me = $(this),
			srcInfo = {
				begin_left: (me.offset.left + opt.offsetLeft),
				begin_top: (me.offset.top + opt.offsetTop)
			}
		srcInfo.end_left = (srcInfo.begin_left + me.width);
		srcInfo.end_top = (srcInfo.begin_top + me.height);

		winInfo = {
			begin_left: $(window).scrollLeft,
			begin_top: $(window).scrollTop
		}
		winInfo.end_left = (winInfo.begin_left + $(window).width);
		winInfo.end_top = (winInfo.begin_top + $(window).height);

		//检测是否”碰撞“”
		return $.isCollsion(
			srcInfo.begin_left, srcInfo.begin_top, srcInfo.end_left, srcInfo.end_top,
			winInfo.begin_left, winInfo.begin_top, winInfo.end_left, winInfo.end_top
		);
	}
})($);