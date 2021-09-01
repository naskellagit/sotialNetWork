import React from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { setProfileActionCreater } from '../../Redax/profilePageReducer';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';

class ProfileAPIContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) userId = 10;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
            this.props.setProfileActionCreater(response.data);
        })
    }
    render() {
        return (<Profile {...this.props}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profileData: state.profilePage.profileData
    }
}

const withRouterData = withRouter(ProfileAPIContainer);

const ProfileContainer = connect(mapStateToProps, {setProfileActionCreater})(withRouterData);

export default ProfileContainer;