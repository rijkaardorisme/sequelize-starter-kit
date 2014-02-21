echo "Setting up..."
del README.md
copy .\templates\README.md .\README.md
copy .\templates\config.json .\config.json
del init.sh
rmdir /S /Q .git
rmdir /S /Q templates

echo "Initializing empty git repository..."
git init
git add .

echo "Install dependencies and cleanup files..."
npm install && del init.bat