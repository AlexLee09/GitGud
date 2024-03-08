import React from 'react'; 
import { useNavigate } from 'react-router-dom';

function MainPage()
{
    const navigate = useNavigate();

   
    const returnToLanding = () =>
    {
        navigate("/");
    }
    
       
    return(
        <div>
            <h1>Main Page</h1>
            <button onClick = {returnToLanding}>Return</button>
            <textarea></textarea>
        </div>
    )
}

export default MainPage; 