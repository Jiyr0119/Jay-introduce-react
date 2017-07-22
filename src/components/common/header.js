import React from "react";
import { Row, Col, Menu, Icon, Modal, notification} from 'antd';
const MenuItem = Menu.Item;

export default class HeaderComponent extends React.Component {
	constructor() {
		super();
		this.state={
			categoryItem:[],
			selectedKeys:[]
		}
	}
	
	handleCategorySelect(event){
		this.setState({
			selectedKeys:[event.key]
		})
	}
	
	componentDidMount(){
		fetch("/mock/category.json").then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				selectedKeys:["category_"+json.data.categories[0].category_id],
				categoryItem:json.data.categories
			})
		})
	}

	render(){
		return (
			<div className="header-box">
				<Row>
				    <Col span={7}>
				      	<img src="http://img1.gtimg.com/sports/pics/hv1/217/54/1585/103078612.png" width="200px" height="80px" className="logo"/>
				    </Col>
				    <Col span={15}>
				      	<Menu mode="horizontal" selectedKeys={this.state.selectedKeys} onSelect={this.handleCategorySelect.bind(this)} className="header_menu">
					      	{
					      		this.state.categoryItem.map((value,index)=>{
					      			return <MenuItem key={"category_"+value.category_id}><Icon type={value.icon} />{value.category_name}</MenuItem>
					      		})
					      	}
						</Menu>
					</Col>
				</Row>
			</div>
		)
	}
}
