import ErrorHandler from "@/middlewares/Errors";
import { taskModel } from "@/models/taskModel";
import ConnectDB from "@/utils/ConnectDB";
import { isAuth } from "@/utils/feature";

export default async function handler (req,res){
    try {
        // console.log('req.body ',req.body);

        if(req.method !== 'GET')
            return res.status(404).json({success:false,msg:"Bad request"})          

        await ConnectDB();

        const user = await isAuth(req);

        if(user == null) return res.status(401).json({success:false,msg:"Please login first"});

        const tasks = await taskModel.find({user_id:user._id});

        return res.status(200).json({success:true,tasks})
        
    } catch (error) {
        console.error('error ',error)
        return res.status(500).json({success:false,msg:error});
    }
}