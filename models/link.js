"use strict"

module.exports = function(sequelize, DataTypes) {
  var Link = sequelize.define("Link", {
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    href: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    classMethods: {
      associate: function(models) {
        Link.belongsTo(models.Place, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Link
}
