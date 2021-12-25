class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
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

    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
            
    }

    componentWillUnmount() {
        console.log('CWU')
    }

    handelDeleteOptions() {
        this.setState(()=> ({options: []}))
    }

    handleDeleteOption (optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handleAddOption (option) {
        if(!option){
            return 'Enter a valid value'
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState)=> ({ options: prevState.options.concat(option) }))
    
    }

    handlePick(){
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        alert(option)
    }

    render(){
        const subtitle = 'Put your decisions into my hand';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}/>
                <Options 
                options={this.state.options}
                handelDeleteOptions={this.handelDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
                <h1>{props.title}</h1>                
                {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
        );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
            <div>
                <button onClick={props.handlePick}
                disabled={!props.hasOptions}>
                    what to do
                </button>
            </div>
        )
}

const Options = (props) => {
        return (
            <div>
                <button onClick={props.handelDeleteOptions}>Remove All</button>
                {props.options.length === 0 && <p>Please add an option</p>}
                {
                    props.options.map((option) => (
                    <Option key={option} 
                    text={option}
                    handleDeleteOption={props.handleDeleteOption}/>
                    ))
                }
                
            </div>
        )
    
}

const Option = (props) =>{
    return (
            <div>
                {props.text}
                <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.text)
                }}>
                    remove
                </button>
            </div>
    )
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.state={
            error: undefined
        }
    }
    handleAdd(e){
        e.preventDefault();
        const handleOption = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(handleOption);
        this.setState(() => ( { error } ))

        if(!error){
            e.target.elements.option.value = '';
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAdd}>
                    <input type="text" name="option"/>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));




