import React from "react";
import c from "./AllUsers.module.css";
import {NavLink} from "react-router-dom";
import UserPic from '../../../images/userImg.png'


const AllUsers = (props) => {
    let numOfPages = Math.ceil(props.totalElements/props.elemOnPage);
    let pages = [];
    for (let i = 1; i <= numOfPages; i++) {
        pages.push(i)

    }
    return (
        <div>
        <div className={c.peoplePage}>
            <div className={c.numOfPages}>
                {pages.map(p => {
                    return <span className={props.currentPage===p && c.bold}
                                 onClick={()=> {props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            <h2>Users</h2>

            {props.users.map(u => <div key={u.id}>
                    <div className={c.profile}>
                        <div className={c.imgAndBtn}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : UserPic} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollowThunk(u.id);
                                }
                                }>UnFollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                    props.followThunk(u.id);
                                }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={c.info}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{'country'}</div>
                        <div>{'city'}</div>
                    </div>
                </div>
            )}
        </div>
        </div>
    )
}

export default AllUsers;
