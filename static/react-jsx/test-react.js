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
		<div><h1>Demo1</h1><p>使用React直接输出HTML内容到指定容器</p></div>,
	  	document.getElementById('example1')
	);
	
	/******************************************************************
	 * demo2
	 * 使用map遍历输出数组
	 */
	var names = ['Alice', 'Emily', 'Kate'];
	React.render(
		<div>
			<h1>Demo2</h1>
			{
				names.map(function(name){
					return <div>使用React输出名字数组的每一项,{name} !</div>
				})
			}
		</div>,
		document.getElementById('example2')
	);
	
	/******************************************************************
	 * demo3 
	 * 将数组的内容分解拼装一并输出
	 */
	var arrD3 = [
		<h1>Demo3</h1>,
		<p>使用React直接将数据中的内容展开输出的指定容器</p>
	];
	React.render(
		<div>{arrD3}</div>,
		document.getElementById('example3')
	);
	
	/******************************************************************
	 * demo4 
	 * 调用组件，读取组件模版属性（props）
	 * 首字母大些：组件
	 * 首字母小写：原生HTML
	 * this.props 表示那些一旦定义，就不再改变的特性
	 */
	var Demo4 = React.createClass({
		render: function() {
			return <div><h1>Demo4</h1><p>自定义组件，获取组件name属性：{this.props.name}<br/>组件的变量名首字母大写</p></div>;
		}
	});
	React.render(
		<Demo4 name="Leo" />,
		document.getElementById('example4')
	);
	
	/******************************************************************
	 * demo5 
	 * 使用this.props.children读取调用组件的子节点，并用map遍历
	 */
	var Demo5 = React.createClass({
		render: function(){
			return (
				<ol>
				{
					this.props.children.map(function(child){
						return <li>{child}</li>;
					})
				}
				</ol>
			);
		}
	});
	React.render(
		<div>
			<h1>Demo5</h1>
			<Demo5>
				<span>hello</span>
				<span>world</span>
			</Demo5>
		</div>,
		document.getElementById('example5')
	);
	
	/******************************************************************
	 * demo6 
	 * 1.设置属性的类型限制
	 * 2.设置属性的默认值
	 */
	var Demo6 = React.createClass({
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
				<dl>
					<dt><h1>demo6</h1></dt>
					<dd>{this.props.title}</dd>
					<dd>{this.props.name}</dd>
					<dd><sub>组件名字首字母要大写</sub></dd>
				</dl>
			);
		}
	});
	React.render(
		<Demo6 name="组件设置的属性类型必须为string" />,
		document.getElementById('example6')
	);
	
	/******************************************************************
	 * demo7
	 * 获取真实Dom的内容
	 */
	var Demo7 = React.createClass({
		handleClick: function(){
			React.findDOMNode(this.refs.value).select();
			var val = React.findDOMNode(this.refs.value).value;
			console.log(val);
			alert(val);
		},
		render: function(){
			return (
				<div>
					<h1>Demo7</h1>
					<input type="text" ref="value" />
					<input type="button" value="alert and Select the text input" onClick={this.handleClick} />
				</div>
			);
		}
	});
	React.render(
		<Demo7 />,
		document.getElementById('example7')
	);
	
	/******************************************************************
	 * demo8
	 * 组件的状态交互
	 * 使用 getInitialState 初始化状态
	 * this.state 是会随着用户互动而产生变化的特性
	 */
	var Demo8 = React.createClass({
		getInitialState: function(){
			return {liked:false};
		},
		handleClick:function(e){
			this.setState({liked: !this.state.liked});
		},
		render: function(){
			var text = this.state.liked ? 'like' : 'have\'t liked';
			return (
				<div>
					<h1>Demo8</h1>
					<a href="javascript:void(0);" onClick={this.handleClick}>
						you {text} this. Click to toggle.
					</a>
				</div>
			);
		}
	});
	React.render(
		<Demo8 />,
		document.getElementById('example8')
	);
	
	/******************************************************************
	 * demo9
	 * 通过状态控制表单同步更新
	 */
	var Demo9 = React.createClass({
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
				<div>
					<h1>Demo9</h1>
					<em>表单录入的信息同步更新后面的内容</em>
					<div><br/>
						<input type="text" value={value} onChange={this.change} />
						&nbsp;&nbsp;
						<span>{value}</span>
					</div>
				</div>
			);
		}
	});
	React.render(
		<Demo9 />,
		document.getElementById('example9')
	);
	
	/******************************************************************
	 * demo10
	 * 通过状态控制表单同步更新
	 */
	var Demo10 = React.createClass({
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
				<h1 style={{opacity: this.state.opacity}}>
					{this.props.name}
				</h1>
			);
		}
	});
	React.render(
		<Demo10 name="Demo10"/>,
		document.getElementById('example10')
	);
	
	/******************************************************************
	 * demo11
	 * ajax
	 */
	var Demo11 = React.createClass({
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
				<div>
					<h1>Demo11</h1>
					{this.state.username}'s last gist is
					<a href={this.state.lastGistUrl}>here</a>.
				</div>
			);
		}
	});
	React.render(
		<Demo11 source="https://api.github.com/users/octocat/gists" />,
		document.getElementById('example11')
	);
});
