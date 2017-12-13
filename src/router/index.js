import React from "react"
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import App from "../components/App";
import Home from "../components/Home";
import Cart from "../components/Cart";
import Search from "../components/Search";
import Film from "../components/Film";
import Nowplaying from "../components/Film/Nowplaying";
import Comingsoon from "../components/Film/Comingsoon";
import Detail from "../components/Detail";
import {Provider}  from "react-redux";
import store  from "../Redux/Store";

const router = (
	<Provider store={store}>
	<Router>		
		<App>
			 <Switch>
			 	{
			 		//switch 只加载匹配路径的第一个孩子
			 	}
				<Route path="/home" component={Home}/>
				<Route path="/cart" component={Cart}/>
				<Route path="/search" component={Search}/>
				<Route path="/film" render={()=>

					<Film>
						<Switch>
							<Route path="/film/nowplaying" component={Nowplaying}/>
							<Route path="/film/comingsoon" component={Comingsoon}/>
							<Redirect from="/film" to="/film/nowplaying"/>
						</Switch>
					</Film>
				}/>
				<Route path="/detail/:kerwinid" component= {Detail}/>
				<Route path="/detail/:id" component= {Detail}/>
				<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
	</Provider>
)


export default router;
