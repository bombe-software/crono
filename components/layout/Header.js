import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="ui segment top fixed menu">
                <div className="item">
                    <h4 className="ui header">
                        <img className="ui image" src="/images/logoCronos.svg" />
                        <div className="content">
                            Cronos
                        </div>
                    </h4>
                </div>
                <div className="ui secondary right menu">
                    <a className="item active">Home</a>
                    <a className="item">Messages</a>
                    <a className="item"> Friends</a>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>

    );
}

export default Header;
