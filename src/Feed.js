import React from 'react';
import { Post } from './Post.js';
import './Feed.css'

export class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpVote = this.handleUpVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
    }

    const handleUpVote = (post) => {
        this.props.handleUpVote(this.props.posts.indexOf(post));
    }

    const handleDownVote = (post) => {
        this.props.handleDownVote(this.props.posts.indexOf(post));
    }

    const toggleView = () => {
        this.props.toggleView();
    }

    render() {
        const posts = this.props.posts.map((post) => {
            return (
                <Post key={this.props.posts.indexOf(post)} post={post} handleUpVote={this.handleUpVote} handleDownVote={this.handleDownVote}></Post>
            )
        })
        const viewClass = this.props.view ? 'Display' : 'Hide'
        return (
            <div className={viewClass}>
                <button onClick={this.toggleView} className='Add-thought'>New Thought</button>
                {posts}
            </div>
        );
    }
}