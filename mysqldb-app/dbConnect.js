const {Sequelize} = require("sequelize")
// Sequelize is a package that abstracts out the need to write
// SQL queries, relying instead on their models to do it for you
console.log(process.env.DB_NAME)
const sequelize = new Sequelize(
    "mysql://avnadmin:AVNS_Ex7kuL6JIRuI_ADeLcc@mysql-28893212-database1module8.l.aivencloud.com:11535/database1"
);
const connectMysql = async () => {
    try {
        await sequelize.authenticate();
        console.log(`Successful connection to MySQL Database1${process.env.DB_NAME}`);
    } catch (error) {
        console.error('Unable to connect to MySQL database:', error);
        process.exit(1);
} }
connectMysql(); 
module.exports = {
    Sequelize: sequelize
}