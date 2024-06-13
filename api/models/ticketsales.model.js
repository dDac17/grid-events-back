const { DataTypes } = require("sequelize")
const { connection } = require("../../database")

const Ticket = connection.define(
  'ticket_sales',
  {
    purchase_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    ticket_count: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      total_price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      }
  },
  {
    timestamps: false
  }
)

module.exports = Ticket