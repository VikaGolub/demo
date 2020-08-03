import React from "react";
import c from './content.module.css';
import Post from "./Post/Post";
import Profile from "./Profile/Profile";


const Content = (props) => {
    let showPosts = props.posts.map((data) => {
        return <Post message={data.message} likecount={data.likesCount}/>
    });

let PostAdd = () => {
    props.addPost();
};

let changeText = (e) => {
    let post = e.target.value
    props.changePostText(post)
}

    return (
        <div className= {c.content}>
            <img src='https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_16935516.jpg?crop=0,432,7360,4048&wid=4000&hei=2200&scl=1.84' alt={'background'}></img>
            <div className={c.allProfile}>
                <Profile profile={props.profile}/>
                <div className={c.myPage}>
                    <h3>My Posts</h3>
                    <textarea value={props.newPostText} onChange={changeText}></textarea>
                    <button onClick={ PostAdd }>Send</button>
                    <div className={c.posts}>
                        {showPosts}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;
