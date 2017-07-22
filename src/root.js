import "./css/style.css";
import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, hashHistory} from "react-router";
import FirstComponent from "./components/index/first.js";
import IndexComponent from "./components/index/index.js";
import {createStore}  from "redux";
import reducer from "./reducer.js"
import DetailComponent from "./components/detail/index.js";



var store = createStore(reducer);
class Root extends React.Component {
	render(){
		return (
			<div className="main">
				<Provider store={store}>
					<Router history={hashHistory}>
						<Route path="/" component={FirstComponent}></Route>
	 					<Route path="index" component={IndexComponent}></Route>
						<Route path="detail/:id" component={DetailComponent}></Route>
					</Router>
				</Provider>
			</div>
		)
	}
}



ReactDom.render(<Root/>,document.querySelector("#root"))
