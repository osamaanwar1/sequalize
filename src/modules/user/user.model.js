import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/connection.js';
function checkNameLength(value){
    if(!value|| value.length < 3){
        throw new Error(`U name is too short`);
    }}

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            checkNameLength

        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
             checkPasswordLength(value){
if(!value|| value.length < 7){
        throw new Error(`password is too short`);
    }}
        }
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user',
        allowNull: false,
    },

},{
    timestamps: true,
    paranoid: true,
    hooks:{
        beforeCreate: checkNameLength
    }
})
//
// │
//     ├── common/
//     │   ├── middlewares/
//     │   │   ├── error.middleware.js
//     │   │   └── notFound.middleware.js
//     │   └── utils/
//     │       ├── asyncHandler.js
//     │       └── createError.js
//     │
//     └── modules/
//         ├── routes.js
//         ├── user/
//         │   ├── user.model.js
//         │   ├── user.routes.js
//         │   ├── user.controller.js
//         │   └── user.service.js

//2. Addacustomvalidationmethod“checkPasswordLength”thatensurethepasswordlengthgreaterthan6
// characters. (0.5 Grade)
// 3. addacustomvalidationmethod“checkNameLength”toa“beforeCreate”hookthatensurethenameoftheuser
// is greater than2characters. (0.5Grade)