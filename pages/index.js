import { useQuery } from "@apollo/react-hooks";
import withData from "../graphql/config/apollo";

import TEST from './../graphql/queries/test';

function Home() {
    const query = useQuery(TEST);

    if (query.loading) return "Loading";
    return (
        <div>
            Verifica que aparezca un texto despues de esto: {query.data._empty}
            <br />
            <button className="ui button">
                Boton para verificar el funcionamiento de Semantic UI
            </button>
        </div>
    );
}

export default withData( props => <Home />);