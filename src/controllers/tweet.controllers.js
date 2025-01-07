import { asyncHandler } from "../utils/asyncHandler.js";
import { Tweet } from "../models/tweets.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"

const createTweet = asyncHandler( async(req, res) =>{
   
    // Get content from req.body

    // check if content is empty

})