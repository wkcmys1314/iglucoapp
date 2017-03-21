// dao/userSqlMapping.js
// CRUD SQL语句
var insertGdhInfo_sql = "INSERT INTO GdhInfo(UserID, UserName, mDeviceId, mDeviceType, DeviceId, DeviceType, AppVersion, CountryCode, MeasurementTime, CreateTime, TimeZone, stripNumber) ";
	insertGdhInfo_sql += " VALUES(@UserID, @UserName, @mDeviceId, @mDeviceType, @DeviceId, @DeviceType, @AppVersion, @CountryCode, @MeasurementTime, @CreateTime, @TimeZone, @stripNumber);"

var GdhInfoDao = {
    insertGdhInfo: insertGdhInfo_sql,
    queryGdhInfoAll: "select * from GdhInfo;",
	queryByAccessToken: "select AccessToken from ih_blood_access_token where AccessToken=? limit 1;",
};

module.exports = GdhInfoDao;