const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();
db.connect();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);    
})