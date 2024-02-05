import React from 'react';
import { useContext } from 'react';
import UserContext from '../store/UserContext';

const Profile = () => {
  const {user}=useContext(UserContext);
  return <div>
    {(!user) ? <p>Please Login</p> : <p>Welcome : {user.username}</p>}
  </div>
}

export default Profile; 