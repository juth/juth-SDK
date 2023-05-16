/**
 *  Used for all HTTP errors returned from the One API
 * 
 *  @author Steve Juth
 */
class OneAPIError extends Error {

    /**
     *  Creates the error
     * 
     *  @param {number} status - the HTTP (error) status code
     *  @param {string} msg - the response message
     */
    constructor(status, msg) {
        super(msg);
        this.status = status;
    }

    /**
     *  Returns the error message with the HTTP status code
     * 
     *  @returns {string} the message
     */
    toString() {
        return `${this.status}: ${this.message}`;
    }
}

module.exports = OneAPIError;