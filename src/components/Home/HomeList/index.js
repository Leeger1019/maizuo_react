import React from "react";
import './index.scss'
import {connect} from "react-redux"
import axios from"axios"

class HomeList extends React.Component{
	constructor(){
		super();
		this.state={
			data:"11"
		}
	}
	componentDidMount(){
		if(this.props.homelist.length==0){
			this.props.getHomelist()
		}
	}
	render(){
		return <div id='homelist'>
			<ul>
			{
				this.props.homelist.map(item=>
					<li key={item.id} onClick={this.handclick.bind(this,item.id)}>
						<img src={item.poster.origin}/>
						<div> 
						<div className="filmname"><span className="n1">{item.name}</span><span className="n2">{item.grade}分<b>&gt;</b></span></div>
							<div className="stuation"><span>{item.cinemaCount}</span>家影院上映 &nbsp;&nbsp;&nbsp;<span>{item.watchCount}</span>人购票</div>
						</div>
					</li>
				)
			}
			</ul>
			<p className='page' onClick={this.pageclick.bind(this)}>
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
			</p>
		</div>
	}
	handclick(id){
		console.log(this.props);
		this.props.history.push(`/detail/${id}`)

	}
	pageclick(event){
		this.props.getHomelist(event.target.innerHTML)
	}
}
export default connect(
	(state)=>{
		return {
			homelist:state.homelist
		}
	},
	{
		getHomelist:(page)=>{
			return (dispatch)=>{
				axios.get(`/v4/api/film/now-playing?page=${page?page:1}&count=5`).then(res=>{
					dispatch({
						type:'Homelist',
						payload:res.data.data.films
					})
				})
			}
		}
	}
)(HomeList);