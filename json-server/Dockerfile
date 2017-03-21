#create the image of igluco
FROM node_bs_6.0.0
MAINTAINER wangkai/wkcmys@126.com
COPY config /usr/src/
CMD pm2 start /usr/src/json-server/server.js --name json-server && pm2 logs




