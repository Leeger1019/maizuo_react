import React from "react";
import "./index.scss";
import Navbar from "../Common/Navbar";
import Sidebar from "../Common/Sidebar";

class App extends React.Component{
	constructor(){
		super();
		this.state={
			show:false
		}
	}

	render(){
		return <div>
			
			<Navbar event={()=>{
				this.setState({
					show:!this.state.show
				})
			}}></Navbar>
			<Sidebar isshow ={this.state.show} event={()=>{
				//console.log("11111");
				this.setState({
					show:false
				})
			}}></Sidebar>
			<section>
			{
				this.props.children
			}
			</section>
		</div>
	}
}

export default App;