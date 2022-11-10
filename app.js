const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./config.js');
const signup = require('./controller/signup');
const login = require('./controller/login');
const contact = require('./controller/contact');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/' , (req,res) => {
    res.render('index')
});

app.get('/login', (req,res) => {
    res.render('login')
});

app.get('/logout', (req,res) => {
    res.render('login')
})

app.get('/home', (req,res) => {
    res.render('index')
})

app.get('/logout', (req,res) => {
    res.render('index')
})

app.get('/contact', (req,res) => {
    res.render('contactus')
})

app.get('/signup', (req,res) => {
    res.render('signup')
})

app.get('/createdb', (req,res) => {
    let sql = 'CREATE DATABASE XENONSTACK';
    connection.query(sql, (err,result)=>{
        if(err) throw err
        console.log(result);
        res.send('Database created');
    });
});

app.get('/createtable', (req,res)=> {
    let sql = "CREATE TABLE registered(id int AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))";
    connection.query(sql, (err, result) => {
        if(err) throw err
        console.log(result);
        res.send('Table is created');
    });
});

app.post('/controller/signup', signup.signup);
app.post('/controller/login', login.login);
app.post('/controller/contact', contact.contact);

app.listen('3000', () => {
    console.log("server started on port 3000");
});