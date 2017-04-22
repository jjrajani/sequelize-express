"use strict"

module.exports = function(sequelize, DataTypes) {
  var Place = sequelize.define("Place", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desire: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: function(models) {
        Place.hasMany(models.Link)
      }
    }
  });

  return Place;
}
