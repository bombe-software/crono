import gql from 'graphql-tag';

export default gql`
  mutation add_materia($nombre: String!, $carrera: String!,$periodo: Int!) {
    add_materia(nombre: $nombre, carrera: $carrera, periodo: $periodo) {
      id
    }
  }
`;