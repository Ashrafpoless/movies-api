import { useEffect, useState, useContext } from 'react';

import SearchContext from '../context/SearchContext';

import Loading from './Loading';
import Movie from './Movie';

import getMovies from '../apis/getMovies';
import './MovieContainer.css';

const MovieContainer = () => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const { searchText, page, setPage, numberOfPages, setNumberOfPages } = useContext(SearchContext);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getMovies(searchText, page);
                setMovies(data.Search);
                //setNumberOfPages( Math.ceil(data.totalResults/100))
                setNumberOfPages(10)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, [searchText, page]);

    const prePage = ()=>{
        if(page !== 1){
            setPage(page-1)
        }else{
            return
        }
    };

    const nextPage = () => {
        if(page !== 100){
            setPage(page+1)
        }else{
            return
        }
    };

    const changeCPage = (id) => {
        setPage(id)
    };

    return (
        <div className='container'>
            <div className='movies'>
                {loading && <Loading />}
                {error && <p>{error}</p>}
                {movies.length > 0 &&
                    movies.map((movie) => (
                        <Movie key={movie.imdbID} movie={movie} />
                    ))}
            </div>
            <div>
                <nav >
                    <ul className='nav'>
                        <li>
                            <a href="#" onClick={prePage} >Prev</a>
                        </li>
                        {/*
                            [...Array(numberOfPages).keys()].map((n, i )=> (
                                <li key={i}>
                                    <a href="#" onClick={()=> changeCPage(i+1)}>{i+1}</a>
                                </li>
                            ))
                        */}
                        <li>
                            <a href="#" onClick={nextPage} >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MovieContainer;
