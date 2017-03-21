-- MySQL dump 10.16  Distrib 10.1.13-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: AndonCloud
-- ------------------------------------------------------
-- Server version	10.1.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `GdhInfo`
--

DROP TABLE IF EXISTS `GdhInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GdhInfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键Id',
  `UserID` int(11) NOT NULL COMMENT '用户ID',
  `UserName` varchar(200) NOT NULL COMMENT '用户email或手机号',
  `mDeviceId` varchar(200) NOT NULL COMMENT '血糖仪Id',
  `mDeviceType` varchar(200) NOT NULL COMMENT '血糖仪设备类型',
  `DeviceId` varchar(200) NOT NULL COMMENT '手机或平板设备ID',
  `DeviceType` varchar(200) NOT NULL COMMENT '手机系统的类型 以及系统版本号',
  `AppVersion` varchar(200) NOT NULL COMMENT 'App版本号',
  `CountryCode` varchar(30) NOT NULL COMMENT '国家编码',
  `MeasurementTime` datetime NOT NULL COMMENT '测量时间（UTC）',
  `CreateTime` datetime NOT NULL COMMENT '上传数据库时间（UTC）',
  `TimeZone` int(4) NOT NULL COMMENT '时区',
  `stripNumber` int(11) NOT NULL COMMENT '使用试条数量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=934 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GdhInfo`
--

LOCK TABLES `GdhInfo` WRITE;
/*!40000 ALTER TABLE `GdhInfo` DISABLE KEYS */;
INSERT INTO `GdhInfo` VALUES (897,1748966,'zz','060302000004','BG5L','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-05 09:31:19','2016-12-05 09:31:12',8,1),(898,1748966,'zz','060302000023','BG5L','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-05 10:31:06','2016-12-05 10:30:57',8,1),(899,1748966,'zz','060302000023','BG5L','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-05 10:36:43','2016-12-05 10:36:32',8,1),(900,1738363,'Dinesh','2802f95508','BG1','76F75B6D-6FD5-4253-881D-C02F5BA8E974','iPhone 10.1.1','BG4.1.0','LK','2016-12-05 13:00:52','2016-12-05 15:30:54',5,1),(901,1738363,'Dinesh','2802f95508','BG1','76F75B6D-6FD5-4253-881D-C02F5BA8E974','iPhone 10.1.1','BG4.1.0','LK','2016-12-05 13:24:15','2016-12-05 15:54:16',5,1),(902,1738363,'Dinesh','2802f95508','BG1','76F75B6D-6FD5-4253-881D-C02F5BA8E974','iPhone 10.1.1','BG4.1.0','LK','2016-12-05 13:25:06','2016-12-05 15:55:07',5,1),(903,1738363,'Dinesh','2802f95508','BG1','76F75B6D-6FD5-4253-881D-C02F5BA8E974','iPhone 10.1.1','BG4.1.0','LK','2016-12-05 13:26:29','2016-12-05 15:56:30',5,1),(904,1541167,'test1133','060302000004','BG5L','4DAE56CE-4E85-4334-B207-96303B993B5D','iPod touch 8.1.2','BG4.1.0','CN','2016-12-06 14:52:29','2016-12-06 14:52:30',8,1),(905,1541167,'test1133','060302000004','BG5L','4DAE56CE-4E85-4334-B207-96303B993B5D','iPod touch 8.1.2','BG4.1.0','CN','2016-12-06 14:58:19','2016-12-06 14:58:23',8,1),(906,1748966,'zz','3481F4061851','BG5','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 09:49:30','2016-12-07 09:49:16',8,1),(907,1748966,'zz','3481F4061851','BG5','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 09:49:59','2016-12-07 09:49:43',8,1),(908,1748966,'zz','3481F4061851','BG5','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 09:51:09','2016-12-07 09:50:54',8,1),(909,1748966,'zz','3481F4061851','BG5','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 09:53:39','2016-12-07 09:53:28',8,1),(910,1748966,'zz','3481F4061851','BG5','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 10:54:02','2016-12-07 10:53:47',8,1),(911,1748966,'zz','3481F4061851','BG5','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 10:54:31','2016-12-07 10:54:15',8,1),(912,1748966,'zz','3481F4061851','BG5','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 10:55:17','2016-12-07 10:55:02',8,1),(913,1748966,'zz','3481F4061851','BG5','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 10:55:20','2016-12-07 10:55:04',8,1),(914,1748966,'zz','3481F4061851','BG5','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 10:56:24','2016-12-07 10:56:09',8,1),(915,1776882,'hh','010203000008','BG5L','4DAE56CE-4E85-4334-B207-96303B993B5D','iPod touch 8.1.2','BG4.1.0','CN','2016-12-07 13:59:56','2016-12-07 14:02:05',8,1),(916,1776882,'hh','75882c55de','BG1','4DAE56CE-4E85-4334-B207-96303B993B5D','iPod touch 8.1.2','BG4.1.0','CN','2016-12-07 14:18:54','2016-12-07 14:19:07',8,1),(917,1748966,'zz','060302000024','BG5L','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 14:23:39','2016-12-07 14:23:23',8,1),(918,1748966,'zz','3481F4061851','BG5','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 14:25:25','2016-12-07 14:25:14',8,1),(919,1748966,'zz','3481F4061851','BG5','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 14:25:54','2016-12-07 14:25:38',8,1),(920,1748966,'zz','3481F4061851','BG5','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-07 14:27:13','2016-12-07 14:27:02',8,1),(921,1776882,'hh','75882c55de','BG1','4DAE56CE-4E85-4334-B207-96303B993B5D','iPod touch 8.1.2','BG4.1.0','CN','2016-12-07 15:04:34','2016-12-07 15:04:38',8,1),(922,1776882,'hh','75882c55de','BG1','4DAE56CE-4E85-4334-B207-96303B993B5D','iPod touch 8.1.2','BG4.1.0','CN','2016-12-07 15:08:26','2016-12-07 15:08:31',8,1),(923,1776882,'hh','0e94ad5515','BG1','4DAE56CE-4E85-4334-B207-96303B993B5D','iPod touch 8.1.2','BG4.1.0','CN','2016-12-07 15:11:38','2016-12-07 15:11:42',8,1),(924,1776882,'hh','0e94ad5515','BG1','4DAE56CE-4E85-4334-B207-96303B993B5D','iPod touch 8.1.2','BG4.1.0','CN','2016-12-07 15:16:52','2016-12-07 15:17:02',8,1),(925,1776882,'hh','0609050B0060','BG5L','4DAE56CE-4E85-4334-B207-96303B993B5D','iPod touch 8.1.2','BG4.1.0','CN','2016-12-07 16:44:43','2016-12-07 16:44:46',8,1),(926,1776882,'hh','0609050B0060','BG5L','4DAE56CE-4E85-4334-B207-96303B993B5D','iPod touch 8.1.2','BG4.1.0','CN','2016-12-07 16:46:34','2016-12-07 16:46:51',8,1),(927,1738363,'Dinesh','2802f95508','BG1','76F75B6D-6FD5-4253-881D-C02F5BA8E974','iPhone 10.1.1','BG4.1.0','LK','2016-12-09 07:44:36','2016-12-09 10:14:38',5,1),(928,1614306,'qgxg','a259f356fc','BG1','DDF3053E-69D2-4743-8172-A1451D3EE62E','iPhone 10.1.1','BG4.1.0','GB','2016-12-09 11:08:03','2016-12-09 11:11:12',8,1),(929,1779914,'bu','a259f356fc','BG1','152E1BDF-0075-499B-8377-B077233FAEA6','iPod touch 8.3','BG4.1.0','GB','2016-12-09 11:35:36','2016-12-09 11:35:38',8,1),(930,1614306,'qgxg','8CDE5242588F','BG5','785DE712-585C-4AEF-92E8-636DB3BD04FB','iPod touch 8.3','BG4.1.0','GB','2016-12-09 13:32:50','2016-12-09 13:32:52',8,1),(931,1776975,'ihealth','060302000024','BG5L','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-09 15:16:43','2016-12-09 15:16:26',8,1),(932,1776975,'ihealth','060302000024','BG5L','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-09 16:33:01','2016-12-09 16:32:47',8,1),(933,1776975,'ihealth','060302000024','BG5L','A6AB5B18-866B-4007-8143-8C675F54BFD1','iPhone 9.3.1','BG4.1.0','CN','2016-12-09 17:12:31','2016-12-09 17:12:14',8,1);
/*!40000 ALTER TABLE `GdhInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GdhStripType`
--

DROP TABLE IF EXISTS `GdhStripType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GdhStripType` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `CountryCode` varchar(30) NOT NULL COMMENT '国家编码',
  `CountryName` varchar(100) NOT NULL COMMENT '国家英文名称',
  `StripType` int(8) DEFAULT '2' COMMENT '试纸类型，GOD或GDH',
  `StateId` int(8) DEFAULT NULL COMMENT '洲',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=502 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GdhStripType`
--

LOCK TABLES `GdhStripType` WRITE;
/*!40000 ALTER TABLE `GdhStripType` DISABLE KEYS */;
INSERT INTO `GdhStripType` VALUES (253,'AE','United Arab Emirates',1,2),(254,'AF','Afghanistan',1,2),(255,'AG','Antigua and Barbuda',0,0),(256,'AI','Anguilla',0,0),(257,'AL','Albania',2,1),(258,'AM','Armenia',2,1),(259,'AN','Antilles',2,0),(260,'AO','Angola',0,5),(261,'AQ','Antarctica',2,6),(262,'AR','Argentina',2,3),(263,'AS','American Samoa',0,4),(264,'AT','Austria',2,1),(265,'AU','Australia',2,4),(266,'AW','Aruba',2,0),(267,'AX','Aland Islands',2,1),(268,'AZ','Azerbaijan',2,1),(269,'BA','Bosnia and Herzegovina',2,1),(270,'BB','Barbados',0,0),(271,'BD','Bangladesh',1,2),(272,'BE','Belgium',1,1),(273,'BF','Burkina Faso',1,5),(274,'BG','Bulgaria',2,1),(275,'BH','Bahrain',2,2),(276,'BI','Burundi',2,5),(277,'BJ','Benin',1,5),(278,'BL','Saint Barthélemy',0,0),(279,'BM','Bermuda',2,0),(280,'BN','Brunei Darussalam',1,2),(281,'BO','Bolivia, Plurinational',2,3),(282,'BQ','Bonaire, Sint Eustatius and Saba',2,3),(283,'BR','Brazil',0,3),(284,'BS','Bahamas',2,0),(285,'BT','Bhutan',2,2),(286,'BV','Bouvet Island',2,6),(287,'BW','Botswana',2,5),(288,'BY','Belarus',2,1),(289,'BZ','Belize',2,0),(290,'CA','Canada',0,0),(291,'CC','Cocos (Keeling) Islands',2,2),(292,'CD','Congo, the Democratic Republic of the',2,5),(293,'CF','Central African Republic',2,5),(294,'CG','Congo',2,5),(295,'CH','Switzerland',2,1),(296,'CK','Cook Islands',2,4),(297,'CL','Chile',1,3),(298,'CM','Cameroon',2,5),(299,'CN','China',2,2),(300,'CO','Colombia',2,3),(301,'CR','Costa Rica',2,0),(302,'CU','Cuba',2,0),(303,'CV','Cape Verde',0,5),(304,'CW','Curacao',2,0),(305,'CX','Christmas Island',2,2),(306,'CY','Cyprus',2,1),(307,'CZ','Czech Republic',2,1),(308,'DE','Germany',2,1),(309,'DJ','Djibouti',2,5),(310,'DK','Denmark',2,1),(311,'DM','Dominica',1,0),(312,'DO','Dominican Republic',0,0),(313,'DZ','Algeria',2,5),(314,'EC','Ecuador',1,3),(315,'EE','Estonia',2,1),(316,'EG','Egypt',2,5),(317,'EH','Western Sahara',2,5),(318,'ER','Eritrea',2,5),(319,'ES','Spain',2,1),(320,'ET','Ethiopia',2,5),(321,'FI','Finland',2,1),(322,'FJ','Fiji',2,4),(323,'FK','Falkland Islands (Malvinas)',2,3),(324,'FM','Micronesia, Federated States of',2,4),(325,'FO','Faroe Islands',2,1),(326,'FR','France',2,1),(327,'GA','Gabon',2,5),(328,'GB','United Kingdom',2,1),(329,'GD','Grenada',2,0),(330,'GE','Georgia',2,1),(331,'GF','French Guiana',2,3),(332,'GG','Guernsey',2,1),(333,'GH','Ghana',2,5),(334,'GI','Gibraltar',2,1),(335,'GL','Greenland',1,0),(336,'GM','Gambia',2,5),(337,'GN','Guinea',2,5),(338,'GP','Guadeloupe',1,0),(339,'GQ','Equatorial Guinea',2,5),(340,'GR','Greece',2,1),(341,'GS','South Georgia and the South Sandwich Islands',0,3),(342,'GT','Guatemala',2,0),(343,'GU','Guam',2,4),(344,'GW','Guinea-Bissau',2,5),(345,'GY','Guyana',2,3),(346,'HK','Hong Kong,China',2,2),(347,'HM','Heard Island and McDonald Islands',2,4),(348,'HN','Honduras',2,0),(349,'HR','Croatia',2,1),(350,'HT','Haiti',2,0),(351,'HU','Hungary',2,1),(352,'ID','Indonesia',2,2),(353,'IE','Ireland',2,1),(354,'IL','Israel',2,2),(355,'IM','Isle of Man',2,1),(356,'IN','India',2,2),(357,'IO','British Indian Ocean Territory',2,2),(358,'IQ','Iraq',2,2),(359,'IR','Iran, Islamic Republic of',2,2),(360,'IS','Iceland',2,1),(361,'IT','Italy',2,1),(362,'JE','Jersey',2,1),(363,'JM','Jamaica',2,0),(364,'JO','Jordan',2,2),(365,'JP','Japan',2,2),(366,'KE','Kenya',2,5),(367,'KG','Kyrgyzstan',2,2),(368,'KH','Cambodia',2,2),(369,'KI','Kiribati',2,4),(370,'KM','Comoros',2,5),(371,'KN','Saint Kitts and Nevis',2,0),(372,'KR','Korea',1,2),(373,'KW','Kuwait',0,2),(374,'KY','Cayman Islands',1,0),(375,'KZ','Kazakhstan',2,2),(376,'LB','Lebanon',2,2),(377,'LC','Saint Lucia',1,0),(378,'LI','Liechtenstein',2,1),(379,'LK','Sri Lanka',1,2),(380,'LR','Liberia',2,5),(381,'LS','Lesotho',2,5),(382,'LT','Lithuania',2,1),(383,'LU','Luxembourg',2,1),(384,'LV','Latvia',2,1),(385,'LY','Libya',2,5),(386,'MA','Morocco',2,5),(387,'MC','Monaco',2,1),(388,'MD','Moldova, Republic of',2,1),(389,'ME','Montenegro',2,1),(390,'MF','Saint Martin (French part)',2,0),(391,'MG','Madagascar',2,5),(392,'MH','Marshall islands',2,4),(393,'MK','Macedonia, the former Yugoslav Republic of',2,1),(394,'ML','Mali',0,5),(395,'MM','Myanmar',2,2),(396,'MN','Mongolia',2,2),(397,'MO','MaCao,China',2,2),(398,'MP','Northern Mariana Islands',2,4),(399,'MQ','Martinique',1,0),(400,'MR','Mauritania',2,5),(401,'MS','Montserrat',1,0),(402,'MT','Malta',2,1),(403,'MU','Mauritius',2,5),(404,'MV','Maldives',2,2),(405,'MW','Malawi',2,5),(406,'MX','Mexico',1,0),(407,'MY','Malaysia',2,2),(408,'MZ','Mozambique',2,5),(409,'NA','Namibia',2,5),(410,'NC','New Caledonia',2,4),(411,'NE','Niger',2,5),(412,'NF','Norfolk Island',2,4),(413,'NG','Nigeria',2,5),(414,'NI','Nicaragua',2,0),(415,'NL','Netherlands',2,1),(416,'NO','Norway',2,1),(417,'NP','Nepal',2,2),(418,'NR','Nauru',2,4),(419,'NU','Niue',2,4),(420,'NZ','New Zealand',2,4),(421,'OM','Oman',2,2),(422,'PA','Panama',2,0),(423,'PE','Peru',0,3),(424,'PF','French Polynesia',2,4),(425,'PG','Papua New Guinea',2,4),(426,'PH','Philippines',2,2),(427,'PK','Pakistan',1,2),(428,'PL','Poland',2,1),(429,'PM','Saint Pierre and Miquelon',2,0),(430,'PN','Pitcairn Islands',2,4),(431,'PR','Puerto Rico',2,0),(432,'PS','Palestine, State of',2,2),(433,'PT','Portugal',2,1),(434,'PW','Palau',2,4),(435,'PY','Paraguay',0,3),(436,'QA','Qatar',2,2),(437,'RE','Réunion',2,5),(438,'RO','Romania',2,1),(439,'RS','Serbia',2,1),(440,'RU','Russian Federation',1,2),(441,'RW','Rwanda',2,5),(442,'SA','Saudi Arabia',2,2),(443,'SB','Solomon Islands',2,4),(444,'SC','Seychelles',2,5),(445,'SD','Sudan',2,5),(446,'SE','Sweden',2,1),(447,'SG','Singapore',2,2),(448,'SH','Saint Helena, Ascension and Tristan da Cunha',1,0),(449,'SI','Slovenia',2,1),(450,'SJ','Svalbard and Jan Mayen',2,1),(451,'SK','Slovakia',2,1),(452,'SL','Sierra Leone',2,5),(453,'SM','San Marino',2,1),(454,'SN','Senegal',2,5),(455,'SO','Somalia',2,5),(456,'SR','Suriname',0,3),(457,'SS','South Sudan',2,5),(458,'ST','Sao Tome and Principe',2,5),(459,'SV','El Salvador',2,0),(460,'SX','Sint Maarten (Dutch part)',1,0),(461,'SY','Syrian Arab Republic',2,2),(462,'SZ','Swaziland',2,5),(463,'TC','Turks and Caicos Islands',2,0),(464,'TD','Chad',2,5),(465,'TF','French Southern Territories',2,5),(466,'TG','Togo',2,5),(467,'TH','Thailand',2,2),(468,'TJ','Tajikistan',2,2),(469,'TK','Tokelau',2,4),(470,'TL','Timor-Leste',2,2),(471,'TM','Turkmenistan',2,2),(472,'TN','Tunisia',2,5),(473,'TO','Tonga',2,4),(474,'TR','Turkey',2,2),(475,'TT','Trinidad and Tobago',2,0),(476,'TV','Tuvalu',2,4),(477,'TW','Tai Wan,China',2,2),(478,'TZ','Tanzania, United Republic of',2,5),(479,'UA','Ukraine',2,1),(480,'UG','Uganda',2,5),(481,'UM','United States Minor Outlying Islands',1,0),(482,'US','United States',0,0),(483,'UY','Uruguay',0,3),(484,'UZ','Uzbekistan',1,2),(485,'VA','Holy See (Vatican City State)',2,1),(486,'VC','Saint Vincent and the Grenadines',1,0),(487,'VE','Venezuela, Bolivarian Republic of',1,3),(488,'VG','Virgin Islands, U.S.',1,0),(489,'VI','United States Virgin Islands',2,0),(490,'VN','Vietnam',2,2),(491,'VU','Vanuatu',2,4),(492,'WF','Wallis and Futuna',2,4),(493,'WS','Samoa',2,4),(494,'YE','Yemen',2,2),(495,'YT','Mayotte',2,5),(496,'ZA','South Africa',2,5),(497,'ZM','Zambia',2,5),(498,'ZW','Zimbabwe',2,5),(499,'AD','Andorra',2,1),(500,'GLOB','Global',2,-1),(501,'UK','British',2,2);
/*!40000 ALTER TABLE `GdhStripType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ih_blood_access_token`
--

DROP TABLE IF EXISTS `ih_blood_access_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ih_blood_access_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `PhoneOS` varchar(100) DEFAULT NULL,
  `AppVersion` varchar(100) DEFAULT NULL,
  `AccessToken` varchar(200) DEFAULT NULL,
  `CreateTime` datetime DEFAULT NULL,
  `UpdateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `AppVersion` (`AppVersion`)
) ENGINE=InnoDB AUTO_INCREMENT=177 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ih_blood_access_token`
--

LOCK TABLES `ih_blood_access_token` WRITE;
/*!40000 ALTER TABLE `ih_blood_access_token` DISABLE KEYS */;
INSERT INTO `ih_blood_access_token` VALUES (19,'IOS','ios1.1','d9ac53f4dbc27ddfcd0e6f6cc9a3907220aa615a','2016-08-10 11:37:20','2017-02-10 16:56:51'),(75,'IOS','4.2','8424cae54cbc36c0d32fdc98c0001fe57e94f014','2016-08-16 10:27:38','2017-02-10 16:56:44'),(84,'IOS','ios2.3.3','48a8cde9bab668e3cef7bb0aa30f52cb932d85b7','2016-08-31 15:04:44','2017-01-13 15:34:10'),(86,'IOS','12123123123','f9222c989bfb0dd5549fc5b733bb3e6e1b12009a','2016-09-01 11:40:30','2016-12-29 09:40:40'),(87,'IOS','11111111','497d164c34c641fa4d11cf7ee5fa08f3a296e576','2016-09-01 11:40:30','2016-12-10 21:01:01'),(88,'IOS','123','06983cc9a6ce9d9f7fa955fbd757c4140a843fc3','2016-09-01 11:41:08','2016-12-27 23:17:34'),(89,'IOS','22','04485b0b0c9521abd4222ffbddec3ce89ce72e93','2016-09-01 11:41:08','2016-12-10 21:01:01'),(90,'Android','ABG4.2.0','117ba17177a67febe02d72276f342c53b3fd723e','2016-09-01 11:41:22','2016-12-27 23:17:35'),(91,'Android','44','2dd43e1d5f7438edabb5d93e225fa43c113b545f','2016-09-01 11:41:23','2016-12-10 21:01:01'),(92,'IOS','eee','fbe3b47561f10abf95fad40239cc657e6f2a5fd5','2016-09-01 11:41:50','2016-12-10 21:01:01'),(94,'Android','qqq','3a7fcfa7a3835a3ddc7702848c26108ba65194f6','2016-09-01 11:48:26','2016-12-10 21:01:01'),(95,'Android','wwwwrrrr','43d9e77a46fab6c32b25e332c61fc33da926f283','2016-09-01 11:48:26','2016-12-10 21:01:01'),(106,'Android','rrrrr','8532a61830ce7f6444e65efa37b77646b49a56dc','2016-09-01 13:52:39','2016-12-10 21:01:01'),(107,'Android','ttttt','9aebcc1dbe139bd150bb9be6a22ecfc17b980801','2016-09-01 13:52:39','2016-12-10 21:01:01'),(110,'Android','qwqw','524d00d41d5decec1b4a9a8f7a15bd6548b2607f','2016-09-01 13:53:24','2016-12-10 21:01:01'),(111,'Android','ddd','dd7f9435166a802b7c9a0622daeea33444f82c80','2016-09-01 13:54:03','2016-12-10 21:01:01'),(113,'Android','dfdfd','5d95cee767ea47a342cafda34513e890c7c0adb7','2016-09-01 13:56:25','2016-12-10 21:01:01'),(114,'Android','dddsss','08b1a44a5639139be72ff27b44943938e5c2d247','2016-09-01 14:04:14','2016-12-10 21:01:01'),(115,'IOS','dddsss12','4dd5e36add7f6c0e862cfce24a174b4851474a5c','2016-09-01 14:04:45','2016-12-10 21:01:01'),(120,'Android','11111','ea726af5db807d3a750c79d9c986910ac6cf3284','2016-09-01 14:18:12','2016-12-10 21:01:01'),(124,'Android','wwww2221','3ae9686431bad4c387d86d11d3e8c398a0326027','2016-09-01 15:02:38','2016-12-10 21:01:01'),(126,'Android','9876543','20f835441aff647acb4ffe16c6d78edb2ca4a3ac','2016-09-01 15:03:24','2016-12-10 21:01:01'),(127,'Android','123456789','2020502fedfe3dd5c158e9b422c01bf1cb74b1a0','2016-09-01 15:05:52','2016-12-10 21:01:01'),(129,'Android','1112s','ca03e6b1d50b68a0ff5ebe5140f99405fa870f16','2016-09-01 15:06:05','2016-12-10 21:01:01'),(130,'Android','asds','dde3ea4c2922fe02be3914c748582ca3acf37634','2016-09-01 15:06:06','2016-12-10 21:01:01'),(132,'Android','qwqqqq13123','f615c9ba6d5e0b24370eb746b63498cc889b31d2','2016-09-01 15:12:53','2016-12-10 21:01:01'),(134,'Android','213212313','686a83f0f0c6b7d44c8195114faab570f9980715','2016-09-01 15:12:54','2016-12-10 21:01:01'),(138,'Android','1234','79cacb20f71d6fd7a3ccb86d08d54878d131fc7d','2016-09-01 15:15:00','2016-12-10 21:01:01'),(139,'Android','wewew','6b062b8b39578592493aef80b8d65030bcd2daa8','2016-09-01 15:15:00','2016-12-10 21:01:01'),(140,'Android','qqqwww','73dfe3d2fba4a4943d41c500ae6ea49701242a1e','2016-09-01 15:22:37','2016-12-10 21:01:01'),(141,'Android','12345','3c1e2a14fa78e1b2f1c6a487e83f9e6484cea9b7','2016-09-01 15:22:37','2016-12-10 21:01:01'),(142,'Android','234234','eb349d7583077a6fd38bebd65b58a56be91bb7d8','2016-09-01 15:22:37','2016-12-10 21:01:01'),(143,'IOS','qqqwww111','da8a38395a27b43d5a98cc5f8b32e4fc218edd32','2016-09-01 15:23:14','2016-12-10 21:01:01'),(145,'IOS','2312','1d85907133ada798971b9d1a9d86d794d0490b2f','2016-09-01 15:23:15','2016-12-10 21:01:01'),(146,'Android','andon12322','3dee8fccb1ef42d453b62d5ccaf12e5d1e6193bb','2016-09-01 15:24:02','2016-12-10 21:01:01'),(147,'IOS','100','3bd29e9e3c814eb8bd8a1c267d677a362676aeb3','2016-12-29 09:22:34','2016-12-29 09:22:34'),(148,'IOS','200','30508ea367911c78b629ae89a78c0f5f9f1d6579','2016-12-29 09:22:35','2016-12-29 09:22:35'),(159,'Android','test1.1','5b9caa91492f1a3654318f7a4b53da41c3918bd4','2016-12-29 09:48:28','2016-12-29 09:48:28'),(160,'Android','zzzz','35474bc028bf3d23fef031d13d8e2ed37ecb52de','2016-12-29 10:18:13','2016-12-29 10:18:13'),(161,'Android','tfete','2608dfac7f22f1ff198932a2c6b5531c0f8ab30a','2017-01-12 14:52:03','2017-01-12 14:59:39'),(162,'Android','41546','d7c621d9d6ec83474607a7e0f43a78a3d70fa9e9','2017-01-12 15:06:21','2017-01-12 15:06:21'),(164,'IOS','fwefew','08259c6a75f1d2badb4774c1617b78edda9bd63f','2017-01-13 16:05:25','2017-01-13 16:05:25'),(165,'IOS','11','c77e4897b91e6c91241c31074dc2508ff961b9e0','2017-01-13 18:36:56','2017-01-13 18:36:56'),(168,'Android','wang11','71670e9bebec59ba296d66f929724f885ecb87f3','2017-01-13 18:52:54','2017-01-13 18:52:54'),(169,'Android','wang13','5cb8786038eebb58f5c8d994d3777e7be92d0709','2017-01-13 18:53:18','2017-01-13 18:53:18'),(170,'Android','wang789','deb2f7fa14d990bb704a2476b89d9a9a21143bcd','2017-01-13 18:56:56','2017-01-13 18:56:56'),(171,'Android','111fgdhjksal;fhdbsjankmdshfajkl','25316842474d49684182c07edb5728c9515c6a96','2017-01-13 18:59:54','2017-01-13 18:59:54'),(172,'Android','wang56789','b1fdac3ec170d33ada60a57788e766b5a77f6700','2017-01-13 19:01:23','2017-01-13 19:01:23'),(173,'Android','11121222212','557126a7642a947317afee7cb4bc85877f904925','2017-01-13 19:03:28','2017-01-13 19:03:28'),(174,'Android','kkkkkkk','a31d7a0599e47381eddbaf7cdee34abd77fab6f2','2017-01-13 19:07:23','2017-01-13 19:07:23'),(175,'Android','ccccccccccccc','1fb1c66098aa7401561b276519dff76b2ab7f8e7','2017-01-13 19:09:42','2017-01-13 19:09:42'),(176,'IOS','rwar','54fb5bfd10bd5f8675cb6dbc67a9f4d23b915c43','2017-01-13 19:12:35','2017-01-13 19:12:35');
/*!40000 ALTER TABLE `ih_blood_access_token` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-23 10:27:50
