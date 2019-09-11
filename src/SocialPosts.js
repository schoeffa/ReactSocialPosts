import React from 'react';
import './App.css';
import { Feed } from './Feed.js';
import { AddPost } from './AddPost.js';
import './SocialPosts.css';

export class SocialPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: false
        }
    }

    toggleView = () => {
        const view = !this.state.view;
        this.setState({view: view});
    }

    render() {
        return (
            <div>
                <p>My Thoughts</p>
                <button onClick={this.toggleView}>New Thought</button>
                <AddPost className={this.state.view ? 'Display' : 'Hide'}></AddPost>
                <Feed></Feed>
            </div>
        );
    }
}