import React from "react";
import {Row, Col,Menu} from "antd";
import {connect} from "react-redux";
const MenuItem = Menu.Item;


class FooterComponent extends React.Component {
	
	componentDidMount(){
		fetch("/mock/footer.json").then((response)=>{
			return response.json();
		}).then((json)=>{
			this.props.handleAddFooter(json.data.categories);
		})
	}
	
	
	
	render(){
		return (
			<div>
				<div>
					<div className="link">巴萨更多资讯</div>
					<Row>
						<Col span={24}>
					      	<Menu mode="horizontal" className="footer_menu">
						      	{
						      		this.props.footerItems.map((value,index)=>{
						      			return <MenuItem key={"footer_"+value.category_id}> {value.category_name}</MenuItem>
						      		})
						      	}
							</Menu>
						</Col> 
					</Row>
				</div>
				<div className="footer">
					<p>本网站由 <a href="http://www.easyvoa.com" target="_blank"><strong>Jiyr</strong></a> 开发上线 &copy; 2011-2014   <a href='http://m.easyvoa.com'>手机版best</a></p>
					<p>网站所有内容，均来自Jiyr个人网站，所有资料均只作为个人巴萨娱乐参考。 站长QQ:594402100 欢迎联系合作</p>
				</div>
			</div>

		)
	}
}


function mapStateToProps(store){
	return{
		footerItems:store.footerItems
	}
}

function mapDispatchToProps(dispatch){
	return {
		handleAddFooter: function(data) {
			var action = {
				type:"ADD_FOOTER",
				text:data
			}
			dispatch(action)
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(FooterComponent)
