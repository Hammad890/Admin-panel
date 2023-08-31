import User from "../models/user.js";
import mongoose from "mongoose";


export const getAllUsers= async (req,res,next) =>{
    try{
    const users= await User.find()
    return res.status(200).send({data : users })
} catch(err){
    next(err)
}
}

export const getById= async (req,res,next)=>{
    const id= req.params.id
    try{
    const user= await User.findById(id)
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send({ data: user}) 
} catch(err){
    next(err)
}
}

export const editById= async (req,res,next) => {
    try{
        const user= await User.updateOne({_id: req.params.id , $set: req.body});
        return res.status(200).send({data : user})
    } catch (err) {
        next(err)
    }
}

export const createUser= async (req,res) => {
    const body= req.body
    try{
        const user= new User(body)
        await user.save()
        return res.status(200).send({message: "User Added Successfully"})
    } catch(err){
        return res.status(500).send({err: "Bad request"})
    }
}
export const deleteUser= async (req,res,next) => {
    try{
    const user = await User.deleteOne({_id: req.params.id })
    const users = await User.find()
    res.status(200).send({ data: users })
    } catch (err){
        return res.status(500).send({err: "Bad request"})
    }
} 


