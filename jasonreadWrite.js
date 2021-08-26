let fs=require("fs");
// let input=["akash","hi","how","r","u"]
// let jsonWrite=JSON.stringify(input);
// fs.writeFileSync("abc.json",jsonWrite);
let content=fs.readFileSync("abc.json");
let jsonData=JSON.parse(content);
jsonData.push("hola");
let jsonWriteable=JSON.stringify(jsonData);
fs.writeFileSync("abc.json",jsonWriteable);