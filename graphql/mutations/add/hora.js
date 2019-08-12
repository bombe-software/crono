import gql from 'graphql-tag';

export default gql`
  mutation add_hora(
    $grupo: String!
    $salon: String!
    $dia_semana: String!
    $hora_inicio: String!
    $hora_fin: String!
  ) {
    add_hora(
      grupo: $grupo
      salon: $salon
      dia_semana: $dia_semana
      hora_inicio: $hora_inicio
      hora_fin: $hora_fin
    ) {
      id
    }
  }
`;