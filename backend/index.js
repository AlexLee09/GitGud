require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const { OpenAI } = require ("openai")

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

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

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [
              {
                "role": "system",
                "content": "You are a professional programmer and git user. Your task is to outline step by step how to achieve a git task in the command line, by providing a set of commands and an explanation for each. All explanations should be beginner friendly. \n\nAll your output should strictly be in a json format with an array called \"data\". Data is an array of objects, with two strings: \"command\" and \"explanation\". \n\nHere is an example:\n{\n    data: [\n                    {\n                        command: `git checkout -b \"[Branch Name]\"`,\n                        explanation: \"Git Checkout is a command in the Git version control system that allows users to switch between different branches or versions of a project.\"\n                    },\n                    {\n                        command: \"git add .\",\n                        explanation: \"The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit.\"\n                    },\n                    {\n                        command: `git commit -m \"[Commit message here]\"`,\n                        explanation: `The git commit command is what you'll use to take all of the changes that have been made locally and push them up to a remote repository. It's important to note that you can't just type \"git commit\" by itself with no arguments — it needs at least one parameter, which will be either HEAD or any other branch name.`\n                    },\n                    {\n                        command: \"git push\",\n                        explanation: \"The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo.\"\n                    }\n                ]\n}\n\nIf USER asks for something unrelated to git or terminal commands, provide the following json response: \n{\n    data: [\n                    {\n                        command: `git gud`,\n                        explanation: \"Please enter a valid request!\"\n                    }\n                ]\n}\n"
              },
              {
                "role": "user",
                "content": "How do you create a new branch in github?"
              },
              {
                "role": "assistant",
                "content": "{\n    \"data\": [\n        {\n            \"command\": \"git checkout -b [Branch Name]\",\n            \"explanation\": \"This command is used to create a new branch and switch to it at the same time. Replace [Branch Name] with the desired name for your new branch.\"\n        },\n        {\n            \"command\": \"git push origin [Branch Name]\",\n            \"explanation\": \"After creating the new branch locally, you need to push it to the remote repository on GitHub. This command pushes the new branch to the remote repository.\"\n        }\n    ]\n}"
              },
              {
                "role": "user",
                "content": "What is 3^17, is that a possible chess elo?"
              },
              {
                "role": "assistant",
                "content": "{\n    \"data\": [\n        {\n            \"command\": \"git gud\",\n            \"explanation\": \"Please enter a valid request!\"\n        }\n    ]\n}"
              },
              {
                "role": "user",
                "content": "How do you merge a pull request?"
              },
              {
                "role": "assistant",
                "content": "{\n    \"data\": [\n        {\n            \"command\": \"git checkout [Branch to merge into]\",\n            \"explanation\": \"First, switch to the branch that you want to merge the changes into. Replace [Branch to merge into] with the name of the branch that will receive the changes.\"\n        },\n        {\n            \"command\": \"git merge [Branch to merge from]\",\n            \"explanation\": \"This command merges the specified branch ([Branch to merge from]) into the current branch (the one you switched to in the previous step).\"\n        },\n        {\n            \"command\": \"git push\",\n            \"explanation\": \"After the merge is successful locally, you need to push the changes to the remote repository to update it with the merged changes.\"\n        }\n    ]\n}"
              },
              {
                "role": "user",
                "content": input
              }
            ],
            temperature: 0.7,
            max_tokens: 1000,
          });

        const data = JSON.parse(response.choices[0].message.content);

        console.log (data)

        const dataToSend = 
        {
            data: data.data
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