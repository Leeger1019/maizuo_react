import React from "react";
import "./index.scss";
import {NavLink} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
class Sidebar extends React.Component{
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return <div>
		 <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
			{
				this.props.isshow?
				<aside>			
					<ul onClick={()=>{
						this.props.event();
					}}>
						<li>
							<NavLink to="/home" activeClassName="active">首页</NavLink>
						</li>
						<li>
							<NavLink to="/film" activeClassName="active">影片</NavLink>
						</li>
						<li>
							<NavLink to="/cart" activeClassName="active">cart</NavLink>
						</li>
						<li>
							<NavLink to="/search" activeClassName="active">搜索</NavLink>
						</li>
					</ul>
				</aside>
				:null
			}
		  </ReactCSSTransitionGroup>
		</div>
	}
}

export default Sidebar;