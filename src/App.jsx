import SearchContext from './context/SearchContext';
import Header from './components/Header';
import Search from './components/Search';
import MovieContainer from './components/MovieContainer';
import Footer from './components/Footer';


import { useState } from 'react';

function App() {
    const [searchText, setSearchText] = useState('man');
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(null)
    return (
        <SearchContext.Provider
            value={{ searchText: searchText, setSearchText: setSearchText , page: page, setPage: setPage , numberOfPages: numberOfPages, setNumberOfPages: setNumberOfPages}}
        >
            <div>
                <Header title="Search Movies API" />
                <Search />
                <MovieContainer />
                <Footer/>
            </div>
        </SearchContext.Provider>
    );
}

export default App;
