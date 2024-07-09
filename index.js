import path, { dirname } from 'path';
import  { fileURLToPath }  from 'url';

import express from 'express';
import dotenv from 'dotenv';

import movieRoutes from './routes/movies.js'

dotenv.config();
const PORT = process.env.PORT || 3005;

const __fileName = fileURLToPath(import.meta.url);
const PATH = dirname(__fileName);

// initial express
const app = express();

// set template engine
app.set('view engine', 'ejs');
app.set('views' , path.join(PATH, 'views'))


// parse my body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// server static folder
app.use(express.static(path.join(PATH, 'public')))

// use route
app.use('/api/movies', movieRoutes);

// handel 404
app.use((req, res)=>{
    res.status(404).render('404', {title: 'page not found!', message: `this page does not exist`})
})

// listen
app.listen(PORT, ()=>{
    console.log(`server is up and runnuing on port ${PORT}`);
})