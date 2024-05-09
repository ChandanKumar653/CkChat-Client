import React, { useState } from 'react';
import Header from './Header';
import UsersList from './UsersList';

export default function Index() {
  const [clicked,setClicked]=useState(false);
  const userClicked=()=>{
setClicked(true);
  }
  return (
    <div>
        <Header userClicked={clicked}/>
        <UsersList userClicked={userClicked}/>
    </div>
  )
}
