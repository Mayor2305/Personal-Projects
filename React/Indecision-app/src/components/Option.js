import React from 'react';
import ReactDOM from 'react-dom';

const Option = (props) => (
            <div className="option">
                <p className="option__text">{props.count}. {props.text}</p>
                <button 
                className="button button--link"
                onClick={(e) => {
                    props.handleDeleteOption(props.text)
                }}>
                    remove
                </button>
            </div>
    );

export default Option;