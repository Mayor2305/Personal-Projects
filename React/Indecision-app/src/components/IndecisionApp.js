import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption'; 
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './optionModal';


class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };

    componentDidMount = () => {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(()=> ({options}));
            }
        }
        catch(e){
            //Do nothing
        }     
    };
    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
            
    };

    componentWillUnmount = () => {
        console.log('CWU')
    }

    handelDeleteOptions = () => {
        this.setState(()=> ({options: []}))
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    };

    handleAddOption = (option) => {
        if(!option){
            return 'Enter a valid value'
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState)=> ({ options: prevState.options.concat(option) }))
    
    };

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    clearPick = () =>{
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    render(){
        const subtitle = 'Put your decisions into my hand';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0}
                            handlePick={this.handlePick}/>
                <div className="widget">
                    <Options 
                    options={this.state.options}
                    handelDeleteOptions={this.handelDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}/>
                    <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                    <OptionModal 
                    selectedOption={this.state.selectedOption}
                    clearPick={this.clearPick}/>
                </div>
            </div>
        )
    }
}

export default IndecisionApp;