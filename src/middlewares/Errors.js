
//----------function to handle error-handling
export const ErrorHandler = async(res,statusCode=500,msg="Internal server error",success=false,)=>{
    return res.status(statusCode).json({success,msg});
}

const asyncErrorHanlder = async(fun) => (req,res) => {return Promise.resolve(fun(req,res)).catch((err) => {
    return ErrorHandler(res,500,err.message);
})}

export default asyncErrorHanlder;