# 🔧 npm Not Recognized - Complete Fix Guide

## Problem
```
The term 'npm' is not recognized as the name of a cmdlet, function, script file, or operable program.
```

## ✅ Solution (Choose One)

---

## Method 1: Quick Fix - Add Node.js to PATH (Permanent)

### Step 1: Open PowerShell as Administrator
```powershell
# Right-click PowerShell and select "Run as Administrator"
```

### Step 2: Add Node.js to PATH Permanently
```powershell
# Run this command in PowerShell (as Administrator):
[Environment]::SetEnvironmentVariable("Path", "$([Environment]::GetEnvironmentVariable('Path', 'User'));C:\Program Files\nodejs", "User")
```

### Step 3: Restart PowerShell
Close and reopen PowerShell for changes to take effect.

### Step 4: Verify npm works
```powershell
npm --version
```

✅ If you see a version number, npm is now working!

---

## Method 2: Temporary Fix - Session-Only (Easy)

Run this in your current PowerShell session BEFORE using npm:

```powershell
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
```

Then you can use npm in this session:
```powershell
npm --version
npm install
npm run dev
```

⚠️ This only works for the current PowerShell window. Close and reopen = PATH is reset.

---

## Method 3: Use the Run Scripts Provided

### Option A: Use Batch File (Windows CMD)
```batch
# Double-click this file:
run.bat

# This automatically:
# 1. Adds Node.js to PATH
# 2. Installs dependencies
# 3. Starts the server
```

### Option B: Use PowerShell Script
```powershell
# Run this command in PowerShell:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Then run:
.\run.ps1

# This automatically:
# 1. Adds Node.js to PATH
# 2. Installs dependencies
# 3. Starts the server
```

---

## Method 4: Skip Local Setup - Deploy to Vercel

**If you keep having npm issues, just deploy to Vercel!**

Vercel handles npm automatically. You don't need to install anything locally.

### Steps:
1. Push code to GitHub
2. Visit https://vercel.com/new
3. Import your repository
4. Click "Deploy"
5. Your site is live! ✨

---

## Full Step-by-Step Guide to Run Locally

### Using Method 1 (Permanent Fix)

```powershell
# 1. Add Node.js to PATH permanently
[Environment]::SetEnvironmentVariable("Path", "$([Environment]::GetEnvironmentVariable('Path', 'User'));C:\Program Files\nodejs", "User")

# 2. Close and reopen PowerShell

# 3. Navigate to project
cd "C:\Users\PYV1QSS\source\repos\New folder\cricket-academy-web"

# 4. Install dependencies
npm install

# 5. Start development server
npm run dev

# 6. Open browser
# Visit: http://localhost:3000
```

### Using Method 2 (Temporary)

```powershell
# 1. In PowerShell, add Node.js to PATH for this session
$env:PATH = "C:\Program Files\nodejs;$env:PATH"

# 2. Navigate to project
cd "C:\Users\PYV1QSS\source\repos\New folder\cricket-academy-web"

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open browser
# Visit: http://localhost:3000
```

### Using run.bat (Easiest!)

1. Navigate to: `C:\Users\PYV1QSS\source\repos\New folder\cricket-academy-web`
2. Double-click: `run.bat`
3. It will automatically:
   - Add Node.js to PATH
   - Install dependencies
   - Start the server
4. Open browser and visit: `http://localhost:3000`

---

## Verify Node.js Installation

If npm still doesn't work, verify Node.js is installed:

```powershell
# Check if Node.js exists
Test-Path "C:\Program Files\nodejs"

# Check for npm.cmd
Test-Path "C:\Program Files\nodejs\npm.cmd"

# Check Node.js version
& "C:\Program Files\nodejs\node.exe" --version
```

---

## If npm install Still Fails (Network Issues)

This might be due to your organization's network restrictions.

**Solution: Use Vercel Deployment (No npm needed!)**

1. Push to GitHub
2. Deploy to Vercel (Vercel installs npm automatically)
3. Site is live!

See DEPLOYMENT.md for detailed Vercel steps.

---

## Troubleshooting

### Error: "npm: The term 'npm' is not recognized"
→ Use Method 1 or Method 3 above

### Error: "npm ERR! code UNABLE_TO_GET_ISSUER_CERT_LOCALLY"
→ Network restriction. Use Vercel deployment instead.

### Error: "npm ERR! 403 Forbidden"
→ Network restriction. Use Vercel deployment instead.

### npm install takes very long
→ Normal for first install. Can take 5-15 minutes.

### Port 3000 already in use
→ Use: `npm run dev -- -p 3001` (uses port 3001 instead)

---

## Easiest Solution: Just Use Vercel! 🚀

If npm issues persist, **skip local setup entirely**:

1. **Push to GitHub**
   ```powershell
   cd cricket-academy-web
   git init
   git add .
   git commit -m "Cricket Academy"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit: https://vercel.com/new
   - Import your repo
   - Click Deploy

3. **Your site is live!** ✨

No npm. No installation. No issues. Done in 5 minutes.

---

## What To Do Now

Choose one:

### Option A: Fix npm (5-10 min)
- Use Method 1 above
- Then run: `npm run dev`

### Option B: Use run script (Even easier!)
- Double-click: `run.bat`
- It handles everything

### Option C: Deploy to Vercel (Recommended!)
- Read: DEPLOYMENT.md
- Takes 5 minutes
- No local setup needed

---

## Need Help?

1. **npm still not working?** → Try Method 3 (use run.bat)
2. **run.bat doesn't work?** → Deploy to Vercel instead
3. **Stuck?** → Read DEPLOYMENT.md for Vercel setup

**The best approach: Use Vercel! It's the easiest.** 🚀
