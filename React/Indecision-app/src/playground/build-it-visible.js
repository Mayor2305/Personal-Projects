class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.state = {
            Toggle: false
        }
    }

    toggleVisibility () {
        this.setState((prevState)=>{
            return{
                toggle: !prevState.toggle
            }

        });
    }


    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.toggle ? 'hide details' : 'show details'}
                </button>
                {this.state.toggle && (
                    <div>
                        <p>
                            hello
                        </p>
                    </div>
                )}
            </div>
        )
    }
}


ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))