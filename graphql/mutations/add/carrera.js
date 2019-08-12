import gql from 'graphql-tag';

export default gql`
mutation add_carrera($nombre: String!, $escuela: String!) {
  add_carrera(nombre: $nombre, escuela: $escuela) {
    id
  }
}
`;