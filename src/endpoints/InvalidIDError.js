/**
 *  Error for an invalid endpoint ID.
 * 
 *  @author Steve Juth
 */
class InvalidIDError extends Error {

    /**
     *  Creates the error with the ID.
     * 
     *  @param {string} id - the ID used in the endpoint
     *  @param {string} endpoint - the API endpoint
     */
    constructor(id, endpoint) {
        super(`Invalid id (${id}) for endpoint ${endpoint}`);
    }
}

module.exports = InvalidIDError;