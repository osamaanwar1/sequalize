import {User} from './user.model.js'
import createError from "../../common/utils/createError.js";

export async function signup(value) {
    let user =await User.findOne({
        where: {email: value.email},
    })
    if (user) {
        throw createError('User already exist', 404);
    }
    let newUser  = User.build(value);

    await newUser.save();
    return newUser;
}
export async function upsertUser(id, data) {
    const userId = Number(id);

    if (!Number.isInteger(userId) || userId < 1) {
        throw createError('Invalid user id', 400);
    }
    const exists = await User.findByPk(userId)
    const[user]=await User.upsert({
        ...data,id:userId,
    },{
        validate:false
    })
return {user ,created:(!exists)};

}
export async function find_user_by_email (email) {
    const user = await User.findOne({
        where: {email:email}
    })
    if (!user) {
        throw createError('User not found', 404);
    }
    return user;
}
export async function find_user_by_pk (id) {
    const u_id=Number(id);
    const user = await User.findByPk(u_id,
        {attribute:{exclude:['role']}})
    if (!user) {
        throw createError('User not found', 404);
    }
    return user;

}
// RetrieveauserbytheirPK,excluding the“role”fieldfromtheresponse. (0.5 Grade)
// o URL:GET/user/:id



