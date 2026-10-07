import {sequelize} from "../../database/connection.js";
import { DataTypes } from 'sequelize';

export const Post= sequelize.define("post", {
id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
title:{
    type:DataTypes.STRING,
}
,
    content:{
    type:DataTypes.TEXT,
    },
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE,
})
//id(PrimaryKey,AutoIncrement)
// title (VARCHAR)
// content(TEXT)
// userId(ForeignKeytoUsers)
// createdAt (Date)
// updatedAt(Date