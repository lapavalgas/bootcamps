# Informações sobre package.json

{
    "name": "backend",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "scripts": {
        "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
    },
    "dependencies": {
        "@types/express": "^4.17.8",
        "express": "^4.17.1",
        "typescript": "^4.0.3"
    },
    "devDependencies": {
        "ts-node-dev": "^1.0.0-pre.63"
    }
}

### sobre as flags em scripts

// --transpile-only : não verifica erros no código na compilação
// --ignore-watch node_modules : não lê os arquivos de node_modules para compilação


# Json view extension


# Sobre parametros em metodos HTTP

Query Params : localhost:3333/users?search=rafael 
Route Params : localhost:3333/users/1 (identificia um recurso)
Body         : localhost:3333/users/1 (JSON)

request.query (lista todos os query params)
request.params (lista todos os route params configurados e passadps)
request.body