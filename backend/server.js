import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();

const app = express();
const port = 8080;

app.get('/', function (req, res) {
 return res.send('Monkey see, monkey do!');
});

app.post('/login', function (req, res) {
    return res.send(true);
});

// POST method route
app.post('/signup', (req, res) => {
    res.send('miles ingmar tuncel')
})

console.log('Now listening on port ' + port + '...');
app.listen(process.env.PORT || port);

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);