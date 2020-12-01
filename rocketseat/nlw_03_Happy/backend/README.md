# o ORM utilizado é typeorm, 

* npm install typeorm
* yarn typeorm

* é necessário criar o arquivo connection.ts:

``` 
import { createConnection } from 'typeorm';

createConnection();
```

* é necessário inserir o seguinte código no package.json para que funcione ao levantar o servidor:

``` 
 "scripts": {
        "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts",
        "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
    },
```

* é necessário configurar as migrations no arquivo ormconfig.json:

``` 
{
    "type": "sqlite",
    "database": "./src/database/database.sqlite",
    "migrations": [
        "./src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}
```

* yarn typeorm migrations:create -n create_orphanages
* yarn typeorm migrations:create -n create_images

* yarn yarn typeorm migrations:run //roda as migrations e cria as tabelas
* yarn yarn typeorm migrations:revert //reverte as migrations (não sei o que acontece se já houver dados?!)

No arquivo tsconfig.json ativar como falsa a propriedade (aparentemente funciona como lombok):

``` 
 "strictPropertyInitialization": false,  /* Enable strict checking of property initialization in classes.
 ```

No arquivo tsconfig.json ativar true as propriedades (ativa a API decorator no TypeScript)

``` 
"experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
"emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

```

Deverá ser configurado no arquivo ormconfig.json a flag entities determinando o local de cada entidades ou diretório
```
{

    "type": "sqlite",
    "database": "./src/database/database.sqlite",
    "migrations": [
        "./src/database/migrations/*.ts"
    ],
    "entities": [
        "./src/models/*.ts"
    ]
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }

}
``

# biblioteca para upload de images no javacript / typescrip / node

* yarn add multer
* yarn add @types/multer -D

# trabalhando com exessões com express e async

* yarn add express-async-errors

# validação no backend

* yarn add yup

# serve para corrigir o cors e integrar os serviços de forma as api se comunicarem

*yarn add corns


--------------------------------

# conectar APIs : AXIOS

yarn add axios