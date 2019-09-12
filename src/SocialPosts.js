import React from 'react';
import { Feed } from './Feed.js';
import { AddPost } from './AddPost.js';
import posts from './Posts.json';

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
                <AddPost view={this.state.view}></AddPost>
                <Feed posts={posts} view={!this.state.view}></Feed>
            </div>
        );
    }
}