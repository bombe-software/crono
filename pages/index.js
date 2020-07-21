import { useQuery } from "@apollo/react-hooks";
import client from "../graphql/config/client";
import EMPTY from '../graphql/queries/empty';

function Home(props) {
    const query = useQuery(EMPTY, {client});

    if (query.loading) return <div>Loading</div>;
    return (
        <div>
            Aqui debe aparecer algo: {query.data._empty}
            <br />
            <button className="ui button">
                Boton para verificar el funcionamiento de Semantic UI
            </button>
        </div>
    );
}

export default Home;