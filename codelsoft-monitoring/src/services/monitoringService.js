import catchAsync from "../utils/catchAsync.js";

const GetAllActions = catchAsync(async (call, callback) => {
    return callback(null, { status: "ok" });
});

const GetAllErrors = catchAsync(async (call, callback) => {
    return callback(null, { status: "ok" });
});

export default {
    GetAllActions,
    GetAllErrors
};
