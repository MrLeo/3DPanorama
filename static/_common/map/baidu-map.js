define(function (require, exports, module) {
    /**
	 * 百度地图API功能
	 * @description: http://developer.baidu.com/map/index.php?title=jsextreme
	 */
    function createScriptLink(url) {
        var scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'text/javascript');
        scriptElement.setAttribute('src', url);
        document.head.appendChild(scriptElement);
        console.log('添加引用：' + (new XMLSerializer()).serializeToString(scriptElement));
    }
    //createScriptLink("http://api.map.baidu.com/api?type=quick&ak=2Ap4Umr8RMI4RwvdvyweEptB&v=1.0");//引用地图API

    var map = null;

    /**
	 * 初始化地图
	 * @description 页面初始化地图对象，地图操作的第一步
	 * 先引用地图API【http://api.map.baidu.com/api?type=quick&ak=2Ap4Umr8RMI4RwvdvyweEptB&v=1.0】
	 * @param {String} mapControl 放置地图控件容器的ID
	 * @param {Float} myLng 经度
	 * @param {Float} myLat 纬度
	 * @param {Int} zoom 缩放级别
	 */
    exports.initMap = function (mapControl, myLng, myLat, zoom) {
        map = new BMap.Map(mapControl); //-- 创建Map实例
        var point = new BMap.Point(myLng, myLat); //-- 创建点坐标
        map.centerAndZoom(point, zoom || 15); //-- 初始化地图,设置"中心点坐标"和"地图缩放级别"。
        map.addControl(new BMap.ZoomControl()); //-- 添加地图缩放控件
    }

    /**
	 * 创建覆盖物
	 * @description 请先确认是否已经调用initMap初始化地图
	 * 如未调用initMap()初始化地图，请先初始化
	 * http://developer.baidu.com/map/jsdemo-mobile.htm#c1_1
	 * @param {Float} myLng 经度
	 * @param {Float} myLat 纬度
	 * @return {Object} 覆盖物对象
	 */
    exports.addMarker = function (myLng, myLat) {
        // 创建图标对象
        var myIcon = new BMap.Icon("http://api.map.baidu.com/mapCard/img/location.gif",
			new BMap.Size(14, 23), {
			    // 指定定位位置。
			    // 当标注显示在地图上时，其所指向的地理位置距离图标左上
			    // 角各偏移7像素和25像素。您可以看到在本例中该位置即是
			    // 图标中央下端的尖角位置。
			    anchor: new BMap.Size(7, 25),
			});
        var marker = new BMap.Marker(new BMap.Point(myLng, myLat), {
            icon: myIcon
        }); //-- 创建标注对象并添加到地图
        map.addOverlay(marker); //-- 将标注添加到地图中
        return marker;
    }

    /**
	 * 创建信息窗口
	 * @description 请先调用 addMarker() 获取覆盖物
	 * http://developer.baidu.com/map/jsdemo-mobile.htm#d0_2
	 * @param {Object} marker 覆盖物对象
	 * @param {String} info 信息窗口内容
	 * @param {Object} getGPS GPS导航相关数据,JSON格式
	 * @example
	 * 		{
	 * 			start: {
	 * 				name:"王府井",//-- 起点名称
	 * 				latlng:"116.380825,39.915455" //-- 起点坐标，优先使用坐标，可不传
	 * 			},
	 * 			end: {
	 * 				name:"西单",//-- 目的地名称
	 * 				latlng:"116.380825,39.915455" //-- 目的地坐标，优先使用坐标，可不传
	 * 			},
	 * 			region： "北京"//-- 导航城市名
	 * 		}
	 */
    exports.addInfoWindow = function (marker, info, getGPS) {
        if (getGPS) info += '<a href="javascript:void(0);" id="goGPS">一键导航</a>'; //-- 信息窗口的内容，添加一键导航
        var infoWindow = new BMap.InfoWindow(info); //-- 创建信息窗口对象
        marker.marker.addEventListener("click", function () { //-- 覆盖物事件监听
            this.openInfoWindow(infoWindow); //-- 打开信息窗口
            if (getGPS) {
                // 监听导航事件【http://developer.baidu.com/map/jsdemo-mobile.htm#i4_1】
                document.getElementById("goGPS").addEventListener("click", function () {
                    /**
					 * start|end：（必选）
					 * 		name:"王府井"
					 * 		latlng:latlng:new BMap.Point(116.380825,39.915455)
					 * opts:
					 * 		mode：导航模式，固定为 BMAP_MODE_TRANSIT、BMAP_MODE_DRIVING、BMAP_MODE_WALKING、BMAP_MODE_NAVIGATION,分别表示公交、驾车、步行和导航，（必选）
					 * 		region：城市名或县名  当给定region时，认为起点和终点都在同一城市，除非单独给定起点或终点的城市
					 * 		origin_region/destination_region：同上
					 */
                    // 设置起点
                    var start = { name: getGPS.start.name };
                    if (getGPS.start.latlng) {
                        var ll = getGPS.start.latlng.replace(/\s+/, '');
                        var startLatlngs = ll.split(',');
                        start.latlng = new BMap.Point(startLatlngs[0], startLatlngs[1]);
                    }
                    // 设置目的地
                    var end = { name: getGPS.end.name };
                    if (getGPS.end.latlng) {
                        var ll = getGPS.end.latlng.replace(/\s+/, '');
                        var endLatlngs = ll.split(',');
                        end.latlng = new BMap.Point(endLatlngs[0], endLatlngs[1]);
                    }
                    var opts = { mode: BMAP_MODE_DRIVING };
                    if (getGPS.region) opts.region = getGPS.region;
                    var ss = new BMap.RouteSearch();
                    ss.routeCall(start, end, opts);
                });
            }
        });
    }
});
