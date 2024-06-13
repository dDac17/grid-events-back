const { DataTypes } = require("sequelize")
const { connection } = require("../../database")

const Category = connection.define(
  'categories',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

module.exports = Category