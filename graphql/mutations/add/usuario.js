import gql from 'graphql-tag';

export default gql`
mutation add_usuario($nombre: String!, 
  $apellidoMaterno: String!, 
  $apellidoPaterno:  String!, 
  $nombreUsuario:String!, 
  $correo: String!,
	$contrasena: String!){
  add_usuario(nombre: $nombre, 
    									apellidoMaterno: $apellidoMaterno, 
    									apellidoPaterno: $apellidoPaterno, 
    									nombreUsuario: $nombreUsuario, 
    									correo: $correo,
											contrasena: $contrasena){
  	id
  }
}
`;