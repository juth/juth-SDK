const axios = require('axios');
const OneAPIError = require('./OneAPIError');

//  Prefix for all One API routes 
const BASE_URL = 'https://the-one-api.dev/v2';

/**
 *  Repository for the One API.
 * 
 *  @author Steve Juth
 */
class OneAPI {

    /**
     *  Creates the One API repository.
     * 
     *  @param {string} apiKey - the One API key
     */
    constructor(apiKey) {
        this.axios = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
    }

    /**
     *  Sends a GET request to a One API endpoint and returns the results.
     * 
     *  @param {string} endpoint - the GET endpoint
     * 
     *  @throws {OneAPIError} an error from the One API
     *  @returns {Array} an array of objects from the API
     */
    async get(endpoint) {
        try {
            const response = await this.axios.get(endpoint);
            return response.data.docs;
        } 
        catch(error) {
            throw new OneAPIError(
                error.response.status, 
                error.response.statusText
            );
        }
    }
}

module.exports = OneAPI;