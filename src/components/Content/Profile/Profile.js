import React from "react";
import c from './Profile.module.css';
import Avatar from "./Avatar";

const Profile = (props) => {
    if (!props.profile) {
        return <Avatar/>
    }

    return (
        <div>
            <div className={c.profile}>
                <img src={props.profile.photos.small} />
            </div>
        </div>
    )
};

export default Profile;
