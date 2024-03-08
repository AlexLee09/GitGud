import React from 'react'; 
import { useNavigate } from 'react-router-dom';

function LandingPage () 
{
    const navigate = useNavigate(); 

    const toMainPage = () =>
    {
        navigate("/main")

    }


    return (
        <div>
            <h1>Landing Page</h1>
            <button onClick = {toMainPage}>Main Page</button>

        </div>
    )
}

export default LandingPage;