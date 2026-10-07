import {userRoutes} from "./user/user.routes.js";
import {postRouter} from "./post/post.route.js";
import {Router} from "express";
import {commentRouter} from "./comment/comment.route.js";
export let modulesRouter=Router();
modulesRouter.use('/users',userRoutes);
modulesRouter.use('/posts',postRouter);
modulesRouter.use('/comments',commentRouter);