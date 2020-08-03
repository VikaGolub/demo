import React from "react";
import {addMessageCreateAction, updateMessage} from "../../redux/message-reducer";
import Messages from "./messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messages: state.MessagePage.listOfMessages,
        users: state.MessagePage.UsersObj,
        newMessage: state.MessagePage.messageValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onloadMessage: (msg)=>{dispatch(updateMessage(msg))},
        sendMessage: ()=>{dispatch(addMessageCreateAction())}
    }
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
