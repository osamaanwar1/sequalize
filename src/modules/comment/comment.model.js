import {sequelize} from '../../database/connection.js'
import {DataTypes} from "sequelize";
export const Comment = sequelize.define('comment', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content:DataTypes.TEXT

},
{
    timestamps: true
})


//d(PrimaryKey,AutoIncrement)
// content(TEXT)
// postId (ForeignKeytoPosts)
// userId(ForeignKeytoUsers)
// createdAt (Date)
// updatedAt(Date)