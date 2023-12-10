const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    ID: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagenDeLaBandera: {
      type: DataTypes.STRING,
      allowNull: false,
      isUrl: true,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subRegion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    área: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    población: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, { timestamps: false});
};