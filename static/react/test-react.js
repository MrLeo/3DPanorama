define(function(require, exports, module) {
	/**
	 * 参考地址：
	 * 		React入门实例教程：http://www.ruanyifeng.com/blog/2015/03/react.html
	 * 		React中文官网：http://reactjs.cn/
	 */
	
	require('reactjs');
	
	/******************************************************************
	 * demo1
	 * 直接将jsx内容转换输出
	 */
	React.render( 
		React.createElement("div", null, React.createElement("h1", null, "Demo1"), React.createElement("p", null, "使用React直接输出HTML内容到指定容器")),
	  	document.getElementById('example1')
	);
	
	/******************************************************************
	 * demo2
	 * 使用map遍历输出数组
	 */
	var names = ['Alice', 'Emily', 'Kate'];
	React.render(
		React.createElement("div", null, 
			React.createElement("h1", null, "Demo2"), 
			
				names.map(function(name){
					return React.createElement("div", null, "使用React输出名字数组的每一项,", name, " !")
				})
			
		),
		document.getElementById('example2')
	);
	
	/******************************************************************
	 * demo3 
	 * 将数组的内容分解拼装一并输出
	 */
	var arrD3 = [
		React.createElement("h1", null, "Demo3"),
		React.createElement("p", null, "使用React直接将数据中的内容展开输出的指定容器")
	];
	React.render(
		React.createElement("div", null, arrD3),
		document.getElementById('example3')
	);
	
	/******************************************************************
	 * demo4 
	 * 调用组件，读取组件模版属性（props）
	 * 组件名首字母要大写
	 * this.props 表示那些一旦定义，就不再改变的特性
	 */
	var Demo4 = React.createClass({displayName: "Demo4",
		render: function() {
			return React.createElement("div", null, React.createElement("h1", null, "Demo4"), React.createElement("p", null, "自定义组件，获取组件name属性：", this.props.name, React.createElement("br", null), "组件的变量名首字母大写"));
		}
	});
	React.render(
		React.createElement(Demo4, {name: "Leo"}),
		document.getElementById('example4')
	);
	
	/******************************************************************
	 * demo5 
	 * 使用this.props.children读取调用组件的子节点，并用map遍历
	 */
	var Demo5 = React.createClass({displayName: "Demo5",
		render: function(){
			return (
				React.createElement("ol", null, 
				
					this.props.children.map(function(child){
						return React.createElement("li", null, child);
					})
				
				)
			);
		}
	});
	React.render(
		React.createElement("div", null, 
			React.createElement("h1", null, "Demo5"), 
			React.createElement(Demo5, null, 
				React.createElement("span", null, "hello"), 
				React.createElement("span", null, "world")
			)
		),
		document.getElementById('example5')
	);
	
	/******************************************************************
	 * demo6 
	 * 1.设置属性的类型限制
	 * 2.设置属性的默认值
	 */
	var Demo6 = React.createClass({displayName: "Demo6",
		propTypes: { //--设置属性类型限制
			name : React.PropTypes.string.isRequired //--设置name属性为string类型，且不能不能为空
		},
		getDefaultProps: function(){ //--设置属性的默认值
			return {
				title:"默认title"
			}
		},
		render:function(){
			return (
				React.createElement("dl", null, 
					React.createElement("dt", null, React.createElement("h1", null, "demo6")), 
					React.createElement("dd", null, this.props.title), 
					React.createElement("dd", null, this.props.name), 
					React.createElement("dd", null, React.createElement("sub", null, "组件名字首字母要大写"))
				)
			);
		}
	});
	React.render(
		React.createElement(Demo6, {name: "组件设置的属性类型必须为string"}),
		document.getElementById('example6')
	);
	
	/******************************************************************
	 * demo7
	 * 获取真实Dom的内容
	 */
	var Demo7 = React.createClass({displayName: "Demo7",
		handleClick: function(){
			React.findDOMNode(this.refs.value).select();
			var val = React.findDOMNode(this.refs.value).value;
			console.log(val);
			alert(val);
		},
		render: function(){
			return (
				React.createElement("div", null, 
					React.createElement("h1", null, "Demo7"), 
					React.createElement("input", {type: "text", ref: "value"}), 
					React.createElement("input", {type: "button", value: "alert and Select the text input", onClick: this.handleClick})
				)
			);
		}
	});
	React.render(
		React.createElement(Demo7, null),
		document.getElementById('example7')
	);
	
	/******************************************************************
	 * demo8
	 * 组件的状态交互
	 * 使用 getInitialState 初始化状态
	 * this.state 是会随着用户互动而产生变化的特性
	 */
	var Demo8 = React.createClass({displayName: "Demo8",
		getInitialState: function(){
			return {liked:false};
		},
		handleClick:function(e){
			this.setState({liked: !this.state.liked});
		},
		render: function(){
			var text = this.state.liked ? 'like' : 'have\'t liked';
			return (
				React.createElement("div", null, 
					React.createElement("h1", null, "Demo8"), 
					React.createElement("a", {href: "javascript:void(0);", onClick: this.handleClick}, 
						"you ", text, " this. Click to toggle."
					)
				)
			);
		}
	});
	React.render(
		React.createElement(Demo8, null),
		document.getElementById('example8')
	);
	
	/******************************************************************
	 * demo9
	 * 通过状态控制表单同步更新
	 */
	var Demo9 = React.createClass({displayName: "Demo9",
		getInitialState: function(){
			return {
				value: "初始化Value"
			};
		},
		change: function(e){
			this.setState({value: e.target.value});
		},
		render: function(){
			var value = this.state.value;
			return (
				React.createElement("div", null, 
					React.createElement("h1", null, "Demo9"), 
					React.createElement("em", null, "表单录入的信息同步更新后面的内容"), 
					React.createElement("div", null, React.createElement("br", null), 
						React.createElement("input", {type: "text", value: value, onChange: this.change}), 
						"  ", 
						React.createElement("span", null, value)
					)
				)
			);
		}
	});
	React.render(
		React.createElement(Demo9, null),
		document.getElementById('example9')
	);
	
	/******************************************************************
	 * demo10
	 * 通过状态控制表单同步更新
	 */
	var Demo10 = React.createClass({displayName: "Demo10",
		getInitialState: function () {
			console.log('init state')
			return {
				opacity: 1.0
			};
		},
		componentDidMount: function () {
			console.log('componentDidMount');
			this.timer = setInterval(function () {
				console.log("interval");
				var opacity = this.state.opacity;
				opacity -= .05;
				if (opacity < 0.1) {
					opacity = 1.0;
				}
				this.setState({
					opacity: opacity
				});
			}.bind(this), 100);
		},
		render: function () {
			return (
				React.createElement("h1", {style: {opacity: this.state.opacity}}, 
					this.props.name
				)
			);
		}
	});
	React.render(
		React.createElement(Demo10, {name: "Demo10"}),
		document.getElementById('example10')
	);
	
	/******************************************************************
	 * demo11
	 * ajax
	 */
	var Demo11 = React.createClass({displayName: "Demo11",
		getInitialState: function() {
			return {
				username: '',
				lastGistUrl: ''
			};
		},
		componentDidMount: function() {
			$.get(this.props.source, function(result) {
				var lastGist = result[0];
				if (this.isMounted()) {
					this.setState({
						username: lastGist.owner.login,
						lastGistUrl: lastGist.html_url
					});
				}
			}.bind(this));
		},
		render: function() {
			return (
				React.createElement("div", null, 
					React.createElement("h1", null, "Demo11"), 
					this.state.username, "'s last gist is", 
					React.createElement("a", {href: this.state.lastGistUrl}, "here"), "."
				)
			);
		}
	});
	React.render(
		React.createElement(Demo11, {source: "https://api.github.com/users/octocat/gists"}),
		document.getElementById('example11')
	);
});
