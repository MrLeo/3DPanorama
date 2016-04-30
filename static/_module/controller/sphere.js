define(function(require, exports, module) {
	/**
	 * 基于Three.js的360X180度全景图预览插件
	 * http://www.htmleaf.com/jQuery/Image-Effects/201508112394.html
	 */
	
	require('libs/three/three.min');
	require('libs/three/photo-sphere-viewer.min');
	
	var div = document.getElementById('container');
	var PSV = new PhotoSphereViewer({
		// Path to the panorama - 全景图的路径。
		panorama: '../static/img/sphere/sun.jpg',

		// Container - 放置全景图的div元素。
		container: div,

		// Deactivate the animation - 全景图在time_anim毫秒后会自动进行动画。（设置为false禁用它）
		time_anim: false,

		// Display the navigation bar - 显示导航条。
		navbar: true,
		
		// mouse/touch移动时每像素经过的纬度值。
		lat_offset: Math.PI/360,
		
		// mouse/touch移动时每像素经过的经度值。
		long_offset: Math.PI/720,

		// Resize the panorama - 全景图容器的最终尺寸。
		size: {
			width: '100%',
			height: '800px'
		}
	});
});