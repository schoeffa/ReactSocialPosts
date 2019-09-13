import React from 'react';
import './AddPost.css';

export class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            thought: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewTitle = this.handleNewTitle.bind(this);
        this.handleNewThought = this.handleNewThought.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addPost(this.state.title, this.state.thought);
    }

    handleNewThought = (e) => {
        this.setState({thought: e.target.value});
    }

    handleNewTitle = (e) => {
        this.setState({title: e.target.value});
    }

    render() {
        const viewClass = this.props.view ? 'Display' : 'Hide';
        return (
            <form className={viewClass} onSubmit={this.handleSubmit}>
                <p className='Title'>Title</p>
                <input type='text' value={this.state.title} onChange={this.handleNewTitle}></input>
                <p className='Title'>Thought</p>
                <input type='textarea' value={this.state.thought} onChange={this.handleNewThought}></input>
                <button>Add Post</button>
            </form>
        );
    }
}