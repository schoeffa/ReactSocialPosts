import React from 'react';

export class AddPost extends React.Component {
    render() {
        return (
            <form>
                <p className='Title'>Title</p>
                <input type='text'></input>
                <p className='Tite'>Thought</p>
                <input type='textarea'></input>
                <button>Add Post</button>
            </form>
        );
    }
}