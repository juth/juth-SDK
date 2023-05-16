//  ----------------------------------------------------
//  This is an example of a client that uses the SDK for 
//  retrieving the Lord of the Rings movies and quotes.
//
//  Note: For this example, the One API key is stored in
//  an .env file. Otherwise, it could be added directly
//  to the LOTR constructor.
//  ----------------------------------------------------

import LOTR from './src/LOTR.js';

//  Read the One API key from the .env file
import * as dotenv from 'dotenv'
dotenv.config();
const ONE_API_KEY = process.env.ONE_API_KEY;

main();

/**
 *  Main function for testing the SDK
 */
async function main() {
    const lotr = new LOTR(ONE_API_KEY);

    await getAllMovies(lotr);
    await getOneMovie(lotr);
    await getInvalidMovie(lotr);

    await getFiveQuotes(lotr);
    await getOneQuote(lotr);
    await getInvalidQuote(lotr);
    await getMovieQuotes(lotr);
}

/**
 *  Tests getting all movies
 * 
 *  @param  {LOTR}  lotr 
 */
async function getAllMovies(lotr) {

    console.log('Getting all movies...');
    const movies = await lotr.getMovies();
    for(let movie of movies) {
        console.log(`id: ${movie._id}, name: ${movie.name}`);
    }
    console.log('...done');
}

/**
 *  Tests getting a movie
 * 
 *  @param  {LOTR}  lotr 
 */
async function getOneMovie(lotr) {
    
    console.log('Getting a movie...');
    const movie = await lotr.getMovie('5cd95395de30eff6ebccde58');
    console.log(movie);
    console.log('...done');
}

/**
 *  Tests getting a movie with an invalid id
 * 
 *  @param  {LOTR}  lotr 
 */
async function getInvalidMovie(lotr) {

    console.log('Getting a movie with a bad id...');
    const movie = await lotr.getMovie('5cd95395de30eff6ebcc0000');
    console.log(movie);
    console.log('...done');
}

/**
 *  Tests getting five quotes
 * 
 *  @param  {LOTR}  lotr 
 */
async function getFiveQuotes(lotr) {

    console.log('Getting five quotes...');
    const quotes = await lotr.getQuotes();
    for(let quote of quotes.slice(0, 5)) {
        console.log(`id: ${quote._id}, name: ${quote.dialog}`);
    }
    console.log('...done');
}

/**
 *  Tests getting a quote
 * 
 *  @param  {LOTR}  lotr 
 */

async function getOneQuote(lotr) {

    console.log('Getting a quote...');
    const quote = await lotr.getQuote('5cd96e05de30eff6ebcce7ec');
    console.log(quote);
    console.log('...done');
}

/**
 *  Tests getting a quote with an invalid id
 * 
 *  @param  {LOTR}  lotr 
 */

async function getInvalidQuote(lotr) {

    console.log('Getting a quote with a bad id...');
    const quote = await lotr.getQuote('5cd96e05de30eff6ebcc0000');
    console.log(quote);
    console.log('...done');
}

/**
 *  Tests getting five quotes from a movie
 * 
 *  @param  {LOTR}  lotr 
 */

async function getMovieQuotes(lotr) {

    console.log('Getting five quotes from The Fellowship of the Ring...');
    const quotes = await lotr.getQuotes('5cd95395de30eff6ebccde5c');
    for(let quote of quotes.slice(0, 5)) {
        console.log(`id: ${quote._id}, name: ${quote.dialog}`);
    }
    console.log('...done');
}

