import {
    createbulkcomment,
    findCommentByword,
    findlet3comments,
    findOrCreateComment, getcomment,
    updatecomment
} from "./comment.service.js";

export async function createbulkofcomment(req, res) {
    const comment = await createbulkcomment(req.body);
    return res.status(200).json({comment,
    message: 'Comment created successfully.'});
}
export async function updatecommentcontroller (req, res) {
    const comment = await updatecomment(req.params.id, req.body);

     res.status(200).json({
        message: 'Comment updated successfully.',
        comment
    });
}
export async function findorcreatecontr (req, res) {
    const {comment,created} = await findOrCreateComment(req.body);
    return res.status(200).json({
        created,
        comment
    })
}
export async function findbyword (req, res) {
    let word=req.query.word
    const comments= await findCommentByword(word)
    return res.status(200).json({
        comments
    })
}
export async function findrecent3comments (req, res) {
    const comments = await findlet3comments(req.params.postId)
    return res.status(200).json({
        comments
    })

}
export async function getcommentanddetails (req, res) {
    const comment=await getcomment(req.params.id)
    return res.status(200).json({
        comment
    })
}