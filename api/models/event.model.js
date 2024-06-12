const { DataTypes } = require("sequelize")
const { connection } = require("../../database")

const Events = connection.define(
  'events',
  {
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imgProfile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    about: {
        type: DataTypes.STRING,
        allowNull: false
    },
      maxTickets: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
      tickets_sold: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
      date: {
        type: DataTypes.DATE,
        allowNull: false
    },
      location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
  },
  {
    timestamps: false
  }
)

module.exports = Events