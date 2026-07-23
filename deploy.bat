@echo off
setlocal

echo.
echo [1/3] Purani build delete ho rahi hai...
if exist "%~dp0dist" rd /s /q "%~dp0dist"

echo [2/3] Naya build ban raha hai...
cd /d "%~dp0"
call npm run build
if errorlevel 1 (
    echo.
    echo BUILD FAIL HO GAYI! Deploy rok diya.
    pause
    exit /b 1
)

echo.
echo [3/3a] Code files copy ho rahi hain (pictures aur .htaccess skip)...
robocopy "C:\Users\Administrator\Desktop\TechGenics\Axis-Sports-lab\dist" "\\axissportslab.com@SSL@2078\DavWWWRoot" /E /XO /XD pictures /XF .htaccess /NP /R:3 /W:2

echo.
echo [3/3b] Sirf nayi pictures upload ho rahi hain (purani skip)...
robocopy "C:\Users\Administrator\Desktop\TechGenics\Axis-Sports-lab\public\pictures" "\\axissportslab.com@SSL@2078\DavWWWRoot\pictures" /E /XO /NP /R:3 /W:2

echo.
echo ============================================================
echo  Deploy complete! axissportslab.com check karo.
echo ============================================================
pause
