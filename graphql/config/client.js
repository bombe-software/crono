import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

const link = createHttpLink({
    uri: "http://localhost:4000/",
<<<<<<< HEAD
    fetch: fetch
=======
    fetch
>>>>>>> 0d601f37bc26d84025bdd9f23e131c148a426278
});

export default new ApolloClient({
    link,
    cache: new InMemoryCache(),
    dataIdFromObject: o => o.id
});