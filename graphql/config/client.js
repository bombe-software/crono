import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createHttpLink({
    uri: "http://localhost:4000/",
    fetch
});

export default new ApolloClient({
    link,
    cache: new InMemoryCache(),
    dataIdFromObject: o => o.id
});