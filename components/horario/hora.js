export default (props) => {
    return props(({ Lunes, Martes, rfc }) => {
        return (
            <tr>
                <td data-label="Lunes"></td>
                <td data-label="Martes"></td>
                <td data-label="Miercoles"></td>
                <td data-label="Jueves"></td>
                <td data-label="Viernes"></td>
                <td data-label="Sabado"></td>
                <td data-label="Domingo"></td>
            </tr>
        );
    });
}