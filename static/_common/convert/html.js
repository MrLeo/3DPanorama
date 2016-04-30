define(function (require, exports, module) {
    module.exports = {
        /**
         * 转义html标签
         * @param {Object} text 
         */
        'HtmlEncode': function (text) {
            return text.replace(/&/g, '&amp').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        },
        /**
         * 还原html标签
         * @param {Object} text 
         */
        'HtmlDecode': function (text) {
            return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        }
    }
});
