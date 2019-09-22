import React, { useState } from 'react';

export default (props) => {
    const [errors, setErrors] = useState([]);
    const [values, setValues] = useState([]);

    const add_value = (object) => {
        const values1 = values;
        values1[object['idx']] = object['value'];
        setValues(values1);
    }

    const add_error = (object) => {
        const errors1 = errors;
        errors1[object['idx']] = object['value'];
        setErrors(errors1);
    }

    const submit_form = () => {
        let is_ready = true;
        for (var name in errors) {
            if (!errors[name]) {
                is_ready = errors[name];
            }
        }
        if (is_ready) {
            props.onSubmit(values);
        }
    }

    const recursiveMap = (children) => {
        return React.Children.map(children, child => {
            if (!React.isValidElement(child)) {
                return child;
            }

            if (child.props.children) {
                child = React.cloneElement(child, {
                    add_value, add_error, submit_form,
                    children: recursiveMap(child.props.children)
                });
            }else{
                child = React.cloneElement(child, {
                    add_value, add_error, submit_form
                });
            }

            return child;
        });
    }

    return recursiveMap(props.children);
}

