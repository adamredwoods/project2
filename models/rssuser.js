'use strict';
module.exports = (sequelize, DataTypes) => {
  var rssuser = sequelize.define('rssuser', {
    rssId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    userRank: DataTypes.INTEGER
});
   rssuser.associate = function(models) {
      // associations can be defined here
  };
  return rssuser;
};
