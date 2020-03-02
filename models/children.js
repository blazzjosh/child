import Sequelize from 'sequelize';

const connection = new Sequelize('regi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})


const child = connection.define('children', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  parentid: Sequelize.INTEGER
});

connection.sync().then(function () {

})

export default child;