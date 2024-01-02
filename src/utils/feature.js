//------------Setting cookie headers

import { userModel } from "@/models/userModel";
import { serialize } from "cookie";

import jwt from 'jsonwebtoken'

export const SetCookieHeader = (res,token, set) => {

    res.setHeader('Set-cookie', serialize('token', token, {
        path:'/',
        httpOnly: true,
        maxAge: set ? 15 * 24 * 60 * 60 * 1000:0
    }))
}

//------------- Generate token
export const GenrateToken = (_id)=>{
    return jwt.sign({_id},process.env.JWT_SECRET)
}

//---------- Check is Auth
export const isAuth = async(req)=>{
    const cookie = req.headers.cookie;
    if(!cookie) return null;

    const token = cookie.split('=')[1];

    const decode = jwt.verify(token,process.env.JWT_SECRET);

    return await userModel.findById(decode._id);
}