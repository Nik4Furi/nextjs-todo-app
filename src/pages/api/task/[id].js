import ErrorHandler from "@/middlewares/Errors";
import { taskModel } from "@/models/taskModel";
import ConnectDB from "@/utils/ConnectDB";
import { isAuth } from "@/utils/feature";

export default async function handler(req, res) {
    try {
        const taskId = req.query.id;

        await ConnectDB();

        const user = await isAuth(req);

        if (user == null) return res.status(401).json({ success: false, msg: "Please login first" });

        if (req.method === 'PUT') {

            const task = await taskModel.findById(taskId);

            if (!task) return res.status(404).json({ success: false, msg: "Task is not found" })

            task.isCompleted = !task.isCompleted;

            await task.save();

            return res.status(201).json({ success: true, msg: "Task updated successfully" });

        }
        else if (req.method === 'DELETE') {


            const task = await taskModel.deleteOne({ user_id: user._id }, { _id: taskId });

            if (!task) return res.status(404).json({ success: false, msg: "Task is not found" })

            return res.status(201).json({ success: true, msg: "Task deleted successfully" });

        }

        else
            return res.status(404).json({ success: false, msg: "Bad request" })


    } catch (error) {
        console.error('error ', error)
        return res.status(500).json({ success: false, msg: error });
    }
}