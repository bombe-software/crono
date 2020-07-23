import { Fragment } from "react"
import { useForm } from 'react-hook-form';
import Link from 'next/link'

export default (props) => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <Fragment>
            <br />
            <div className="container ui   grid">
                <div className="column">
                    <h2 className="ui blue header center aligned">
                        <div className="content">
                            Iniciar sesión
                        </div>
                    </h2>
                    <form className="ui large form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input ref={register({
                                        required: true,
                                    })} type="text" name="email" placeholder="Correo electrónico" />
                                </div>
                            </div>
                            {
                                errors.email && errors.email.type === "required" &&
                                <h4 className="ui red header">Ingrese su correo</h4>
                            }
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input ref={register({
                                        required: true,
                                    })} type="password" name="password" placeholder="Contraseña" autoComplete="on" />
                                </div>
                                {
                                    errors.password && errors.password.type === "required" &&
                                    <h4 className="ui red header">Ingrese su contraseña</h4>
                                }
                            </div>

                            <button className="ui fluid large blue submit button">Iniciar sesión</button>

                        </div>
                        <div className="ui error message"></div>
                    </form>
                    <div className="ui message" >
                        ¿No tienes una cuenta?   <Link href="/registro"><a href="#">Registrarse</a></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}