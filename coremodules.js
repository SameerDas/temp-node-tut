// var url=require("url");
// var myurl=new URL("https://www.rguktsklm.ac.in:8080/careers/jk.html?id=536&&name='sameer'");
// console.log("host is:",myurl.host);
// console.log("url is:",myurl.href);
// console.log("pathname is:",myurl.pathname);
// console.log("query string is:",myurl.search);
// console.log("hostname is:",myurl.hostname);

// var od=require("os");
// console.log("platform is:",od.platform());
// console.log("architecure is:",od.arch());
// console.log("home directory is:",od.homedir());
// console.log("total memory is:",od.totalmem());
// console.log("free memory is:",od.freemem());
// console.log("cpu related info is:",od.cpus());
// console.log("current user:",od.userInfo());
// console.log("system uptime in seconds:",od.uptime());
// let currentOs={
//     type:od.type(),
//     release:od.release()
// }
// console.log(currentOs);

// let path=require("path");
// console.log("basename is:",path.basename(__filename));
// console.log("extension is:",path.extname(__filename));
// console.log("directory is:",path.dirname(__filename));
// console.log("properties is:",path.parse(__filename));
// console.log("combining path is:",path.join(__dirname,'jk.js','jk1.js'));
// console.log(path.sep);
// console.log("abosulte path:",path.resolve(__dirname));

// let fs=require("fs");
// fs.writeFile("hello.txt",'sameer das',function(err){
//     if(err) throw err;
//     console.log("data is written");
// })

// if your file another folder then
// fs.writeFile("./folder_name/file_name")

// fs.appendFile("hello.txt",'rgukt',function(err){
//     if(err) throw err;
//     console.log("data is appended");
// })

// fs.readFile("hello.txt",'utf8',function(err,data){
//     if(err) throw err;
//     console.log(data);
// })

// fs.rename("hello.txt",'hello1.txt',function(err){
//     if(err) throw err;
//     console.log("rename is successful");
// })
// delete a file
// fs.unlink("hello1.txt",function(err){
//     if(err) throw err;
//     console.log("file is deleted");
// })


// let http=require("http");
// http.createServer(function(req,res){
//     res.writeHead(200,{"content-type":"text/plain"});
//     res.write("welcome to node js server djfja");
//     res.end();
// }).listen(4321);

// let http=require("http");
// let hostname="127.0.0.1";
// let port=4321;
// let fs=require("fs");
// fs.readFile("first.html",(err,data)=>{
//     if(err) throw err;
//     let server=http.createServer((req,res)=>{
//         res.setHeader("content-type","text/html");
//         res.write("sameer is a good boy");
//         res.write(data);
//         res.end();
//     })
//     server.listen(port,hostname,function(){
//         console.log("server started at port number",port);
//     })
// })

let http=require("http");
let server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("welcome to home page");
    }
    if(req.urt==='/about'){
        res.end("here is our short history");
    }
    res.end("<h1>Oops!</h1><p>we can't seem to find page you are looking for </p> <a href='/'>back home</a>"
    );
})
server.listen(5000);