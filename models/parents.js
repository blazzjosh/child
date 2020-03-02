import Sequelize from 'sequelize';

const connection = new Sequelize('regi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})


const parent = connection.define('parents', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING,
});

connection.sync().then(function () {

})

export default parent;