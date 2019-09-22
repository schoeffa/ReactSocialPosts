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
        if (title && thought) {
            let feed = this.state.feed;
            feed.unshift({title: title, post: thought, upVotes: 0, downVotes: 0})
            this.setState({view: !this.state.view, feed: feed});
        } else {
            this.setState({view: !this.state.view});
        }
    }

    handleUpVote = (index) => {
        let feed = this.state.feed;
        feed[index].upVotes++;
        this.setState({feed: feed});
    }

    handleDownVote = (index) => {
        let feed = this.state.feed;
        feed[index].downVotes++;
        this.setState({feed: feed});
    }

    render() {
        return (
            <div className='Feed'>
                <p className='Header'>Mister Taco's Thoughts</p>
                <AddPost view={this.state.view} addPost={this.addPost}></AddPost>
                <Feed posts={this.state.feed} view={!this.state.view} handleUpVote={this.handleUpVote} handleDownVote={this.handleDownVote} toggleView={this.toggleView}></Feed>
            </div>
        );
    }
}