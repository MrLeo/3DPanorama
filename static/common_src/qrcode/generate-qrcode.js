define(function (require, exports, module) {
    var $ = require('jquery');
    require('./jquery.qrcode');

    var qrcode = '<style>';
    qrcode += '#QRcode,#QRcode_hover,#gotop{width:36px;height:48px;background:url(http://www.17sucai.com/preview/1093/2013-08-22/%E6%88%91%E5%96%9C%E6%AC%A2%E5%8F%B3%E4%BE%A7%E5%BE%AE%E4%BF%A1%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8/images/icon.png) no-repeat;position:fixed;right:50px;cursor:pointer;_position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));}';
    qrcode += '#QRcode{background-position:-276px -258px;bottom:120px;_margin-bottom:120px;}';
    qrcode += '#QRcode_hover{background-position:-316px -258px;bottom:120px;_margin-bottom:120px;}';
    qrcode += '#gotop{background-position:-276px -310px;bottom:67px;_margin-bottom:67px;} ';
    qrcode += '#QRcode_img{width:256px;height:256px;/*background:url(http://www.17sucai.com/preview/1093/2013-08-22/%E6%88%91%E5%96%9C%E6%AC%A2%E5%8F%B3%E4%BE%A7%E5%BE%AE%E4%BF%A1%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8/images/icon.png) -4px -3px no-repeat;*/position:fixed;right:90px;bottom:120px;cursor:pointer;display:none;_position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));_margin-bottom:67px;}';
    qrcode += '</style>';
    qrcode += '<a id="gotop" href="javascript:void(0)"></a>';
    qrcode += '<div id="QRcode" title="扫描二维码"></div>';
    qrcode += '<div id="QRcode_img"></div>';
    qrcode += '<div></div>'

    $('body').eq(0).append(qrcode);

    //右下角二维码 eg.http://www.17sucai.com/pins/demoshow/2003
    $('#QRcode_img').qrcode({
        text: "" + window.location.href
        //width:100,
        //height:100
    });

    var h = $(window).height();
    var t = $(document).scrollTop();
    if (t > 50) {
        $('#gotop').show();
    } else {
        $('#gotop').hide();
    }
    $('#gotop').click(function () {
        $(document).scrollTop(0);
    });
    $('#QRcode').hover(function () {
        $(this).attr('id', 'QRcode_hover');
        $('#QRcode_img').css('width', '0px').show();
        $('#QRcode_img').animate({
            width: '256px'
        }, 500);
    }, function () {
        $(this).attr('id', 'QRcode');
        //$('#QRcode_img').hide();
        $('#QRcode_img').animate({
            width: '0px'
        }, 500, function () {
            $('#QRcode_img').hide();
        });
    })
    $(window).scroll(function (e) {
        h = $(window).height();
        t = $(document).scrollTop();

        if (t > 50) {
            $('#gotop').show();
        } else {
            $('#gotop').hide();
        }
    });
});
