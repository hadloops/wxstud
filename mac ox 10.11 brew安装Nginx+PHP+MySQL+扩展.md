## 安装brew

要求：OS X 10.6以上系统，并且安装有XCode命令行工具 
对于10.11的系统需要设置下local的权限为当前用户

```
$ sudo chown -R $(whoami):admin /usr/local1
```

brew安装程序的过程中需要用到苹果的xcode中的 编译器，你可以到苹果的官网中免费下载安装（需要注册免费的开发者，然后才能下载），安装后到属性（Xcode – Perference–Downloads–Components–Command Line Tools）点击下载就可以了，这里使用命令安装

```
xcode-select --install1
```

进入到 /usr/local 然后执行代码安装brew

```
$ cd /usr/local
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"12
```

上面的安装只是将Homebrew解压到本地，还需要配置环境变量才能使用brew命令

```
$ touch ~/.bash_profile
$ open ~/.bash_profile
$ export PATH=/usr/local/bin:$PATH
$ source ~/.bash_profile1234
```

检查下brew的安装情况 我的是没问题的 然后执行update 更新软件

```
$ brew doctor
$ brew update12
```

## brew常用命令

```
brew –help 查看brew的帮助
brew install git 安装软件
brew uninstall git 卸载软件
brew search git 搜索软件
brew list 显示已经安装软件列表
brew update 更新软件，把所有的Formula目录更新，并且会对本机已经安装并有更新的软件用*标明。
brew upgrade git 更新某具体软件
brew [info | home] [FORMULA...] 查看软件信息
删除程序，和upgrade一样，单个软件删除和所有程序老版删除。
brew cleanup git 
brew cleanup
brew outdated 查看那些已安装的程序需要更新

brew home  *—用浏览器打开
brew deps * — 显示包依赖
brew server *  —启动web服务器，可以通过浏览器访问http://localhost:4567/ 来同网页来管理包
brew -h brew   —帮助
123456789101112131415161718
```

## 安装Nginx

```
$ brew search nginx
$ brew install nginx12
```

安装成功后的一些配置信息

```
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To have launchd start nginx at login:
  mkdir -p ~/Library/LaunchAgents
  ln -sfv /usr/local/opt/nginx/*.plist ~/Library/LaunchAgents
Then to load nginx now:
  launchctl load ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist
Or, if you don't want/need launchctl, you can just run:
  nginx1234567891011121314
```

根据提示设置开机启动

```
$ mkdir -p ~/Library/LaunchAgents
$ ln -sfv /usr/local/opt/nginx/*.plist ~/Library/LaunchAgents12
```

现在就启动nginx的方式有两种

```
Then to load nginx now:
  launchctl load ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist
Or, if you don't want/need launchctl, you can just run:
  nginx1234
```

## 安装php

查找php

```
$ brew search php561
```

查看可以使用的选项

```
$ brew options homebrew/php/php56
--with-cgi
    Enable building of the CGI executable (implies --without-fpm)
--with-debug
    Compile with debugging symbols
--with-enchant
    Build with enchant support
--with-gmp
    Build with gmp support
--with-homebrew-apxs
    Build against apxs in Homebrew prefix
--with-homebrew-curl
    Include Curl support via Homebrew
--with-homebrew-libressl
    Include LibreSSL instead of OpenSSL via Homebrew
--with-homebrew-libxml2
    Include Libxml2 support via Homebrew
--with-homebrew-libxslt
    Include LibXSLT support via Homebrew
--with-imap
    Include IMAP extension
--with-libmysql
    Include (old-style) libmysql support instead of mysqlnd
--with-mssql
    Include MSSQL-DB support
--with-pdo-oci
    Include Oracle databases (requries ORACLE_HOME be set)
--with-pear
    Build with PEAR
--with-phpdbg
    Enable building of the phpdbg SAPI executable (PHP 5.4 and above)
--with-postgresql
    Build with postgresql support
--with-thread-safety
    Build with thread safety
--without-apache
    Disable building of shared Apache 2.0 Handler module
--without-bz2
    Build without bz2 support
--without-fpm
    Disable building of the fpm SAPI executable
--without-ldap
    Build without LDAP support
--without-legacy-mysql
    Do not include the deprecated mysql_ functions
--without-mysql
    Remove MySQL/MariaDB support
--without-pcntl
    Build without Process Control support
--HEAD
    Install HEAD version123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051
```

安装

```
brew install homebrew/php/php56 --without-snmp --without-apache --without-debug --with-fpm --without-intl --with-homebrew-libxslt --with-homebrew-openssl --with-imap --with-mysql --with-tidy1
```

路径

```
/usr/local/php/sbin/php-fpm
/usr/local/php/etc/php-fpm.conf
/usr/local/php/etc/php.ini123
```

添加环境变量

```
PATH="/usr/local/sbin:$PATH"1
```

设置开机启动

```
mkdir -p ~/Library/LaunchAgents
cp /usr/local/opt/php56/homebrew.mxcl.php56.plist ~/Library/LaunchAgents/
launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.php56.plist123
```

nginx 添加对php的支持

```
location / {
            root   html;
            //index  index.html index.htm; //改为⬇️
            index  index.php index.html index.htm; 
        }

      #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}
         去掉注释   
         fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name; 改成
         fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;12345678910111213141516
```

## php扩展

使用brew search php56-命令，可以查看还有哪些扩展可以安装，然后执行brew install php55-XXX就可以了。 
安装memcache

```
brew search php55-
brew install homebrew/php/php55-memcache
brew tap josegonzalez/homebrew-php
brew untap homebrew/php
install josegonzalez/php/php56-memcached12345
```

```
To have launchd start memcached at login:
  ln -sfv /usr/local/opt/memcached/*.plist ~/Library/LaunchAgents
Then to load memcached now:
  launchctl load ~/Library/LaunchAgents/homebrew.mxcl.memcached.plist
Or, if you don't want/need launchctl, you can just run:
  /usr/local/opt/memcached/bin/memcached123456
```

重启php 和nginx

## 安装mysql

```
brew install mysql1
```

安装完会提示运行mysql_secure_installation 
请参考
