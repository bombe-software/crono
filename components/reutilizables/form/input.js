import useLogic  from './useLogic';

export default (props) => {
    const [value, setValue, touched, setTouched, validate] = useLogic(props);
    
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