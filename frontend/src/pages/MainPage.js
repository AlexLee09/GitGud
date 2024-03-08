import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage()
{
    const navigate = useNavigate();

   
    const returnToLanding = () =>
    {
        navigate("/");
    }

    const[input, setInput] = useState("");
    
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

        console.log (data);
    }


    
    return(
        <div>
            <h1>Main Page</h1>
            <button onClick = {returnToLanding}>Return</button>
            <textarea placeholder='Type question here'
            onChange={(event) => setInput(event.target.value)}>    
            </textarea>
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}


export default MainPage; 