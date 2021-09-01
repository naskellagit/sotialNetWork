import React from 'react';
import Post from './Post/Post'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import myCSS from './Profile.module.css';
import NewPostContainer from './NewPost/NewPostContainer';
import Preloader from '../common/Preloader';

const Profile = (props) => {
  let posts = props.posts.map((post) => <Post mesage={post.mesage} />);
  if(!props.profileData){
    return <Preloader />;
  }
    return (
        <div>
          <ProfileInfo {...props.profileData}/>
          <div className={myCSS.heading}>Мои посты</div>
          <NewPostContainer />
          <div>{posts}</div>
        </div>
    );
}

export default Profile;