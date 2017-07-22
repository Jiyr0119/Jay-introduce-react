import React from "react";
import {connect} from "react-redux";
import {Card, Button ,Row, Col, Carousel, BackTop } from "antd";
import {Link} from "react-router";

class ContentComponent extends React.Component {
	
	componentDidMount(){
		var id = this.props.id;
		fetch("/mock/article.json?id="+id).then( (response)=>{
			return response.json();
		}).then( (json)=>{
			this.props.handleAddDetail(json.data)
		})
	}
	
	
	handleBtnClick(){
		this.props.handleMsg(this.refs.input.value);
		this.refs.input.value = "";
		
	}
	
	render(){
		return (
			<div>
			<Row className="content-item">
				<Col span={17}>
					<h1 className="content-item-title">{this.props.title}</h1>
					<div className="content-item-spans">
						<span className="content-item-span">时间&ensp;:&ensp;{this.props.time}</span>
						<span className="content-item-span">来源&ensp;:&ensp;巴萨官网</span>
						<span className="content-item-span">下载次数&ensp;:&ensp;{this.props.count}次</span>
					</div>
					<div dangerouslySetInnerHTML={{__html:this.props.content}} className="content-item-content">
					</div>
					<div style={{clear:"both"}}></div>
				</Col>
				<Col span={6}>
					
					<Carousel autoplay effect="fade" className="img-autoplay">
					    <div><img src="/img/m1.jpg" style={{width:"100%"}} /></div>
					    <div><img src="/img/m2.jpg" style={{width:"100%"}} /></div>
					    <div><img src="/img/m3.jpg" style={{width:"100%"}} /></div>
					    <div><img src="/img/m4.jpg" style={{width:"100%"}} /></div>
					</Carousel>
					
					<div className="advertisement-autoplay">
						<Carousel vertical="true" autoplay>
						    <div className="box"><h3>广告</h3></div>
						    <div><h3>还是广告</h3></div>
						    <div><h3>又是广告</h3></div>
						    <div><h3>都是广告</h3></div>
						</Carousel>
					</div>
					<div className="big-advertisement">
						<p>这是一个大广告</p>
					</div>
				</Col>
				</Row>
				
				<div className="content-msg">
					<div className="content-msg-title">请留言</div>
					<textarea rows="5" cols="168" className="content-msg-input" ref="input"/><br/>
					<Button type="primary" onClick={this.handleBtnClick.bind(this)}>提交</Button>
				</div>
				<div className="msg-box">
					<Card title="留言板"  style={{ width: 1024 }} className="msg-title">
					    {
					    	this.props.msg.map( (value,index)=>{
					    		return <p key={index + "_msg"} className="msg">{value}</p>
					    	})
					    }
					  </Card>
				</div>
				 <div className="up-button">
				    <BackTop>
				      <div className="ant-back-top-inner">UP</div>
				    </BackTop>
				</div>
			</div>
		)
	}
}

function mapStateToProps(store,ownProps){
	return {
		title:store.title,
		time:store.time,
		count:store.count,
		mp3:store.mp3,
		content:store.content,
		msg:store.msg,
		id:ownProps.id
	}
}

function mapDispatchToProps(dispatch){
	return{
		handleAddDetail: function(data) {
			var action ={
				type:"ADD_DETAIL_SUCC",
				title:data.title,
				time:data.time,
				count:data.count,
				mp3:data.mp3,
				content:data.content
			}
			dispatch(action);
		},
		handleMsg: function(val){
			var action = {
				type:"ADD_MSG_SUCC",
				text:val
			}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ContentComponent)


