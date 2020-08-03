import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUsersData, registrateThunk} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.registrateThunk();
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth,
        login: state.Auth.login,
        email: state.Auth.email
    }
}

export default connect(mapStateToProps, {setUsersData, registrateThunk})(HeaderContainer)
