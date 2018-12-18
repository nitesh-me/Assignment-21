
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
    {"ename":"Sunil","department":"Support staff","designation":"Fresher","salary":14000, "dateofJoining":"30-october","city":"Chennai"},
    {"ename":"Sumit","department":"ops staff","designation":"Fresher","salary":40000, "dateofJoining":"07-november","city":"Mumbai"},
    {"ename":"kundan","department":"development staff","designation":"software developer","salary":35000, "dateofJoining":"30-march","city":"bangalore"},
    {"ename":"kapil","department":"management staff","designation":"manager","salary":31000," dateofJoining":"23-october","city":"Mumbai"},
    {"ename":"nitesh","department":"logistic staff","designation":"","salary":35000, "dateofJoining":"5-october","city":"Delhi"},
    {"ename":"Hestin","department":"Clerical staff","designation":"Fresher","salary":32000, "dateofJoining":"8-october","city":"Pune"},
    {"ename":"Richa","department":"development staff","designation":"software developer","salary":4000, "dateofJoining":"1-Januay","city":"Pune"},
    {"ename":"Kalpana","department":"Clerical staff","designation":"Fresher","salary":10000, "dateofJoining":"3-february","city":"Mumbai"},
    {"ename":"lalit","department":"development staff","designation":"software developer","salary":40000, "dateofJoining":"4-march","city":"kerala"},
   
    
];
// Inserting all document 
collection.insertMany(empdata,(err,data)=>{
    if(err){
        console.log("sd");
    }
    else{
        console.log("data inserted properly", data);
    }

});
console.log("hello world");
// find and Display only designation of an Employee
var particualrEmp =collection.find({"ename":"Vinod"});
console.log(particualrEmp);

//find and Display the records of employee whose salary is greater than 7000

// collection.find({"salary":{$gt:7000}},(err,data)=>{
//     if(err){
//         console.log("Error is ",err);
//     }
//     else{
//         console.log(data);
//     }
// });


//  Sort and Display the records of an employee based on the date of joining
// collection.find({$sort :{dateofJoining:1}},(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });




});


