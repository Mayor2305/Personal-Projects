// ************************************************

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.AddONE = this.AddONE.bind(this)
        this.SubONE = this.SubONE.bind(this)
        this.Reset = this.Reset.bind(this)

        this.state = {
            count: 0
        }
    }
    AddONE () {
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
    }
    
    SubONE () {
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            }
        })
    }

    componentDidMount() {
        try{
            const num = localStorage.getItem('count');
            const count = parseInt(num, 10);

            if(!isNaN(count)){
                this.setState(()=> ({count}));
            }
        }
        catch(e){
            //Do nothing
        }     

    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count)
        {
            const num = this.state.count
            localStorage.setItem('count', num)
        }
            
    }
    
    Reset () {
        this.setState((prevState) => {
            return{
                count: 0
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.AddONE}>+1</button>
                <button onClick={this.SubONE}>-1</button>
                <button onClick={this.Reset}>reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter/>, document.getElementById('app'))