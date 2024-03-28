import { useEffect, useState } from 'react';
import { fetchData } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import css from './HomePage.module.css';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const { results } = await fetchData('trending/movie/day');
                setMovies(results);
            } catch (error) {
                toast.error('Oops! Something went wrong. Try reloading the page', { id: 'error' });
            }
            finally {
                setIsLoading(false)
            }
        };
        getData();
    }, [])

    return (
        <div>
            <h1 className={css.tittle}>Check out today&apos;s new movies</h1>
            <MovieList movies={movies} />
            {isLoading && <Loader />}
            <Toaster />
        </div>
    )
}

export default HomePage;