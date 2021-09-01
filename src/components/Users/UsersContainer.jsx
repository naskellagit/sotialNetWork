import React from 'react';
import { connect } from 'react-redux';
import { followActionCreater, unfollowActionCreater, setUsersActionCreater, setActivePageActionCreater, 
         setNumberOfUsersOnServerActionCreater, changeIsLoadingActionCreater,getUsersThunkCreator, 
         setActivePageOfNumbersOnPageAC } from '../../Redax/usersReduser'
import Users from './Users';
import Preloader from '../common/Preloader';
 
class UsersAPIContainer extends React.Component {
    componentDidMount(){
        this.props.getUsersThunkCreator(this.props.activePage, this.props.numberOfUsersOnPage)
    }
    onSpanClick = (page) => {
        this.props.setActivePage(page);
        this.props.getUsersThunkCreator(this.props.activePage, this.props.numberOfUsersOnPage)
    }
    onSpanClick2 = () => {
        this.props.setActivePageOfNumbersOnPageAC();
    }
    render() {
        return (<>{this.props.isLoading ? <Preloader /> : null}
        <Users {...this.props} onSpanClick = {this.onSpanClick} onSpanClick2 = {this.onSpanClick2}/>
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
        isLoading: state.userPage.isLoading,
        activePageOfNumbersOnPage: state.userPage.activePageOfNumbersOnPage,
        numberOfNumbersOnPage: state.userPage.numberOfNumbersOnPage
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
    getUsersThunkCreator: getUsersThunkCreator,
    setActivePageOfNumbersOnPageAC: setActivePageOfNumbersOnPageAC
})(UsersAPIContainer);

export default UsersContainer;