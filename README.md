fis-emao
=========

基于FIS的纯前端解决方案

###工程化前端开发
    - 自动刷新浏览器，本地文件修改浏览器自动刷新
    - 自动sprite：自动拼接多张小图
    - 自动base64：自动将图片转成base64源码
    - 直接编写less文件，无需额外编译工具支持。
    - 自动将相对路径变为绝对路径，减少php套模版的工作量。
    - 支持内容嵌入，请参考http://fis.baidu.com/docs/more/fis-standard-inline.html

###使用方法：
    - 安装nodejs (http://nodejs.org/)

    - 安装fis-emao
            npm install -g fis-emao
            emao -v

    - 开启server
            emao server start --type node

    - 检出demo模块
            svn checkout http://192.168.0.36:81/svn/static/branches/dev/dealer/fis/user

    - 进入user下的dev目录

    - 执行发布
            emao release -wL



###目录规范
    - user为项目模块名，每个模块都有dev和dest两个目录，
    - 开发人员只需要维护dev目录即可
    - 开发完成之后执行build.bat会自动生成dest目录

    /user/
        dest/
        dev/
            imgs/...
            js/...
            css/...
            template/...
            fis-conf.js
            build.bat


###dev结构说明
    - imgs/ -- 图片文件夹
    - js/ -- js文件夹
    - css/ -- css文件夹
    - template/ -- html文件夹
    - fis-conf.js -- fis配置文件
    - build.bat -- 开发完成后执行此脚本，并提交svn,并将user/dest/template/下的文件交给php同学

------------





