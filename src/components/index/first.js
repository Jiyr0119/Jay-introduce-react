import React from "react";
import {Link} from "react-router";

export default class FirstComponent extends React.Component {
	render(){
		return(
			<div className="first-wrap">
				<img src="/img/banner1.jpg" style={{width:"100%"}}/>
				<p className="welcome">Welcome</p>
				<p className="name">高俊杰</p>
				<p className="job">Front end Engineer</p>
				<p className="contact">Contact</p>
				<p className="email">17316240119@163.com</p>
				<p className="phone-number">17316240119</p>
				<p className="address">BeiJing.CHINA</p>
				<p className="onlien-item">上线项目</p>
				<div className="item-wrap">
					<span className="shop">优居网</span>
					<a href="http://www.52youju.com" target="_blank" className="xd-checkout">查看</a>
					<br/><br/><br/>
					<span className="health">太原房产信息网</span>
					<a href="http://www.tyfdc.gov.cn/#/index" target="_blank" className="jk-checkout">查看</a>
					<br/><br/><br/>
					<span className="health">爱国者诚信联盟</span>
					<a href="http://www.aigoapp.com" target="_blank" className="jk-checkout">查看</a>
					<br/><br/><br/>
					<span className="health">自己的Vue项目</span>
					<a href="https://github.com/Jiyr0119/ComeHere" target="_blank" className="jk-checkout">查看</a>
					<br/><br/><br/>
				</div>
				<p className="exercise-item">react小项目</p>
				<Link to="/index" className="react-checkout">查看</Link>
				
			</div>
		)
	}
}
