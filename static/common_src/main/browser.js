define(function (require, exports, module) {

    module.exports = {
        /**
         * 获取浏览器语言
         */
        'language': (navigator.browserLanguage || navigator.language).toLowerCase(),
        /**
         * 获取浏览器版本信息
         */
        "versions": function () {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return { //移动终端浏览器版本信息 
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                isWeiXin: u.match(/MicroMessenger/i) == 'micromessenger' //是否是微信浏览器
            };
        } (),
        /**
         * 加入收藏夹
         * @param {Object} sURL 
         * @param {Object} sTitle 
         */
        'AddFavorite': function (sURL, sTitle) {
            try {
                window.external.addFavorite(sURL, sTitle)
            } catch (e) {
                try {
                    window.sidebar.addPanel(sTitle, sURL, "")
                } catch (e) {
                    alert("加入收藏失败，请使用Ctrl+D进行添加")
                }
            }
        },
        /**
         * 设为首页
         * @param {Object} url 
         */
        'setHomepage': function (url) {
            if (document.all) {
                document.body.style.behavior = 'url(#default#homepage)';
                document.body.setHomePage(url)
            } else if (window.sidebar) {
                if (window.netscape) {
                    try {
                        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                    } catch (e) {
                        alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true")
                    }
                }
                var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                prefs.setCharPref('browser.startup.homepage', url)
            }
        }
    }

});