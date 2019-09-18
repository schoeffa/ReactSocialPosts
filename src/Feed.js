import React from 'react';
import { Post } from './Post.js';
import './Feed.css'

export class Feed extends React.Component {
    render() {
        const posts = this.props.posts.map((post) => {
            return (
                <Post key={this.props.posts.indexOf(post)} post={post}></Post>
            )
        })
        const viewClass = this.props.view ? 'Display' : 'Hide'
        return (
            <div className={viewClass}>
                {posts}
            </div>
        );
    }
}