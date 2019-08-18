import React, { useState } from 'react';

export default (props) => {
    const [errors, setErrors] = useState([]);

    function add_value(object){
        const values1 = props.values;
        values1[object['idx']] = object['value']; 
        props.setValues(values1);
    }  

    function add_error(object){
        const errors1 = errors;
        errors1[object['idx']] = object['value']; 
        setErrors(errors1);
        props.setReady(true);
        for (var name in errors) {
            if(!errors[name]){
                props.setReady(errors[name]);
            }
        }
    }

    return React.Children.map(props.children, (element, idx) => {
        return React.cloneElement(element,{ add_value, add_error });
    });
}