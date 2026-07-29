@echo off
setlocal

set SERVER=\\axissportslab.com@SSL@2078\DavWWWRoot
set DIST=C:\Users\Administrator\Desktop\TechGenics\Axis-Sports-lab\dist
set PUBLIC=C:\Users\Administrator\Desktop\TechGenics\Axis-Sports-lab\public

echo.
echo [1/6] Clearing old dist and Vite cache...
if exist "%DIST%" rd /s /q "%DIST%"
if exist "%~dp0node_modules\.vite" rd /s /q "%~dp0node_modules\.vite"

echo.
echo [2/6] Creating new build (please wait)...
cd /d "%~dp0"
call npm run build

if errorlevel 1 (
    echo.
    echo BUILD FAILED! Deploy has been stopped.
    pause
    exit /b 1
)

if not exist "%DIST%\index.html" (
    echo.
    echo ERROR: Build ran but dist/index.html was not created!
    echo Run npm run build manually and check the error.
    pause
    exit /b 1
)

echo.
echo build completed successfully starting upload...

echo.
echo [3/6] JS/CSS assets upload ho rahe hain (website abhi bhi live hai)...
robocopy "%DIST%\assets" "%SERVER%\assets" /E /XO /NP /R:3 /W:2

echo.
echo [4/6] Baaki files upload ho rahi hain (index.html ke ilawa)...
robocopy "%DIST%" "%SERVER%" /E /XO /XF index.html .htaccess /XD assets pictures /NP /R:3 /W:2

echo.
echo [5/6] Pictures upload ho rahi hain (sirf nayi)...
robocopy "%PUBLIC%\pictures" "%SERVER%\pictures" /E /XO /NP /R:3 /W:2

echo.
echo [6/6] index.html final swap ho raha hai...
copy /Y "%DIST%\index.html" "%SERVER%\index.html"
if errorlevel 1 (
    echo ERROR: index.html upload nahi hua! Server connection check karo.
    pause
    exit /b 1
)

echo.
echo ============================================================
echo  Deploy complete! axissportslab.com check karo.
echo ============================================================
pause
