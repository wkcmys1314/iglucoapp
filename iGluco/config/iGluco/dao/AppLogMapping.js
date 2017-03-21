// dao/userSqlMapping.js
// CRUD SQL语句
var AppLog = {
    insert:'INSERT INTO app_log(FileName, FilePath, CreateTime, UpdateTime, LevelId, IsActive) VALUES(?,?,?,?,?,?)'
};

module.exports = AppLog;