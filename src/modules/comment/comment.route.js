import {Router} from "express";
import asyncHandler from "../../common/utils/asyncHandler.js";
import {
    createbulkofcomment,
    findbyword,
    findorcreatecontr,
    findrecent3comments, getcommentanddetails,
    updatecommentcontroller
} from "./comment.controller.js";
export let
commentRouter=Router();
commentRouter.post('/findorcreate', asyncHandler(findorcreatecontr));
commentRouter.post('/', asyncHandler(createbulkofcomment));
commentRouter.patch('/:id', asyncHandler(updatecommentcontroller));
commentRouter.get('/search', asyncHandler(findbyword));
commentRouter.get('/newest/:postId',asyncHandler(findrecent3comments));
commentRouter.get('/detils/:id', asyncHandler(getcommentanddetails));

