'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    name: DataTypes.STRING,
    content: { 
        type: DataTypes.STRING,
        validate: { 
        len: {
          args: [20,200],
          msg:"Comments need to be between 20 and 200 characters."
          }
        },
    },
    postId: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};