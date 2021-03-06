import React from 'react';
import ReactDOM from 'react-dom';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    };
    handleAdd = (e) =>{
        e.preventDefault();
        const handleOption = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(handleOption);
        this.setState(() => ( { error } ))

        if(!error){
            e.target.elements.option.value = '';
        }
    };

    render(){
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAdd}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}
 