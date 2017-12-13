import React from "react";
import "./index.scss";
import {connect} from "react-redux";
 class Comingsoon extends React.Component{
	constructor(){
		super();
		this.state={
			datalist:[]
		}
	}
	
	componentDidMount() {

	   if(this.props.datalist.length==0){
	   		this.props.getComingsoonPromise();
	   }
	}
	changePage(e){
	   var page = e.currentTarget.getAttribute('data-page');
	   const params = {
	       page: parseInt(page)
	   }
	   this.props.datalist(params)
	}


	render(){
		var outputPage = [];
		var pages = Math.ceil( this.props.datalist.total/ 7 );;

		for(let i =1;i<pages;i++){
		    outputPage.push(
		        <li key={i}>
		            <a href="javascript:void(0)" data-page={i} onClick={ (e)=> this.changePage(e) }>{i}</a>
		        </li>
		    )
		}
		return <div id="comingsoon">
			
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

			console.log(state.list);
			return {
				datalist:state.list
			}
		},
		{
			getComingsoon:(params={current:1})=>{ 
				 //异步action 借助 redux-thunk 中间件实现 
				 return (dispatch)=>{
				 	 var count = 7 * (params.page - 1);

				 	axios.get("/v4/api/film/coming-soon?__t=1511419368580&page=1&count=$").then(res=>{
					    	//console.log(res.data);

					    	dispatch({
					    		type:"comingsoonlist",
					    		payload:res.data.data.films,
					    		page:res.data.data
					    	})
					})
				 }
			},

			getComingsoonPromise:()=>{
				//异步action 借助 redux-promise 中间件实现 
				return axios.get("/v4/api/film/coming-soon?__t=1511419368580&page=1&count=7").then(res=>{
					    	console.log(res.data.data.page);

					    	return {
					    		type:"comingsoonlist",
					    		payload:res.data.data.films,
					    		page:res.data.data.page
					    	}
					})
			}
		}

	)(Comingsoon);