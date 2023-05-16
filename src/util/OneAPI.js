import axios from 'axios';

//  Prefix for all One API routes 
const BASE_URL = 'https://the-one-api.dev/v2';

/**
 *  Gateway to the One API
 * 
 *  @author Steve Juth
 */
class OneAPI {

    /**
     *  Creates the One API gateway
     * 
     *  @param  {string}  apiKey  the One API key
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
     *  @param  {string}  endpoint
     * 
     *  @returns  {Object|Array}
     */
    async get(endpoint) {
        try {
            const response = await this.axios.get(endpoint);
            return response.data.docs;
        } 
        catch (error) {
            console.log(error);
        }
    }
}

export default OneAPI;