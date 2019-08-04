import { useQuery } from "@apollo/react-hooks";
import withData from "../graphql/config/apollo";

import BOOKS from './../graphql/queries/books';

function Home(props) {
    const query = useQuery(BOOKS);

    if (query.loading) return "Loading";
    return (
        <div>
            Aqui debe aparecer el nombre de un libro: {query.data.books[1].title}
            <br />
            <button className="ui button">
                Follow
            </button>
        </div>
    );
}

export default withData(props =>  <Home />);