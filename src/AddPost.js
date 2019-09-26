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
        this.props.addPost(this.state.title, this.state.thought);
        this.setState({title: '', thought: ''});
    }

    handleNewThought = (e) => {
        this.setState({thought: e.target.value});
    }

    handleNewTitle = (e) => {
        this.setState({title: e.target.value});
    }

    render() {
        const viewClass = this.props.view ? 'Display Post-form' : 'Hide';
        return (
            <form className={viewClass} onSubmit={this.handleSubmit}>
                <p className='Title'>Title</p>
                <input type='text' value={this.state.title} onChange={this.handleNewTitle} className='Post-input'></input>
                <p className='Title'>Thought</p>
                <textarea value={this.state.thought} onChange={this.handleNewThought} className='Post-input Content'></textarea>
                <button className='Add-button'>Add Post</button>
            </form>
        );
    }
}