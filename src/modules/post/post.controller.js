import {Post} from "./post.model.js";
import {deletePost, newPost, postsAndCount, retrivePosts} from "./post.service.js";

export async function createPosts(req, res){
    const post = await newPost(req.body);
    res.status(201).json(
        {message:'posts created successfully',post});
}
export async function deletePostCon(req, res){
    await deletePost(req.params.id);
    res.status(200).json({message:'post deleted successfully'});
}
export async function retriveAllPosts(req, res){
    const posts = await retrivePosts();
    res.status(200).json({message:'posts retrieved successfully',
    posts});
}
export async function postsAndAllCount(req, res){
    const posts = await postsAndCount();
    res.status(200).json({message:'posts retrieved successfully',
    posts});
}