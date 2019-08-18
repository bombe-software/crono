import { useState } from 'react';

import Input from './../components/form/input';
import Form from './../components/form/form';

export default (props) => {
    const [values, setValues] = useState([]);
    
    function handelSubmit(){
        console.log(values);
    }
    
    return (
        <div>
            {console.log(values)}
            <Form setValues={setValues} values={values}>
                <Input idx={'Nombre'}/>
                <Input idx={'Nombre2'}/>
            </Form>
            <button className="ui primary button" onClick={handelSubmit}>
                Save
            </button>
        </div>
    );
}
