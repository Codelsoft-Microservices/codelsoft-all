import catchAsync from "../utils/catchAsync.js";


const RouteCheck = catchAsync(async (call, callback) => {
    //this returns a simple message to check if the service is running
    return callback(null);
});

const CreatePlaylist = catchAsync(async (call, callback) => {
    return callback(null);
});

const AddVideoToPlaylist = catchAsync(async (call, callback) => {
    return callback(null);
});

const RemoveVideoFromPlaylist = catchAsync(async (call, callback) => {
    return callback(null);
});

const GetPlaylists = catchAsync(async (call, callback) => {
    return callback(null);
});

const GetPlaylistVideos = catchAsync(async (call, callback) => {
    return callback(null);
});

const DeletePlaylist = catchAsync(async (call, callback) => {
    return callback(null);
});



export default {
    RouteCheck,
    CreatePlaylist,
    AddVideoToPlaylist,
    RemoveVideoFromPlaylist,
    GetPlaylists,
    GetPlaylistVideos,
    DeletePlaylist
};