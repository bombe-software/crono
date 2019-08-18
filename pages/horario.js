import { useState } from 'react';

import Input from './../components/form/input';
import Form from './../components/form/form';

export default (props) => {
    const [values, setValues] = useState([]);
    const [ready, setReady] = useState(false);
    
    
    function handleSubmit(){
        if(ready){
            console.log(values);
        }
    }
    
    return (
        <div>
            <Form setValues={setValues} setReady={setReady}  values={values}>
                <Input idx={'Nombre'}/>
                <Input idx={'Nombre2'}/>
            </Form>
            <button className="ui primary button" onClick={handleSubmit}>
                Save
            </button>
        </div>
    );
}
