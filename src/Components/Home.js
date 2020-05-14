import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import Joker from './Images/Joker.jpg'
import Gallery from "react-photo-gallery"
export class Home extends Component {


	render() {
	const options = {

		buttons: {
			    showAutoplayButton: false,
			    showCloseButton: true,
			    showDownloadButton: false,
			    showFullscreenButton: false,
			    showNextButton: false,
			    showPrevButton: false
			},
		
		settings: {
			autoplaySpeed: 0,
			disableWheelControls: false,
			disablePanzoom: true
		},
		thumbnails: {
			showThumbnails: false
		}
		
	}
	const photos = [
	  {
	    src: Joker,
	    width: 4,
	    height: 3
	  },
	  {
	    src:  "https://source.unsplash.com/Dm-qxdynoEc/800x799",
	    width: 1,
	    height: 1
	  }
	];
 

		return (
			<div>
				<h1>Home</h1>
				<div className="images">
				<SRLWrapper options={options}>
					<Gallery photos={photos} />;
				</SRLWrapper>
				</div>
			</div>
		);
	}
}
export default Home;