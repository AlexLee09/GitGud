import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './MainPage.module.css';
import CommandItem from '../components/CommandItem';
import { motion } from "framer-motion";

function MainPage() {
    const navigate = useNavigate();

    const returnToLanding = () => {
        navigate("/");
    }

    const [input, setInput] = useState("");

    const [data, setData] = useState([]);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSubmit = async (event) => {
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

    const selectCommand = (index) => {
        setSelectedIndex(index);
    }

    return (
        <>
            <h1 className={classes.titleText}>Git Gud - your personal git assistant</h1>
            <div className={classes.container}>
                <div className={classes.tile1}>
                    <h2>Enter your git query here:</h2>
                    <textarea placeholder='Type question here' onChange={(event) => setInput(event.target.value)} className={classes.questionInput}>
                    </textarea>

                    <motion.button
                        onClick={handleSubmit}
                        className={classes.mainPageButton}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Go!
                    </motion.button>
                    <motion.button
                        onClick={returnToLanding}
                        className={classes.mainPageButton}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Return to home
                    </motion.button>
                </div>
                <div className={classes.tile2}>
                    <h2>Step by step:</h2>
                    <ol>
                        {data.length > 0 && data.map((item, index) => {
                            return (
                                <CommandItem command={item.command} onClick={() => selectCommand(index)} />
                            )
                        })}
                        {data.length === 0 && <CommandItem command="Your git commands will show up here!" onClick={() => { }} />}
                    </ol>
                    
                    <h2>Step #{selectedIndex + 1} Explanation</h2>
                    <p>{data.length > 0 ? data[selectedIndex].explanation : "Explanation will be here"}</p>

                </div>
            </div>
        </>
    )
}


export default MainPage; 