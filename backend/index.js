require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const PORT = process.env.PORT; 

app.get('/', async (req, res) => {
    try {
        const data = {
            key: "value"
        }

        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

app.get('/user', async (req, res) => {
    try {
        const data = {
            username: "admin"
        }

        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

app.post('/user/new', async(req, res) =>
{
    try{
        // const { username, password } = req.body;

        const username = req.body.username; 
        const password = req.body.password; 

        const message = `TODO: make new user with username: ${username} and password: ${password}`; 
        
        console.log (message); 

        const dataToSend = { 
            message: message 
        }

        res.status(200).json(dataToSend); 
    }
    catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})


app.listen(PORT, () => // fire up express server
{
    console.log ("LISTENING ON PORT " + PORT);
}); 