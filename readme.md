# juth-SDK

The juth-SDK is a Node.js SDK for interacting with the [One API](https://the-one-api.dev/). This SDK provides a simple and convenient way to authenticate with the API, make requests, and handle responses.

## Installation

You can install the juth-SDK using npm:

```bash
npm install juth-sdk
```

## Usage

To use the juth-SDK, you first need to create an instance of the `LOTR` class:

```javascript
const { LOTR } = require('juth-sdk');

const lotr = new LOTR('<your API key>');
```

Replace `<your API key>` with your actual One API key. To request an API key, [sign up here](https://the-one-api.dev/sign-up).

Once you have an `LOTR` instance, you can use it to make requests to the One API. For example, to fetch a list of movies, you can use the `getMovies` method:

```javascript
//  Get all movies
const movies = await lotr.getMovies();
console.log(movies);
```

The `getMovies` method returns a Promise that resolves to an array of movie objects. You can use other methods on the `LOTR` class to interact with other parts of the Open API. Currently, only the /movie and /quote endpoints are supported.

Here is another example. To fetch a list of quotes, you can use the `getQuotes` method:

```javascript
//  Get all quotes and output the first five
const quotes = await lotr.getQuotes();
console.log(quotes.slice(0, 5));
```

One quote or quotes within a particular movie can be obtained like so:
```javascript
//  Get a specific quote
const quote = await lotr.getQuote('5cd96e05de30eff6ebcce7ec');
console.log(quote);

//  Get all quotes from 'The Fellowship of the Ring'
const quotes = await lotr.getQuotes('5cd95395de30eff6ebccde5c');
console.log(quotes);
```

## Contributing

If you would like to contribute to the juth-SDK, please follow these steps:

1. Fork the repository and create a new branch for your changes.
2. Make your changes and commit them with descriptive commit messages.
3. Push your changes to your forked repository.
4. Create a pull request from your branch to the main juth-SDK repository.

Before submitting a pull request, please make sure that your changes are properly tested.

## License

The juth-SDK is licensed under the MIT License. See the [LICENSE](https://github.com/juth/juth-SDK/blob/master/LICENSE) file for more information.