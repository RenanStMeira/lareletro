const { DataTypes } = require("sequelize");
const db = require("../database");

const Clientes = db.define(
  "Clientes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
    },
    contato: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "clientes",
    timestamps: false,
  }
);

module.exports = Clientes;
