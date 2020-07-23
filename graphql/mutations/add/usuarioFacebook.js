import gql from 'graphql-tag';

export default gql`
mutation add_usuarioFacebook($nombre: String!, 
    $apellidoMaterno: String!, 
    $apellidoPaterno:  String!, 
    $nombreUsuario:String!, 
    $idFacebook: String!){
    add_usuarioFacebook(nombre: $nombre, 
                                          apellidoMaterno: $apellidoMaterno, 
                                          apellidoPaterno: $apellidoPaterno, 
                                          nombreUsuario: $nombreUsuario, 
                                          idFacebook:$idFacebook){
        id
    }
}
`;