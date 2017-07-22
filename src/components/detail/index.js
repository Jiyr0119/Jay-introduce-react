import React from "react";
import HeaderComponent from "../common/header.js";
import FooterComponent from "../common/footer.js";
import ContentComponent from "./content.js";

export default class DetailComponent extends React.Component {
	
	
	
	render(){
		return (
			<div>
				<HeaderComponent/>
				<ContentComponent id={this.props.params.id} />
				<br/>
				<FooterComponent/>
				
			</div>
		)
	}
}
