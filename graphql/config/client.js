import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createHttpLink({
    uri: "http://localhost:4000/"
});

export default new ApolloClient({
    link,
    cache: new InMemoryCache(),
    dataIdFromObject: o => o.id
});