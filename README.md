# Sistema de Upload e Gestão de Imagens :umbrella:
// criar uma pasta server, entrar nela e dar npm init -y
// depois mudar no package.json: 
"name": "api_imagem",
  "version": "0.1.0",
  "main": "index.js",
  "type": "module",
  // iniciar o npm i express
  // criar pasta .gitignore dentro de server e colocar "/node_modules"
  // criar pasta src dentro de server e criar arquivo index.js dentro dela
  // " node src/index.js" para testar se api está rodando no terminal
  // instalar o nodemon "npm i --save-dev nodemon"
  // colocar em package.json:
  "scripts":
    "start": "node src/index.js",
    "dev": "npx nodemon src/index.js",
    // 