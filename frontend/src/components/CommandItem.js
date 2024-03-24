import React from 'react'; 
import classes from './CommandItem.module.css'; 
import { motion } from 'framer-motion'; 

function CommandItem (props) 
{
    const onClick = props.onClick; 
    const command = props.command; 

    return (<div className = {classes.lists}>
        <li className = {classes.list}>
            { command }
            <motion.button 
                onClick={onClick} 
                className={classes.roundButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                i
            </motion.button>
        </li>
    </div>)
}

export default CommandItem; 
