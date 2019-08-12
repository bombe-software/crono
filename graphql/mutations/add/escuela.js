import gql from 'graphql-tag';

export default gql`
  mutation add_escuela($nombre: String!) {
    add_escuela(nombre: $nombre) {
      id
    }
  }
`;