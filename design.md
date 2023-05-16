# juth-SDK Design

The juth-SDK was designed to make One API access simple to use and easy to extend. The main part of the SDK is the `LOTR` class.

## LOTR Class

The `LOTR` class serves as a wrapper around the One API endpoints. Currently, it provides convenient methods for accessing the `/movie` and `/quote` API endpoints.

Here is how to create an instance of the `LOTR` class:

```javascript
const LOTR = require('juth-sdk');

const lotr = new LOTR('<your API key>');
```

Once you have an instance of the `LOTR` class, you can use its methods to interact with the One API endpoints. For example, to fetch a list of movies, you can use the `getMovies` method:

```javascript
const movies = await lotr.getMovies();
console.log(movies);
```

## Extensibility

The juth-SDK is designed to be easily extensible. To add a new endpoint to the SDK, you can create a new class in the `./endpoints` directory that implements the necessary API methods. You can then add a new endpoint 'wrapper' function to the `LOTR` class that calls the corresponding methods on the endpoint class.

For example, to add a new `/character` endpoint, you can create a new class in `./endpoints/Characters.js` that implements the `getAllCharacters` and `getCharacter` methods:

```javascript
class Characters {
  constructor(oneAPI) {
    this.oneAPI = oneAPI;
  }

  async getAllCharacters() {
    return await this.oneAPI.get('/character');
  }

  async getCharacter(id) {
    const characters = await this.oneAPI.get(`/character/${id}`);
    return (characters.length === 1) ? characters[0] : null;
  }
}
```

**Note:** The function names used in this example differ from the naming convention used for the current endpoints, which are `findAll` and `findByID`, respectively. This deviation is only for illustrative purposes.

To finish implementing this new endpoint, 'wrapper' functions are added to the `LOTR` class that call the `getAllCharacters` and `getCharacter` methods on the new endpoint class:

```javascript
class LOTR {

  constructor(apiKey) {

    //  Create the One API client
    const oneAPI = new OneAPI(apiKey);

    //  Create each API endpoint
    this.movies = new Movies(oneAPI);
    this.quotes = new Quotes(oneAPI);
    this.characters = new Characters(oneAPI);
  }

  async getCharacters() {
    return await this.characters.getAllCharacters();
  }

  async getCharacter(id) {
    return await this.characters.getCharacter(id);
  }
}
```

This allows you to easily extend the juth-SDK with new functionality as needed.

## Advanced Usage

The `LOTR` class can also be used to implement more complex functionality that queries multiple endpoints. For example, you could implement a method that fetches a random quote from a movie and the character who said it:

```javascript
class LOTR {
  // ...

  async getRandomQuoteAndCharacter(movieId) {

    //  Select a random quote from the specified movie
    const quotes = await this.quotes.findByMovieId(movieId);
    const index  = Math.floor(Math.random() * quotes.length);
    const quote  = quotes[index];

    //  Get the character who said it
    const character = await this.characters.getCharacter(quote.character);

    return { quote, character };
  }
}
```

This demonstrates how the `LOTR` class can be used to implement more advanced use cases that involve multiple API endpoints.