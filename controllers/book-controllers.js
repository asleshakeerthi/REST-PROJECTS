var books=require("../model/books")
var getAllBooks=async(req,res)=>{
    var allBooks=await books.find()
    res.status(200).json(allBooks)
}
var getSingleBook = async(req,res)=>{
    var bookId=req.params.id
    var mybook=await books.findById(bookId)
    res.status(200).json(mybook)
}
var addNewBook=async(req,res)=>{
    var newFormBook=req.body
    var newBook=await books.create(newFormBook)
    if(newBook){
        res.status(201).json(newBook)
    }else{
        res.status(404).json({message:"cannot create a book"})
       
    }
}
var updateBook=async(req,res)=>{
    var bookId=req.params.id
    var updatedData=req.body
    var updatedBook=await books.findByIdAndUpdate(bookId,updatedData)
    if(updatedBook){
        res.status(200).json(updatedBook)
    }else{
        res.status(400).jsin({message:"cannot find"})
    }
}
var deleteBook=async(req,res)=>{
    var bookId=req.params.id
    var deleteBook=await books.findByIdAnddelete(bookId)
    if(deleteBook){
        res.status(200).json(deleteBook)
    }else{
        res.status(404).json({message:"cannot delete"})
    }
}
module.exports={
    getAllBooks,getSingleBook,addNewBook,updateBook,deleteBook
}