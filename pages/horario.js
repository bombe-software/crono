import { useState } from 'react';
import { Input, Form, ButtonSubmit } from './../components/form';

export default (props) => {   
    function handleSubmit(values){
        console.log(values);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Input idx={'Nombre'}/>
                <Input idx={'Nombre2'}/>
                <ButtonSubmit />
            </Form>
        </div>
    );
}
