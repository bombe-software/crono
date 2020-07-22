import { useQuery } from "@apollo/react-hooks";
import client from "../graphql/config/client";
import EMPTY from '../graphql/queries/empty';

function Home(props) {
    const query = useQuery(EMPTY, {client});

    if (query.loading) return <div>Loading</div>;
    return (
        <div>
           Some
        </div>
    );
}

export default Home;