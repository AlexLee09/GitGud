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

app.post('/user/request', async(req, res) =>
{
    try{
        const input = req.body.input;

        console.log(input)

        const dataToSend = 
        {
            data: [
                {
                    command: `git checkout -b "[Branch Name]"`,
                    explanation: "Git Checkout is a command in the Git version control system that allows users to switch between different branches or versions of a project."
                },
                {
                    command: "git add .",
                    explanation: "The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit."
                },
                {
                    command: `git commit -m "[Commit message here]"`,
                    explanation: `The git commit command is what you'll use to take all of the changes that have been made locally and push them up to a remote repository. It's important to note that you can't just type "git commit" by itself with no arguments — it needs at least one parameter, which will be either HEAD or any other branch name.`
                },
                {
                    command: "git push",
                    explanation: "The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo."
                }
            ]
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