import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,  setTotalUsersCount, changeToggle, toggleFollowingProgress, getUsersThunk,
    followThunk, unfollowThunk
} from "../../../redux/users-reducer";
import AllUsers from "./AllUsers";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.elemOnPage);
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.getUsersThunk(pageNum, this.props.elemOnPage);
    }

    render() {

        return (
            <>
                {(this.props.isToggleLoad) ? <Preloader/> : null}
                <AllUsers {...this.props} onPageChanged={this.onPageChanged} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        elemOnPage: state.UsersPage.elementsOnPage,
        totalElements: state.UsersPage.totalElements,
        currentPage: state.UsersPage.currentPage,
        isToggleLoad: state.UsersPage.isToggleLoad,
        followingInProgress: state.UsersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, changeToggle, toggleFollowingProgress, getUsersThunk, followThunk, unfollowThunk})(UsersContainer);
