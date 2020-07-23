import { Fragment } from "react"
import { useForm } from 'react-hook-form';

export default (props) => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values) => {
        console.log(values);
    }
    return (
        <Fragment>
            <div className="column padding-reset">
                <div className="ui huge message blue page grid">
                    <h1 className="ui huge header">¡Únete a esta gran comunidad!</h1>
                </div>
            </div>
            <div className="ui  container">
                <div className="column">
                    <form className="ui large form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <label className="label" htmlFor="email">Nombre </label>
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input ref={register({
                                        required: true,
                                    })} type="text" name="nombre" placeholder="Correo electrónico" />
                                </div>
                            </div>
                            {
                                errors.nombre && errors.nombre.type === "required" &&
                                <h4 className="ui red header">Llene este campo</h4>
                            }
                            <div className="ui grid">
                                <div className="two wide column">
                                    <div className="field">
                                        <label className="left align" htmlFor="email">Apellido paterno </label>
                                        <div className="ui input">
                                            <input ref={register({
                                                required: true,
                                            })} type="text" name="apellidoP" placeholder="Correo electrónico" />
                                        </div>
                                    </div>
                                    {
                                        errors.apellidoP && errors.apellidoP.type === "required" &&
                                        <h4 className="ui red header">Llene este campo</h4>
                                    }
                                </div>
                                <div className="two wide column">
                                    <div className="field">
                                        <label className="left align" htmlFor="email">Apellido materno </label>
                                        <div className="ui input">
                                            <input ref={register({
                                                required: true,
                                            })} type="text" name="apellidoM" placeholder="Correo electrónico" />
                                        </div>
                                    </div>
                                    {
                                        errors.apellidoM && errors.apellidoM.type === "required" &&
                                        <h4 className="ui red header">Llene este campo</h4>
                                    }
                                </div>
                            </div>
                            <br />
                            <div className="field">
                                <label className="label" htmlFor="username">Nombre de usuario</label>
                                <div className="ui left icon input">
                                    <i className="heart icon"></i>
                                    <input ref={register({
                                        required: true,
                                    })} type="text" name="username" placeholder="ej. kronos97" />
                                </div>
                            </div>
                            {
                                errors.username && errors.username.type === "required" &&
                                <h4 className="ui red header">Ingrese su nombre de usuario</h4>
                            }
                            <div className="field">
                                <label className="label" htmlFor="gender">Escuela proveniente</label>
                                <div className="ui selection dropdown">
                                    <input type="hidden" name="gender" />
                                    <i className="dropdown icon"></i>
                                    <div className="default text">Selecciona una opcion</div>
                                    <div className="menu">
                                        <div className="item" data-value="1">IPN</div>
                                        <div className="item" data-value="0">UNAM</div>
                                    </div>
                                </div>
                            </div>
                            {
                                errors.email && errors.email.type === "required" &&
                                <h4 className="ui red header">Seleccione una opción</h4>
                            }
                            <div className="field">
                                <label className="label" htmlFor="email">Contraseña </label>
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input ref={register({
                                        required: true,
                                    })} type="password" name="password" placeholder="Asegurese de ser una contraseña segura" autoComplete="on" />
                                </div>
                            </div>
                            {
                                errors.password && errors.password.type === "required" &&
                                <h4 className="ui red header">Ingrese su contraseña</h4>
                            }
                            <div className="field">
                                <label className="label" htmlFor="email">Repita su contraseña </label>
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input ref={register({
                                        required: true,
                                    })} type="password" name="passwordR" placeholder="Repita su contraseña" autoComplete="on" />
                                </div>
                            </div>
                            {
                                errors.passwordR && errors.passwordR.type === "required" &&
                                <h4 className="ui red header">Repita su contraseña</h4>
                            }
                            <button className="ui large blue submit button">Registrarse</button>
                        </div>
                        <div className="ui error message"></div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}