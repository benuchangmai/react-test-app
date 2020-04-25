import React, { Component } from 'react';
import Home from './Home'
import Images from './Images'
import SimpleReactLightbox from "simple-react-lightbox"; 

export class Body extends Component {
	displayContent = () => {
		var activeTab = this.props.activeTab
		if(activeTab == 1)
			return (<SimpleReactLightbox>
			<Home/>
		</SimpleReactLightbox>)

		else if(activeTab == 2)
			return (<Images/>)
		else
			return (<Images/>)
	}
	render() {
		return this.displayContent()
		
		
	}
}
export default Body;