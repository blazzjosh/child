import Sequelize from 'sequelize';

const connection = new Sequelize('regi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})


const attendance = connection.define('attendance', {
  parentid: Sequelize.INTEGER,
  childId: Sequelize.INTEGER
});

connection.sync().then(function () {

})

export default attendance;