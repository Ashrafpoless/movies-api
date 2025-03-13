import PropTypes from 'prop-types';
import noImage from '../assets/noImage.png';

import './Movie.css'
const Movie = ({ movie }) => {
    return (
        <div className='movie'>
            <h2>{movie.Title.length <= 20
                    ? movie.Title
                    : `${movie.Title.slice(0, 15)} . . .`}</h2>
            <img
                src={movie.Poster === 'N/A' ? noImage : movie.Poster}
                alt={movie.Title}
            />
            <p>{movie.Year}</p>
        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired
    }).isRequired
};

export default Movie;
