import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import Joker from './Images/Joker.jpg'

export class Home extends Component {


	render() {
	const options = {
		thumbnailsSize : ["300px","500px"],
	}
		return (
			<div>
				<h1>Home</h1>
				<div className="landscape">
				<SRLWrapper >
					<a href={Joker} data-attribute="SRL">
						<img src={Joker}/>
					</a>
					<a href={Joker} data-attribute="SRL">
						<img src={Joker}/>
					</a>
				</SRLWrapper>
				</div>
			</div>
		);
	}
}
export default Home;