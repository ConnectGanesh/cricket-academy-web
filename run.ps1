# Cricket Academy Website - Development Server Script
# This script sets up the environment and runs the development server

Write-Host ""
Write-Host "╔═══════════════════════════════════════════════════════════════╗"
Write-Host "║      🏏 Cricket Academy Website - Development Server 🏏       ║"
Write-Host "╚═══════════════════════════════════════════════════════════════╝"
Write-Host ""

# Add Node.js to PATH
$env:PATH = "C:\Program Files\nodejs;$env:PATH"

# Verify npm is available
Write-Host "Checking npm installation..."
$npmVersion = & npm --version 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ npm is available! (Version: $npmVersion)"
} else {
    Write-Host "❌ ERROR: npm is not available!"
    Write-Host ""
    Write-Host "Make sure Node.js is installed from: https://nodejs.org"
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Change to project directory
$projectPath = "C:\Users\PYV1QSS\source\repos\New folder\cricket-academy-web"
if (Test-Path $projectPath) {
    Set-Location $projectPath
    Write-Host "Project location: $(Get-Location)"
} else {
    Write-Host "❌ ERROR: Could not find project directory at: $projectPath"
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies (this may take a few minutes)..."
    Write-Host ""
    
    & npm install
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "❌ ERROR: npm install failed!"
        Write-Host "This might be due to network restrictions."
        Write-Host ""
        Write-Host "ALTERNATIVE: Deploy to Vercel instead (recommended!)"
        Write-Host "1. Push code to GitHub"
        Write-Host "2. Visit https://vercel.com/new"
        Write-Host "3. Import your repository"
        Write-Host "4. Click Deploy"
        Write-Host ""
        Read-Host "Press Enter to exit"
        exit 1
    }
}

Write-Host ""
Write-Host "✅ Starting development server..."
Write-Host ""
Write-Host "🌐 Server will be available at: http://localhost:3000"
Write-Host ""
Write-Host "Press CTRL+C to stop the server"
Write-Host ""

# Run development server
& npm run dev
