const mysql = require("mysql");
var express = require("express");
var emprouter = express();
 
const connection = mysql.createConnection({
     host   	:  '192.168.42.99 ',
     user   	:  'root',
     password	:  'manager',
     database 	:  'mydata',
     port 	:  1000
 });

 var mydata=[];
 connection.connect();

 emprouter.get("/",function(request,response){
     connection.query("select * from emp",function(err,result){
         if(err==null)
         {
             mydata=result;
             response.contentType("application/json");
             response.send(JSON.stringify(mydata));
         }
         else
         {
             response.send("something went wrong!!");
         }
     });
 });

 module.exports = emprouter;
