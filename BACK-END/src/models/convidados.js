'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Convidados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Convidados.init({
    nome: DataTypes.STRING,
    acompanhanteAdulto: DataTypes.NUMBER,
    acompanhanteCrianca: DataTypes.NUMBER,
    codconvite: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Convidados',
    tableName: 'convidados'
  });
  return Convidados;
};