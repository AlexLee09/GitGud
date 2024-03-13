import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './MainPage.module.css'; 
import CommandItem from '../components/CommandItem';

function MainPage()
{
    const navigate = useNavigate();

    const returnToLanding = () =>
    {
        navigate("/");
    }

    const[input, setInput] = useState("");

    const[data, setData] = useState([]);


    const[selectedIndex, setSelectedIndex] = useState(0);
    
    const handleSubmit = async (event) => 
    {
        event.preventDefault();

        const dataToSend = {
            input: input
        }

        const response = await fetch("http://localhost:3001/user/request",
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        })

        const data = await response.json(); 

        setData(data.data); 
    }

    const selectCommand = (index) => 
    {
        setSelectedIndex(index);
    }

    return (
        <div className = {classes.container}>
            <div className = {classes.tile1}>
                <h1>Main Page</h1>
                <textarea placeholder='Type question here' onChange={(event) => setInput(event.target.value)} className={classes.questionInput}>
                </textarea>
                <button onClick = {returnToLanding}>Return</button>
                <button onClick={handleSubmit}>SUBMIT</button>
            </div>
            <div className = {classes.tile2}>
                <ol>
                    { data.length > 0 && data.map ((item, index) => { 
                        return (
                            <CommandItem command={item.command} onClick={() => selectCommand(index)} />
                        )
                    })}
                    { data.length === 0 && <CommandItem command="Your git commands will show up here!" onClick={() => {}}  /> }
                </ol>
                
                <p>{data.length > 0 ? data[selectedIndex].explanation : "Explanation will be here"}</p>

            </div>
        </div>
    )
}


export default MainPage; 