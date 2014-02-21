echo "Setting up..."
rm README.md
cp ./templates/README.md ./README.md
cp ./templates/config.json ./config.json
rm init.bat
rm -rf .git
rm -rf templates

echo "Initializing empty git repository..."
git init
git add .

echo "Install dependencies and cleanup files..."
npm install && rm init.sh