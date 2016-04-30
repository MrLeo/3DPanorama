:: 加@表示连echo off都不显示，不然会显示出echo off的命令
:: REM和两个冒号(::) 是注释
@echo off 
title 启动JSX转换 
cls
echo.
echo ╔-------------------------------------------╗ 
echo                  启动JSX转换
echo ╚-------------------------------------------╝ 
echo.
:: BAT所在目录
set curdir=%~dp0
cd /d %curdir%
:: BAT文件上级目录
cd..
:: 输出监听信息
echo 》监听目录：%cd%\react-jsx\
echo 》输出目录：%cd%\react\
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
:: 启动监听
jsx --watch react-jsx/ react/

pause...