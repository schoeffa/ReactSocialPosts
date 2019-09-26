import React from 'react';
import './Post.css';
import Cat from './cat-icon.png';

export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.handleDownVote = this.handleDownVote.bind(this);
        this.handleUpVote = this.handleUpVote.bind(this);
    }

    handleUpVote = () => {
        this.props.handleUpVote(this.props.post);
    }

    handleDownVote = () => {
        this.props.handleDownVote(this.props.post);
    }

    render() {
        return (
            <div>
                <p className='Title'>{this.props.post.title}</p>
                <p className='Post'>{this.props.post.post}</p>
                <div className='Vote-bar'>
                    <img src={Cat} alt='Upvote Cat Icon'className='Up-cat' onClick={this.handleUpVote}></img>
                    <p className='Votes'>{this.props.post.upVotes}</p>
                    <img src={Cat} alt='Downvote Cat Icon' className='Down-cat' onClick={this.handleDownVote}></img>
                    <p className='Votes'>{this.props.post.downVotes}</p>
                </div>
            </div>
        )
    }
}