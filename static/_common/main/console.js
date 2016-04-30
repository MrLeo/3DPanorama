define(function(require, exports, module) {
	exports.log = function() {
		if (window.console && console.log) {
			console.log.apply(console, ['%c[LEO]', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:1em;', arguments]);
		} else {
			alert(msg);
		}
	}
});