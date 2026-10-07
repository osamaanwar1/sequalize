import {Comment} from './comment.model.js';
import {Op, where} from "sequelize";
import createError from "../../common/utils/createError.js";
import {Post} from "../post/post.model.js";
import {User} from "../user/user.model.js";
export async function createbulkcomment(data) {
    const comments = await Comment.bulkCreate(data)
    return comments;
}

export async function updatecomment(id, data) {
    const { userId, content } = data;
    const comment = await Comment.findByPk(
     id
    );
    if (!comment) {
        throw createError('Comment not found',404);
    }
    if (comment.userId !== Number(userId)) {
        throw createError('Unauthorized to update this comment',403);
    }
    await comment.update({ content: content });

    return comment;
}
export async function findOrCreateComment(data) {
    const { content, userId, postId } = data;


    const [comment, created] = await Comment.findOrCreate({
        where: { content:content, postId:postId }, // البحث بعنووان أو محتوى الكومنت والبوست
        defaults: { content, userId, postId } // البيانات التي ستُضاف لو مش موجود
    });

    return { comment, created };
}
export async function findCommentByword(word) {
    const result = await Comment.findAndCountAll({
        where: {
            content: {
                [Op.like]: `%${word}%`
            }
        }


}
)
    if(result.count===0){
 throw createError('Comment not found',404);
    }
return result;}
export async function findlet3comments(postId) {
    const comments = await Comment.findAll(
        {
            where: {
                postId:postId
            }
            ,order:[['createdAt','DESC']],
            limit:3
        }
    )
    if(comments.length===0){
        throw createError('not comment exists on this post ',404);
    }
    return comments;
}

export async function getcomment(id) {
    const comment = await Comment.findByPk(id,
        {attributes: { exclude: ['postId', 'userId'] },

        include:[{

        model:Post,
            attributes:['id','title','content']
        },{
            model:User,
            attributes:['id','name','email']
        }
        ]
        }

        );
    if(!comment){
        throw createError('Comment not found',404);
    }
    return comment;

}