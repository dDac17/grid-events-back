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
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    about: {
        type: DataTypes.STRING,
        allowNull: true
    },
      maxTickets: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
      tickets_sold: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
      date: {
        type: DataTypes.DATE,
        allowNull: false
    },
      location: {
        type: DataTypes.STRING,
        allowNull: true
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