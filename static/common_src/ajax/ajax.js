define(function(require,exports,module){
	/**
	 * JavaScript ajax
	 * 参考地址：http://www.w3cfuns.com/article-5595986-1-1.html
	 * @param {Object} url ajax请求地址
	 * @param {Object} method 请求类型{get，post}
	 * @param {Object} sccessFunc 请求成功的回调函数
	 * @param {Object} faildFunc 请求失败的回到函数
	 */
	function ajax(url,method,sccessFunc,faildFunc){
		//1.创建Ajax对象
		var xhr;
		if (window.XMLHttpRequest) {
			xhr=new XMLHttpRequest();//只兼容非IE6浏览器	
		}else{
			xhr = ActiveXObject("Microsoft.XMLHTTP");//针对IE
		}
		
		//2.连接服务器
		xhr.open(method,url,true);
		
		//3.发送请求
		xhr.send();//xhr.send({paramKey:paramValue});//post请求参数
		
		//4.接收返回数据
		xhr.onreadystatechange=function(){
			/*
			 * 请求状态：xhr.readyState
			 * 0-（未初始化）还没有调用open()方法
			 * 1-（载入）已调用send()方法，正在发送请求
			 * 2-（载入完成）send()方法完成，已收到全部响应内容
			 * 3-（解析）正真结息响应内容
			 * 4-（完成）响应内容解析完成，可以在客户端调用
			 */
			if (xhr.readyState==4) {
				/*
				 * HTTP状态码：xhr.status
				 * 200 - 成功
				 * 404 - 未找到服务器资源
				 * ···
				 */
				if (xhr.status==200) {
					//console.log("成功"+xhr.responseText);
					sccessFunc(xhr.responseText);
				}else{
					//console.log("请求失败："+xhr.status);
					faildFunc(xhr.status);
				}
			}
		}
	}
	module.exports = ajax;
});
