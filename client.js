//  ----------------------------------------------------
//  This is an example of a client that uses the SDK for 
//  retrieving the Lord of the Rings movies and quotes.
//
//  Note: For this example, the One API key is stored in
//  an .env file.
//  ----------------------------------------------------

import LOTR from './src/LOTR.js';

//  Read the One API key from the .env file
import * as dotenv from 'dotenv'
dotenv.config();
const ONE_API_KEY = process.env.ONE_API_KEY;

main();

/**
 *  Main function for testing the SDK.
 * 
 *  @returns {void}
 */
async function main() {

    //  Create an LOTR SDK instance
    const lotr = new LOTR(ONE_API_KEY);

    await getAllMovies(lotr);
    await getOneMovie(lotr);
    await getMovieWithWrongID(lotr);
    await getMovieWithInvalidID(lotr);

    await getFiveQuotes(lotr);
    await getOneQuote(lotr);
    await getQuoteWithWrongID(lotr);
    await getQuoteWithInvalidID(lotr);

    await getMovieQuotes(lotr);
    await getMovieQuotesWithWrongID(lotr);
    await getMovieQuotesWithInvalidID(lotr);
}

/**
 *  Tests getting all movies.
 * 
 *  @param {LOTR} lotr - the LOTR SDK instance
 * 
 *  @returns {void}
 */
async function getAllMovies(lotr) {

    try {
        console.log('Getting all movies...');
        const movies = await lotr.getMovies();
        for(let movie of movies) {
            console.log(`id: ${movie._id}, name: ${movie.name}`);
        }
        console.log('...done');
    }
    catch(error) {
        console.log(error.toString());
    }
    finally {
        console.log('');
    }
}

/**
 *  Tests getting a movie.
 * 
 *  @param {LOTR} lotr - the LOTR SDK instance
 *
 *  @returns {void}
 */
async function getOneMovie(lotr) {
    
    try {
        console.log('Getting a movie...');
        const movie = await lotr.getMovie('5cd95395de30eff6ebccde58');
        console.log(movie);
        console.log('...done');
    }
    catch(error) {
        console.log(error.toString());
    }
    finally {
        console.log('');
    }
}

/**
 *  Tests getting a movie with the wrong id.
 * 
 *  @param {LOTR} lotr - the LOTR SDK instance
 * 
 *  @returns {void}
 */
async function getMovieWithWrongID(lotr) {

    try {
        console.log('Getting a movie with a wrong id...');
        const movie = await lotr.getMovie('5cd95395de30eff6ebcc0000');
        console.log(movie);
        console.log('...done');
    }
    catch(error) {
        console.log(error.toString());
    }
    finally {
        console.log('');
    }
}

/**
 *  Tests getting a movie with an invalid id.
 * 
 *  @param {LOTR} lotr - the LOTR SDK instance
 * 
 *  @returns {void}
 */
async function getMovieWithInvalidID(lotr) {

    try {
        console.log('Getting a movie with an invalid id...');
        const movie = await lotr.getMovie('5cd95395de30eff6ebcc');
        console.log(movie);
        console.log('...done');
    }
    catch(error) {
        console.log(error.toString());
    }
    finally {
        console.log('');
    }
}

/**
 *  Tests getting five quotes.
 * 
 *  @param {LOTR} lotr - the LOTR SDK instance
 *
 *  @returns {void}
 */
async function getFiveQuotes(lotr) {

    try {
        console.log('Getting five quotes...');
        const quotes = await lotr.getQuotes();
        for(let quote of quotes.slice(0, 5)) {
            console.log(`id: ${quote._id}, name: ${quote.dialog}`);
        }
        console.log('...done');
    }
    catch(error) {
        console.log(error.toString());
    }
    finally {
        console.log('');
    }
}

/**
 *  Tests getting a quote.
 * 
 *  @param {LOTR} lotr - the LOTR SDK instance
 *
 *  @returns {void}
 */
async function getOneQuote(lotr) {

    try {
        console.log('Getting a quote...');
        const quote = await lotr.getQuote('5cd96e05de30eff6ebcce7ec');
        console.log(quote);
        console.log('...done');
    }
    catch(error) {
        console.log(error.toString());
    }
    finally {
        console.log('');
    }
}

/**
 *  Tests getting a quote with the wrong id.
 * 
 *  @param {LOTR} lotr - the LOTR SDK instance
 *
 *  @returns {void}
 */
async function getQuoteWithWrongID(lotr) {

    try {
        console.log('Getting a quote with the wrong id...');
        const quote = await lotr.getQuote('5cd96e05de30eff6ebcc0000');
        console.log(quote);
        console.log('...done');
    }
    catch(error) {
        console.log(error.toString());
    }
    finally {
        console.log('');
    }
}

/**
 *  Tests getting a quote with an invalid id.
 * 
 *  @param {LOTR} lotr - the LOTR SDK instance
 *
 *  @returns {void}
 */
async function getQuoteWithInvalidID(lotr) {

    try {
        console.log('Getting a quote with an invalid id...');
        const quote = await lotr.getQuote('5cd96e05de30eff6ebcc');
        console.log(quote);
        console.log('...done');
    }
    catch(error) {
        console.log(error.toString());
    }
    finally {
        console.log('');
    }
}

/**
 *  Tests getting five quotes from a movie.
 * 
 *  @param {LOTR} lotr - the LOTR SDK instance
 *
 *  @returns {void}
 */
async function getMovieQuotes(lotr) {

    try {
        console.log('Getting five quotes from The Fellowship of the Ring...');
        const quotes = await lotr.getQuotes('5cd95395de30eff6ebccde5c');
        for(let quote of quotes.slice(0, 5)) {
            console.log(`id: ${quote._id}, name: ${quote.dialog}`);
        }
        console.log('...done');
    }
    catch(error) {
        console.log(error.toString());
    }
    finally {
        console.log('');
    }
}

/**
 *  Tests getting movie quotes with the wrong ID.
 * 
 *  @param {LOTR} lotr - the LOTR SDK instance
 *
 *  @returns {void}
 */

async function getMovieQuotesWithWrongID(lotr) {

    try {
        console.log('Getting movie quotes with the wrong ID...');
        const quotes = await lotr.getQuotes('5cd95395de30eff6ebccffff');
        for(let quote of quotes) {
            console.log(`id: ${quote._id}, name: ${quote.dialog}`);
        }
        console.log('...done');
    }
    catch(error) {
        console.log(error.toString());
    }
    finally {
        console.log('');
    }
}

/**
 *  Tests getting quotes from a movie with an invalid ID.
 * 
 *  @param {LOTR} lotr - the LOTR SDK instance
 *
 *  @returns {void}
 */
async function getMovieQuotesWithInvalidID(lotr) {

    try {
        console.log('Getting movie quotes with an invalid ID...');
        const quotes = await lotr.getQuotes('5cd95395de30eff6ebcc');
        for(let quote of quotes) {
            console.log(`id: ${quote._id}, name: ${quote.dialog}`);
        }
        console.log('...done');
    }
    catch(error) {
        console.log(error.toString());
    }
    finally {
        console.log('');
    }
}

