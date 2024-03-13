import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './LandingPage.module.css'; 

function LandingPage () 
{
    const navigate = useNavigate(); 

    const toMainPage = () =>
    {
        navigate("/main")
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Landing Page</h1>
            <p>Git Gud is an AI tool that will help familiarize you with the command line interface. You can ask it any question about the command line and it will provide you with the answer, providing the exact commands you need to use and an explanation of what they each do.</p>
            <button onClick={toMainPage}>Main Page</button>
        </div>
    )
}

export default LandingPage;