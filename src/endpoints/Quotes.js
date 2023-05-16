const ObjectId = require('mongodb').ObjectId;
const InvalidIDError = require('./InvalidIDError');

/**
 *  Provides access to One API's /quote endpoint.
 * 
 *  @author  Steve Juth
 */
class Quotes {

    /**
     *  Creates the /quote endpoint.
     * 
     *  @param {OneAPI} oneAPI - the One API repository
     */
    constructor(oneAPI) {
        this.oneAPI = oneAPI;
    }

    /**
     *  Returns all of the quotes.
     * 
     *  @returns {Array} an array of quotes
     */
    async findAll() {
        return await this.oneAPI.get('/quote');
    }

    /**
     *  Finds a quote by its ID and returns it.
     * 
     *  @param {string} id - the ID of the quote
     * 
     *  @returns {Object} the quote or null if nothing was found
     */
    async findById(id) {

        if(!ObjectId.isValid(id)) {
            throw new InvalidIDError(id, '/quote/{id}');
        }

        const quotes = await this.oneAPI.get(`/quote/${id}`);
        return (quotes.length === 1) ? quotes[0] : null;
    }

    /**
     *  Finds all quotes for a movie and returns them.
     * 
     *  @param {string} id - the ID of the movie
     * 
     *  @returns {Array} an array of quotes
     */
    async findByMovieId(id) {

        if(!ObjectId.isValid(id)) {
            throw new InvalidIDError(id, '/movie/{id}/quote');
        }

        return await this.oneAPI.get(`/movie/${id}/quote`);
    }
}

module.exports = Quotes;