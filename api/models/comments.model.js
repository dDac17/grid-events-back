const { DataTypes } = require("sequelize")
const { connection } = require("../../database")

const Comment = connection.define(
  'comments',
  {
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stars: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true
      }
  },
  {
    timestamps: true
  }
)

module.exports = Comment