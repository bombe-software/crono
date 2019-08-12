import gql from 'graphql-tag';

export default gql`
  mutation add_usuario($nombre: String!, $contrasena: String!) {
    add_usuario(nombre: $nombre, contrasena: $contrasena) {
      id
    }
  }
`;