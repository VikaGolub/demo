import React from "react";
import {addPostCreateAction, updatePostCreator, getUsersProfile, getProfileThunk} from "../../redux/profile-reducer";
import Content from "./Content";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class ContentContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfileThunk(userId)
    }

    render() {
        return <Content {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.listOfPosts,
        newPostText: state.ProfilePage.postField,
        profile: state.ProfilePage.profile

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreateAction())
        },
        changePostText: (post) => {
            dispatch(updatePostCreator(post))
        },

        getUsersProfile: (profile) => {
            dispatch(getUsersProfile(profile))
        },
        getProfileThunk: (userId) => {
            dispatch(getProfileThunk(userId))
        }
}
}

let RouterDataComponent = withRouter(ContentContainer)
export default connect(mapStateToProps, mapDispatchToProps)(RouterDataComponent)

