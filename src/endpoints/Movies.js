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
    async all() {
        return await this.oneAPI.get('/movie');
    }

    /**
     *  Finds a movie by its ID and returns it.
     * 
     *  @param {string} id - the ID of the movie
     * 
     *  @returns {Object} the movie or null if nothing was found
     */
    async get(id) {
        const movies = await this.oneAPI.get(`/movie/${id}x`);
        return (movies.length === 1) ? movies[0] : null;
    }

    /**
     *  Finds all quotes for a movie and returns them.
     * 
     *  @param {string} id - the ID of the movie
     * 
     *  @returns {Array} an array of quotes
     */
    async getQuotes(id) {
        return await this.oneAPI.get(`/movie/${id}/quote`);
    }
}

export default Movies;