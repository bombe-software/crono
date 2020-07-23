import gql from 'graphql-tag';

export default gql`
mutation login($correo: String!, $contrasena: String!){
    login(correo: $correo, contrasena: $contrasena){
        id
    }
  }
`;