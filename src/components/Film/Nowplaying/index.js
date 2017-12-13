import React from "react";
import "./index.scss";
import {connect} from "react-redux";
 class Nowplaying extends React.Component{
	constructor(){
		super();
		this.state={
			datalist:[]
		}
	}
	

	componentDidMount() {

	   if(this.props.datalist.length==0){
	   		this.props.getNowpalyingPromise();
	   }
	}

	render(){
		return <div id="nowplaying">
			<ul>
				{
					this.props.datalist.map(item=>

						<li key={item.id} onClick={this.handleClick.bind(this,item.id)}>
							<img src={item.poster.origin}/>
							<div>
								<h3>{item.name}</h3>
								<p>{item.intro}</p>
							</div>
						</li>
					)
				}
			</ul>
		</div>
	}

	handleClick(id){
		//编程式导航
		this.props.history.push(`/detail/${id}`);
	}
}

export default connect(
		(state)=>{

			console.log(state.nowlist);
			return {
				datalist:state.nowlist
			}
		},
		{
			getNowpalying:()=>{ 
				 //异步action 借助 redux-thunk 中间件实现 
				 return (dispatch)=>{
				 	axios.get("/v4/api/film/now-playing?page=1&count=7").then(res=>{
					    	//console.log(res.data);

					    	dispatch({
					    		type:"nowplayinglist",
					    		payload:res.data.data.films
					    	})
					})
				 }
			},

			getNowpalyingPromise:()=>{
				//异步action 借助 redux-promise 中间件实现 
				return axios.get("/v4/api/film/now-playing?page=1&count=7").then(res=>{
					    	//console.log(res.data);

					    	return {
					    		type:"nowplayinglist",
					    		payload:res.data.data.films
					    	}
					})
			}
		}

	)(Nowplaying);