# maizuo_react
### 基于B2C模式的单页面应用的简单实现，样式仿照的是卖座APP。
### author： WangFang
这个项目使用的技术栈是React+Axios+Redux+React-swiper+Webpack+Sass+VScode
基本实现：首页轮播图、搜索、分页效果、购物车、侧边栏过渡动画效果

#### 说明：
 1.本项目没有后台支持，数据接口采用的卖座APP的接口。
 2.本项目一共五个模块：Index+Film+Detail+Cart+Search
   index实现了轮播图、产品列表分页、侧边栏过渡动画效果等效果。
   Film实现了tab切换，点击list里的商品可跳转到Detail页面查看商品详情。
   Detail里展示商品list里的商品详情，点击加入购物车按钮可以把商品添加到Cart里。
   Cart自动获取store里中的数据然后渲染页面，可自动计算总价。
   Search模块中，在搜索框中可以输入关键字，可以自动匹配显示内容。
   
#### 项目运行方法：
    进入项目目录,请先npm install安装项目依赖环境，再npm run dev运行项目。
    端口号是：8088。可以在浏览器地址栏输入localhost:8088查看。
 
