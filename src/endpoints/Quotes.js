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
    async all() {
        return await this.oneAPI.get('/quote');
    }

    /**
     *  Finds a quote by its ID and returns it.
     * 
     *  @param {string} id - the ID of the quote
     * 
     *  @returns {Object} the quote or null if nothing was found
     */
    async get(id) {
        const quotes = await this.oneAPI.get(`/quote/${id}`);
        return (quotes.length === 1) ? quotes[0] : null;
    }
}

export default Quotes;