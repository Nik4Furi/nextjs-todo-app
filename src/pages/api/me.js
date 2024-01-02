import ErrorHandler from "@/middlewares/Errors";
import { taskModel } from "@/models/taskModel";
import ConnectDB from "@/utils/ConnectDB";
import { isAuth } from "@/utils/feature";

export default async function handler (req,res){
    try {
        // console.log('req.body ',req.body);

        if(req.method !== 'GET')
            return res.status(404).json({success:false,msg:"Bad request"})      
        
            
        const user = await isAuth(req);

        if(user == null || !user) return res.status(401).json({success:false,msg:"Please login first"});

        
        return res.status(200).json({success:true,user})
        
    } catch (error) {
        console.error('error ',error)
        return res.status(500).json({success:false,msg:error});
    }
}