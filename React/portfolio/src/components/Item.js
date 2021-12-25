import React from 'react';

const Item = (props) =>{
    return(
        <div>
            this is item: {props.match.params.id}
        </div>
    )
}

export default Item;