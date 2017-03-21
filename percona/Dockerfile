#create the image of igluco
FROM wangkai/percona_bs_5.6.35
MAINTAINER wangkai/wkcmys@126.com
COPY config /usr/src/
RUN apt-get install -y vim \
    && echo "拷贝my.cnf:" \
    && cp -rf /usr/src/my.cnf /etc/mysql/my.cnf \
    && echo "启动mysql:" \
    && service mysql start \
    && echo "H恢复数据:" \
    && cd /usr/src/ ./restore.sh \
    && ./config.sh
CMD service mysql restart && tail -f /var/log/mysql/error.log



