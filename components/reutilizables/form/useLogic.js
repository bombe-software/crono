import React, { useState, useEffect } from 'react';

export default (paternProps) => {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);

    const validate = paternProps.validate || (value => (value == '') ? 'Es un campo obligatorio' : '');
    /**
     * Example validate: 
     *  value => {
     *      if(validation){
     *          return ''
     *      }else {
     *          return 'Error message';
     *      }
     *  }
     */

    paternProps.add_value({ idx: paternProps.idx, value });
    paternProps.add_error({ idx: paternProps.idx, value: validate(value) === '' });
    return [value, setValue, touched, setTouched, validate]
}