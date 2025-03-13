import { useEffect, useState, useContext } from 'react';

import SearchContext from '../context/SearchContext';

import Loading from './Loading';
import Movie from './Movie';

import getMovies from '../apis/getMovies';

const MovieContainer = () => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const { searchText } = useContext(SearchContext);

    // pagination
    const [currentPage, setCurrentPage] = useState(1)
    const moviesPerPage = 5;
    const lastIndex =  currentPage * moviesPerPage;
    const firstIndex =  lastIndex - moviesPerPage; 
    const records = movies.slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(movies.length / moviesPerPage)
    const numbers = [...Array(numberOfPages + 1).keys()].slice(1);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getMovies(searchText);
                setMovies(data.Search);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, [searchText]);

    const prePage = ()=>{
        if(currentPage !== 1){
            setCurrentPage(currentPage-1)
        }
    };

    const nextPage = () => {
        if(currentPage !== numberOfPages){
            setCurrentPage(currentPage+1)
        }
    };

    const changeCPage =(id)=>{
        setCurrentPage(id)
    };

    return (
        <div>
            {loading && <Loading />}
            {error && <p>{error}</p>}
            {movies.length > 0 &&
                records.map((movie) => (
                    <Movie key={movie.imdbID} movie={movie} />
                ))}
            <nav>
                <ul>
                    <li>
                        <a href="#" onClick={prePage} >Prev</a>
                    </li>
                    {
                        numbers.map((n, index) => (
                            <li key={index}>
                                <a href="" onClick={()=> changeCPage(n)}>{n}</a>
                            </li>
                        ))
                    }
                     <li>
                        <a href="#" onClick={nextPage} >Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MovieContainer;
