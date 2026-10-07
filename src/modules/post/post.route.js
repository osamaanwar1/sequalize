import {Router} from 'express';
import asyncHandler from "../../common/utils/asyncHandler.js";
import {createPosts, deletePostCon, postsAndAllCount, retriveAllPosts} from "./post.controller.js";
import {deletePost} from "./post.service.js";
export let postRouter = Router();
postRouter.post('/', asyncHandler(createPosts));
postRouter.delete('/:id', asyncHandler(deletePostCon));
postRouter.get('/details', asyncHandler(retriveAllPosts));
postRouter.get('/comment-count', asyncHandler(postsAndAllCount));