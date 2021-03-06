import React from 'react';
import axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserDataAC } from '../../Redax/authReducer';

class HeaderContainerAPI extends React.Component{
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
        .then(response => {
            if(response.data.resultCode === 0) {
                let {login, id, email} = response.data.data;
                this.props.setUserDataAC(id, email, login);
            }
        })
    }
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = connect(mapStateToProps, {setUserDataAC})(HeaderContainerAPI)

export default HeaderContainer;