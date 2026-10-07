import {User} from "../modules/user/user.model.js";
import {Post} from "../modules/post/post.model.js";
import {Comment} from "../modules/comment/comment.model.js";
import {Model as posts} from "sequelize";
User.hasMany(Post, {foreignKey: 'userId'})
Post.belongsTo(User, {foreignKey: 'userId'})
Post.hasMany(Comment, {foreignKey: 'postId'})
Comment.belongsTo(Post, {foreignKey: 'postId'})
User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });