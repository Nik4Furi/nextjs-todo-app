import { userModel } from "@/models/userModel";
import ConnectDB from "@/utils/ConnectDB";
import { GenrateToken, SetCookieHeader } from "@/utils/feature";
import bcrypt from 'bcryptjs'

export default async function handler (req,res){
    try {

        if(req.method !== 'POST') return res.status(400).json({success:false,msg:"Bad request"})

        const {name,email,password} = req.body;

        if(!email || !password || !name) return res.status(409).json({success:false,msg:"All fields are required"})

        await ConnectDB();

        //Find is user is alreayd exist
        let user = await userModel.findOne({email})

        if(user){
            res.redirect('/login');

            return res.status(404).json({success:false,msg:"This credentials user is already exist"});
        } 

        const hashPassword = await bcrypt.hash(password,10);

        user = await userModel.create({name,email,password:hashPassword});

        const token = GenrateToken(user._id);

        SetCookieHeader(res,token,true);

        return res.status(201).json({success:true,msg:'You are register successfully',user})

        

    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,msg:error})
    }
}