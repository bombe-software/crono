import React, { useState } from 'react';

export default (props) => {
    function add_value(object){
        const values1 = props.values;
        values1[object['idx']] = object['value']; 
        props.setValues(values1);
    }  

    return React.Children.map(props.children, (element, idx) => {
        return React.cloneElement(element,{ add_value });
    });
}