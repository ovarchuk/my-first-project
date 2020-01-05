import React from 'react';
import css from './profile.module.css';

const Profile = () => {
    return <div className={css.content}>
    <div>
      <img src='https://q-cf.bstatic.com/images/hotel/max1024x768/131/131251799.jpg'></img>
    </div>
    <div>ava + description</div>
    <div>My posts
      <div className={css.item}>new post</div>
      <div className={css.item}>post 1</div>
      <div className={css.item}>post 2</div>
    </div>
  </div>
}

export default Profile;
