const fs = require('fs');
const path = require('path');

// Caminho para o package.json
const packageJsonPath = path.resolve(__dirname, 'package.json');

// Lê o conteúdo do package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Incrementa a versão (patch)
const [major, minor, patch] = packageJson.version.split('.').map(Number);
packageJson.version = `${major}.${minor}.${patch + 1}`;

// Escreve de volta no package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');

console.log(`Versão atualizada para ${packageJson.version}`);