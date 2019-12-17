import React from 'react';
import logo from './logo.svg';
import './myStyle.css'; 
import MovieItem from './movieItem.js';
import Axios from 'axios';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			movie: []
		}
	}
	componentDidMount() {
		this.movieTopRate()
	}

	movieTopRate = () => {
		const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=e1c2b2c630d19b771a1a27916a56d7e2&language=th-US&page=1"
		Axios.get(url).then(result => {
			const results = result.data.results
			const dataArray = []
			results.forEach(item => {
				item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path
				dataArray.push(item)
			});

			this.setState({
				movie: dataArray
			})
		})
	}
	searchMovie = (keyword) => {
		const url = "https://api.themoviedb.org/3/search/movie?api_key=e1c2b2c630d19b771a1a27916a56d7e2&query=" + keyword
		Axios.get(url).then(result => {
			const results = result.data.results
			const dataArray = []
			results.forEach(item => {
				item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path
				dataArray.push(item)
			});

			this.setState({
				movie: dataArray
			})
		})
	}
	render() {
		return (
			<div>
				<div className="navbar">
					<div className="container">
						<div className="navBand">
							<img src={ require('./asset/kisspng-art-film-logo-cinema-clip-art-movie.png') } id="logo"></img>
						</div>
					</div>
				</div>
				<div className="content">
					<div className="container">

						<div className="title-head">
							<div id="titleName"><h1>Movie on show</h1></div>
							<div id="boxSearch">
								<input onChange={(event) => { this.searchMovie(event.target.value) }} id="txtSearch" placeholder="Search"/>
							</div>
						</div>

						{this.state.movie.map(item => (
							<MovieItem movie={item}/>
						))}

					</div>
				</div>
			</div>
		)
	}
}

export default App;
