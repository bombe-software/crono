import React, { useState } from 'react';

export default (props) => {
    const [errors, setErrors] = useState([]);
    const [values, setValues] = useState([]);

    function add_value(object){
        const values1 = values;
        values1[object['idx']] = object['value']; 
        setValues(values1);
    }  

    function add_error(object){
        const errors1 = errors;
        errors1[object['idx']] = object['value']; 
        setErrors(errors1);
    }

    function submit_form(){
        let is_ready = true;
        for (var name in errors) {
            if(!errors[name]){
                is_ready = errors[name];
            }
        }
        if(is_ready){
            props.onSubmit(values);
        }
    }

    return React.Children.map(props.children, (element, idx) => {
        return React.cloneElement(element,{ add_value, add_error, submit_form });
    });
}