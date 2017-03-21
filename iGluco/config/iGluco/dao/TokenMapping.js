
var TokenDao = {
	createAppVersion : "insert into ih_blood_access_token (PhoneOS, AppVersion, AccessToken, CreateTime, UpdateTime) values (?,?,?,?,?);",
	queryByAppVersion : "select AccessToken from ih_blood_access_token where PhoneOS=? and AppVersion=? limit 1;",
	queryAll : "select * from ih_blood_access_token;",
	updateTokenById: "update ih_blood_access_token set AccessToken=?, UpdateTime=? where id=?;",
	queryByAccessToken : "select AccessToken from ih_blood_access_token where AccessToken=? limit 1;",
	deleteByAppVersion : "delete from ih_blood_access_token where AppVersion=? ;",
	updateByAppVersion : "update ih_blood_access_token set AccessToken=?, UpdateTime=? where AppVersion=?;",
};

module.exports = TokenDao;