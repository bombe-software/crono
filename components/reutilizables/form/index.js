import Input from './input';
import Form from './form';
import Submit from './submit';
/**
    Example: 
    function handleSubmit(values){
        console.log(values);
    }
    ...
    <Form onSubmit={handleSubmit}>
        <Input idx={'Nombre'}/>
        <div>
            <Input idx={'Nombre2'}/>
        </div>
        <Submit />
    </Form>
 */
export { Input, Form, Submit };