import React from "react";
import c from './messages.module.css';
import UserMessages from "./UserMessages/UserMessages";
import Users from "./Users/Users";

const Messages = (props) => {
    let AllMessages = props.messages.map((data) => {
        return <UserMessages message={data.message}/>
    });

    let UsersDialogs = props.users.map((data) => {
        return (<Users name={data.name} id ={data.id} />)
    } );

    let sendMessage = () => {
        props.sendMessage()
    }

    let changeMessage = (e) => {
        let msg = e.target.value;
        props.onloadMessage(msg)
    }

    return (
        <div className={c.allDialogues}>
            <div className={c.listOfDialogues}>
                {UsersDialogs}
            </div>
             <div className={c.messages}>
                 {AllMessages}
                 <textarea value={props.newMessage} onChange={changeMessage}></textarea>

                 <button onClick={sendMessage}>Send</button>
             </div>
        </div>
    )
}

export default Messages;
