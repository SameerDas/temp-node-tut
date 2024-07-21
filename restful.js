let express=require("express");
let app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("working with restful  default api ");
})
app.get("/sam",(req,res)=>{
    res.send("working with restful sameer api ");
})
let books=[
    {
        id:"101",
        title:"c with ds",
        author:"reema"
    },
    {
        id:"102",
        title:"web technologies",
        author:"cse people"
    }
];
app.get("/bookslist",(req,res)=>{
    res.json(books);
})
app.get("/bookslist/:id",(req,res)=>{
    let id=req.params.id;
    for(let book of books){
        if(book.id===id){
            res.json(book);
            return;
        }
    }
    res.send("book is not with given");
})
app.listen(4321,()=>{
    console.log("server started at port number 4321");
})