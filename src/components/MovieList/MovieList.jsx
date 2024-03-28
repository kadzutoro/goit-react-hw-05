import MoviesListItem from '../MoviesListItem/MoviesListItem';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ( { movies } ) => {
    const location = useLocation();

    return (
        <ul className={css.list}>
            {movies.map(movie=> (
            <li key={movie.id}>
                <Link to={'/movies/${movie.id}'} state={location}>
                <MoviesListItem movie={movie} />
                </Link>
            </li>
            ))}
        </ul>
    );
};

export default MovieList;