import { useState } from 'react';

export default (props) => {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);

    const validate = props.validate || (value => (value == '') ? 'Es un campo obligatorio' : '' );
    
    props.add_value({idx: props.idx, value});
    props.add_error({idx: props.idx, value: validate(value) === ''});

    
    return (
        <div className={`ui input ${touched && validate(value) !== '' ? 'error' : '' }`}>
            <input  
                onFocus={()=>setTouched(true)}
                onChange={event=>setValue(event.target.value)}
                type={props.type} 
                placeholder={props.placeholder} />
            {touched ? validate(value) : '' }
        </div>
    );
}