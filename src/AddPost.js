import React from 'react';
import './AddPost.css';

export class AddPost extends React.Component {
    render() {
        const viewClass = this.props.view ? 'Display' : 'Hide';
        return (
            <form className={viewClass}>
                <p className='Title'>Title</p>
                <input type='text'></input>
                <p className='Tite'>Thought</p>
                <input type='textarea'></input>
                <button>Add Post</button>
            </form>
        );
    }
}