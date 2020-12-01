import { Router } from 'express';
import multer from 'multer';


import OrphanagesControler from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesControler.index);
routes.get('/orphanages/:id', OrphanagesControler.show);
routes.post('/orphanages', upload.array('images'), OrphanagesControler.create);

export default routes;