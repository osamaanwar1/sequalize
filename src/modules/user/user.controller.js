import {signup, upsertUser, find_user_by_email, find_user_by_pk} from "./user.service.js";
import {User} from "./user.model.js";
export async function signupcotroller(req, res){
    const user = await signup(req.body);
    res.status(200).json({
        message:"Signup successfully",
        user: user
    })
}
export async function upsertcontroler (req, res) {
    const { user, created } = await upsertUser(req.params.id, req.body);
    res.status(created ? 201 : 200).json({ success: true, data: user });
}
export async function find_user_by_email_cotr(req, res) {
    let email=req.query.email
    const user =await find_user_by_email(email)
    res.status(200).json({
        message:"user found successfully",
        user:user
    })
}
export async function find_user_by_pk_cont(req,res){
    const user = await find_user_by_pk(req.params.id);
    res.status(200).json({
        message:"user found successfully",
        user:user
    })
}