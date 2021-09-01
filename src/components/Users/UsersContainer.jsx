import React from 'react';
import { connect } from 'react-redux';
import { followActionCreater, unfollowActionCreater, setUsersActionCreater, setActivePageActionCreater, 
         setNumberOfUsersOnServerActionCreater, changeIsLoadingActionCreater } from '../../Redax/usersReduser'
import Users from './Users';
import Preloader from '../common/Preloader';
import getUsersThunkCreator from '../../Redax/usersReduser';
import {usersAPI} from '../../api/api';
 
class UsersAPIContainer extends React.Component {
    componentDidMount(){

        this.props.getUsersThunkCreator(this.props.activePage, this.props.numberOfUsersOnPage)
    }
    onSpanClick = (page) => {
        this.props.changeIsLoading(true);
        this.props.setActivePage(page);
        usersAPI.getUsers(page, this.props.numberOfUsersOnPage)
        .then(response => {
            this.props.changeIsLoading(false);
            this.props.setUsers(response.items);
            this.props.setNumberOfUsersOnServer(response.totalCount);
        })
    }
    render() {
        return (<>{this.props.isLoading ? <Preloader /> : null}
        <Users numberOfUsersOnServer = {this.props.numberOfUsersOnServer}
                      numberOfUsersOnPage = {this.props.numberOfUsersOnPage}
                      activePage = {this.props.activePage}
                      onSpanClick = {this.onSpanClick}
                      users = {this.props.users}
                      unfollow = {this.props.unfollow}
                      follow = {this.props.follow}/>
                </>
        )
    }
    
}


const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        numberOfUsersOnServer: state.userPage.numberOfUsersOnServer,
        numberOfUsersOnPage: state.userPage.numberOfUsersOnPage,
        activePage: state.userPage.activePage,
        isLoading: state.userPage.isLoading
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreater(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreater(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreater(users))
//         },
//         setActivePage: (page) => {
//             dispatch(setActivePageActionCreater(page))
//         },
//         setNumberOfUsersOnServer: (numberOfUsersOnServer) => {
//             dispatch(setNumberOfUsersOnServerActionCreater(numberOfUsersOnServer))
//         },
//         changeIsLoading: (isLoading) => {
//             dispatch(changeIsLoadingActionCreater(isLoading))
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow: followActionCreater,
    unfollow: unfollowActionCreater,
    setUsers: setUsersActionCreater,
    setActivePage: setActivePageActionCreater,
    setNumberOfUsersOnServer: setNumberOfUsersOnServerActionCreater,
    changeIsLoading: changeIsLoadingActionCreater,
    getUsersThunkCreator: getUsersThunkCreator
})(UsersAPIContainer);

export default UsersContainer;