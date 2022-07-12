import React from 'react';
import { Outlet, Link } from "react-router-dom";


function Buttons(props) {
    return (
        <>
            <div className={props.divclassname}>
                <Link replace id="link" to={"/"+`${props.name}`}><buttton className={props.className} type={props.type} id={props.id}  >{props.name}</buttton>
                </Link>
            </div>
            <Outlet />
        </>
    )
}

export default Buttons;