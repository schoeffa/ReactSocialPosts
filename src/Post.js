import React from 'react';

export class Post extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.post.title}</p>
                <p>{this.props.post.post}</p>
            </div>
        )
    }
}