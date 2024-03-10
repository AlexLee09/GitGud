import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './MainPage.module.css'; 

function MainPage()
{
    const navigate = useNavigate();

    const returnToLanding = () =>
    {
        navigate("/");
    }

    const[input, setInput] = useState("");

    const[data, setData] = useState([]);
    
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
                            <li key={index}>
                                { item.command }
                            </li>
                        )
                    })}
                </ol>

                <textarea readOnly>Mentaiko carbonara combines the richness of traditional carbonara with the umami punch of mentaiko (marinated cod roe). Creamy, savory, and slightly spicy, it's a delightful fusion that tantalizes taste buds. </textarea>

            </div>
        </div>
    )
}


export default MainPage; 