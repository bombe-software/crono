import { useQuery } from "@apollo/react-hooks";
import withData from "../graphql/config/apollo";

import EMPTY from '../graphql/queries/empty';

function Home(props) {
    const query = useQuery(EMPTY);

    if (query.loading) return "Loading";
    return (
        <div>
            Aqui debe aparecer algo: {query.data._empty}
            <br />
            <button className="ui button">
                Follow
            </button>
        </div>
    );
}

export default withData(props =>  <Home />);