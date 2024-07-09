import { name } from 'ejs';
import {v4} from 'uuid';

let movies = [
    {
        id: '1',
        name: 'Patriot',
        src: 'https://images.justwatch.com/poster/176219259/s718/the-patriot.jpg'
    },
    {
        id: '2',
        name: 'Barbie', 
        src: 'https://filmfare.wwmindia.com/content/2023/jul/barbie51689608971.jpg' 
    },
    {
        id: '3',
        name: 'Troy',
        src:'https://alexsreviewcorner.com/wp-content/uploads/2022/06/troy.jpg?w=800'
    },
    {
        id: '4',
        name: 'Harry Potter',
        src: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/harry-potter-order-of-the-phoenix-poster-01.jpg'
    },
    {
        id: '5',
        name: 'Tom & Jerry',
        src:'https://images.moviesanywhere.com/77e40f83c657fe5fba988e9dcbc8095e/63814f0e-0763-4593-b5a1-4d6f79ccc6af.jpg'
    },
    {
        id: '6',
        name: 'The Chosen',
        src: 'https://m.media-amazon.com/images/M/MV5BZGVlZDI3MzEtNDE1OC00ZjUzLWIxOGItNDc2YWI3MzNjM2I4XkEyXkFqcGdeQXVyMTYwNzY4MjMx._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: '7',
        name: 'Oppenhiemer',
        src: 'https://www.gardenofmemory.net/content/images/2023/07/oppenheimer-header.jpg'
    },
    {
        id:'8',
        name: 'The Narnia',
        src: 'https://m.media-amazon.com/images/I/91vaWN237nL._AC_UF1000,1000_QL80_.jpg'
    }
];

const getMovieById = (id)=>{
    return movies.find(movie => movie.id === id)
};



const moviesControllers={
    getMovies: (req, res)=>{
        res.status(200).render('movies', {movies: movies})
    },
    getMovie: (req, res) =>{
        const {id} = req.params;
        const movieExist = getMovieById(id);
        if(movieExist){
            res.status(200).render('movie', {movieExist: movieExist})
        }else{
            res.status(404).json({message: `movie with id: ${id} does not exist`})
        }
    },
    addMovie : (req, res)=>{
        const {name, src} = req.body;
        const newMovie = {
            id:v4(),
            name: name,
            src: src
        };
        movies.push(newMovie);
        res.status(201).json(newMovie)
    },
    updateMovie:(req, res)=>{
        const {id} = req.params;
        const {name, src} = req.body;
        const movieExist = getMovieById(id);
        if(movieExist){
            movies.forEach((movie, index) =>{
                if(movie.id === id){
                const updatedMovie = {id, name, src};
                movies[index] = updatedMovie ;
                res.status(200).json(updatedMovie)
                }
            }) 
        }else{
            res.status(404).json({message: `movie with id: ${id} does not exist`})
        }
    
    },
    deleteMovie : (req, res)=>{
        const {id} = req.params;
        const movieExist = getMovieById(id);
        if(movieExist){
            movies = movies.filter(movie => movie.id !== id)
            res.status(200).json({message: ` The movie has been deleted successfuly`})
        }else{
            res.status(404).json({message: `movie with id: ${id} does not exist`})
        }
    }



};

export default moviesControllers;