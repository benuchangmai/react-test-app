import React, { Component } from 'react';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";
import Popup from "reactjs-popup";
import dark_knight from './Images/dark_knight.jpg'
export class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, movieData: {} };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

    componentDidMount() {
    	console.log(this.props.movieID.id)
        axios
            .get(
                `https://www.omdbapi.com/?apikey=b059c995&i=${
                    this.props.movieID.id
                }&plot=full`
            )
            .then(res => res.data)
            .then(res => {
                this.setState({ movieData: res });
            });
    }
	  openModal() {
	    this.setState({ open: true });
	  }
	  closeModal() {
	    this.setState({ open: false });
	  }
    render() {
        const {
            Title,
            Released,
            Genre,
            Plot,
            Poster,
            imdbRating
        } = this.state.movieData;

        if (!Poster || Poster === 'N/A') {
            return null;
        }
        return (
            <div className="movie-card-container">   
			  <Popup trigger={<img src={this.props.movieID.imgSrc} className="button"/>} modal>
			    {close => (
			      <div className="modal">
			      		<img src={this.props.movieID.imgSrc}/>
					    <div className="movie-info">
				                    <div>
				                        <h1>{Title}</h1>
				                        <small>Released Date: {Released}</small>
				                    </div>
				                    <h4>Rating: {imdbRating} / 10</h4>
				                    <p>{Plot && Plot.substr(0, 350)}</p>
				                    <div className="tags-container">
				                        {Genre &&
				                            Genre.split(', ').map(g => (
				                                <span key={g}>{g}</span>
				                            ))}
				                    </div>
				        </div>

					 </div>
					     
					      
			    )}
			  </Popup>			           
            </div>
        );
    }
}
export default Movie;