import React from "react";
import c from './followers.module.css';
import Follower from "./Follower/follower";

const Followers = () => {
    return (
    <div className={c.nav}>
        <p>Followers</p>
        <div className={c.friendsMenu}>
            <Follower/>
            <Follower/>
            <Follower/>
            <Follower/>
            <Follower/>
        </div>
    </div>
    )
};

export default Followers;
