import React from 'react';

import { Profile } from "./profile";

import { Statistics } from './statistics';

import {FriendList} from "."

import user from "./user.json";

import data from "./data.json";

import friends from "./friends.json"


// console.log(data[0])

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />
    <Statistics title="Upload" statsDate={data} />
    <Statistics statsDate={data} /> 
    <FriendList friends={friends} />;  
    </div>
  );
};
