@echo off 
title 启动Grunt 
cls
echo.
echo ╔-------------------------------------------╗ 
echo                   启动Grunt
echo ╚-------------------------------------------╝ 
echo.
:: BAT所在目录
set curdir=%~dp0
cd /d %curdir%
echo.
echo *请确认已经安装nodejs 及 grunt相关插件
echo 	1. npm install -g grunt-cli （grunt多版本，只需要安装一次）
echo 	2. npm install grunt --save-dev
echo 	3. npm install grunt-cmd-transport --save-dev
echo 	4. npm install grunt-cmd-concat --save-dev
echo 	5. npm install grunt-contrib-uglify --save-dev
echo 	6. npm install grunt-contrib-clean --save-dev
echo.
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo.
echo ╔-------------------------------------------╗ 
echo                  开始构建项目 
echo ╚-------------------------------------------╝ 
echo.
echo path可以不配置，用--force强制执行
grunt build --force
pause...