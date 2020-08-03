import React from "react";
import c from './Post.module.css';
import avatar from '../../../images/avaSmall.jpg'

const Post = (props) => {
    return (
        <div className={c.post}>
            <div className={c.posPicture}>
                <div className={c.profilePic}>
                    <img src={avatar}></img>
                </div>
            </div>
                <div className={c.msg_likes}>
                    <div>
                        {props.message}
                    </div>
                    <div className={c.like}>
                        <span>Like: {props.likecount}</span>
                    </div>
            </div>
        </div>
    )
};

export default Post;
