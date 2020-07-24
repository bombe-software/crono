import React, { Fragment, useEffect, useState } from 'react';
import fetchUser from './../../graphql/queries/empty';
import { useQuery } from '@apollo/react-hooks';

const Header = () => {
    // const [user , setUser] = useState()
    // const { loading, error, data } = useQuery(fetchUser);

    // useEffect(() => {
    //     setUserData(data)
    //   }, [data])
    
    return (
        <Fragment>
            <div style={{ position: "relative" }} className="ui fixed segment menu" >
                <div className="">   </div>
                <div>
                    <h3 className="ui header">
                        <img className="ui image" src="/images/logoCronos.svg" width="100" />
                        <div className="content">
                            Cronos
                        </div>
                    </h3>
                </div>
                <div className="ui secondary right menu">
                    <a className="item active">Horario</a>
                    <a className="item">Agenda</a>
                    <a className="item"> Amigos</a>
                </div>
            </div>
        </Fragment>

    );
}

export default Header;
