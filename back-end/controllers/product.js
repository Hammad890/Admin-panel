import Product from "../models/product";

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
    const id = req.params.id
   try{
    const product = await Product.findById(id)
    if(!product){
        res.status(404).send({message: "Product not found"})
    }
    product.name= req.body.name;
    product.category= req.body.category;
    product.price= req.body.price
    await product.save()
    return res.status(200).send({data: product})
   }catch (err) {
    next (err)
   } 
}

export const deleteProduct= async (req,res,next)=>{
    const id= req.params.id
    try {
        const product = await Product.findByIdAndRemove(id)
        const products = await Product.find() 
        return res.status(200).send({data: products})
    } catch (err){
        next (err)
    }
}