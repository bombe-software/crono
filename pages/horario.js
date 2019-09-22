export default (props) => { 
    const propsFake = 
    [
        {
          id: '1',
          docente: 'docente1',
          materia: 'materia1', 
          horario: [
          {id:'1', grupo: '101', dia: 'Lunes', hora_inicio: '10:00', hora_fin:'12:00'},
          {id:'2', grupo: '101', dia: 'Martes', hora_inicio: '10:00', hora_fin:'12:00'},
          {id:'3', grupo: '101', dia: 'Miercoles', hora_inicio: '10:00', hora_fin:'12:00'},
          ]
        },
        {
            id: '2',
            docente: 'docente1',
            materia: 'materia2', 
            horario: [
            {id:'1', grupo: '101', dia: 'Lunes', hora_inicio: '12:00', hora_fin:'14:00'},
            {id:'2', grupo: '101', dia: 'Martes', hora_inicio: '12:00', hora_fin:'14:00'},
            {id:'3', grupo: '101', dia: 'Miercoles', hora_inicio: '12:00', hora_fin:'14:00'},
            ]
          }
    ];
    return (
        <div>
            {propsFake.map(e=>{
                return (
                    <div key={e.id}>
                            {e.horario.map(e=>{
                            return (
                                <div key={e.id}>
                                    {e.id}                    
                                </div>
                            );
                        })}                   
                    </div>
                );
            })}
        </div>
    );
}
