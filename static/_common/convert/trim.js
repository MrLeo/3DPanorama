define(function (require, exports, module) {
    /**
	 * ---- 去除字符串后面的指定内容 ----
	 * @param {Object} str 指定字符串
	 * @param {Object} c 被去除的内容，可以使用正则字符串
	 */
    exports.end = function (str, c) {
        var reg = new RegExp(c + "$");
        return (str + "").replace(reg, "");
    };

    /**
     * ---- 去除字符串前面的指定内容 ----
     * @param {Object} str 指定字符串
     * @param {Object} c 被去除的内容，可以使用正则字符串
     */
    exports.start = function (str, c) {
        var reg = new RegExp("^" + c);
        return (str + "").replace(reg, "");
    };

    /**
     * ---- 去除字符串中的指定内容 ----
     * @param {Object} str 指定字符串
     * @param {Object} c 被去除的内容，可以使用正则字符串
     */
    exports.start = function (str, c) {
        var reg = new RegExp(c);
        return (str + "").replace(reg, "");
    };
});
