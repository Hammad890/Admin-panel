import Product from "../models/product.js";

export const getAllProduct= async (req,res,next)=>{
    try{
    const products= await Product.find()
    return res.status(200).send({data : products})
    } catch (err){
        next (err)
    } 
}

export const createProduct= async (req,res,next)=>{
    const body= req.body
    try{
        const product = new Product (body)
        await product.save()
        return res.status(200).send({message: "Product Added Successfully"})
    } catch (err){
        next (err)
    }
}

export const getProductById = async (req,res,next)=>{
    const id = req.params.id
    try {
        const product= await Product.findById(id)
        return res.status(200).send({data:product})
    } catch (err){
        next (err)
    }
}

export const editProductById= async (req,res,next)=>{
    try{
        const product= await Product.updateOne({_id: req.params.id , $set: req.body});
        return res.status(200).send({data : product})
    } catch (err) {
        next(err)
    }
}

export const deleteProduct= async (req,res,next)=>{
    try {
        const product = await Product.deleteOne({_id : req.params.id})
        const products = await Product.find() 
        return res.status(200).send({data: products})
    } catch (err){
        next (err)
    }
}