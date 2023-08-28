import User from "../models/user";

export const getAllUsers= async (req,res,next) =>{
    try{
    const users= await User.find().select("-password")
    return res.status(200).send({data : users })
} catch(err){
    next(err)
}
}

export const getById= async (req,res,next)=>{
    const id= req.params.id
    try{
    const user= await User.findById(id)
    return res.status(200).send({ data: user}) 
} catch(err){
    next(err)
}
}

export const editById= async (req,res,next) => {
    const id= req.params.id
    try{
        const user= await user.findById(id);
        if (!user){
            res.status(404).send({message: "User not found"})
        }
        user.username = req.body.username;
        user.email= req.body.email;
        user.number= req.body.number
        await user.save()
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
        return (err)
    }
}
export const deleteUser= async (req,res,next) => {
    const id = req.params.id
    try{
    const user = await User.findByIdAndRemove(id)
    const users = await User.find()
    res.status(200).send({ data: users })
    } catch (err){
        next (err)
    }
} 


