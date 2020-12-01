import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';
import routes from './routes';
import erroHandler from './errors/handler';

const app = express();

// utilizando esse exemplo é suficiente
app.use(cors());

// sugestão para especificar endereços:
// app.use(cors({
//     origin: // aqui é possível especificar o endereço do frontend que permitirá acesso
// }));

app.use(express.json());
app.use(routes);

//o primeiro uploads é o endereço das imagens na url passado para as views
//o segundo uploads é o caminho do diretório que os arquivos estão
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(erroHandler);

app.listen(3333);
