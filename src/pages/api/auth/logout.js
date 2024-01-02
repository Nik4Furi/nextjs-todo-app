
import { SetCookieHeader } from "@/utils/feature";

export default async function handler (req,res){
    try {

        if(req.method !== 'GET') return res.status(400).json({success:false,msg:"Bad request"})


        SetCookieHeader(res,null,false);

        return res.status(201).json({success:true,msg:`Logout successfully`})        

    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,msg:error})
    }
}