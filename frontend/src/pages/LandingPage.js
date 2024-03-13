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
            {/* <h1 className={classes.title}>Landing Page</h1> */}
            <p>This description is a description</p>
            <button onClick={toMainPage}>Main Page</button>
        </div>
    )
}

export default LandingPage;