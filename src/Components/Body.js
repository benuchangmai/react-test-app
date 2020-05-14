import React, { Component } from 'react';
import Home from './Home'
import Images from './Images'
import Videos from './Videos'
import MovieList from './MovieList'
import FeedbackPage from './FeedbackPage'
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
		else if(activeTab == 3)
			return (<Videos/>)
		else if(activeTab == 4)
			return (<FeedbackPage/>)
		else if(activeTab == 5)
			return (<MovieList/>)
	}
	render() {
		return this.displayContent()
		
		
	}
}
export default Body;