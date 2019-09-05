import { useState } from 'react';
import { Input, Form, Submit } from './../components/form';

export default (props) => {   
    function handleSubmit(values){
        console.log(values);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Input idx={'Nombre'}/>
                    <div>
                    <Input idx={'Nombre2'}/>
                    </div>
                <Submit />
            </Form>
        </div>
    );
}
