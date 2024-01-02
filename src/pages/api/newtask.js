import ErrorHandler from "@/middlewares/Errors";
import { taskModel } from "@/models/taskModel";
import ConnectDB from "@/utils/ConnectDB";
import { isAuth } from "@/utils/feature";

export default async function handler (req,res){
    try {
        // console.log('req.body ',req.body);

        if(req.method !== 'POST')
            return res.status(404).json({success:false,msg:"Bad request"})
          

        const {title,description} = req.body;

        if(!title || !description) return res.status(409).json({success:false,msg:"All fields are required"})
       
        await ConnectDB();

        const user = await isAuth(req);

        if (user == null) return res.status(401).json({ success: false, msg: "Please login first" });

        await taskModel.create({title,description,user_id:user._id})

        return res.status(200).json({success:true,msg:"New task added successfully"})
        
    } catch (error) {
        console.error('error ',error)
        return res.status(500).json({success:false,msg:error});
    }
}