import React from "react";
import c from './follower.module.css';

const Follower = () => {
    return (
        <div className={c.friendIcon}>
            <div>
            <img src='https://imgprod65.hobbylobby.com/f/2c/26/f2c26408835dbc249c02fc5d4b3a3907043b3f74/700Wx700H-542712-0917.jpg' alt='profilePic'></img>
            </div>
            <div className={c.name}>
                User
            </div>
        </div>
    )
};

export default Follower;
