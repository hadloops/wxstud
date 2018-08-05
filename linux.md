#### 端口开启

```txt
 1. 开放端口命令： /sbin/iptables -I INPUT -p tcp --dport 8080 -j ACCEPT

 2.保存：/etc/rc.d/init.d/iptables save

 3.重启服务：/etc/init.d/iptables restart

 4.查看端口是否开放：/sbin/iptables -L -n
```

#### 添加用户修改密码

```shell
useradd user1  #创建用户
passwd user1   #修改密码
```

#### 计划任务

```shell
crond 是linux用来定期执行程序的命令。当安装完成操作系统之后，默认便会启动此任务调度命令。crond命令每分锺会定期检查是否有要执行的工作，如果有要执行的工作便会自动执行该工作。可以用以下的方法启动、关闭这个服务:

/sbin/service crond start #启动服务

/sbin/service crond stop  #关闭服务

/sbin/service crond restart #重启服务

/sbin/service crond reload #重新载入配置

 分     小时      日       月       星期      命令

0-59   0-23   1-31      1-12      0-6     command     (取值范围,0表示周日一般一行对应一个任务)

[root@vathe-pc tmp]#cat /etc/crontab    
SHELL=/bin/bash 　　　　　　　　　　　　
PATH=/sbin:/bin:/usr/sbin:/usr/bin   　　　　# 环境变量路径
MAILTO=root 　　　　　　　　　　　　　　　　　　 # 周期任务执行之后，邮件接受者
HOME=/

# For details see man 4 crontabs

# Example of job definition: 　　　　　　　　　#  计划任务书写格式
# .---------------- minute (0 - 59)   　　
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name command to be executed
```

