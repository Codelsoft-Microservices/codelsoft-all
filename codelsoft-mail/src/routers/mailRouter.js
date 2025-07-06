import { Router } from 'express';
import { mailCheck } from '../controllers/mailController.js';

/*Configuracion del router para que funcione como el enrutador de el auth.*/
const mailRouter = Router();

/*Configuracion de la ruta base para el auth.
Aqui deben ir todas las rutas necesarias*/
mailRouter.get("/", mailCheck);
/*Exporte del modulo para ser llamado en app.js*/
export default mailRouter;