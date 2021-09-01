import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../Redax/profilePageReducer';
import NewPost from './NewPost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    value: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreater()),
    updateNewPostText: (text) => dispatch(updateNewPostTextActionCreater(text))
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;