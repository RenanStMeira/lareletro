const { DataTypes } = require("sequelize");
const db = require("../database");

const Servicos = db.define("Servicos", {
  id: {type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
},
  servico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

module.exports = Servicos;
