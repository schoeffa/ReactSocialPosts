import React from 'react';
import { Feed } from './Feed.js';
import { AddPost } from './AddPost.js';
import posts from './Posts.json';
import './SocialPosts.css';

export class SocialPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: false,
            feed: posts
        }
    }

    toggleView = () => {
        const view = !this.state.view;
        this.setState({view: view});
    }

    addPost = (title, thought) => {
        let feed = this.state.feed;
        feed.unshift({title: title, post: thought})
        console.log(feed);
        this.setState({view: !this.state.view, feed: feed});
    }

    render() {
        return (
            <div className='Feed'>
                <p className='Header'>Mister Taco's Thoughts</p>
                <button onClick={this.toggleView} className='Add-thought'>New Thought</button>
                <AddPost view={this.state.view} addPost={this.addPost}></AddPost>
                <Feed posts={this.state.feed} view={!this.state.view}></Feed>
            </div>
        );
    }
}