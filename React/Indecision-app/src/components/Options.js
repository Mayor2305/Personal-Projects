import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option';

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button
                className="button button--link"
                onClick={props.handelDeleteOptions}>
                    Remove All
                    </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option</p>}
        {
            props.options.map((option, index) => (
            <Option key={option} 
            text={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}/>
            ))  
        }
            
            
        </div>
    );

export default Options;