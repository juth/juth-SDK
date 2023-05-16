/**
 *  Endpoint class for One API's /movie endpoint.
 * 
 *  @author  Steve Juth
 */
class Movies {

    /**
     *  Creates the /movie endpoint.
     * 
     *  @param  {OneAPI}  oneAPI 
     */
    constructor(oneAPI) {
        this.oneAPI = oneAPI;
    }

    /**
     *  Returns all of the movies.
     * 
     *  @returns  {Array}
     */
    async all() {
        return await this.oneAPI.get('/movie');
    }

    /**
     *  Finds a movie by its ID and returns it.
     * 
     *  @param  {string}  id  the ID of the movie
     * 
     *  @returns  {Object}
     */
    async get(id) {
        const movies = await this.oneAPI.get(`/movie/${id}`);
        return (movies.length === 1) ? movies[0] : null;
    }

    /**
     *  Finds all quotes for a movie and returns them.
     * 
     *  @param  {string}  id  the ID of the movie
     * 
     *  @returns  {Array}
     */
    async getQuotes(id) {
        return await this.oneAPI.get(`/movie/${id}/quote`);
    }
}

export default Movies;