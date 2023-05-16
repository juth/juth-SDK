import Movies from './endpoints/Movies.js';
import Quotes from './endpoints/Quotes.js';
import OneAPI from './util/OneAPI.js';

/**
 *  Main class for the Lord of the Rings SDK.
 * 
 *  @author  Steve Juth
 */
class LOTR {

    /**
     *  Creates the SDK main class with the API key
     * 
     *  @param  {string}  apiKey  the key for the Lord of the Rings One API
     */
    constructor(apiKey) {

        //  Create the One API client
        const oneAPI = new OneAPI(apiKey);

        //  Create each API endpoint
        this.movies = new Movies(oneAPI);
        this.quotes = new Quotes(oneAPI);
    }

    /**
     *  Returns a list of all movies
     * 
     *  @returns  {Array}
     */
    async getMovies() {
        return this.movies.all();
    }

    /**
     *  Returns a movie by its id
     * 
     *  @params  {string}  id  the ID of the movie
     * 
     *  @returns  {Object}
     */
    async getMovie(id) {
        return this.movies.get(id);
    }

    /**
     *  Returns a list of quotes for a movie or all quotes.
     * 
     *  @param  {string}  movieId  the ID of the movie
     * 
     *  @returns  {Array}
     */
    async getQuotes(movieId) {
        return (movieId) ? 
            this.movies.getQuotes(movieId) : 
            this.quotes.all();
    }

    /**
     *  Returns a quote by its id
     * 
     *  @params  {string}  id  the ID of the quote
     * 
     *  @returns  {Object}
     */
    async getQuote(id) {
        return this.quotes.get(id);
    }
}

export default LOTR;