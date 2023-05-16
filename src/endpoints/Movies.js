const ObjectId = require('mongodb').ObjectId;
const InvalidIDError = require('./InvalidIDError');

/**
 *  Provides access to One API's /movie endpoint.
 * 
 *  @author Steve Juth
 */
class Movies {

    /**
     *  Creates the /movie endpoint.
     * 
     *  @param {OneAPI} oneAPI - the One API repository
     */
    constructor(oneAPI) {
        this.oneAPI = oneAPI;
    }

    /**
     *  Returns all of the movies.
     * 
     *  @returns {Array} - an array of movies
     */
    async findAll() {
        return await this.oneAPI.get('/movie');
    }

    /**
     *  Finds a movie by its ID and returns it.
     * 
     *  @param {string} id - the ID of the movie
     * 
     *  @returns {Object} the movie or null if nothing was found
     */
    async findById(id) {

        if(!ObjectId.isValid(id)) {
            throw new InvalidIDError(id, '/movie/{id}');
        }

        const movies = await this.oneAPI.get(`/movie/${id}`);
        return (movies.length === 1) ? movies[0] : null;
    }
}

module.exports = Movies;