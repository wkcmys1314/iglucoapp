#!/bin/sh
#恢复mysql数据
mysql -h 120.92.63.171 -P 3306 -uroot -proot << EOF
create database admin;
use admin;
source admin.sql;
create database AndonCloud;
use AndonCloud;
source andoncloud.sql;
create database oauth2;
use oauth2;
source oauth2.sql;
use mysql;
source mysql.sql;
exit
EOF
