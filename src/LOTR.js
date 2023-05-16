import Movies from './endpoints/Movies.js';
import Quotes from './endpoints/Quotes.js';
import OneAPI from './util/OneAPI.js';

/**
 *  Main SDK class for the One (Lord of the Rings) API.
 * 
 *  Note: To add a new endpoint, create an access class
 *  in the endpoints directory, and then add convenience
 *  (wrapper) functions to this class.
 * 
 *  @author Steve Juth
 */
class LOTR {

    /**
     *  Creates the SDK main class with the API key.
     * 
     *  @param {string} apiKey - the API key
     */
    constructor(apiKey) {

        //  Create the One API client
        const oneAPI = new OneAPI(apiKey);

        //  Create each API endpoint
        this.movies = new Movies(oneAPI);
        this.quotes = new Quotes(oneAPI);
    }

    /**
     *  Returns a list of all movies.
     * 
     *  @returns {Array} an array of movies
     */
    async getMovies() {
        return await this.movies.findAll();
    }

    /**
     *  Finds a movie by its ID and returns it.
     * 
     *  @param {string} id - the ID of the movie
     * 
     *  @returns {Object} the movie
     */
    async getMovie(id) {
        return await this.movies.findById(id);
    }

    /**
     *  Returns a list of quotes for a movie or all quotes
     *  if no movie ID is provided.
     * 
     *  @param {string} [movieId] - the ID of the movie
     * 
     *  @returns {Array} an array of quotes
     */
    async getQuotes(movieId) {
        return await (movieId) ? 
            this.quotes.findByMovieId(movieId) : 
            this.quotes.findAll();
    }

    /**
     *  Finds a quote by its ID and returns it.
     * 
     *  @param {string} id - the ID of the quote
     * 
     *  @returns {Object} the quote
     */
    async getQuote(id) {
        return await this.quotes.findById(id);
    }
}

export default LOTR;