import React from 'react';
import './App.css';
import { Feed } from './Feed.js';
import { AddPost } from './AddPost.js';
import { tsConstructorType } from '@babel/types';

function App() {
  constructor(props) {
    super(props);
    this.state = {
      view: true
    }
  }

  toggleView = () => {
    console.log(view);
    const view = !this.state.view;
    this.setState({view: view});
  }
  return (
    <div>
      <p>My Thoughts</p>
      <button onClick={this.toggleView}>New Thought</button>
      <AddPost></AddPost>
      <Feed></Feed>
    </div>
  );
}

export default App;
