const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middlewae
app.use(cors());
app.use(express.json());
//ROUTES//
//create todo
app.post("/todos", async (req, res)=>{
    try{
        const {description} = req.body;
        //const conn =await pool.connect();
        const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description]);
        //conn.end();
        //const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *" [description]);
        res.json(newTodo.rows);

    }
    catch(err){
        console.log(err);

    }

})

app.listen(5000, ()=>{
    console.log("server has started on port 5000");

})