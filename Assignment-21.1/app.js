
var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var url = 'mongodb://localhost:27017/myproject'

MongoClient.connect(url,{ useNewUrlParser: true } , function(err, data) {
    if(err){
        console.log("Sgdsg");
    }
  
 
var Obj = data.db('organization');
var collection = Obj.collection('employee');

var empdata =[
    {"ename":"Vinod","department":"Clerical staff","designation":"Fresher","salary":4000, "dateofJoining":"3-october","city":"bangalore"},
    {"ename":"Sunil","department":"Support staff","designation":"Fresher","salary":14000, "dateofJoining":"30-october","city":"california"},
    {"ename":"Sumit","department":"ops staff","designation":"Fresher","salary":40000, "dateofJoining":"07-november","city":"singapore"},
    {"ename":"kundan","department":"development staff","designation":"software developer","salary":35000, "dateofJoining":"30-march","city":"newyork,"},
    {"ename":"kapil","department":"management staff","designation":"manager","salary":31000," dateofJoining":"23-october","city":"newyork,"},
    {"ename":"nitesh","department":"logistic staff","designation":"","salary":35000, "dateofJoining":"5-october","city":"delhi"},
    {"ename":"Hestin","department":"Clerical staff","designation":"Fresher","salary":32000, "dateofJoining":"8-october","city":"delhi"},
    {"ename":"Richa","department":"development staff","designation":"software developer","salary":4000, "dateofJoining":"1-Januay","city":"bangalore"},
    {"ename":"Kalpana","department":"Clerical staff","designation":"Fresher","salary":10000, "dateofJoining":"3-february","city":"california"},
    {"ename":"lalit","department":"development staff","designation":"software developer","salary":39000, "dateofJoining":"4-march","city":"newyork,"},
   
    
];
// Inserting all document 
console.log("hello world");
collection.insertMany(empdata,(err,data)=>{
    if(err){
        console.log("sd");
    }
    else{
        console.log("data inserted properly", data);
        
    }

});

// find and Display only designation of an Employee

var particualrEmp =collection.find({"ename":"Vinod"}).toArray((err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("find and Display only designation of an Employee");
        console.log(data);
    }
})


//find and Display the records of employee whose salary is greater than 7000


collection.find({"salary":{$gt:7000}}).toArray((err,data)=>{
    if(err){
        console.log("Error is ",err);
    }
    else{
        console.log("find and Display the records of employee whose salary is greater than 7000");
        console.log(data);
    }
});


//  Sort and Display the records of an employee based on the date of joining
collection.find({}).sort({"dateofJoining":1}).toArray((err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Sort and Display the records of an employee based on the date of joining');
        console.log(data);
    }
});
//==================================================================
// Sort and Display the records of an employee based on the salary in ascending order
collection.find({}).sort({"salary":1}).toArray((err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Sort and Display the records of an employee based on the salary in ascending order');
        console.log(data);
    }
});

// find and Display the records of an employee whose salary in between 5000 to 40000
collection.find({"salary":{$gt:5000, $lt:40000}}).toArray((err,data)=>{
    if(err){
        console.log("Error is ",err);
    }
    else{
        console.log("find and Display the records of employee whose salary is greater than 7000");
        console.log(data);
    }
});
//===================================find and display all the records of an employee except whose designation is developer.

collection.find({"designation":"software developer"}).toArray((err,data)=>{
    if(err){
        console.log("Error is ",err);
    }
    else{
        console.log("find and display all the records of an employee except whose designation is developer");
        console.log(data);
    }
});

//============   Sort and display the records of an employee's city in descending order ========//
collection.find({}).sort({"city":1}).toArray((err,data)=>{
    if(err){
        console.log("Error is ",err);
    }
    else{
        console.log("Sort and display the records of an employee's city in descending order");
        console.log(data);
    }
});

//==================find and display the records of an employee's whose city starts with Singapore and
//===============salary is greater than 8000

collection.find({"city":"singapore", salary:{$gt:8000}}).sort({"city":1}).toArray((err,data)=>{
    if(err){
        console.log("Error is ",err);
    }
    else{
        console.log("Sort and display the records of an employee's city in descending order");
        console.log(data);
    }
});
// =========================Drop the employee records and display=============================
collection.drop(()=>{
    console.log("Colection dropped");
})

});


