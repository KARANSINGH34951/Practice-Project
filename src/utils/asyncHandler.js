
const asyncHandler = (fn) =>async(req,res,next)=> {
  try {
    Promise.resolve(requestHandler(req,res,next) )
  } catch (error) {
    next(error);
  }
}

export default asyncHandler
