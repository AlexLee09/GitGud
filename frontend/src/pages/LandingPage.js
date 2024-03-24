import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import classes from './LandingPage.module.css'; 
import { motion } from 'framer-motion';

function LandingPage () 
{
    const navigate = useNavigate(); 

    const toMainPage = () =>
    {
        navigate("/main")
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Git Gud</h1>
            <p className={classes.description}>GitGud is a AI tool that answers any questions related to git. Users can input queries, GitGud will break it down into specific steps and commands, each with an explanation.</p>
            <motion.button 
                onClick={toMainPage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Get started!
            </motion.button>

        </div>
    )
}

export default LandingPage;