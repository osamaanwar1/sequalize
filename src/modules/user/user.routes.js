import {Router} from 'express';
import {find_user_by_email_cotr, find_user_by_pk_cont, signupcotroller, upsertcontroler} from "./user.controller.js";
import asyncHandler from '../../common/utils/asyncHandler.js'

export let userRoutes = Router();
userRoutes.post('/signup',asyncHandler(signupcotroller) )
userRoutes.put('/:id',asyncHandler(upsertcontroler) )
userRoutes.get('/by-email',asyncHandler(find_user_by_email_cotr) )
userRoutes.get('/:id',asyncHandler(find_user_by_pk_cont))


