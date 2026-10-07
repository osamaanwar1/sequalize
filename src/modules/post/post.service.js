import { Post } from './post.model.js';
import { User } from '../user/user.model.js';
import { Comment } from '../comment/comment.model.js';
import createError  from '../../common/utils/createError.js';
import {sequelize} from "../../database/connection.js";

export async function newPost(data) {
    if (!data.userId) {
        throw createError('userId is required', 400);
    }

    const user = await User.findByPk(data.userId);
    if (!user) {
        throw createError('User not found', 404);
    }

    const post = Post.build({
        title: data.title,
        content: data.content,
        userId: data.userId,
    });
    await post.save();

    return post;
}
export async function deletePost(postid) {
    let id = Number(postid);
    let exists = await Post.findOne({
        where:{id:id},
    })
    if (!exists) {
        throw createError('Post not found', 404);
    }
    await Post.destroy({where:{id:id}});
}
export async function retrivePosts(){
    const posts =await Post.findAll(
        {
            attributes: ['id', 'title'],
    include: [
        {
            model: User, attributes: ['id','name'],
        },
        {
            model: Comment, attributes: ['id','content'],
        }
    ]
        }
    )
    if(!posts.length){
        throw createError('No posts found for this post',404);
    }
    return posts;
}
export async function postsAndCount() {
    const posts = await Post.findAll({
        attributes: [
            'id',
            'title',
            // الـ COUNT بيتحط هنا في الـ attributes الرئيسية
            [sequelize.fn('COUNT', sequelize.col('Comments.id')), 'commentscounts']
        ],
        include: [{
            model: Comment,
            attributes: [] // فاضية عشان ما يرجعش بيانات الكومنتات نفسها
        }],
        group: ['Post.id'] // تجميع حسب البوست
    });

    return posts;
}
//4. Retrieveallpostsandcountthenumberofcommentsassociatedwitheachpost. (0.5Grade)