import React, { Component } from 'react';
import Movie from './Movie';
import SimpleReactLightbox from "simple-react-lightbox"; 
import dark_knight from './Images/dark_knight.jpg'
import jojo_rabbit from './Images/jojo_rabbit.jpg'
import midsommar from './Images/midsommar.jpg'
export class MovieList extends Component {
	render() {
		const movies = [
			{
				id: 'tt0468569',
				imgSrc: dark_knight
			},
			{
				id: 'tt2584384',
				imgSrc: jojo_rabbit
			},
			{
				id: 'tt8772262',
				imgSrc: midsommar
			}
		]
		return (
			<div className="movieGrid">
				
						{movies.map((m) =>(
								<Movie movieID={m}/>
						))}
				
					
			</div>

		);
	}
}
export default MovieList;
