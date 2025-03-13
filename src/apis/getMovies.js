import axios from 'axios';

const getMovies = async (value, page) => {
    try {
        const res = await axios.get(
            `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${value}&page=${page}`
        );
        if (res.status !== 200) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export default getMovies;
