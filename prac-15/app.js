const fs = require('fs');

// Create a new File and Write File 

fs.writeFile("read.txt","Practical - 15",(err)=>{
    if (err == "null") {console.log(err);}
    console.log("File is created");
})

// Read File

fs.readFile("read.txt","UTF-8",(err,data)=>{
    if (err == "null") {console.log(err);}
    console.log(data);
});

// Delete File

fs.unlink("read.txt",(err)=>{
    if (err == "null") {console.log(err);}
    console.log("File is Deleted");
})