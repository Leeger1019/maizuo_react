import React from "react";
import "./index.scss";
import {connect} from "react-redux";
import HomeList from "./HomeList"
import ReactSwipe from 'react-swipe';

class Home extends React.Component{
	constructor(){
			super();
			this.state={
				datalist:[]
			}
		}


		componentDidMount() {

		   if(this.props.datalist.length==0){
		   		this.props.getSwiperPromise();
		   }
		}


	render(){
		 
		return <div>
			
			 <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 2000}} key={this.props.datalist.length}>
                {
                	this.props.datalist.map(item=>
                		<img src={item.imageUrl} key={item.id}/>
                	)
                }
            </ReactSwipe>
            <HomeList  {...this.props}></HomeList>
		</div>
	}
}

export default connect(
	(state)=>{
		return {
			datalist:state.swiperlist
		}
	},{
			getSwiper:()=>{ 
				 //异步action 借助 redux-thunk 中间件实现 
				 return (dispatch)=>{
				 	axios.get("/v4/api/billboard/home").then(res=>{
					    	dispatch({
					    		type:"swiperlist",
					    		payload:res.data.data.billboards
					    	})
					})
				 }
			},

			getSwiperPromise:()=>{
				//异步action 借助 redux-promise 中间件实现 
				return axios.get("/v4/api/billboard/home").then(res=>{
					    	console.log(res.data);

					    	return {
					    		type:"swiperlist",
					    		payload:res.data.data.billboards
					    	}
					})
			}
		}
	)(Home);