import React from "react";
import {connect} from "react-redux";
import {Card, Row, Col} from "antd";
import {Link} from "react-router";

class ContentComponent extends React.Component {
	
	componentDidMount(){
		fetch("/mock/articles.json").then( (response)=>{
			return response.json();
		}).then( (json)=>{
			this.props.handleAddContent(json.data.articles)
		})
		
		fetch("/mock/move.json").then( (response)=>{
			return response.json();
		}).then( (json)=>{
			this.props.handleMove(json.data.move)
		})
	}
	
	handleLeftClick(){
		var move = this.props.move;
		move.push(move.shift())
		this.props.handleMove(move)
	}
	
	handleRightClick() {
		var move = this.props.move;
		move.unshift(move.pop())
		this.props.handleMove(move)
	}
	
	
	render(){
		return (
			<div>

				<span className="jt-left" onClick={this.handleLeftClick.bind(this)}> ＜ </span>
				<span className="jt-right" onClick={this.handleRightClick.bind(this)}> ＞ </span>
				<div className="move-box">
				{
					this.props.move.map((value,index)=>{
						return (
							<Card style={{ width: 240,display:"inline-block","marginRight":16}} bodyStyle={{ padding: 0 }} key={index + "_moveImg"}>
							    <div className="custom-image">
							      <img alt="example" width="100%" height="250px" src={value.src} />
							    </div>
							    <div className="custom-card">
							      <h3 className="title-name">{value.name}</h3>
							    </div>
					  		</Card>
						)
					})
				}
				
				</div>
				<div className="index_content">
					<Card title="巴萨最新新闻资讯"  style={{ width: 1024 }}>
					    {
					    	this.props.articles.map( (value,index)=>{
					    		return (
					    			<Link key={index + "_article"} to={"/detail/"+value.article_id}>
					    			<p className="article-item" >
						    		{value.title}
						    		<span className="article-date">{value.date}</span>
						    		
						    		{
							    		value.is_new ? <span className="article-item-new">new</span> : ""
							    	}
					    			</p>
					    			</Link>
					    		)
					    	})
					    }
					    
					</Card>
				</div>
			</div>
		)
	}
}

function mapStateToProps(store){
	return {
		articles:store.articles,
		move:store.move
	}
}

function mapDispatchToProps(dispatch){
	return{
		handleAddContent: function(data){
			var action = {
				type:"ADD_CONTENT_SUCC",
				text:data
			}
			dispatch(action)
		
		},
		
		handleMove: function(data) {
			var action = {
				type:"ADD_MOVE_IMG",
				text:data
			}
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ContentComponent)
