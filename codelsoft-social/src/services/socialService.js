import { Comment, Like } from "../database/models/socialModel.js";
import { status } from "@grpc/grpc-js";
import catchAsync from "../utils/catchAsync.js";
import { v4 as uuidv4 } from "uuid";


const LikeVideo = catchAsync(async (call, callback) => {
    return callback(null, { status: "ok" });
});

const CommentVideo = catchAsync(async (call, callback) => {
    return callback(null, { status: "ok" });
});

const GetVideoLikesAndCommentsRequest = catchAsync(async (call, callback) => {
    return callback(null, { status: "ok" });
});

export default {
    LikeVideo,
    CommentVideo,
    GetVideoLikesAndCommentsRequest,
};