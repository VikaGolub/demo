import React from "react";
import c from './../messages.module.css';
import {NavLink} from 'react-router-dom';

const Users = (props) => {
    return (
        <NavLink to={'/messages/' + props.id} className={c.dialogue}>{props.name}</NavLink>
    )
}

export default Users;
