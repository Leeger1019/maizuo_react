import React,{Component} from "react";
import "./index.scss"
import {connect} from "react-redux"
import axios from "axios"
var _ = require('lodash');

class Cart extends React.Component{
    render(){
        let {cartlist} = this.props
        
        var uniqCart=_.uniq(cartlist)

        function getCartNum(carts,cartChild){
            var num=0;
            for(let i=0;i<carts.length;i++){
                if(carts[i]===cartChild){
                    num++
                }
            }
            return num;
        }
        
        if(uniqCart.length==0){
            return <div>
                    <p className='nullCart'>请先去详情页添加商品</p>
            </div>
        }

        var cartComponent=[]
        var cartTotal=0
        for(let i=0;i<uniqCart.length;i++){
            var cartNum=getCartNum(cartlist,uniqCart[i])
            cartComponent.push(
                <li key={i} >
                    <span><img src={uniqCart[i].poster.origin}/></span>
                    <span>{uniqCart[i].name}</span>
                    <span className='botData'>{cartNum}</span>
                    <span className='botData'>￥{uniqCart[i].id-3000}</span>
                    <span className='botData'>￥{(uniqCart[i].id-3000)*cartNum}</span>
                </li>
            )
            cartTotal+=(uniqCart[i].id-3000)*cartNum
        }
        //console.log(cartTotal)
        return <div id='cart'>

            <ul>
                <li><span className='s0'>海报</span>
                <span className='s1'>名称</span>
                <span className='s2'>数量</span>
                <span className='s3'>价格</span>
                <span className='s4'>总计</span></li>
                {cartComponent}
            </ul>
            <div className='total'>
             <span className='d1'>共有{cartlist.length}件商品</span> <span className='d2'>总计:￥{cartTotal}元</span>
            </div>
        </div>
        
    }
}
const getValue = state=>{
    return {
        cartlist:state.cartlist
    }
}

export default connect(
    getValue
)(Cart);