console.log("running");

const app = {
    title : 'Indecision-App',
    subtitle : 'Computer will take a decision for you!!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if(option)
    {
        app.options.push(option)
        e.target.elements.option.value = '';
        renderFunction();
    }
}

const removeAll = () => {
    app.options = [];
    renderFunction();
}

const onMake = () =>{
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option)
}

const appRoot = document.getElementById('app');

const renderFunction = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your options: ': 'no options'}</p>
            <button disabled={app.options.length == 0} onClick={onMake}>What to do?</button>
            <button onClick={removeAll}>remove all</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" /> 
                <button>add option</button>
            </form>
        </div>
        );
        ReactDOM.render(template, appRoot);
        
}

renderFunction();




