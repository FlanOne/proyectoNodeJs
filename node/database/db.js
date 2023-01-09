import { Sequelize } from 'sequelize'

const db = new Sequelize('database_app', 'root', 'H1errov1ejo@', {
    host: 'localhost',
    dialect: 'mysql'
})


export default db 