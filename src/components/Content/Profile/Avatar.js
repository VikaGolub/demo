import React from 'react';
import avatar from './../../../images/ava.jpg';
import c from './Profile.module.css';

const Avatar = (props) => {
    return (
        <div className={c.profile}>
            <img src={avatar} alt={'avatar'} />
        </div>
    )
}

export default Avatar;
