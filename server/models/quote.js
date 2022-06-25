"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  quote.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contents: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
        get() {
          const rawValue = this.getDataValue("contents");
          // turn contents price into an integer
          return rawValue.map((obj) => {
            return { ...obj, price: parseInt(obj.price) };
          });
        },
      },
      memo: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        get() {
          const rawValue = this.getDataValue("memo");
          // split $ into a new array
          return rawValue[0].split("$");
        },
      },
      payment_method: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
        get() {
          const rawValue = this.getDataValue("payment_method");
          // turn contents price into an integer
          return rawValue.map((obj) => {
            return obj.info;
          });
        },
      },
    },
    {
      sequelize,
      tableName: "quotes",
      modelName: "quote",
    }
  );
  return quote;
};
