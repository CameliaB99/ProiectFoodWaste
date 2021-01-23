import Sequelize from 'sequelize';

const db = new Sequelize({
    dialect: 'mssql',
    database: 'Aplicatie',
    username: 'sa',
    host: 'localhost',
    port: '55892',
    password: '1234',  
    validateBulkLoadParameters: true,
    define: {
    timestamps: false,
    freezeTableName: true
    }  
})

export default db;