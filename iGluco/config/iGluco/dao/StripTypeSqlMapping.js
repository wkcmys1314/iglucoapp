// dao/userSqlMapping.js
// CRUD SQL语句
var StripType = {
    /*mysql*/
    // queryByCountryCode: 'select StripType,CountryCode from GdhStripType  where CountryCode=?',
    queryByCountryCode: "select StripType,CountryCode from GdhStripType  where CountryCode = @CountryCode;",
    queryAll: "select * from GdhStripType;",
    updateAll: "UPDATE GdhStripType SET StripType=2;",
    updateByCountryCode: "UPDATE GdhStripType SET StripType=@StripType WHERE CountryCode=@CountryCode;",
	queryByAccessToken: "select AccessToken from ih_blood_access_token where AccessToken=? limit 1;",

};

module.exports = StripType;