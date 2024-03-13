import React from 'react'; 

function CommandItem (props) 
{
    const onClick = props.onClick; 
    const command = props.command; 

    return (<div>
        <li>
            { command }
            <button onClick={onClick}>i</button>
        </li>
    </div>)
}

export default CommandItem; 
