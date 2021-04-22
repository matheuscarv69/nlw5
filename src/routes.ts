import { Router } from 'express';

import SettingsController from './controllers/SettingsController';
import UserController from './controllers/UserController';

const routes = Router();

/**
 * Tipos de parametros
 * 
 * Routes Params => Parametros de rota
 * Query Params => Filtros e buscas
 * Body Params => dados no corpo da requisição 
 */

routes.post("/settings", SettingsController.create);
routes.post("/users", UserController.create)

export { routes };