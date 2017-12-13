const reducer = (state="卖座电影",info)=>{
	// console.log(info);
	let {type ,payload} = info;
	switch(type){
		case "changeTitleReducer":
			 var newstate =[...state];
			 newstate.push(payload)
			return payload;
		default :
			return state;
	}

	return state;
}

const swiperreducer = (state=[],info)=>{
	let {type,payload} =info;
	switch(type){
		case "swiperlist":

			return [...payload];
		default :
			return state; 
	}

}
const homelistreducer =(state=[],info)=>{
	let{type,payload}=info;
	switch(type){
		case "Homelist":
			return [...payload];
		default:
			return state;
	}
}
const cartlistreducer =(state=[],info)=>{
	let{type,payload}=info;
	switch(type){
		case "cartlist":
			return [...state,payload];
		default:
			return state;
	}
}

const comingsoonreducer = (state=[],info)=>{
	let {type,payload,page} =info;
	switch(type){
		case "comingsoonlist":

			return [...payload];
		default :
			return state; 
	}

}

const nowreducer = (state=[],info)=>{
	let {type,payload} =info;
	switch(type){
		case "nowplayinglist":

			return [...payload];
		default :
			return state; 
	}

}

const addtocarts = (state=[],info)=>{
	let {type,payload} =info;
	switch(type){
		case "addtocarts":

			return [...payload];
		default :
			return state; 
	}

}



export  {reducer,swiperreducer,homelistreducer,cartlistreducer,comingsoonreducer,nowreducer,addtocarts};

// reducer 的设计必须是一个纯函数
// 
// 只要每次给定相同的输入值，就一定会得到相同的输出值: 例如传入1与2，就一定会得到3
// 不会改变原始输入参数，或是外部的环境，所以没有副作用
// 不依頼其他外部的状态，变量或常量

