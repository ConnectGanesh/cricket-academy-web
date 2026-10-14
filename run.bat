@echo off
REM Cricket Academy Website - Start Script
REM This script adds Node.js to PATH and runs the development server

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║      🏏 Cricket Academy Website - Development Server 🏏       ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

REM Add Node.js to PATH
set PATH=C:\Program Files\nodejs;%PATH%

REM Verify npm is available
echo Checking npm installation...
npm --version
if errorlevel 1 (
    echo.
    echo ❌ ERROR: npm is not available!
    echo.
    echo Make sure Node.js is installed from: https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo ✅ npm is available!
echo.

REM Change to project directory
cd /d "C:\Users\PYV1QSS\source\repos\New folder\cricket-academy-web"
if errorlevel 1 (
    echo ❌ ERROR: Could not change to project directory!
    pause
    exit /b 1
)

echo Project location: %cd%
echo.

REM Check if node_modules exists
if not exist node_modules (
    echo Installing dependencies (this may take a few minutes)...
    echo.
    npm install
    if errorlevel 1 (
        echo.
        echo ❌ ERROR: npm install failed!
        echo This might be due to network restrictions.
        echo.
        echo ALTERNATIVE: Deploy to Vercel instead (recommended!)
        echo 1. Push code to GitHub
        echo 2. Visit https://vercel.com/new
        echo 3. Import your repository
        echo 4. Click Deploy
        echo.
        pause
        exit /b 1
    )
)

echo.
echo ✅ Starting development server...
echo.
echo 🌐 Server will be available at: http://localhost:3000
echo.
echo Press CTRL+C to stop the server
echo.

REM Run development server
npm run dev
pause
