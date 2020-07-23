import gql from 'graphql-tag';

export default gql`
mutation loginFacebook($idFacebook: String!){
    loginFacebook(idFacebook: $idFacebook){
        id
    }
  }
`;