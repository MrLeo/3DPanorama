@echo off 
title ����Grunt 
cls
echo.
echo �X-------------------------------------------�[ 
echo                   ����Grunt
echo �^-------------------------------------------�a 
echo.
:: BAT����Ŀ¼
set curdir=%~dp0
cd /d %curdir%
echo.
echo *��ȷ���Ѿ���װnodejs �� grunt��ز��
echo 	1. npm install -g grunt-cli ��grunt��汾��ֻ��Ҫ��װһ�Σ�
echo 	2. npm install grunt --save-dev
echo 	3. npm install grunt-cmd-transport --save-dev
echo 	4. npm install grunt-cmd-concat --save-dev
echo 	5. npm install grunt-contrib-uglify --save-dev
echo 	6. npm install grunt-contrib-clean --save-dev
echo.
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo.
echo �X-------------------------------------------�[ 
echo                  ��ʼ������Ŀ 
echo �^-------------------------------------------�a 
echo.
echo path���Բ����ã���--forceǿ��ִ��
grunt build --force
pause...