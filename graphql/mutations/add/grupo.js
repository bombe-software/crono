import gql from 'graphql-tag';

export default gql`
mutation add_grupo($nombre: String!, $docente: String!, $materia: String!) {
    add_grupo(nombre: $nombre, docente: $docente, materia: $materia) {
      id
    }
  }
`;