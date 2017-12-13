import React from "react";
import "./index.scss";
import { connect } from "react-redux";

class Detail extends React.Component{
	constructor(){
		super();
		this.state={
			filminfo:[]
		}
	}


	componentWillMount() {
	    console.log(this.props.match.params.kerwinid);

	    axios.get(`/v4/api/film/${this.props.match.params.kerwinid}?__t=1511337332656`).then(res=>{
	    	//console.log(res.data);
	    	this.setState({
	    		filminfo:res.data.data.film
	    		
	    	})

	    	this.props.changeTitle(res.data.data.film.name);
	    })
	}

	render(){
		if(this.state.filminfo.length==0){
			return <p className='loading'>正在加载中。。。</p>
		}else{
			let {cover,name,id,synopsis}=this.state.filminfo
			return <div id='detail'>
			{
				
				<div>
					<img src={cover.origin} />
					<h2>{name}</h2>
					<p>{this.state.filminfo.synopsis}</p>
					<h4>￥{this.state.filminfo.id-3000}元</h4>
					<button onClick={this.handleClick.bind(this)}>加入购物车</button>
				</div>
			}
			
		</div>
	}
}
	handleClick(){
		console.log(this.state.filminfo)
		this.props.cartlist(this.state.filminfo)
	}
}
export default connect(
		null,

		{
			changeTitle:(name)=>{
				//自动进行dispatch 到 reducer
				return {
					type:"changeTitleReducer",
					payload:name
				}
			},
			cartlist:(cartlist)=>{
				return (dispatch)=>{
					dispatch({
						type:'cartlist',
						payload:cartlist
					})
				}
			}
		}		

	)(Detail);



