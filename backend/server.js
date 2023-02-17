import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import db from "./config/Database.js";
// import router from "./routes/index.js";
// dotenv.config();

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());


const HARD_CODED_USER_PASSWORDS = {
    'henry': 'h',
    'noah': '123' ,
    'gus': 'test'
};

app.get('/', function (req, res) {
 return res.send('Monkey see, monkey do!');
});

app.post('/login', function (req, res) {
    console.log('Login request recieved:', req.body);
    const { username, password } = req.body;
    if (HARD_CODED_USER_PASSWORDS[username] === password) {
        console.log('Login successful!')
        return res.status(200).send({
            username: username
        });
    } else {
        console.log('Login failed!')
        return res.status(401).send({
            message: 'Login failed!'
        });
    }
});

// POST method route
app.post('/signup', (req, res) => {
    res.send('miles ingmar tuncel')
})

console.log('Now listening on port ' + port + '...');
app.listen(process.env.PORT || port);

// app.use(cookieParser());
// app.use(express.json());
// app.use(router);