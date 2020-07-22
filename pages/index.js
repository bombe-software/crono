import { useQuery } from '@apollo/client';
import EMPTY from '../graphql/queries/empty';

function Home(props) {
    const { loading, error, data } = useQuery(EMPTY);

    if(loading) return <div>Loading...</div>
    return (
        <div>
           Debe aparecer algo: {data._empty}
        </div>
    );
}

export default Home;