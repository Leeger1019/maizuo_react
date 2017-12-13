import React,{Component} from 'react'
import {connect} from 'react-redux';
import "./index.scss";
 class Search extends Component{
 	constructor(){
 		super();
 		this.state={
			dataList:[],
			searchList:[]
 		}
 	}
 	componentWillMount() {
 		console.log(this)
 	 	   axios.get("/v4/api/film/now-playing?page=1&count=35").then(res=>{
 	 	   	this.setState({
 	 	   		dataList:res.data.data.films
 	 	   	})
 	 	   	
 	 	   })
 	}
     render(){
     	console.log(this.props)
     	let {searchList}=this.state
     	var searchLi=[]
     	for(var i=0;i<searchList.length;i++){
     		console.log(searchList[i])
     		searchLi.push(
     			<li name={searchList[i].id}  key={i}>
     				<div><span className='filmname'>电影名称：</span>{searchList[i].name}</div>
     				<div><span className='filmname'>评分：</span><span className='grade'>{searchList[i].grade}分</span></div>
     				<div><img src={searchList[i].cover.origin}/></div>
     			</li>
     		)
     	}
         return <div id="sousuo">
			<input type='text' placeholder='请输入电影名称' className='text' onChange={this.seachChange.bind(this)}/>
			<ul className='sousuolist'>{searchLi}</ul>
		</div>
	}
	handclick(){
		this.props.event()
	}
	seachChange(e){
		if(e.target.value!=""){
			var regexp=new RegExp(e.target.value)
		}
		var List=[]
		let{dataList}=this.state
		if(regexp){
 	   		for(var i=0;i<dataList.length;i++){
 	   			if(regexp.test(dataList[i].name)){
 	   				List.push(dataList[i])
 	   			}
 	   		}
 	   	}
		this.setState({
			searchList:List
		})
	}
	detailSearch(e){
		console.log(e.target)
		this.props.history.push(`/detail/${e.target.getAttribute("name")}`)
	}
}
module.exports = Search;