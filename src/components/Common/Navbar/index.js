import React from "react";
import "./index.scss";
import "@/assets/iconfont/iconfont.css"; //引入iconfont css
import {connect} from "react-redux";
class Navbar extends React.Component{
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return <nav>
			
			<div className="left">
				<i className="iconfont icon-category" onClick={this.handleClick.bind(this)}></i>
				<span>{this.props.title}</span>	
			</div>
			<div className="right">
				<span>杭州</span>	
				<i className="iconfont icon-account"></i>
			</div>
		</nav>
	}

	handleClick(){
		//调用父组件的回调函数
		this.props.event();
	}
}

export default connect(
		(state)=>{
			return {
				title:state.title
			}
		},
		null
	)(Navbar);