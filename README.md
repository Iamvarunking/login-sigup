# What IS IT?
This is a simple app that maitain login-logout flow of user and store details of user in database
also it store the information submited in contact us page.  

## HOW TO RUN THIS?
To run 

````
node app.js
````

Before run this you have to install 

````
npm install body-parser
npm install express
npm install mysql
npm install ejs 
````

## Explaination of app.js file

## Section in app.js that creates database

````node
app.get('/createdb', (req,res) => {
    let sql = 'CREATE DATABASE XENONSTACK';
    connection.query(sql, (err,result)=>{
        if(err) throw err
        console.log(result);
        res.send('Database created');
    });
});
````

## Section in app.js that creates table in database

````node
app.get('/createtable', (req,res)=> {
    let sql = "CREATE TABLE registered(id int AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))";
    connection.query(sql, (err, result) => {
        if(err) throw err
        console.log(result);
        res.send('Table is created');
    });
});
````
 