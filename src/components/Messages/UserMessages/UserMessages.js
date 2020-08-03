import React from "react";
import c from './../messages.module.css';

const UserMessages = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

export default UserMessages;
