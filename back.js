const { captureRejectionSymbol } = require('events');
const { Sequelize, DataTypes } = require('sequelize');

//CREA LA CONEXION, SI EXISTE LA BDD LA PILLA, SI NO LA CREA Y LA PILLA
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

//FUNCION PARA PROBAR LA CONEXION A LA BDD

/*async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();*/

//CREAR UN MODELO USER CON SUS ATRIBUTOS Y AÑADIRLO A SEQUELIZE

/*
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
*/

//SINCRONIZA LA BDD CON SEQUELIZE AÑADIENDO LOS NUEVOS MODELOS, MODIFICANDO LA BDD...

/*
(async () => {
  await sequelize.sync({alter:true});
})();
*/

//PRUEBA DE INSTANCIAS DE MODELOS

//CREA EL MODELO USER CON SU TABLA USERS
const User = sequelize.define('users', {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green',
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER,
});

//FUNCION QUE SE AUTOLLAMA DE FORMA ASINCRONA Y SE EJECUTA DE FORMA SECUENCIAL
//SINCRONIZA sequelize Y CREA UNA INSTANCIA DE USER Y LA INSERTA EN LA TABLA USERS
//SPAWNER DE JANE'S BASICAMENTE JAJAJAJAJAJA
(async () => {
  await sequelize.sync();
  const jane = await User.create({ name: 'Jane' });
})();

