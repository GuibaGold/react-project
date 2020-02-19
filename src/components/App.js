import React from 'react';

import Post from './Post';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello</h1>
        <Post title="Aprendendo React"/>
        <Post title="ReactJS é maneiro"/>
        <Post title="Em breve..."/>
      </div>
    );
  };
}
