import { userModel } from "@/models/userModel";
import ConnectDB from "@/utils/ConnectDB";
import { GenrateToken, SetCookieHeader } from "@/utils/feature";
import bcrypt from 'bcryptjs'

export default async function handler (req,res){
    try {

        if(req.method !== 'POST') return res.status(400).json({success:false,msg:"Bad request"})

        const {email,password} = req.body;

        if(!email || !password ) return res.status(409).json({success:false,msg:"All fields are required"})

        await ConnectDB();

        //Find is user is alreayd exist
        const user = await userModel.findOne({email})

        if(!user){
            return res.status(404).json({success:false,msg:"Invalid credentials"});
        } 

        const pass = await bcrypt.compare(password,user.password);

        if(!pass){
            return res.status(404).json({success:false,msg:"Invalid credentials"});
        }      

        const token = GenrateToken(user._id);

        SetCookieHeader(res,token,true);

        return res.status(201).json({success:true,msg:`Welcome back ${user.name}`,user})

        

    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,msg:error})
    }
}