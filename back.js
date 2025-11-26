const { captureRejectionSymbol } = require('events');
const { Sequelize, DataTypes } = require('sequelize');

//Crea la conexion, si existe la BDD la pilla, si no la crea y la pilla
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

//Funcion para probar la conexion a la BDD
/*async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();*/

//Crear un modelo User con sus atributos y añadirlo a sequelize
const User = sequelize.define(
  'Users',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
  }
);

console.log(User === sequelize.models.Users);

//sincroniza la BDD con sequelize añadiendo los nuevos modelos, modificando la BDD...
async function syncModels() {
  await sequelize.sync({alter:true});
}

syncModels();

